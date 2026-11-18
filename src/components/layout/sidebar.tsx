"use client";

import { useState } from "react";
import Avatar from "@/components/ui/avatar";
import Badge from "@/components/ui/badge";
import ContactItem from "@/components/ui/contact-item";
import Icon from "@/components/ui/Icon";
import { profile } from "@/data/profile";

export default function Sidebar() {
  const [open, setOpen] = useState(false);
  const socials = profile.socials.filter((s) => s.href.startsWith("http"));

  return (
    <aside className="w-full md:sticky md:top-8 md:w-80 md:shrink-0">
      <div className="sticky top-4 z-40 rounded-3xl border border-line bg-card/90 p-8 backdrop-blur-md md:static md:bg-card md:backdrop-blur-none shadow-sm">
        {/* Profile header */}
        <div className="flex flex-col items-center text-center">
          <div className="relative">
            <Avatar
              src="/images/profil.png"
              alt="Foto Kevin Langga"
              width={160}
              height={200}
            />
            <span className="absolute -bottom-1.5 -right-1.5 size-4 rounded-full border-2 border-card bg-accent shadow-sm" />
          </div>
          <h1 className="mt-5 font-serif-display text-2xl font-medium tracking-tight text-foreground">
            {profile.name}
          </h1>
          <div className="mt-2">
            <Badge>{profile.role}</Badge>
          </div>
        </div>

        {/* Contact details — always visible on desktop, collapsible on mobile */}
        <div
          id="sidebar-detail"
          className={`mt-6 block border-t border-line pt-6 md:mt-7 md:pt-7 ${open ? "" : "hidden"}`}
        >
          <ul className="grid gap-3.5">
            {profile.contacts.map((contact) => (
              <ContactItem
                key={contact.label}
                icon={contact.icon}
                label={contact.label}
                value={contact.value}
              />
            ))}
          </ul>
        </div>

        {/* Social links */}
        {socials.length > 0 && (
          <div className="mt-7 border-t border-line pt-6">
            <p className="mb-3 text-[10px] font-semibold uppercase tracking-[0.2em] text-dim">
              Connect
            </p>
            <div className="flex flex-wrap gap-x-5 gap-y-2">
              {socials.map((s) => (
                <a
                  key={s.name}
                  href={s.href}
                  target="_blank"
                  rel="noreferrer"
                  className="group inline-flex items-center gap-1.5 text-sm text-muted transition-colors hover:text-accent"
                >
                  <span className="transition-transform group-hover:-translate-y-0.5">
                    {s.name}
                  </span>
                </a>
              ))}
            </div>
          </div>
        )}

        {/* Mobile toggle */}
        <button
          type="button"
          onClick={() => setOpen(!open)}
          aria-expanded={open}
          aria-controls="sidebar-detail"
          aria-label={open ? "Sembunyikan kontak" : "Tampilkan kontak"}
          className="mt-5 grid size-10 w-full place-items-center rounded-xl bg-card-soft text-muted transition-colors hover:text-accent md:hidden"
        >
          <Icon
            name="ChevronDown"
            className={`size-5 transition-transform ${open ? "rotate-180" : ""}`}
          />
        </button>
      </div>
    </aside>
  );
}