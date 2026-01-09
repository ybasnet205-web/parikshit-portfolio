"use client";

import Image from "next/image";
import { useInView } from "@/hooks/useInView";

function ServiceCard({ title, text, image }) {
  const { ref, isVisible } = useInView();

  return (
    <div
      ref={ref}
      className={`
        bg-white rounded-2xl overflow-hidden
        shadow-lg
        transition-all duration-500 ease-out
        transform
        hover:-translate-y-1 hover:scale-[1.02]
        hover:shadow-[0_30px_80px_rgba(0,0,0,0.15)]
        ${isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-6"}
      `}
    >
      {/* Image */}
      <div className="relative h-48">
        <Image
          src={image}
          alt={title}
          fill
          className="object-cover"
        />
      </div>

      {/* Content */}
      <div className="p-6">
        <h3 className="text-lg font-semibold text-[#C51F65]">
          {title}
        </h3>

        <p className="mt-3 text-gray-700 leading-relaxed text-justify">
          {text}
        </p>
      </div>
    </div>
  );
}


export default function ServicesPage() {
  return (
    <main className="bg-white">

      {/* ====================================================================== */}
      {/*                             SERVICES HERO                               */}
      {/* ====================================================================== */}
      <section className="relative h-170 bg-gradient-to-br from-[#0E1B3A] to-[#0A1630] overflow-hidden">
        <div className="max-w-[1560px] mx-auto mt-10 px-6 md:px-10 py-28 text-center">

          {/* Desktop Decorative Logos */}
        <img
          src="/images/company-logo-white.png"
          alt=""
          className="hidden xl:block absolute top-20 left-16 w-40 opacity-[0.18] pointer-events-none"
        />
        <img
          src="/images/company-logo-white.png"
          alt=""
          className="hidden xl:block absolute bottom-24 right-20 w-56 opacity-[0.18] pointer-events-none"
        />

        {/* Mobile / Tablet Center Logo */}
        <img
          src="/images/company-logo-white.png"
          alt=""
          className="xl:hidden absolute top-1/2 left-1/2
                    -translate-x-1/2 -translate-y-1/2
                    w-48 opacity-[0.26] pointer-events-none"
        />

          {/* Sub Heading */}
          <p className="text-sm md:text-base font-semibold tracking-widest uppercase text-[#C51F65]">
            Services
          </p>

          {/* Main Heading */}
          <h1 className="mt-4 text-4xl md:text-5xl font-semibold text-white leading-tight">
            Guidance Built on Experience, <br className="hidden sm:block" />
            Not Shortcuts
          </h1>

          {/* Description */}
          <p className="mt-6 max-w-3xl mx-auto text-lg text-gray-300 leading-relaxed">
            Every student’s situation is different. My role is to help you
            understand your options clearly — academically, financially, and
            personally — so your decisions are informed and confident.
          </p>

          {/* CTA */}
          <div className="mt-10">
            <a
              href="/contact"
              className="inline-block rounded-md bg-[#C51F65] px-10 py-4
                         font-medium text-white hover:bg-[#F47D34] transition"
            >
              Book a Consultation
            </a>
          </div>

        </div>
      </section>

            {/* ====================================================================== */}
      {/*                           CORE SERVICES                                 */}
      {/* ====================================================================== */}
      <section className="bg-[#F9FAFB] py-28">
        <div className="max-w-[1200px] mx-auto px-6">

          {/* Section Header */}
          <div className="text-center max-w-3xl mx-auto">
            <p className="text-sm md:text-base font-semibold tracking-widest uppercase text-[#C51F65]">
              What I Help With
            </p>

            <h2 className="mt-4 text-3xl md:text-4xl font-semibold text-[#0E1B3A]">
              Core Areas of Guidance
            </h2>

            <p className="mt-6 text-gray-600 leading-relaxed">
              My services are designed to support students and families at every
              critical decision point — from choosing the right country to
              planning life beyond admission.
            </p>
          </div>

          {/* Cards */}
          <div className="mt-20 grid gap-8 sm:grid-cols-2 lg:grid-cols-3">

          <ServiceCard
            title="Academic Counseling"
            text="Personalized guidance to help students understand their academic
                  strengths, realistic options, and long-term direction before
                  making major education decisions."
            image="/images/1.jpeg"
          />

          <ServiceCard
            title="New Zealand Study Pathways"
            text="Extensive experience guiding students through New Zealand’s
                  education system — from course selection to visa planning —
                  with a strong understanding of long-term outcomes."
            image="/images/2.jpeg"
          />

          <ServiceCard
            title="Dependent & Spouse Visa Guidance"
            text="Well known for handling complex New Zealand spouse, child, and
                  family visa cases — helping students plan education while
                  keeping families together."
            image="/images/3.jpeg"
          />

          <ServiceCard
            title="Global Study Options"
            text="Guidance for Australia, UK, Canada, and the USA — focusing on
                  realistic entry pathways, compliance, and academic value
                  rather than trends."
            image="/images/4.jpeg"
          />

          <ServiceCard
            title="Application & Documentation Strategy"
            text="Structured support for applications, documentation, and
                  compliance — ensuring clarity and accuracy at every step."
            image="/images/1.jpeg"
          />

          <ServiceCard
            title="Pre-Departure & Transition Guidance"
            text="Preparing students and families for academic life, cultural
                  transition, and long-term planning beyond arrival."
            image="/images/2.jpeg"
          />

          </div>
        </div>
      </section>

    </main>
  );
}

