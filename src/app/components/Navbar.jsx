"use client";

import { useState } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import {
  FaFacebookF,
  FaInstagram,
  FaLinkedinIn,
  FaWhatsapp,
  FaBars,
  FaTimes,
  FaChevronDown,
} from "react-icons/fa";

/* -------------------------------------------------------------------------- */
/*                               NAV ITEMS                                    */
/* -------------------------------------------------------------------------- */

const navItems = [
  { label: "Home", href: "/" },
  { label: "About", href: "/about" },
  { label: "Services", href: "/services" },
  {
    label: "Explore",
    dropdown: [
      { label: "Gallery", href: "/gallery" },
      { label: "Blogs", href: "/blogs" },
      { label: "Feedback", href: "/feedback" },
    ],
  },
  { label: "Contact", href: "/contact" },
];

/* -------------------------------------------------------------------------- */
/*                               NAVBAR                                       */
/* -------------------------------------------------------------------------- */

export default function Navbar() {
  const pathname = usePathname();
  const [open, setOpen] = useState(false);

  return (
    <>
      {/* ================= HEADER ================= */}
      <header className="bg-[#e6e6e6] sticky top-0 z-50">
        <nav className="mx-auto max-w-[1560px] px-6 xl:px-10 h-23 flex items-center justify-between">

          {/* LOGO */}
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

          {/* ================= DESKTOP NAV ================= */}
          <div className="hidden xl:flex items-center gap-14">

            {/* NAV LINKS */}
            <ul className="flex items-center gap-12">
              {navItems.map((item) => {
                if (item.dropdown) {
                  return (
                    <li key={item.label} className="relative group">
                      <span className="nav-link cursor-pointer flex items-center gap-2">
                        {item.label}

                        {/* Dropdown Indicator */}
                        <FaChevronDown
                          className="
                            text-[11px]
                            transition-transform duration-300
                            group-hover:rotate-180
                          "
                        />
                      </span>


                      {/* Dropdown */}
                      <div
                        className="
                          absolute left-0 top-full mt-3
                          w-52 rounded-xl bg-white
                          shadow-[0_20px_40px_rgba(0,0,0,0.12)]
                          opacity-0 invisible
                          group-hover:opacity-100 group-hover:visible
                          transition-all duration-200
                        "
                      >
                        <ul className="py-2">
                          {item.dropdown.map((sub) => (
                            <li key={sub.href}>
                              <Link
                                href={sub.href}
                                className="
                                  block px-6 py-3
                                  text-sm font-medium
                                  text-[#0E1B3A]
                                  hover:text-[#C51F65]
                                  hover:bg-[#F9FAFB]
                                  transition
                                "
                              >
                                {sub.label}
                              </Link>
                            </li>
                          ))}
                        </ul>
                      </div>

                    </li>
                  );
                }

                const active = item.href
                  ? item.href === "/"
                    ? pathname === "/"
                    : pathname.startsWith(item.href)
                  : false;

                return (
                  <li key={item.href}>
                    <Link
                      href={item.href}
                      className={`nav-link ${active ? "nav-active" : ""}`}
                    >
                      {item.label}
                    </Link>
                  </li>
                );
              })}
            </ul>

            {/* ACTIONS */}
            <div className="flex items-center gap-6">

              {/* SOCIALS */}
              <div className="flex items-center gap-4 rounded-full border border-[#F47D34] px-5 py-3">
                <SocialIcon icon={<FaFacebookF />} href="https://facebook.com" />
                <SocialIcon icon={<FaInstagram />} href="https://instagram.com" />
                <SocialIcon icon={<FaLinkedinIn />} href="https://linkedin.com" />
                <SocialIcon icon={<FaWhatsapp />} href="https://wa.me/977XXXXXXXXX" />
              </div>

              {/* CTA */}
              <Link
                href="/contact"
                className="rounded-full bg-[#C51F65] px-7 py-3 text-sm font-semibold text-white transition-all duration-300 hover:bg-[#F47D34]"
              >
                Book a Consultation
              </Link>
            </div>
          </div>

          {/* ================= HAMBURGER ================= */}
          <button
            onClick={() => setOpen(true)}
            className="xl:hidden text-2xl text-[#C51F65]"
          >
            <FaBars />
          </button>
        </nav>
      </header>

      {/* ================= MOBILE MENU ================= */}
      {open && (
        <>
          {/* Backdrop */}
          <div
            className="fixed inset-0 z-40 bg-black/60"
            onClick={() => setOpen(false)}
          />

          {/* Drawer */}
          <aside
            className="
              fixed top-0 right-0 z-50 h-full w-[360px] max-w-[90%]
              bg-[#0f0f0f]
              px-8 py-10
              flex flex-col
            "
          >
            {/* Close */}
            <button
              onClick={() => setOpen(false)}
              className="self-end text-2xl text-white mb-10"
            >
              <FaTimes />
            </button>

            {/* Nav */}
            <nav className="flex-1 flex flex-col justify-center">
              <ul className="space-y-4">
                {navItems.map((item) => {
                  if (item.dropdown) {
                    return (
                      <li key={item.label}>
                        <p className="px-6 py-3 text-sm uppercase tracking-widest text-gray-400">
                          {item.label}
                        </p>
                        <ul className="ml-4 space-y-2">
                          {item.dropdown.map((sub) => (
                            <li key={sub.href}>
                              <Link
                                href={sub.href}
                                onClick={() => setOpen(false)}
                                className="block px-6 py-3 rounded-full text-white hover:bg-white/10 transition"
                              >
                                {sub.label}
                              </Link>
                            </li>
                          ))}
                        </ul>
                      </li>
                    );
                  }

                  const active = item.href
                    ? item.href === "/"
                      ? pathname === "/"
                      : pathname.startsWith(item.href)
                    : false;

                  return (
                    <li key={item.href}>
                      <Link
                        href={item.href}
                        onClick={() => setOpen(false)}
                        className={`
                          block px-6 py-4 rounded-full text-base transition-all
                          ${
                            active
                              ? "bg-[#C51F65] text-white"
                              : "text-white hover:bg-white/10"
                          }
                        `}
                      >
                        {item.label}
                      </Link>
                    </li>
                  );
                })}
              </ul>
            </nav>

            {/* CTA */}
            <Link
              href="/contact"
              onClick={() => setOpen(false)}
              className="
                mt-8 mb-6
                block text-center
                rounded-full
                bg-[#F47D34]
                px-6 py-4
                font-semibold text-white
                hover:bg-[#C51F65]
                transition-all
              "
            >
              Book a Consultation
            </Link>

            {/* Socials */}
            <div className="flex justify-center gap-6 text-white text-xl">
              <SocialIcon icon={<FaFacebookF />} href="https://facebook.com" />
              <SocialIcon icon={<FaInstagram />} href="https://instagram.com" />
              <SocialIcon icon={<FaLinkedinIn />} href="https://linkedin.com" />
              <SocialIcon icon={<FaWhatsapp />} href="https://wa.me/+9779864117606" />
            </div>
          </aside>
        </>
      )}
    </>
  );
}

/* -------------------------------------------------------------------------- */
/*                               SOCIAL ICON                                  */
/* -------------------------------------------------------------------------- */

function SocialIcon({ icon, href }) {
  return (
    <a
      href={href}
      target="_blank"
      rel="noopener noreferrer"
      className="text-[#C51F65] p-2 rounded-full transition-all duration-300 hover:text-[#F47D34]"
    >
      {icon}
    </a>
  );
}
