'use client';

import { useState, useEffect, useRef } from 'react';
import Image from 'next/image';
import Link from 'next/link';
import {
  motion,
  useInView,
  useMotionValue,
  useTransform,
  animate,
  useScroll,
} from 'framer-motion';
import {
  ArrowDown,
  ArrowRight,
  Award,
  Building2,
  Compass,
  Hammer,
  Hand,
  Leaf,
  MapPin,
  Play,
  ShieldCheck,
  Sparkles,
} from 'lucide-react';

function AnimatedCounter({ value }: { value: string }) {
  const numMatch = value.match(/[\d.]+/);
  const number = numMatch ? parseFloat(numMatch[0]) : 0;
  const suffix = value.replace(/[\d.]+/, '');

  const count = useMotionValue(0);
  const rounded = useTransform(count, (latest) => {
    const decimals = number % 1 !== 0 ? 1 : 0;
    return latest.toFixed(decimals) + suffix;
  });

  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: '-50px' });

  useEffect(() => {
    if (isInView) {
      const controls = animate(count, number, { duration: 2, ease: 'easeOut' });
      return controls.stop;
    }
  }, [isInView, number, count]);

  return <motion.span ref={ref}>{rounded}</motion.span>;
}

const stats = [
  { value: '34,000+', label: 'Sft. Total Areas' },
  { value: '680', label: 'Car Parkings' },
  { value: '390', label: 'Luxury Apartments' },
];

const whyUs = [
  {
    icon: Award,
    title: 'Trusted craftsmanship',
    body: 'Crafting considered addresses across Dhaka with an unwavering commitment to quality.',
  },
  {
    icon: Compass,
    title: 'Prime locations',
    body: 'A carefully chosen footprint in Bangladesh’s most sought-after neighborhoods, from Bashundhara to Mohakhali DOHS.',
  },
  {
    icon: ShieldCheck,
    title: 'Engineering rigour',
    body: 'Earthquake-resistant designs and premium materials, audited at every stage of construction.',
  },
  {
    icon: Leaf,
    title: 'Sustainable thinking',
    body: 'Energy-conscious facades, native landscaping and water-wise systems built into every project.',
  },
  {
    icon: Hand,
    title: 'White-glove service',
    body: 'Dedicated relationship managers from the first conversation to the day you receive your keys.',
  },
  {
    icon: Hammer,
    title: 'On-time delivery',
    body: 'Predictable timelines backed by experienced project managers and milestone-based reporting.',
  },
];

const process = [
  { step: '01', title: 'Discover', body: 'Tell us your dream — location, scale, lifestyle. We listen, then propose options that fit.' },
  { step: '02', title: 'Design', body: 'Considered architecture, iterated with you on layouts, materials and finishes.' },
  { step: '03', title: 'Develop', body: 'Engineers and craftsmen turn the vision into reality, with weekly reporting and site visits.' },
  { step: '04', title: 'Deliver', body: 'Move-in support, lifetime aftercare and a community you’ll love coming home to.' },
];

