"use client";

import Link from "next/link";
import {
  FaFacebookF,
  FaInstagram,
  FaLinkedinIn,
  FaWhatsapp,
} from "react-icons/fa";

const navLinks = [
  { label: "Home", href: "/" },
  { label: "About", href: "/about" },
  { label: "Services", href: "/services" },
  { label: "Feedback", href: "/feedback" },
  { label: "Contact", href: "/contact" },
];

export default function Footer() {
  return (
    <footer className="bg-[#0A1630] text-gray-400">

      {/* ================================================================= */}
      {/*                          FOOTER CTA                               */}
      {/* ================================================================= */}
      <div className="border-b border-white/10">
        <div className="max-w-[1560px] mx-auto px-6 xl:px-10 py-20 text-center">

          <img
            src="/images/company-logo-white.png"
            alt="Access Education Network"
            className="mx-auto mb-6 w-16 opacity-90"
            />


          <h3 className="text-2xl md:text-3xl font-bold text-white">
            Book an Appointment Today
          </h3>

          <p className="mt-4 max-w-xl mx-auto text-gray-300">
            Get honest, ethical guidance from an education mentor with over
            17 years of experience — tailored to your goals.
          </p>

          <Link
            href="/contact"
            className="inline-flex items-center gap-2
                       mt-8 rounded-full bg-[#C51F65]
                       px-8 py-4 font-semibold text-white
                       hover:bg-[#F47D34] transition"
          >
            Book Consultation →
          </Link>
        </div>
      </div>

      {/* ================================================================= */}
      {/*                          FOOTER LINKS                              */}
      {/* ================================================================= */}
      <div className="max-w-[1560px] mx-auto px-6 xl:px-10 py-20
                grid gap-16
                sm:grid-cols-2
                xl:grid-cols-5">

        {/* Brand */}
        <div className="md:col-span-2">
          <Link
            href="/"
            className="
              text-5xl
              font-semibold
              tracking-wide
              text-[#C51F65]
              font-[ui-serif]
            "
          >
            parikshit.
          </Link>

          <p className="mt-6 max-w-md text-sm leading-relaxed">
            Dedicated education mentor helping students make confident academic
            decisions through clarity, ethics, and experience.
          </p>
        </div>

        {/* Navigate */}
        <div>
          <h4 className="text-white font-semibold mb-6">Navigate</h4>
          <ul className="space-y-4 text-sm">
            {navLinks.map((item) => (
              <li key={item.href}>
                <Link href={item.href} className="hover:text-white transition">
                  {item.label}
                </Link>
              </li>
            ))}
          </ul>
        </div>

        {/* Office */}
        <div>
            <h4 className="text-white font-semibold mb-6">Office</h4>

            <div className="rounded-xl mb-5 overflow-hidden border border-white/20">
                <iframe
                    title="Office Location"
                    src="https://www.google.com/maps/embed?pb=!1m14!1m8!1m3!1d220.8078923580501!2d85.33200867249249!3d27.688673347073173!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x39eb19bdd6be48d9%3A0x5ca9f9ea2a0b6aa!2sIndreni%20World!5e0!3m2!1sen!2sus!4v1767809659581!5m2!1sen!2sus"
                    className="w-full h-40 border-0"
                    loading="lazy"
                    allowFullScreen
                    referrerPolicy="no-referrer-when-downgrade"
                    />

            </div>

            <p className="text-sm leading-relaxed mb-4">
                Access Education Network<br />
                5th Floor, Block B, Indreni Complex<br/>
                New Baneshwor, Kathmandu<br />
                Nepal
            </p>

        </div>


        {/* Follow */}
        <div>
          <h4 className="text-white font-semibold mb-6">Follow</h4>
          <div className="flex gap-4">
            <SocialIcon icon={<FaFacebookF />} />
            <SocialIcon icon={<FaInstagram />} />
            <SocialIcon icon={<FaLinkedinIn />} />
            <SocialIcon icon={<FaWhatsapp />} />
          </div>
        </div>
      </div>

      {/* ================================================================= */}
      {/*                          BOTTOM BAR                                */}
      {/* ================================================================= */}
    <div className="border-t border-white/10 py-6 text-sm">
        <div className="max-w-[1560px] mx-auto px-6 xl:px-10
                        flex flex-col md:flex-row items-center
                        justify-between gap-4">

            <p>
            © {new Date().getFullYear()} Parikshit Sapkota. All rights reserved.
            </p>

            <div className="flex flex-wrap gap-6 items-center">
            <a href="/privacy" className="hover:text-white transition">
                Privacy Policy
            </a>
            <a href="/terms" className="hover:text-white transition">
                Terms & Conditions
            </a>
            <span className="text-white/30">|</span>
            <span className="text-white/70">
                Website by <span className="font-semibold text-[#F47D34]">Yogexh</span>
            </span>
            </div>

        </div>
    </div>


    </footer>
  );
}

function SocialIcon({ icon }) {
  return (
    <a
      href="#"
      className="h-10 w-10 rounded-full border border-white/20
                 flex items-center justify-center
                 text-[#C51F65]
                 hover:border-[#F47D34] hover:text-[#F47D34]
                 transition"
    >
      {icon}
    </a>
  );
}
