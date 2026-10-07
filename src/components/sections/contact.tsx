
"use client";

import SectionTitle from "@/components/ui/section-title";

export default function Contact() {
  return (
    <section>
      <SectionTitle>Contact</SectionTitle>

      <div className="mt-6 rounded-2xl border border-line bg-card p-6">
        <form className="space-y-5">
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
              className="w-full resize-none rounded-xl border border-line bg-card-soft px-4 py-3 text-sm text-foreground outline-none placeholder:text-dim focus:border-accent"
            />
          </div>

          <button
            type="submit"
            className="rounded-xl border border-line bg-card-soft px-5 py-3 text-sm font-semibold text-accent transition hover:bg-accent hover:text-background"
          >
            Send Message
          </button>
        </form>
      </div>
    </section>
  );
}

