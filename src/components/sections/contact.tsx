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

      <div className="mt-6 grid gap-8 md:grid-cols-2">
        {/* Left — Call to Action */}
        <div className="flex flex-col justify-center space-y-4">
          <h2 className="text-3xl font-bold tracking-tight md:text-5xl">
            Let&apos;s work <span className="text-accent">together!</span>
          </h2>
          <p className="text-sm leading-relaxed text-muted md:text-base">
            Have a project in mind, a question, or just want to say hi? Drop me
            a message and I&apos;ll get back to you as soon as possible.
          </p>
        </div>

        {/* Right — Form */}
        <div className="rounded-2xl border border-line bg-card-soft p-5">
          <form onSubmit={handleSubmit} className="flex h-full flex-col gap-4">
            <div className="space-y-1.5">
              <label
                htmlFor="name"
                className="text-sm font-medium text-foreground"
              >
                Name
              </label>
              <input
                id="name"
                name="name"
                type="text"
                placeholder="Your name"
                required
                className="w-full rounded-xl border border-line bg-card px-4 py-3 text-sm text-foreground outline-none placeholder:text-dim focus:border-accent"
              />
            </div>

            <div className="space-y-1.5">
              <label
                htmlFor="email"
                className="text-sm font-medium text-foreground"
              >
                Email
              </label>
              <input
                id="email"
                name="email"
                type="email"
                placeholder="you@example.com"
                required
                className="w-full rounded-xl border border-line bg-card px-4 py-3 text-sm text-foreground outline-none placeholder:text-dim focus:border-accent"
              />
            </div>

            <div className="flex flex-1 flex-col space-y-1.5">
              <label
                htmlFor="message"
                className="text-sm font-medium text-foreground"
              >
                Message
              </label>
              <textarea
                id="message"
                name="message"
                placeholder="Write your message..."
                required
                className="w-full flex-1 resize-none rounded-xl border border-line bg-card px-4 py-3 text-sm text-foreground outline-none placeholder:text-dim focus:border-accent"
              />
            </div>

            <div className="flex items-center gap-3">
              <button
                type="submit"
                className="inline-flex items-center gap-2 rounded-xl border border-line bg-card px-5 py-3 text-sm font-semibold text-accent transition hover:bg-accent hover:text-background"
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
      </div>
    </section>
  );
}
