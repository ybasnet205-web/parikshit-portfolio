"use client";

import { useEffect, useState, useRef } from "react";

/* -------------------------------------------------------------------------- */
/*                                IMAGE DATA                                  */
/* -------------------------------------------------------------------------- */

const images = [
  "/images/1.jpeg",
  "/images/2.jpeg",
  "/images/3.jpeg",
];

/* -------------------------------------------------------------------------- */
/*                                HOME PAGE                                   */
/* -------------------------------------------------------------------------- */

export default function HomePage() {
  const [current, setCurrent] = useState(0);

  /* --------------------------- Carousel Auto Play -------------------------- */
  useEffect(() => {
    const interval = setInterval(() => {
      setCurrent((prev) => (prev + 1) % images.length);
    }, 4500);

    return () => clearInterval(interval);
  }, []);

  return (
    <main className="bg-white">

      {/* ====================================================================== */}
      {/*                               HERO SECTION                              */}
      {/* ====================================================================== */}
      <section className="relative overflow-hidden bg-gradient-to-br from-[#0E1B3A] to-[#0A1630]">

        {/* Decorative Background Logos */}
        <img
          src="/images/company-logo-white.png"
          alt=""
          className="absolute top-24 left-16 w-40 opacity-[0.26] pointer-events-none"
        />
        <img
          src="/images/company-logo-white.png"
          alt=""
          className="absolute bottom-20 right-20 w-56 opacity-[0.26] pointer-events-none"
        />

        <div className="relative z-10 max-w-[1560px] mx-auto px-6 md:px-10 py-28 min-h-[75vh] flex items-center">
          <div className="grid lg:grid-cols-2 gap-16 items-center w-full">

            {/* ---------------------------- Hero Content ---------------------------- */}
            <div className="text-center lg:text-left">
              <h1 className="text-4xl md:text-5xl xl:text-6xl font-semibold text-white leading-tight">
                Hi, I’m{" "}
                <span className="text-[#C51F65]">Parikshit Sapkota</span>
                <br />
                A Dedicated Education{" "}
                <span className="text-[#C51F65]">Mentor</span>
              </h1>

              <p className="mt-6 max-w-xl mx-auto lg:mx-0 text-lg text-gray-300">
                With over{" "}
                <span className="text-white font-medium">17+ years</span> of
                experience, I help students make confident academic decisions
                and achieve real success.
              </p>

              {/* Hero CTA Buttons */}
              <div className="mt-10 flex flex-wrap justify-center lg:justify-start gap-6">
                <button className="rounded-md bg-[#C51F65] px-8 py-4 text-white hover:bg-[#F47D34] transition">
                  Explore Services
                </button>
                <button className="rounded-md border border-white/40 px-8 py-4 text-white hover:border-[#F47D34] hover:text-[#F47D34] transition">
                  Book a Consultation
                </button>
              </div>
            </div>

            {/* ---------------------------- Image Carousel ---------------------------- */}
            <div className="relative">
              <div className="relative rounded-2xl overflow-hidden shadow-2xl">
                <div className="relative h-[300px] sm:h-[360px] md:h-[400px] lg:h-[420px]">
                  {images.map((img, index) => (
                    <img
                      key={img}
                      src={img}
                      alt=""
                      className={`absolute inset-0 h-full w-full object-cover transition-all duration-[1600ms] ease-in-out
                        ${
                          index === current
                            ? "opacity-100 scale-100"
                            : "opacity-0 scale-105"
                        }`}
                    />
                  ))}
                </div>
              </div>
            </div>

          </div>
        </div>
      </section>
      {/* ============================== END HERO ============================== */}


      {/* ====================================================================== */}
      {/*                              ABOUT ME SECTION                           */}
      {/* ====================================================================== */}
      <section className="pb-15">

        {/* -------------------------- Section Marker --------------------------- */}
        <div className="mt-16"></div>

        <div className="max-w-[1560px] mx-auto px-6 md:px-10 text-center">
          <div className="relative inline-flex items-center justify-center">
            <span
              className="absolute -top-3 left-1/2 -translate-x-1/2
                         h-[3px] w-24 rounded-full
                         bg-gradient-to-r from-[#C51F65] to-[#F47D34]"
            />
            <p className="text-sm md:text-base font-semibold tracking-widest text-[#C51F65] uppercase">
              About Me
            </p>
          </div>
        </div>

        {/* Consistent Vertical Rhythm */}
        <div className="mt-12"></div>

        {/* ------------------------- Floating Content Card ------------------------- */}
        <div className="relative max-w-[1200px] mx-auto px-6">
          <div
            className="rounded-[28px] bg-white p-10 md:p-16
                       shadow-[0_45px_120px_rgba(0,0,0,0.18)]"
          >

            {/* Editorial Intro */}
            <div className="text-center mb-14">
              <p
                className="max-w-3xl mx-auto
                           text-base md:text-lg xl:text-xl
                           font-medium italic leading-relaxed
                           text-[#0E1B3A]/90"
              >
                Experience that guides confident decisions — built on clarity,
                ethics, and over 17 years of real-world education mentoring.
              </p>
            </div>

            {/* Main About Content */}
            <div className="grid lg:grid-cols-2 gap-16 items-center">

              {/* Profile Image */}
              <div>
                <div className="aspect-[4/5] rounded-2xl overflow-hidden shadow-xl">
                  <img
                    src="/images/about-portrait.jpg"
                    alt="Parikshit Sapkota"
                    className="h-full w-full object-cover"
                  />
                </div>
              </div>

              {/* Textual Content */}
              <div>
                <h3 className="text-3xl md:text-4xl font-bold text-[#0E1B3A]">
                  – Parikshit Sapkota
                </h3>

                <p className="mt-3 text-gray-600">
                  Managing Director,{" "}
                  <a
                    href="https://accessedu.net"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="font-medium text-[#C51F65] hover:underline"
                  >
                    Access Education Network
                  </a>{" "}
                  – New Baneshwor, Kathmandu Branch
                </p>

                <p className="mt-6 text-gray-700 leading-relaxed text-justify">
                  I am a seasoned education mentor with over
                  17 years of experience guiding students through academic
                  choices, international education pathways, and career-defining
                  decisions. His approach is rooted in ethical guidance, clarity
                  of purpose, and long-term student success.
                </p>

                {/* Key Highlights */}
                <div className="mt-10 grid grid-cols-1 sm:grid-cols-2 gap-6">
                  <div className="rounded-xl bg-[#EEF2FF] p-5 hover:bg-[#E0E7FF] transition">
                    <h4 className="font-semibold text-[#0E1B3A]">
                      17+ Years Experience
                    </h4>
                    <p className="mt-2 text-sm text-gray-600">
                      Extensive expertise in education consulting.
                    </p>
                  </div>

                  <div className="rounded-xl bg-[#FFF1F2] p-5 hover:bg-[#FFE4E6] transition">
                    <h4 className="font-semibold text-[#0E1B3A]">
                      Global Pathways
                    </h4>
                    <p className="mt-2 text-sm text-gray-600">
                      National & international study destinations.
                    </p>
                  </div>

                  <div className="rounded-xl bg-[#ECFEFF] p-5 hover:bg-[#CFFAFE] transition">
                    <h4 className="font-semibold text-[#0E1B3A]">
                      Student-First
                    </h4>
                    <p className="mt-2 text-sm text-gray-600">
                      Personalized mentoring approach.
                    </p>
                  </div>

                  <div className="rounded-xl bg-[#F0FDF4] p-5 hover:bg-[#DCFCE7] transition">
                    <h4 className="font-semibold text-[#0E1B3A]">
                      Career Focused
                    </h4>
                    <p className="mt-2 text-sm text-gray-600">
                      Decisions aligned with long-term goals.
                    </p>
                  </div>
                </div>

                {/* Read More */}
                <a
                  href="/about"
                  className="inline-block mt-10 font-medium
                             text-[#C51F65] hover:text-[#F47D34] transition"
                >
                  Read Full Story →
                </a>
              </div>

            </div>
          </div>
        </div>
      </section>
      {/* ============================ END ABOUT ME ============================ */}

      {/* ====================================================================== */}
{/* ====================================================================== */}
{/*                              SERVICES SECTION                          */}
{/* ====================================================================== */}
<section className="relative py-20 bg-gradient-to-br from-[#0E1B3A] to-[#0A1630] overflow-hidden">

  {/* Decorative Background Logos */}
  <img
    src="/images/company-logo-white.png"
    alt=""
    className="absolute top-32 right-20 w-48 opacity-[0.26] pointer-events-none"
  />
  <img
    src="/images/company-logo-white.png"
    alt=""
    className="absolute bottom-24 left-16 w-40 opacity-[0.26] pointer-events-none"
  />

  <div className="relative z-10 max-w-[1560px] mx-auto px-6 md:px-10">

    {/* ======================== Section Header ======================== */}
    <div className="text-center">
      <div className="relative inline-flex items-center justify-center">
        <span
              className="absolute -top-3 left-1/2 -translate-x-1/2
                         h-[3px] w-24 rounded-full
                         bg-gradient-to-r from-[#C51F65] to-[#F47D34]"
        />
        <p className="text-sm md:text-base font-semibold tracking-widest text-[#C51F65] uppercase">
              Services
        </p>
      </div>

      <h2 className="mt-6 text-3xl md:text-4xl font-bold text-white">
        Strategic Guidance That Shapes Futures
      </h2>

      <p className="mt-4 max-w-2xl mx-auto text-gray-300">
        Every service is designed to bring clarity, confidence, and long-term academic success.
      </p>
    </div>

    {/* ======================== Carousel ======================== */}
    <ServicesCarousel />

  </div>
</section>



{/* ====================================================================== */}
{/* ====================================================================== */}
{/*                           TRUST / STATS SECTION                        */}
{/* ====================================================================== */}
<section className="py-16 bg-white">
  <div className="max-w-[1200px] mx-auto px-6">

    {/* Section Intro */}
    <div className="relative text-center mb-16">
        <span
          className="absolute -top-3 left-1/2 -translate-x-1/2 h-[3px] w-41 rounded-full bg-gradient-to-r from-[#C51F65] to-[#F47D34]"
        />
        <p className="text-sm md:text-base font-semibold tracking-widest text-[#C51F65] uppercase">
              Trust & Impact
        </p>
      <h2 className="mt-4 text-3xl md:text-4xl font-bold text-[#0E1B3A]">
        Numbers That Reflect Experience
      </h2>
    </div>

    {/* Stats Grid */}
    <div className="grid grid-cols-2 xl:grid-cols-4 gap-8">
      <StatCard value={17} suffix="+" label="Years Experience" />
      <StatCard value={10000} suffix="+" label="Students Guided" />
      <StatCard value={15} suffix="+" label="Study Destinations" />
      <StatCard value={98} suffix="%" label="Success Rate" />
    </div>

  </div>
</section>


{/* ====================================================================== */}
{/* ====================================================================== */}
{/*                        TESTIMONIALS SECTION                             */}
{/* ====================================================================== */}
<section className="relative py-18 bg-[#0E1B3A] overflow-hidden">

  {/* Center Logo Watermark */}
  <img
    src="/images/company-logo-white.png"
    alt=""
    className="absolute inset-0 m-auto w-[420px] opacity-[0.26] pointer-events-none"
  />

  <div className="relative z-10 max-w-[1560px] mx-auto px-6 md:px-10">

    {/* ================= Header ================= */}
    <div className="relative text-center mb-20">
      <span
          className="absolute -top-3 left-1/2 -translate-x-1/2 h-[3px] w-41 rounded-full bg-gradient-to-r from-[#C51F65] to-[#F47D34]"
        />
        <p className="text-sm md:text-base font-semibold tracking-widest text-[#C51F65] uppercase">
              Trust & Impact
        </p>
      <h2 className="mt-4 text-3xl md:text-4xl font-bold text-white">
        What Students Say About Their Journey
      </h2>
    </div>

    {/* ================= Carousel ================= */}
    <TestimonialsCarousel />

  </div>
</section>


{/* ====================================================================== */}
{/* ====================================================================== */}
{/*                              FINAL CTA SECTION                         */}
{/* ====================================================================== */}
<section className="relative py-22 bg-gradient-to-r from-[#C51F65] to-[#F47D34] text-white overflow-hidden">

  {/* Subtle Background Accent */}
  <div className="absolute inset-0 bg-[radial-gradient(circle_at_top,rgba(255,255,255,0.18),transparent_60%)]" />

  <div className="relative z-10 max-w-[1100px] mx-auto px-6 text-center">

    {/* Headline */}
    <h2 className="text-3xl md:text-5xl font-bold leading-tight">
      Your Academic Journey Deserves  
      <span className="block">Clarity, Ethics, and Experience</span>
    </h2>

    {/* Supporting Text */}
    <p className="mt-6 max-w-2xl mx-auto text-lg text-white/90 leading-relaxed">
      With over 17 years of mentoring experience, get guidance that prioritizes
      your future — not just admissions.
    </p>

    {/* CTA Buttons */}
    <div className="mt-12 flex justify-center gap-6 flex-wrap">
      <a
        href="/contact"
        className="rounded-full bg-white px-10 py-4
                   font-semibold text-[#C51F65]
                   hover:bg-gray-100 transition"
      >
        Book a Consultation
      </a>

      <a
        href="/services"
        className="rounded-full border border-white/90
                   px-10 py-4 font-semibold
                   hover:bg-white hover:text-[#C51F65] transition"
      >
        Explore Services
      </a>
    </div>

    {/* Trust Note */}
    <p className="mt-10 text-sm text-white/80">
      Trusted by thousands of students across multiple study destinations.
    </p>
  </div>
</section>


{/* ====================================================================== */}

    </main>
  );
}


function ServicesCarousel() {
  const services = [
    {
      title: "Career Counseling",
      desc: "Personalized academic direction aligned with long-term career goals.",
      image: "/images/1.jpeg",
    },
    {
      title: "Study Abroad Guidance",
      desc: "Complete mentoring for international education pathways.",
      image: "/images/2.jpeg",
    },
    {
      title: "University Selection",
      desc: "Strategic institution selection based on profile and outcomes.",
      image: "/images/3.jpeg",
    },
    {
      title: "Visa & Documentation",
      desc: "Accurate, ethical, and stress-free visa assistance.",
      image: "/images/1.jpeg",
    },
    {
      title: "Scholarship Assistance",
      desc: "Maximizing funding and scholarship opportunities.",
      image: "/images/2.jpeg",
    },
    {
      title: "Post-Study Planning",
      desc: "Career clarity beyond graduation.",
      image: "/images/3.jpeg",
    },
  ];

  const [index, setIndex] = useState(0);
  const [cardsPerView, setCardsPerView] = useState(4);
  const [paused, setPaused] = useState(false);

  /* ------------------ MATCH NAVBAR BREAKPOINTS ------------------ */
  useEffect(() => {
    const updateView = () => {
      if (window.innerWidth < 640) {
        setCardsPerView(1);        // Mobile
      } else if (window.innerWidth < 1280) {
        setCardsPerView(2);        // Hamburger appears
      } else {
        setCardsPerView(4);        // Desktop
      }
    };

    updateView();
    window.addEventListener("resize", updateView);
    return () => window.removeEventListener("resize", updateView);
  }, []);


    /* --------- Keep index valid when cardsPerView changes --------- */
  useEffect(() => {
    if (index > services.length - cardsPerView) {
      setIndex(0);
    }
  }, [cardsPerView]);


  /* ----------------------------- Autoplay ----------------------------- */
  useEffect(() => {
    if (paused) return;

    const interval = setInterval(() => {
      setIndex((prev) =>
        prev < services.length - cardsPerView ? prev + 1 : 0
      );
    }, 4500);

    return () => clearInterval(interval);
  }, [paused, cardsPerView]);

  const next = () => {
    if (index < services.length - cardsPerView) {
      setIndex(index + 1);
    }
  };

  const prev = () => {
    if (index > 0) {
      setIndex(index - 1);
    }
  };

  const visibleServices = services.slice(index, index + cardsPerView);

  return (
    <div
      className="mt-20"
      onMouseEnter={() => setPaused(true)}
      onMouseLeave={() => setPaused(false)}
    >
      {/* ================= Cards ================= */}
      <div
        className={`grid gap-8 ${
          cardsPerView === 1
            ? "grid-cols-1"
            : cardsPerView === 2
            ? "grid-cols-2"
            : "grid-cols-4"
        }`}
      >
        {visibleServices.map((service) => (
          <div
            key={service.title}
            className="group bg-white rounded-2xl overflow-hidden
                       shadow-xl hover:shadow-2xl transition"
          >
            {/* Image + Hover CTA */}
            <div className="relative h-56 overflow-hidden">
              <img
                src={service.image}
                alt={service.title}
                className="h-full w-full object-cover group-hover:scale-105 transition duration-700"
              />

              {/* Hover CTA */}
              <div
                className="absolute inset-0 bg-black/50
                           flex items-center justify-center
                           opacity-0 group-hover:opacity-100
                           transition"
              >
                <a
                  href="/services"
                  className="rounded-full bg-[#C51F65]
                             px-6 py-3 text-sm font-semibold text-white
                             hover:bg-[#F47D34] transition"
                >
                  View Service
                </a>
              </div>
            </div>

            {/* Content */}
            <div className="p-6">
              <h3 className="text-lg font-semibold text-[#0E1B3A]">
                {service.title}
              </h3>

              <div className="mt-2 h-[3px] w-25 bg-[#C51F65] rounded-full" />

              <p className="mt-4 text-sm text-gray-600 leading-relaxed">
                {service.desc}
              </p>
            </div>
          </div>
        ))}
      </div>

      {/* ================= Controls ================= */}
      <div className="mt-14 flex flex-col items-center gap-8">

        {/* Prev / Next */}
        <div className="flex gap-6">
          <button
            onClick={prev}
            disabled={index === 0}
            className="h-12 w-12 rounded-full border border-white/30
                       flex items-center justify-center
                       text-white hover:border-[#F47D34] hover:text-[#F47D34]
                       disabled:opacity-30 transition"
          >
            ←
          </button>

          <button
            onClick={next}
            disabled={index >= services.length - cardsPerView}
            className="h-12 w-12 rounded-full border border-white/30
                       flex items-center justify-center
                       text-white hover:border-[#F47D34] hover:text-[#F47D34]
                       disabled:opacity-30 transition"
          >
            →
          </button>
        </div>

        {/* Global CTA */}
        <a
          href="/services"
          className="rounded-full bg-[#C51F65]
                     px-10 py-4 font-semibold text-white
                     hover:bg-[#F47D34] transition"
        >
          View All Services
        </a>
      </div>
    </div>
  );
}

function StatCard({ value, suffix = "", label }) {
  const [count, setCount] = useState(0);
  const ref = useRef(null);
  const hasAnimated = useRef(false);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting && !hasAnimated.current) {
          hasAnimated.current = true;
          animateCount();
        }
      },
      { threshold: 0.4 }
    );

    if (ref.current) observer.observe(ref.current);

    return () => observer.disconnect();
  }, []);

  const animateCount = () => {
    const duration = 1200;
    const startTime = performance.now();

    const update = (time) => {
      const progress = Math.min((time - startTime) / duration, 1);
      const current = Math.floor(progress * value);
      setCount(current);

      if (progress < 1) {
        requestAnimationFrame(update);
      }
    };

    requestAnimationFrame(update);
  };

  return (
    <div
      ref={ref}
      className="rounded-2xl bg-white p-8 text-center
                 border border-gray-100
                 shadow-sm hover:shadow-md transition"
    >
      <p className="text-4xl md:text-5xl font-bold text-[#C51F65]">
        {count.toLocaleString()}
        {suffix}
      </p>
      <p className="mt-3 text-gray-600 font-medium">
        {label}
      </p>
    </div>
  );
}


function TestimonialsCarousel() {
  const testimonials = [
    {
      name: "Aayush Sharma",
      country: "Australia",
      image: "/images/1.jpeg",
      comment:
        "Sir Parikshit guided me honestly and helped me choose the right country and university.",
      rating: 5,
    },
    {
      name: "Sneha Karki",
      country: "USA",
      image: "/images/2.jpeg",
      comment:
        "The mentoring was ethical, detailed, and focused on my long-term career.",
      rating: 5,
    },
    {
      name: "Rohit Adhikari",
      country: "Canada",
      image: "/images/3.jpeg",
      comment:
        "I felt confident at every step because of the clarity I received.",
      rating: 4,
    },
    {
      name: "Nisha Shrestha",
      country: "UK",
      image: "/images/1.jpeg",
      comment:
        "Very transparent process. No false promises, only honest guidance.",
      rating: 5,
    },
    {
      name: "Suman Rai",
      country: "Japan",
      image: "/images/2.jpeg",
      comment:
        "Helped me understand my options clearly before making decisions.",
      rating: 4,
    },
    {
      name: "Pratik Bista",
      country: "New Zealand",
      image: "/images/3.jpeg",
      comment:
        "A mentor who truly puts students first.",
      rating: 5,
    },
  ];

  const [index, setIndex] = useState(0);
  const [cardsPerView, setCardsPerView] = useState(3);

  /* ----------- Match Navbar Breakpoints ----------- */
  useEffect(() => {
    const updateView = () => {
      if (window.innerWidth < 640) setCardsPerView(1);
      else if (window.innerWidth < 1280) setCardsPerView(2);
      else setCardsPerView(3);
    };

    updateView();
    window.addEventListener("resize", updateView);
    return () => window.removeEventListener("resize", updateView);
  }, []);

  const next = () => {
    if (index < testimonials.length - cardsPerView) {
      setIndex(index + 1);
    }
  };

  const prev = () => {
    if (index > 0) {
      setIndex(index - 1);
    }
  };

  const visible = testimonials.slice(index, index + cardsPerView);

  return (
    <div className="relative">

      {/* Cards */}
      <div
        className={`grid gap-8 ${
          cardsPerView === 1
            ? "grid-cols-1"
            : cardsPerView === 2
            ? "grid-cols-2"
            : "grid-cols-3"
        }`}
      >
        {visible.map((t, i) => (
          <TestimonialCard key={i} data={t} />
        ))}
      </div>

      {/* Controls */}
      <div className="mt-14 flex flex-col items-center gap-8">
        <div className="flex gap-6">
          <button
            onClick={prev}
            disabled={index === 0}
            className="h-12 w-12 rounded-full border border-white/30
                       text-white hover:border-[#F47D34] hover:text-[#F47D34]
                       disabled:opacity-30 transition"
          >
            ←
          </button>
          <button
            onClick={next}
            disabled={index >= testimonials.length - cardsPerView}
            className="h-12 w-12 rounded-full border border-white/30
                       text-white hover:border-[#F47D34] hover:text-[#F47D34]
                       disabled:opacity-30 transition"
          >
            →
          </button>
        </div>

        {/* CTA */}
        <a
          href="/feedback"
          className="rounded-full bg-[#C51F65]
                     px-10 py-4 font-semibold text-white
                     hover:bg-[#F47D34] transition"
        >
          View All Feedback
        </a>
      </div>
    </div>
  );
}


function TestimonialCard({ data }) {
  return (
    <div
      className="min-h-[360px] rounded-2xl bg-white/10 backdrop-blur-xl
                border border-white/20 p-8
                flex flex-col justify-between
                shadow-lg transition hover:shadow-2xl"
    >

      {/* Row 1: Profile */}
      <div className="flex gap-4 items-center">
        <img
          src={data.image}
          alt={data.name}
          className="h-14 w-14 rounded-full object-cover"
        />
        <div>
          <p className="font-semibold text-white">{data.name}</p>
          <p className="text-sm text-[#F47D34]">{data.country}</p>
        </div>
      </div>

      {/* Row 2: Comment */}
      <p className="mt-6 text-gray-200 leading-relaxed">
        “{data.comment}”
      </p>

      {/* Row 3: Rating */}
      <div className="mt-6 flex gap-1">
        {Array.from({ length: 5 }).map((_, i) => (
          <span
            key={i}
            className={`text-lg ${
              i < data.rating ? "text-[#F47D34]" : "text-white/30"
            }`}
          >
            ★
          </span>
        ))}
      </div>
    </div>
  );
}