const projects = {
  ongoing: {
    tag: 'Ongoing',
    title: 'G-16 Housing Project',
    image: '/G16 Housing Project.jpg',
    descriptionRest:
      'in Bashundhara Residential Area, Dhaka, is a G+11 building on a 16.62-Katha south-facing plot with a 40-ft road frontage. It includes 33 units, featuring three 2250 sq. ft. apartments per floor along with two basements and a mezzanine level. Designed for comfort and convenience, the project is located beside playground facilities and a newly built mosque, creating an ideal environment for families.',
    specs: [
      { label: 'Project Name', value: 'G-16 Housing Project' },
      { label: 'Plot Size', value: '16.62 Katha' },
      { label: 'No. of Floor', value: 'G+11' },
      { label: 'No. of Unit', value: '3 Units Per Floor' },
      { label: 'Flat Size', value: '2250 Sft.' },
      { label: 'Parking available', value: 'Yes' },
      { label: 'Lift and Generator', value: 'Yes' },
    ],
  },
  upcoming: {
    tag: 'Upcoming',
    title: "Ahmed's Abode",
    image: '/Ahmed-Abodes.jpg',
    descriptionRest:
      'at Jolshiri Abashon is a G+8 residential development on a 5-Katha plot in Sector 16, Road 503B. The project features eight exclusive single-unit floors, each offering a spacious 2700 sq. ft. apartment designed for premium living, complemented by a mezzanine level for added functionality. North-facing and adjacent to a 60-foot road, the project enjoys access to abundant greenery and serene lake views. Its aesthetic architecture, natural surroundings, and functional layout create a refined and harmonious living environment.',
    specs: [
      { label: 'Project Name', value: "Ahmed's Abode" },
      { label: 'Plot Size', value: '5 Katha' },
      { label: 'No. of Floor', value: 'G+8' },
      { label: 'No. of Unit', value: '08 (All Single Unit)' },
      { label: 'Flat Size', value: '2700 Sft.' },
      { label: 'Parking available', value: 'Yes' },
      { label: 'Lift and Generator', value: 'Yes' },
    ],
  },
  completed: {
    tag: 'Completed',
    title: "Golfer's Height",
    image: '/Golpher-Height-1.jpg',
    descriptionRest:
      'at Jolshiri Abashon is a G+8 residential project on a 5-Katha plot in Sector 17, Road 502F. Designed with eight exclusive single-unit floors, each 2700 sq. ft., the building offers spacious, premium living with a south-facing orientation that ensures continuous airflow and open surroundings. Located near Jolshiri Central Mosque and adjacent to the Golf Ground, the project provides both convenience and serenity. Rooftop amenities include lime terracing, a drying area, greenery, a water body, a deck, and a BBQ zone—enhancing comfort and lifestyle.',
    specs: [
      { label: 'Project Name', value: "Golfer's Height" },
      { label: 'Plot Size', value: '5 Katha' },
      { label: 'No. of Floor', value: 'G+8' },
      { label: 'No. of Unit', value: '08 (All Single Unit)' },
      { label: 'Flat Size', value: '2700 Sft.' },
      { label: 'Parking available', value: 'Yes' },
      { label: 'Lift and Generator', value: 'Yes' },
    ],
  },
} as const;

type ProjectStatus = keyof typeof projects;
const projectTabs: ProjectStatus[] = ['ongoing', 'upcoming', 'completed'];

