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
    <aside className="rounded-3xl border border-line bg-card p-5 md:sticky md:top-8 md:flex md:min-h-full md:w-72 md:shrink-0 md:flex-col md:p-8">
      <div className="flex items-center gap-4 md:flex-col md:text-center">
        <Avatar
          src="/images/profil.jpeg"
          alt="Foto Kevin Langga"
          width={150}
          height={190}
        />
        <div className="flex-1 md:flex-none">
          <h1 className="mb-1 text-lg font-medium">{profile.name}</h1>
          <Badge>{profile.role}</Badge>
        </div>
        <button
          type="button"
          onClick={() => setOpen(!open)}
          aria-expanded={open}
          aria-controls="sidebar-detail"
          aria-label={open ? "Sembunyikan kontak" : "Tampilkan kontak"}
          className="grid size-10  place-items-center rounded-xl bg-card-soft text-accent md:hidden cursor-pointer"
        >
          <Icon
            name="ChevronDown"
            className={`transition-transform ${open ? "rotate-180" : ""}`}
          />
        </button>
      </div>

      <div
        id="sidebar-detail"
        className={`${open ? "block" : "hidden"} mt-5 border-t border-line pt-5 md:mt-6 md:block md:pt-6`}
      >
        <ul className="grid gap-4">
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
      {socials.length > 0 && (
        <div className="mt-auto pt-8 flex flex-wrap gap-4 text-xs text-dim">
          {socials.map((s) => (
            <a
              key={s.name}
              href={s.href}
              target="_blank"
              rel="noreferrer"
              className="hover:text-accent"
            >
              {s.name}
            </a>
          ))}
        </div>
      )}
    </aside>
  );
}
