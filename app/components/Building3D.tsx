'use client';

import { Suspense, useMemo, useRef } from 'react';
import { Box3, Vector3, type Group } from 'three';
import { Canvas, useFrame, useThree } from '@react-three/fiber';
import { useGLTF } from '@react-three/drei';
import type { MotionValue } from 'framer-motion';

const MODEL = '/building.glb';

/**
 * Fraction of the available viewport the model occupies at rest. Kept below 1 so the
 * scroll-driven CSS zoom in the hero (see `buildingScale`) has room to grow into
 * without pushing the building's base out of frame — FILL * maxScale must stay <= 1.
 */
const FILL = 0.72;

const CAMERA_FOV = 25;
const CAMERA_DISTANCE = 12;

function Model({ rotateY }: { rotateY: MotionValue<number> }) {
  const gltf = useGLTF(MODEL);
  const group = useRef<Group>(null);
  const viewport = useThree((s) => s.viewport);

  // useGLTF hands back a globally cached scene; clone it so nothing we do here can
  // leak into other consumers or survive a hot reload. Geometries/materials are
  // shared by clone(), so this costs no extra GPU memory.
  const scene = useMemo(() => gltf.scene.clone(true), [gltf.scene]);

  // Measured once per model — never per frame, so the framing stays rock steady.
  const { center, size } = useMemo(() => {
    const box = new Box3().setFromObject(scene);
    return {
      center: box.getCenter(new Vector3()),
      size: box.getSize(new Vector3()),
    };
  }, [scene]);

  // Fit against the model's widest horizontal profile (its footprint diagonal) so a
  // full 360° spin never clips the edges. Solved at the model's *nearest* z-plane
  // rather than at the origin, because perspective magnifies whichever corner has
  // swung toward the camera — fitting at z=0 is what crops the base mid-rotation.
  // The scale only changes on resize, never per frame.
  const scale = useMemo(() => {
    const diagonal = Math.hypot(size.x, size.z); // widest profile across a full spin
    const tan = Math.tan((CAMERA_FOV * Math.PI) / 180 / 2);
    const aspect = viewport.width / viewport.height;

    // Nearest point sits at (scale * diagonal / 2) toward the camera, so the usable
    // half-extent there is FILL * tan * (CAMERA_DISTANCE - scale * diagonal / 2).
    // Solving `scale * extent / 2 = that` for scale gives:
    const fit = (extent: number, limit: number) =>
      (FILL * tan * limit * CAMERA_DISTANCE) /
      (extent / 2 + FILL * tan * limit * (diagonal / 2));

    return Math.min(fit(size.y, 1), fit(diagonal, aspect));
  }, [size, viewport.width, viewport.height]);

  useFrame((_, delta) => {
    if (!group.current) return;
    const target = (rotateY.get() * Math.PI) / 180;
    // Frame-rate independent damping — smooths scroll jitter without lagging behind.
    const t = 1 - Math.exp(-8 * delta);
    group.current.rotation.y += (target - group.current.rotation.y) * t;
  });

  return (
    <group ref={group} scale={scale}>
      {/* Centering lives on a wrapper group, never on the primitive itself — setting
          `position` on the GLB root would clobber the transform its own bounding box
          was measured with, throwing the model off-centre (and off-axis as it spins). */}
      <group position={[-center.x, -center.y, -center.z]}>
        <primitive object={scene} />
      </group>
    </group>
  );
}

useGLTF.preload(MODEL);

export default function Building3D({ rotateY }: { rotateY: MotionValue<number> }) {
  return (
    <div className="relative w-full h-full">
      <Canvas
        camera={{ fov: CAMERA_FOV, position: [0, 0, CAMERA_DISTANCE] }}
        dpr={[1, 2]}
        gl={{ alpha: true, antialias: true }}
      >
        <ambientLight intensity={0.8} />
        <directionalLight position={[5, 8, 5]} intensity={1.4} />
        <directionalLight position={[-5, 3, -5]} intensity={0.5} color="#09A2DC" />
        <Suspense fallback={null}>
          <Model rotateY={rotateY} />
        </Suspense>
      </Canvas>
    </div>
  );
}
