"use client";

import Image from "next/image";

/* ========================================================================== */
/*                                  ABOUT PAGE                                */
/* ========================================================================== */

export default function AboutPage() {
  return (
    <main className="bg-white">

      {/* ====================================================================== */}
      {/*                               ABOUT HERO                                */}
      {/* ====================================================================== */}
      <section className="relative overflow-hidden bg-gradient-to-br from-[#0E1B3A] to-[#0A1630]">
        <div className="max-w-[1560px] mx-auto px-6 md:px-10 py-24 flex items-center min-h-[55vh]">
          <div className="max-w-3xl">
            <h1 className="text-4xl md:text-5xl font-semibold text-white leading-tight">
              About <span className="text-[#C51F65]">Parikshit Sapkota</span>
            </h1>

            <p className="mt-6 text-lg text-gray-300 leading-relaxed">
              An education mentor who understands the journey — because he has
              walked it himself.
            </p>
          </div>
        </div>
      </section>

      {/* ============================== DIVIDER ============================== */}
      <div className="mt-12" />

      {/* ====================================================================== */}
      {/*                             PERSONAL STORY                              */}
      {/* ====================================================================== */}
      <section>
        <div className="max-w-[1200px] mx-auto px-6">
          <div className="grid lg:grid-cols-2 gap-16 items-center">

            {/* Text */}
            <div>
              <h2 className="text-3xl md:text-4xl font-semibold text-[#0E1B3A]">
                From Student to Mentor
              </h2>

              <p className="mt-6 text-gray-700 leading-relaxed">
                Before becoming a mentor to thousands of students, Parikshit
                Sapkota was once a student himself — navigating uncertainty,
                choices, and the dream of studying abroad.
              </p>

              <p className="mt-4 text-gray-700 leading-relaxed">
                Having personally experienced international education, cultural
                transitions, and academic decision-making, he understands the
                emotional and practical challenges students face. This lived
                experience is what shapes his grounded, student-first approach
                today.
              </p>
            </div>

            {/* Image */}
            <div className="relative">
              <div className="aspect-[4/5] rounded-2xl overflow-hidden shadow-xl">
                <Image
                  src="/images/about-story.jpg"
                  alt="Parikshit Sapkota student journey"
                  fill
                  className="object-cover"
                />
              </div>
            </div>

          </div>
        </div>
      </section>

      {/* ============================== DIVIDER ============================== */}
      <div className="mt-16" />

      {/* ====================================================================== */}
      {/*                         PROFESSIONAL JOURNEY                            */}
      {/* ====================================================================== */}
      <section className="bg-[#F9FAFB] py-24">
        <div className="max-w-[1200px] mx-auto px-6">

          <h2 className="text-3xl md:text-4xl font-semibold text-[#0E1B3A] text-center">
            Professional Journey
          </h2>

          <div className="mt-16 space-y-10">

            {[
              {
                year: "2007 – 2010",
                text: "Early years in academic counseling, working closely with students and families."
              },
              {
                year: "2011 – 2016",
                text: "Expanded into international education pathways and global university admissions."
              },
              {
                year: "2017 – Present",
                text: "Managing Director at Access Education Network, guiding students with clarity and ethics."
              },
            ].map((item) => (
              <div key={item.year} className="flex gap-6">
                <div className="w-24 font-semibold text-[#C51F65]">
                  {item.year}
                </div>
                <p className="text-gray-700 leading-relaxed">
                  {item.text}
                </p>
              </div>
            ))}

          </div>
        </div>
      </section>

      {/* ============================== DIVIDER ============================== */}
      <div className="mt-16" />

      {/* ====================================================================== */}
      {/*                           PHILOSOPHY & VALUES                           */}
      {/* ====================================================================== */}
      <section>
        <div className="max-w-[1200px] mx-auto px-6">

          <h2 className="text-3xl md:text-4xl font-semibold text-[#0E1B3A] text-center">
            Philosophy & Values
          </h2>

          <div className="mt-14 grid sm:grid-cols-2 lg:grid-cols-3 gap-8">

            {[
              {
                title: "Student-First Guidance",
                desc: "Every recommendation is made in the student’s long-term interest."
              },
              {
                title: "Ethical Counseling",
                desc: "Transparency and honesty form the foundation of every decision."
              },
              {
                title: "Clarity Over Trends",
                desc: "Choosing paths based on purpose, not popularity."
              },
              {
                title: "Global Perspective",
                desc: "Real insight from real international education experience."
              },
              {
                title: "Long-Term Thinking",
                desc: "Education decisions aligned with career and life goals."
              },
            ].map((item) => (
              <div
                key={item.title}
                className="rounded-2xl bg-white p-6 shadow-lg"
              >
                <h3 className="font-semibold text-[#0E1B3A]">
                  {item.title}
                </h3>
                <p className="mt-3 text-gray-600 leading-relaxed">
                  {item.desc}
                </p>
              </div>
            ))}

          </div>
        </div>
      </section>

      {/* ============================== DIVIDER ============================== */}
      <div className="mt-20" />

      {/* ====================================================================== */}
      {/*                             HUMAN SIDE                                  */}
      {/* ====================================================================== */}
      <section className="bg-[#0E1B3A] py-24">
        <div className="max-w-[1000px] mx-auto px-6 text-center">

          <p className="text-xl md:text-2xl font-medium italic text-gray-200 leading-relaxed">
            “I believe education is not about going abroad — it’s about choosing
            the right direction with confidence.”
          </p>

          <p className="mt-6 text-gray-400">
            — Parikshit Sapkota
          </p>
        </div>
      </section>

      {/* ============================== DIVIDER ============================== */}
      <div className="mt-16" />

      {/* ====================================================================== */}
      {/*                               CTA                                       */}
      {/* ====================================================================== */}
      <section className="pb-32">
        <div className="max-w-[1200px] mx-auto px-6 text-center">

          <h2 className="text-3xl md:text-4xl font-semibold text-[#0E1B3A]">
            Let’s Talk About Your Journey
          </h2>

          <p className="mt-6 text-gray-600 max-w-2xl mx-auto">
            Every student’s path is different. A conversation is often the
            clearest first step.
          </p>

          <a
            href="/contact"
            className="inline-block mt-10 rounded-md bg-[#C51F65] px-10 py-4
                       font-medium text-white hover:bg-[#F47D34] transition"
          >
            Book a Consultation
          </a>

        </div>
      </section>

    </main>
  );
}
