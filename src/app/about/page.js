"use client";

import Image from "next/image";
import { useInView } from "@/hooks/useInView";

function WorkItem({ title, text }) {
  const { ref, isVisible } = useInView();

  return (
    <div
      ref={ref}
      className={`
        grid md:grid-cols-2 gap-10
        transition-all duration-700 ease-out
        ${isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-6"}
      `}
    >
      <h3 className="text-lg md:text-xl font-semibold text-[#C51F65]">
        {title}
      </h3>

      <p className="text-gray-700 leading-relaxed">
        {text}
      </p>
    </div>
  );
}

function DontDoCard({ title, text }) {
  const { ref, isVisible } = useInView();

  return (
    <div
      ref={ref}
      className={`
        rounded-2xl bg-white p-8
        shadow-[0_20px_50px_rgba(0,0,0,0.08)]
        transition-all duration-700 ease-out
        ${isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-6"}
      `}
    >
      <h3 className="text-lg font-semibold text-[#C51F65]">
        {title}
      </h3>
      <p className="mt-4 text-gray-700 leading-relaxed text-justify">
        {text}
      </p>
    </div>
  );
}

function PhilosophyCard({ title, text, image }) {
  const { ref, isVisible } = useInView();

  return (
    <div
      ref={ref}
      className={`
        overflow-hidden rounded-2xl bg-white
        shadow-[0_25px_70px_rgba(0,0,0,0.08)]
        transition-all duration-700 ease-out
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

        <div className="relative z-10 max-w-[1560px] mx-auto px-6 md:px-10 py-24
                        flex items-center justify-center min-h-[55vh]">

          <div className="max-w-3xl text-center">
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


      {/* ====================================================================== */}
{/* ====================================================================== */}
{/*                             PERSONAL STORY                              */}
{/* ====================================================================== */}
      <section className="bg-[#F9FAFB] py-24">
        <div className="max-w-[1200px] mx-auto px-6">
          <div className="grid lg:grid-cols-2 gap-20 items-center">

            {/* TEXT BLOCK */}
            <div className="relative pl-6">

              {/* Micro Accent Line */}
              <span
                className="absolute left-0 top-2 bottom-2 w-[3px] rounded-full
                          bg-gradient-to-b from-[#C51F65] to-[#F47D34]"
              />

              <h2 className="text-3xl md:text-4xl font-semibold text-[#C51F65]">
                From Student to Mentor
              </h2>

              <p className="mt-6 text-gray-700 leading-relaxed text-justify">
                Before becoming a mentor to thousands of students, Parikshit
                Sapkota was once a student himself — navigating uncertainty,
                choices, and the dream of studying abroad.
              </p>

              <p className="mt-4 text-gray-700 leading-relaxed text-justify">
                Having personally experienced international education, cultural
                transitions, and academic decision-making, he understands both
                the emotional and practical challenges students face. This lived
                experience is what shapes his grounded, student-first approach
                today.
              </p>
            </div>

            {/* IMAGE */}
            <div className="relative">
              <div className="aspect-[4/5] rounded-2xl overflow-hidden shadow-xl">
                <Image
                  src="/images/DSC_0589.jpg"
                  alt="Parikshit Sapkota student journey"
                  fill
                  className="object-cover"
                />
              </div>
            </div>

          </div>
        </div>
      </section>



  
      {/* ====================================================================== */}
      {/*                         PROFESSIONAL JOURNEY                            */}
      {/* ====================================================================== */}
      <section className="bg-[#eeeef0] py-28 relative">

        <div/>

        <div className="max-w-[1200px] mx-auto px-6">

          {/* Heading */}
          <h2 className="text-3xl md:text-4xl font-semibold text-[#C51F65] text-center">
            Professional Journey
          </h2>

          {/* Journey Content */}
          <div className="mt-20 max-w-3xl mx-auto relative">

            {/* Left vertical accent */}
            <span
              className="absolute left-0 top-0 bottom-0 w-[4px]
                        bg-gradient-to-b from-[#C51F65] to-[#F47D34] rounded-full"
            />

            <div className="space-y-13 pl-12">

              {[
                {
                  year: "2007 – 2010",
                  text: "Early years in academic counseling, working closely with students and families, building trust through clarity and empathy."
                },
                {
                  year: "2011 – 2016",
                  text: "Expanded into international education pathways, helping students navigate global university admissions and life-changing decisions."
                },
                {
                  year: "2017 – Present",
                  text: "Managing Director at Access Education Network, guiding students with ethics, long-term thinking, and purpose-driven choices."
                },
              ].map((item) => (
                <div key={item.year} className="relative">

                  {/* Dot */}
                  <span
                    className="absolute -left-[18px] top-1 h-4 w-4
                              rounded-full bg-[#C51F65]"
                  />

                  <p className="text-sm font-semibold text-[#C51F65]">
                    {item.year}
                  </p>

                  <p className="mt-3 text-gray-700 leading-relaxed text-justify">
                    {item.text}
                  </p>

                </div>
              ))}

            </div>
          </div>
        </div>
      </section>




      

{/* ====================================================================== */}
      {/*                     EXPERIENCE-BASED CREDIBILITY                        */}
      {/* ====================================================================== */}
      <section className="py-20 bg-white">
        <div className="max-w-[1200px] mx-auto px-6">

          {/* Heading */}
          <h2 className="text-3xl md:text-4xl font-semibold text-[#C51F65] text-center">
            Experience That Shapes Better Decisions
          </h2>

          <p className="mt-6 max-w-3xl mx-auto text-center text-gray-600 leading-relaxed">
            Guidance becomes meaningful when it comes from years of listening,
            observing outcomes, and understanding what truly works — and what doesn’t.
          </p>

          {/* Content */}
          <div className="mt-20 grid gap-16 sm:grid-cols-2 lg:grid-cols-3">

            {/* Block 1 */}
            <div className="flex flex-col">
              <div className="mb-6 rounded-xl overflow-hidden shadow-md">
                <img
                  src="/images/3.jpeg"
                  alt="Understanding patterns in student journeys"
                  className="w-full h-56 object-cover"
                />
              </div>

              <h3 className="text-lg font-semibold text-[#C51F65]">
                Patterns Over Promises
              </h3>

              <p className="mt-4 text-gray-700 leading-relaxed text-justify">
                Over the years, Parikshit has seen trends come and go — popular
                destinations change, universities rise and fall, and shortcuts fail.
                What remains consistent are patterns in student success that only
                long-term experience reveals.
              </p>
            </div>

            {/* Block 2 */}
            <div className="flex flex-col">
              <div className="mb-6 rounded-xl overflow-hidden shadow-md">
                <img
                  src="/images/1.jpeg"
                  alt="Learning from real student outcomes"
                  className="w-full h-56 object-cover"
                />
              </div>

              <h3 className="text-lg font-semibold text-[#C51F65]">
                Lessons From Real Outcomes
              </h3>

              <p className="mt-4 text-gray-700 leading-relaxed text-justify">
                Every decision leaves a trail of outcomes. By staying connected with
                students long after admissions, he has learned which choices create
                confidence — and which create regret.
              </p>
            </div>

            {/* Block 3 */}
            <div className="flex flex-col">
              <div className="mb-6 rounded-xl overflow-hidden shadow-md">
                <img
                  src="/images/DSC_0505.jpg"
                  alt="Mentorship built on judgment and responsibility"
                  className="w-full h-56 object-cover"
                />
              </div>

              <h3 className="text-lg font-semibold text-[#C51F65]">
                Judgment Built Over Time
              </h3>

              <p className="mt-4 text-gray-700 leading-relaxed text-justify">
                Experience is not just about years — it is about responsibility.
                Knowing when to encourage, when to pause, and when to say “this may
                not be right for you” is what defines true mentorship.
              </p>
            </div>

          </div>
        </div>
      </section>

      {/* ====================================================================== */}
      {/*                   HOW I WORK WITH STUDENTS TODAY                       */}
      {/* ====================================================================== */}
      <section className="bg-[#eeeef0] py-20">
        <div className="max-w-[1200px] mx-auto px-6">

          {/* Section Header */}
          <div className="text-center max-w-3xl mx-auto">
            <h2 className="text-3xl md:text-4xl font-semibold text-[#C51F65]">
              How I Work With Students Today
            </h2>

            <p className="mt-6 text-gray-600 leading-relaxed">
              Mentorship is not about quick answers. It is about asking the right
              questions — and staying involved long enough to see decisions through.
            </p>
          </div>

          {/* Content Card */}
          <div
            className="
              mt-20
              rounded-[28px]
              bg-white
              px-8 md:px-14 py-16
              shadow-[0_40px_120px_rgba(0,0,0,0.08)]
              space-y-16
            "
          >
            <WorkItem
              title="I Listen Before I Advise"
              text="Every student arrives with a different background, pressure, and set of expectations. Before discussing destinations or universities, I focus on understanding the student — their motivations, concerns, and long-term goals."
            />

            <WorkItem
              title="I Prioritize Fit Over Popularity"
              text="Not every trending destination or university is the right choice. My role is to help students choose paths that align with their academic strengths, financial reality, and future career direction — even when that means saying no to popular options."
            />

            <WorkItem
              title="I Stay Honest About Outcomes"
              text="Education decisions carry long-term consequences. Students deserve clarity — about opportunities, limitations, and risks — so they can move forward with confidence rather than uncertainty."
            />

            <WorkItem
              title="I Think Beyond Admissions"
              text="Admission is only the beginning. I encourage students to think about life after arrival — academic adjustment, career planning, and long-term stability — so their decisions support not just education, but life beyond it."
            />
          </div>

        </div>
      </section>

{/*                             What I don't Do                                 */}
      {/* ====================================================================== */}

      <section className="py-20 bg-[#F9FAFB]">
        <div className="max-w-[1200px] mx-auto px-6">

          <h2 className="text-3xl md:text-4xl font-semibold text-[#C51F65] text-center">
            What I Don’t Do
          </h2>

          <p className="mt-6 max-w-2xl mx-auto text-center text-gray-600 leading-relaxed">
            Clarity is built not only by what you do — but by what you consciously
            choose not to do.
          </p>

          <div className="mt-16 grid gap-8 md:grid-cols-3">
            <DontDoCard
              title="I Don’t Push Destinations"
              text="I never recommend countries or universities based on trends,
                    commissions, or popularity. Every suggestion must make sense
                    for the student — academically, financially, and personally."
            />

            <DontDoCard
              title="I Don’t Promise Guarantees"
              text="Education decisions involve variables no one can control.
                    I don’t sell false certainty — I offer honest guidance so
                    students can make informed choices."
            />

            <DontDoCard
              title="I Don’t Rush Decisions"
              text="If a student isn’t ready, I would rather pause than push.
                    The right decision at the right time matters more than speed."
            />
          </div>

        </div>
      </section>

{/*                         PHILOSOPHY & VALUES                             */}
{/* ====================================================================== */}
<section className="py-20 bg-[#eeeef0]">
  <div className="max-w-[1200px] mx-auto px-6">

    <h2 className="text-3xl md:text-4xl font-semibold text-[#C51F65] text-center">
      Philosophy & Values
    </h2>

    <p className="mt-6 max-w-2xl mx-auto text-center text-gray-600 leading-relaxed">
      These principles guide every conversation, recommendation, and decision
      I make with students and families.
    </p>

    <div className="mt-20 grid gap-8 sm:grid-cols-2 lg:grid-cols-3">

      <PhilosophyCard
        title="Student-First Thinking"
        text="Every decision is made in the long-term interest of the student,
              not institutions, trends, or short-term outcomes."
        image="/images/1.jpeg"
      />

      <PhilosophyCard
        title="Ethics Over Expediency"
        text="Honest guidance matters more than fast answers. Transparency
              builds trust and protects students from costly mistakes."
        image="/images/2.jpeg"
      />

      <PhilosophyCard
        title="Clarity Before Action"
        text="Rushing decisions creates regret. Clear understanding always
              comes before applications or commitments."
        image="/images/3.jpeg"
      />

      <PhilosophyCard
        title="Experience-Led Advice"
        text="Advice grounded in real academic and international experience
              carries more weight than theory alone."
        image="/images/4.jpeg"
      />

      <PhilosophyCard
        title="Long-Term Perspective"
        text="Education is not an event — it is a foundation for life,
              career, and personal growth."
        image="/images/DSC_0316.jpg"
      />

      <PhilosophyCard
        title="Respect for Individual Paths"
        text="No two students are the same. Success comes from alignment,
              not comparison."
        image="/images/DSC_0364.jpg"
      />

    </div>
  </div>
</section>


      {/*                             HUMAN SIDE                                  */}
      {/* ====================================================================== */}
      <section className="bg-gradient-to-r from-[#C51F65] to-[#F47D34] py-24">
        <div className="max-w-[1000px] mx-auto px-6 text-center">

          <p className="text-xl md:text-2xl font-medium italic text-white leading-relaxed">
            “I believe education is not about going abroad — it’s about choosing
            the right direction with confidence.”
          </p>

          <p className="mt-6 text-white">
            — Parikshit Sapkota
          </p>
        </div>
      </section>

      

    </main>
  );
}