export default function Home() {
  const [activeTab, setActiveTab] = useState('background');
  const [playVideo, setPlayVideo] = useState(false);
  const [activeProject, setActiveProject] = useState<ProjectStatus>('ongoing');
  const project = projects[activeProject];
  const { scrollY } = useScroll();
  const buildingY = useTransform(scrollY, [0, 700], [0, -120]);
  const buildingScale = useTransform(scrollY, [0, 700], [1.1, 1.25]);
  const heroBgY = useTransform(scrollY, [0, 700], [0, 80]);

  const containerVariants = {
    hidden: { opacity: 0 },
    show: { opacity: 1, transition: { staggerChildren: 0.15 } },
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 24 },
    show: { opacity: 1, y: 0, transition: { duration: 0.7, ease: 'easeOut' as const } },
  };

  return (
    <div className="flex flex-col w-full">
      {/* ─── HERO ─── */}
      <section className="relative min-h-screen pt-28 md:pt-36 flex flex-col items-center overflow-hidden">
        {/* Parallax decorative band */}
        <motion.div
          aria-hidden
          style={{ y: heroBgY }}
          className="absolute inset-x-0 top-20 mx-auto h-[60vh] max-w-6xl rounded-[60px] bg-gradient-to-br from-[#1F5C8F]/8 via-[#0D6321]/10 to-[#C02A08]/10 blur-2xl opacity-70"
        />

        <motion.div
          initial={{ opacity: 0, y: -16 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.9 }}
          className="relative z-10 inline-flex items-center gap-2 px-4 py-1.5 rounded-full text-xs font-bold uppercase tracking-[0.25em] text-[#1F5C8F] bg-[#1F5C8F]/10 ring-1 ring-[#1F5C8F]/20"
        >
          <Sparkles size={14} />
          NextGen Property Limited · Dhaka
        </motion.div>

        <motion.h1
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, ease: 'easeOut' }}
          className="relative z-10 mt-6 text-center text-balance px-4 font-display text-5xl md:text-7xl lg:text-8xl leading-[1.02] tracking-tight text-zinc-900 dark:text-white"
        >
          Witness, as we craft
          <br />
          <span className="gradient-text font-medium italic">modern spaces</span>
          <br />
          &amp; <span className="gradient-text font-medium">apartments</span>.
        </motion.h1>

        <motion.p
          initial={{ opacity: 0, y: 16 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, delay: 0.15 }}
          className="relative z-10 max-w-2xl mt-6 text-center text-zinc-600 dark:text-zinc-400 text-lg md:text-xl px-6 text-pretty"
        >
          Our success is determined not only by the results we acquire, but also by the manner in
          which we achieve them.
        </motion.p>

        <motion.div
          initial={{ opacity: 0, y: 16 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.3 }}
          className="relative z-10 mt-8 flex flex-col sm:flex-row items-center gap-3"
        >
          <Link
            href="#project"
            className="inline-flex items-center gap-2 px-7 py-3.5 rounded-full bg-zinc-900 dark:bg-white text-white dark:text-zinc-900 font-semibold shadow-xl hover:bg-[#1F5C8F] hover:text-white transition-colors"
          >
            Explore our project <ArrowRight size={16} />
          </Link>
          <Link
            href="#contact"
            className="inline-flex items-center gap-2 px-7 py-3.5 rounded-full border border-zinc-300 dark:border-white/20 text-zinc-800 dark:text-zinc-100 font-semibold hover:border-[#1F5C8F] hover:text-[#1F5C8F] transition-colors backdrop-blur-md bg-white/40 dark:bg-white/5"
          >
            Get in touch
          </Link>
        </motion.div>

        {/* Floating building */}
        <div className="container mx-auto px-4 md:px-12 relative w-full flex-grow flex justify-center items-end mt-6 md:mt-8 pb-24">
          <motion.div
            style={{ y: buildingY, scale: buildingScale }}
            className="relative w-full max-w-3xl h-[35vh] md:h-[55vh]"
          >
            <motion.div
              initial={{ opacity: 0, y: 200 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 1.6, delay: 0.6, ease: [0.16, 1, 0.3, 1] }}
              className="absolute inset-0"
            >
              <Image
                src="/building2.png"
                alt="NextGen Property modern building"
                fill
                className="object-contain object-bottom drop-shadow-[0_40px_50px_rgba(0,0,0,0.25)]"
                priority
              />
            </motion.div>

            {/* Floating badges */}
            <motion.div
              initial={{ opacity: 0, x: -30, y: 10 }}
              animate={{ opacity: 1, x: 0, y: 0 }}
              transition={{ duration: 0.8, delay: 1.2 }}
              className="hidden md:flex absolute top-12 -left-6 lg:left-0 items-center gap-3 px-4 py-3 rounded-2xl glass-card shadow-xl animate-float"
            >
              <span className="grid place-items-center w-10 h-10 rounded-xl bg-[#1F5C8F]/15 text-[#1F5C8F]">
                <Building2 size={18} />
              </span>
              <div>
                <div className="text-sm font-semibold text-zinc-900 dark:text-zinc-100 leading-tight">
                  390 Luxury Apartments
                </div>
                <div className="text-xs text-zinc-500 dark:text-zinc-400">G-16 Housing Project</div>
              </div>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, x: 30, y: 10 }}
              animate={{ opacity: 1, x: 0, y: 0 }}
              transition={{ duration: 0.8, delay: 1.4 }}
              style={{ animationDelay: '-2s' }}
              className="hidden md:flex absolute top-32 -right-6 lg:right-0 items-center gap-3 px-4 py-3 rounded-2xl glass-card shadow-xl animate-float"
            >
              <span className="grid place-items-center w-10 h-10 rounded-xl bg-[#C02A08]/15 text-[#C02A08]">
                <Compass size={18} />
              </span>
              <div>
                <div className="text-sm font-semibold text-zinc-900 dark:text-zinc-100 leading-tight">
                  34,000+ Sft
                </div>
                <div className="text-xs text-zinc-500 dark:text-zinc-400">Total built area</div>
              </div>
            </motion.div>
          </motion.div>
        </div>

        {/* Scroll Indicator */}
        <motion.div
          animate={{ y: [0, 10, 0] }}
          transition={{ repeat: Infinity, duration: 2 }}
          className="absolute bottom-6 left-1/2 transform -translate-x-1/2 text-zinc-400 dark:text-zinc-500"
        >
          <ArrowDown size={26} strokeWidth={1.5} />
        </motion.div>
      </section>

      {/* ─── STATS STRIP ─── */}
      <section className="relative px-6 md:px-12 -mt-6">
        <div className="container mx-auto max-w-4xl">
          <motion.div
            variants={containerVariants}
            initial="hidden"
            whileInView="show"
            viewport={{ once: true, margin: '-80px' }}
            className="grid grid-cols-1 sm:grid-cols-3 gap-px overflow-hidden rounded-[28px] bg-gradient-to-br from-[#1F5C8F]/30 via-zinc-200/40 to-[#C02A08]/30 dark:from-[#1F5C8F]/30 dark:via-zinc-800/40 dark:to-[#C02A08]/30 p-px shadow-xl"
          >
            {stats.map((s, i) => (
              <motion.div
                key={i}
                variants={itemVariants}
                className="relative bg-white dark:bg-zinc-950 px-5 py-7 flex flex-col items-center text-center"
              >
                <span className="font-display text-3xl md:text-4xl text-[#1F5C8F] leading-none">
                  <AnimatedCounter value={s.value} />
                </span>
                <span className="mt-2 text-xs uppercase tracking-[0.18em] font-semibold text-zinc-500 dark:text-zinc-400">
                  {s.label}
                </span>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </section>

      {/* ─── ABOUT ─── */}
      <section id="about" className="relative py-24 md:py-32 px-6 md:px-12 scroll-mt-24">
        <div className="container mx-auto max-w-6xl">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8 }}
              className="lg:col-span-5 relative"
            >
              <div className="relative aspect-[4/5] rounded-[36px] overflow-hidden shadow-2xl shadow-zinc-900/15 dark:shadow-black/40 border border-white/40 dark:border-white/5">
                <Image
                  src="/about.jpg"
                  alt="NextGen Property Limited"
                  fill
                  className="object-cover"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/55 via-transparent to-transparent" />
                <div className="absolute bottom-6 left-6 right-6 flex items-end justify-between text-white">
                  <div>
                    <div className="text-xs uppercase tracking-widest opacity-80">Featured</div>
                    <div className="font-display text-2xl">G-16 Housing Project</div>
                  </div>
                  <Link
                    href="#project"
                    className="grid place-items-center w-12 h-12 rounded-full bg-white/15 backdrop-blur-md hover:bg-white hover:text-zinc-900 transition-colors"
                    aria-label="View project"
                  >
                    <ArrowRight size={18} />
                  </Link>
                </div>
              </div>

              {/* Floating accent card */}
              <div className="hidden md:flex absolute -bottom-8 -right-8 items-center gap-3 px-5 py-4 rounded-2xl bg-white dark:bg-zinc-900 shadow-2xl border border-zinc-100 dark:border-white/5">
                <span className="grid place-items-center w-10 h-10 rounded-xl bg-[#1F5C8F]/12 text-[#1F5C8F]">
                  <MapPin size={18} />
                </span>
                <div>
                  <div className="text-sm font-semibold text-zinc-900 dark:text-zinc-100 leading-tight">
                    Mohakhali DOHS
                  </div>
                  <div className="text-xs text-zinc-500 dark:text-zinc-400">Head office, Dhaka</div>
                </div>
              </div>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, x: 30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8, delay: 0.1 }}
              className="lg:col-span-7"
            >
              <span className="inline-flex items-center gap-2 px-3 py-1 rounded-full text-xs font-bold uppercase tracking-[0.25em] text-[#1F5C8F] bg-[#1F5C8F]/10 ring-1 ring-[#1F5C8F]/20">
                About us
              </span>
              <h2 className="mt-5 font-display text-4xl md:text-5xl text-zinc-900 dark:text-zinc-100 leading-[1.05] text-balance">
                Building the future of <span className="gradient-text italic">Bangladesh</span>.
              </h2>

              <div className="mt-8 inline-flex bg-zinc-100 dark:bg-zinc-900 rounded-full p-1 shadow-inner">
                <button
                  className={`px-6 py-2.5 rounded-full text-sm font-semibold transition-all ${
                    activeTab === 'background'
                      ? 'bg-white dark:bg-zinc-800 text-zinc-900 dark:text-zinc-100 shadow-md'
                      : 'text-zinc-500 dark:text-zinc-400 hover:text-zinc-700 dark:hover:text-zinc-300'
                  }`}
                  onClick={() => setActiveTab('background')}
                >
                  Background
                </button>
                <button
                  className={`px-6 py-2.5 rounded-full text-sm font-semibold transition-all ${
                    activeTab === 'message'
                      ? 'bg-white dark:bg-zinc-800 text-zinc-900 dark:text-zinc-100 shadow-md'
                      : 'text-zinc-500 dark:text-zinc-400 hover:text-zinc-700 dark:hover:text-zinc-300'
                  }`}
                  onClick={() => setActiveTab('message')}
                >
                  Message
                </button>
              </div>

              <motion.div
                key={activeTab}
                initial={{ opacity: 0, y: 12 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.4 }}
                className="mt-8 text-zinc-600 dark:text-zinc-400 font-light leading-relaxed"
              >
                {activeTab === 'background' ? (
                  <div className="space-y-5">
                    <p>
                      <strong className="text-zinc-900 dark:text-zinc-100 font-medium">
                        NextGen Property Limited
                      </strong>{' '}
                      designs and builds modern residential spaces and apartments across Dhaka.
                      Our success is determined not only by the results we acquire, but also by
                      the manner in which we achieve them.
                    </p>
                    <p>
                      From our head office in Mohakhali DOHS, our team oversees every stage of a
                      project — from land to design, construction and handover — so that every
                      address we deliver is one families are proud to call home.
                    </p>
                    <div className="grid sm:grid-cols-3 gap-4 pt-6">
                      {projects.ongoing.specs.slice(0, 3).map((spec) => (
                        <div
                          key={spec.label}
                          className="rounded-2xl border border-zinc-100 dark:border-white/5 bg-white/60 dark:bg-white/5 backdrop-blur p-5"
                        >
                          <h4 className="font-semibold text-zinc-900 dark:text-zinc-100 text-sm mb-2">
                            {spec.label}
                          </h4>
                          <p className="text-xs leading-relaxed">{spec.value}</p>
                        </div>
                      ))}
                    </div>
                  </div>
                ) : (
                  <div className="rounded-3xl border border-[#1F5C8F]/20 bg-gradient-to-br from-[#1F5C8F]/5 to-[#C02A08]/5 p-8 md:p-10">
                    <p className="font-display italic text-2xl md:text-3xl text-zinc-800 dark:text-zinc-100 leading-snug">
                      &ldquo;True joys in life come from the homes we build, the streets we shape
                      and the families that thrive in them.&rdquo;
                    </p>
                    <div className="mt-6 flex items-center gap-3">
                      <div className="w-10 h-10 rounded-full bg-gradient-to-br from-[#1F5C8F] to-[#163F63] grid place-items-center text-white font-bold">
                        NG
                      </div>
                      <div>
                        <div className="text-sm font-semibold text-zinc-900 dark:text-zinc-100">
                          Office of the Chairman
                        </div>
                        <div className="text-xs text-zinc-500 dark:text-zinc-400">
                          NextGen Property Limited
                        </div>
                      </div>
                    </div>
                  </div>
                )}
              </motion.div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* ─── WHY US ─── */}
      <section className="relative py-24 md:py-32 px-6 md:px-12 bg-zinc-50/60 dark:bg-zinc-900/40 backdrop-blur-sm">
        <div className="container mx-auto max-w-7xl">
          <motion.div
            initial={{ opacity: 0, y: 24 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7 }}
            className="text-center mb-16 max-w-2xl mx-auto"
          >
            <span className="inline-flex items-center gap-2 px-3 py-1 rounded-full text-xs font-bold uppercase tracking-[0.25em] text-[#1F5C8F] bg-[#1F5C8F]/10 ring-1 ring-[#1F5C8F]/20">
              Why NextGen Property
            </span>
            <h2 className="mt-5 font-display text-4xl md:text-5xl text-zinc-900 dark:text-zinc-100 leading-tight text-balance">
              Crafted with intent. Delivered with pride.
            </h2>
            <p className="mt-4 text-zinc-600 dark:text-zinc-400 text-lg">
              Six reasons families across Dhaka choose NextGen Property Limited.
            </p>
          </motion.div>

          <motion.div
            variants={containerVariants}
            initial="hidden"
            whileInView="show"
            viewport={{ once: true, margin: '-80px' }}
            className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6"
          >
            {whyUs.map((w) => (
              <motion.div
                key={w.title}
                variants={itemVariants}
                whileHover={{ y: -4 }}
                className="group relative rounded-3xl bg-white dark:bg-zinc-900 p-8 border border-zinc-100 dark:border-white/5 shadow-sm hover:shadow-2xl transition-all duration-500 overflow-hidden"
              >
                <div className="absolute -top-12 -right-12 w-40 h-40 rounded-full bg-[#1F5C8F]/8 blur-2xl group-hover:bg-[#1F5C8F]/15 transition-colors" />
                <div className="relative">
                  <span className="inline-grid place-items-center w-12 h-12 rounded-2xl bg-[#1F5C8F]/12 text-[#1F5C8F] mb-5">
                    <w.icon size={22} />
                  </span>
                  <h3 className="text-lg font-semibold text-zinc-900 dark:text-zinc-100 mb-2">
                    {w.title}
                  </h3>
                  <p className="text-sm text-zinc-600 dark:text-zinc-400 leading-relaxed">
                    {w.body}
                  </p>
                </div>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </section>

      {/* ─── FEATURED PROJECT ─── */}
      <section id="project" className="relative py-24 md:py-32 px-6 md:px-12 scroll-mt-24">
        <div className="container mx-auto max-w-7xl">
          <div className="flex flex-col md:flex-row md:items-end justify-between gap-8 mb-12">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.7 }}
              className="max-w-xl"
            >
              <span className="inline-flex items-center gap-2 px-3 py-1 rounded-full text-xs font-bold uppercase tracking-[0.25em] text-[#1F5C8F] bg-[#1F5C8F]/10 ring-1 ring-[#1F5C8F]/20">
                Our projects
              </span>
              <h2 className="mt-5 font-display text-4xl md:text-5xl text-zinc-900 dark:text-zinc-100 leading-tight text-balance">
                Check Our <span className="gradient-text italic">Apartment Plans</span>.
              </h2>
            </motion.div>

            <div className="flex items-stretch gap-0 rounded-2xl overflow-hidden shadow-lg shrink-0">
              {projectTabs.map((key) => {
                const isActive = activeProject === key;
                return (
                  <button
                    key={key}
                    type="button"
                    onClick={() => setActiveProject(key)}
                    className={`relative px-6 py-4 text-xs font-bold uppercase tracking-[0.15em] transition-colors ${
                      isActive ? 'bg-[#1F5C8F] text-white' : 'bg-zinc-900 text-white/80 hover:text-white'
                    }`}
                  >
                    {projects[key].tag}
                    {isActive && (
                      <span
                        aria-hidden
                        className="absolute left-1/2 -bottom-2 -translate-x-1/2 w-0 h-0 border-l-8 border-r-8 border-t-8 border-l-transparent border-r-transparent border-t-[#1F5C8F]"
                      />
                    )}
                  </button>
                );
              })}
            </div>
          </div>

          <motion.div
            key={activeProject}
            initial={{ opacity: 0, y: 12 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.4 }}
            className="grid grid-cols-1 lg:grid-cols-12 gap-6 lg:gap-8 items-start"
          >
            <div className="lg:col-span-4 flex flex-col gap-3">
              {project.specs.map((spec) => (
                <div
                  key={spec.label}
                  className="flex items-center justify-between gap-4 rounded-2xl bg-white dark:bg-zinc-900 border border-zinc-100 dark:border-white/5 px-5 py-4 shadow-sm"
                >
                  <span className="text-sm text-zinc-500 dark:text-zinc-400">{spec.label}</span>
                  <span className="text-sm font-semibold text-[#1F5C8F] text-right">
                    {spec.value}
                  </span>
                </div>
              ))}
            </div>

            <div className="lg:col-span-4 relative overflow-hidden rounded-3xl bg-zinc-900 aspect-[4/5] shadow-xl">
              {/* eslint-disable-next-line @next/next/no-img-element */}
              <img
                src={project.image}
                alt={project.title}
                className="absolute inset-0 w-full h-full object-cover"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/5 to-transparent" />
              <span className="absolute top-6 left-6 px-3 py-1 rounded-full text-[10px] font-bold uppercase tracking-[0.2em] bg-white/15 backdrop-blur-md text-white">
                {project.tag}
              </span>
            </div>

            <div className="lg:col-span-4">
              <p className="text-zinc-600 dark:text-zinc-400 leading-relaxed">
                <strong className="text-zinc-900 dark:text-zinc-100 font-medium">
                  {project.title}
                </strong>{' '}
                {project.descriptionRest}
              </p>
            </div>
          </motion.div>
        </div>
      </section>

      {/* ─── PROCESS ─── */}
      <section className="relative py-24 md:py-32 px-6 md:px-12 bg-gradient-to-br from-zinc-900 to-[#11150b] text-white overflow-hidden">
        <div aria-hidden className="absolute inset-0 dot-bg opacity-50" />
        <div aria-hidden className="absolute -top-32 -left-20 w-[36rem] h-[36rem] rounded-full bg-[#1F5C8F]/20 blur-3xl" />
        <div aria-hidden className="absolute bottom-0 right-0 w-[32rem] h-[32rem] rounded-full bg-[#C02A08]/20 blur-3xl" />

        <div className="relative container mx-auto max-w-7xl">
          <motion.div
            initial={{ opacity: 0, y: 24 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7 }}
            className="max-w-2xl mb-16"
          >
            <span className="inline-flex items-center gap-2 px-3 py-1 rounded-full text-xs font-bold uppercase tracking-[0.25em] text-[#09A2DC] bg-white/5 ring-1 ring-white/10">
              The process
            </span>
            <h2 className="mt-5 font-display text-4xl md:text-5xl leading-tight text-balance">
              From conversation to keys, in four considered steps.
            </h2>
          </motion.div>

          <motion.div
            variants={containerVariants}
            initial="hidden"
            whileInView="show"
            viewport={{ once: true }}
            className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6"
          >
            {process.map((s) => (
              <motion.div
                key={s.step}
                variants={itemVariants}
                className="relative rounded-3xl border border-white/10 bg-white/5 backdrop-blur-md p-7 hover:border-[#1F5C8F]/40 transition-colors"
              >
                <span className="font-display text-5xl text-white/15 group-hover:text-[#1F5C8F]">
                  {s.step}
                </span>
                <h3 className="mt-2 text-xl font-semibold">{s.title}</h3>
                <p className="mt-3 text-sm text-white/60 leading-relaxed">{s.body}</p>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </section>

      {/* ─── BUILDING TOUR ─── */}
      <section className="relative py-24 md:py-32 px-6 md:px-12 bg-zinc-50/60 dark:bg-zinc-900/40 overflow-hidden">
        <div className="container mx-auto max-w-7xl">
          <motion.div
            initial={{ opacity: 0, y: 24 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7 }}
            className="mb-14 text-center max-w-2xl mx-auto"
          >
            <span className="inline-flex items-center gap-2 px-3 py-1 rounded-full text-xs font-bold uppercase tracking-[0.25em] text-[#1F5C8F] bg-[#1F5C8F]/10 ring-1 ring-[#1F5C8F]/20">
              The building tour
            </span>
            <h2 className="mt-5 font-display text-4xl md:text-5xl text-zinc-900 dark:text-zinc-100 leading-tight text-balance">
              Checkout our building detailed video tour.
            </h2>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 24 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: '-100px' }}
            transition={{ duration: 0.8 }}
            className="max-w-4xl mx-auto"
          >
            <div className="relative w-full aspect-video rounded-[28px] overflow-hidden shadow-2xl bg-black border border-white/5">
              {playVideo ? (
                <iframe
                  src="https://www.youtube-nocookie.com/embed/XHOmBV4js_E?autoplay=1&rel=0&modestbranding=1&iv_load_policy=3"
                  className="w-full h-full"
                  allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                  allowFullScreen
                />
              ) : (
                <button
                  type="button"
                  onClick={() => setPlayVideo(true)}
                  aria-label="Play building tour video"
                  className="group absolute inset-0 w-full h-full"
                >
                  <Image
                    src="/video-image.jpg"
                    alt=""
                    fill
                    className="object-cover"
                  />
                  <span className="absolute inset-0 bg-black/35 group-hover:bg-black/25 transition-colors" />
                  <span className="absolute inset-0 grid place-items-center">
                    <span className="grid place-items-center w-20 h-20 rounded-full bg-white/90 text-zinc-900 shadow-xl group-hover:scale-110 transition-transform">
                      <Play size={30} className="ml-1" fill="currentColor" />
                    </span>
                  </span>
                </button>
              )}
            </div>

            <div className="mt-8 text-center">
              <h4 className="font-display text-3xl text-zinc-900 dark:text-zinc-100 mb-3">
                NextGen Property Limited
              </h4>
              <p className="text-zinc-600 dark:text-zinc-400 leading-relaxed max-w-2xl mx-auto mb-6">
                A walkthrough of the G-16 Housing Project in Bashundhara Residential Area —
                designed for comfort, convenience and modern family living.
              </p>
              <div className="inline-flex items-start gap-4 rounded-2xl border border-[#C02A08]/30 bg-[#C02A08]/5 p-5 text-left">
                <span className="grid place-items-center w-11 h-11 rounded-xl bg-[#C02A08] text-white shrink-0">
                  <Sparkles size={18} />
                </span>
                <div>
                  <div className="font-semibold text-zinc-900 dark:text-zinc-100">
                    Interested in this project?
                  </div>
                  <div className="text-xs text-zinc-500 dark:text-zinc-400">
                    <Link href="#contact" className="text-[#C02A08] hover:underline">
                      Get in touch
                    </Link>{' '}
                    with our team for availability and pricing.
                  </div>
                </div>
              </div>
            </div>
          </motion.div>
        </div>
      </section>
    </div>
  );
}
