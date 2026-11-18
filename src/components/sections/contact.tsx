"use client";

import { FormEvent, useState } from "react";
import SectionTitle from "@/components/ui/section-title";
import Icon from "@/components/ui/Icon";

export default function Contact() {
  const [status, setStatus] = useState("");

  async function handleSubmit(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();
    setStatus("Sending...");

    const form = event.currentTarget;
    const formData = new FormData(form);

    formData.append(
      "access_key",
      process.env.NEXT_PUBLIC_WEB3FORMS_ACCESS_KEY ?? "",
    );
    formData.append("subject", "New message from portfolio");
    formData.append("from_name", "Portfolio Contact Form");

    try {
      const response = await fetch("https://api.web3forms.com/submit", {
        method: "POST",
        body: formData,
      });
      const data = await response.json();

      if (data.success) {
        setStatus("Message sent successfully!");
        form.reset();
      } else {
        setStatus("Something went wrong. Please try again.");
      }
    } catch {
      setStatus("Something went wrong. Please try again.");
    }
  }

  return (
    <section>
      <SectionTitle>Contact</SectionTitle>

      <div className="mt-8 rounded-3xl border border-line bg-card p-8 shadow-sm">
        <div className="mb-8">
          <h2 className="font-serif-display text-2xl font-medium tracking-tight text-foreground md:text-3xl">
            Let&apos;s work <span className="text-accent">together</span>
          </h2>
          <p className="mt-2 text-sm leading-relaxed text-muted md:text-base">
            Have a project in mind, a question, or just want to say hi? Drop me
            a message and I&apos;ll get back to you as soon as possible.
          </p>
        </div>

        <form onSubmit={handleSubmit} className="grid gap-5">
          <div className="grid gap-5 md:grid-cols-2">
            <div className="space-y-1.5">
              <label htmlFor="name" className="text-xs font-semibold uppercase tracking-[0.1em] text-dim">
                Name
              </label>
              <input
                id="name"
                name="name"
                type="text"
                placeholder="Your name"
                required
                className="w-full rounded-xl border border-line bg-card-soft px-4 py-3 text-sm text-foreground outline-none transition-colors focus:border-accent"
              />
            </div>
            <div className="space-y-1.5">
              <label htmlFor="email" className="text-xs font-semibold uppercase tracking-[0.1em] text-dim">
                Email
              </label>
              <input
                id="email"
                name="email"
                type="email"
                placeholder="you@example.com"
                required
                className="w-full rounded-xl border border-line bg-card-soft px-4 py-3 text-sm text-foreground outline-none transition-colors focus:border-accent"
              />
            </div>
          </div>

          <div className="space-y-1.5">
            <label htmlFor="message" className="text-xs font-semibold uppercase tracking-[0.1em] text-dim">
              Message
            </label>
            <textarea
              id="message"
              name="message"
              placeholder="Write your message..."
              required
              rows={4}
              className="w-full resize-none rounded-xl border border-line bg-card-soft px-4 py-3 text-sm text-foreground outline-none transition-colors focus:border-accent"
            />
          </div>

          <div className="flex items-center gap-4">
            <button
              type="submit"
              className="inline-flex items-center gap-2 rounded-xl border border-accent bg-accent px-6 py-3 text-sm font-semibold text-accent-foreground transition-all hover:bg-transparent hover:text-accent"
            >
              <Icon name="Mail" size={16} />
              Send Message
            </button>

            {status && (
              <p className="text-sm text-muted" role="status">
                {status}
              </p>
            )}
          </div>
        </form>
      </div>
    </section>
  );
}