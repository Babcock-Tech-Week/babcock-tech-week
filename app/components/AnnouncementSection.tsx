"use client";

import { useState } from "react";
import { PARTNERSHIPS_EMAIL, UPDATES_FORM_ACTION, UPDATES_FORM_EMAIL_FIELD } from "../lib/site";

type Status = "idle" | "submitting" | "success" | "error";

export default function AnnouncementSection() {
  const [email, setEmail] = useState("");
  const [status, setStatus] = useState<Status>("idle");
  const configured = Boolean(UPDATES_FORM_ACTION && UPDATES_FORM_EMAIL_FIELD);

  const onSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    if (!configured || status === "submitting") return;
    setStatus("submitting");
    try {
      const body = new FormData();
      body.append(UPDATES_FORM_EMAIL_FIELD, email.trim());
      // Google Forms doesn't allow cross-origin reads, so the response is opaque.
      await fetch(UPDATES_FORM_ACTION, { method: "POST", mode: "no-cors", body });
      setStatus("success");
      setEmail("");
    } catch {
      setStatus("error");
    }
  };

  return (
    <section className="bg-black py-16 md:py-20 px-4 md:px-10 border-t border-white/10">
      <div className="max-w-[900px] mx-auto text-center">
        <h2 className="text-2xl md:text-[32px] font-bold mb-4 leading-tight">
          2027 lineup and partners announced soon
        </h2>
        <p className="text-[15px] text-gray-300 leading-relaxed mb-8">
          Enter your email to get updates on Babcock Tech Week 2027.
        </p>

        {status === "success" ? (
          <p role="status" className="font-mono text-sm tracking-wide text-white">
            Thanks, you&apos;re on the list. We&apos;ll be in touch with updates.
          </p>
        ) : (
          <form
            onSubmit={onSubmit}
            className="flex flex-col sm:flex-row gap-3 max-w-[520px] mx-auto"
          >
            <label htmlFor="updates-email" className="sr-only">
              Email address
            </label>
            <input
              id="updates-email"
              type="email"
              name="email"
              required
              autoComplete="email"
              placeholder="you@example.com"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              disabled={!configured}
              className="flex-1 min-w-0 rounded-full bg-white/10 border border-white/20 px-6 py-4 text-sm text-white placeholder:text-gray-500 focus:outline-none focus:border-white disabled:opacity-50"
            />
            <button
              type="submit"
              disabled={!configured || status === "submitting"}
              className="font-mono bg-white text-black py-4 px-8 rounded-full text-xs md:text-sm font-extrabold tracking-widest uppercase hover:bg-white/85 transition-all cursor-pointer disabled:opacity-50 disabled:cursor-not-allowed"
            >
              {status === "submitting" ? "SENDING..." : "GET UPDATES"}
            </button>
          </form>
        )}

        {status === "error" && (
          <p role="alert" className="mt-4 text-sm text-gray-300">
            Something went wrong. Please try again, or email{" "}
            <a className="underline" href={`mailto:${PARTNERSHIPS_EMAIL}`}>
              {PARTNERSHIPS_EMAIL}
            </a>
            .
          </p>
        )}
      </div>
    </section>
  );
}
