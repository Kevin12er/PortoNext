"use client";

import { FormEvent, useState } from "react";
import SectionTitle from "@/components/ui/section-title";

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

      <div className="mt-6 rounded-2xl border border-line bg-card p-6">
        <form onSubmit={handleSubmit} className="space-y-5">
          <div className="space-y-2">
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
              className="w-full rounded-xl border border-line bg-card-soft px-4 py-3 text-sm text-foreground outline-none placeholder:text-dim focus:border-accent"
            />
          </div>

          <div className="space-y-2">
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
              className="w-full rounded-xl border border-line bg-card-soft px-4 py-3 text-sm text-foreground outline-none placeholder:text-dim focus:border-accent"
            />
          </div>

          <div className="space-y-2">
            <label
              htmlFor="message"
              className="text-sm font-medium text-foreground"
            >
              Message
            </label>

            <textarea
              id="message"
              name="message"
              rows={6}
              placeholder="Write your message..."
              required
              className="w-full resize-none rounded-xl border border-line bg-card-soft px-4 py-3 text-sm text-foreground outline-none placeholder:text-dim focus:border-accent"
            />
          </div>

          <button
            type="submit"
            className="rounded-xl border border-line bg-card-soft px-5 py-3 text-sm font-semibold text-accent transition hover:bg-accent hover:text-background"
          >
            Send Message
          </button>

          {status && (
            <p className="text-sm text-muted" role="status">
              {status}
            </p>
          )}
        </form>
      </div>
    </section>
  );
}
