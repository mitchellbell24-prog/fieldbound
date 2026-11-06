"use client";

import { FormEvent, useState } from "react";

type Status = "idle" | "error" | "success";

export default function WaitlistForm({ compact = false }: { compact?: boolean }) {
  const [status, setStatus] = useState<Status>("idle");
  const [message, setMessage] = useState("");

  function onSubmit(e: FormEvent<HTMLFormElement>) {
    e.preventDefault();
    const form = e.currentTarget;
    const data = new FormData(form);
    const email = String(data.get("email") || "").trim();
    const use = String(data.get("use") || "").trim();

    if (!email) {
      setStatus("error");
      setMessage("Email is required to join the waitlist.");
      return;
    }
    if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email)) {
      setStatus("error");
      setMessage("Enter a valid email address.");
      return;
    }

    setStatus("success");
    setMessage(
      `You&apos;re on the sample waitlist as ${email}${use ? ` (${use})` : ""}. Demo only — nothing was stored.`
    );
    form.reset();
  }

  if (status === "success") {
    return (
      <div
        className={`rounded-2xl bg-sand ${compact ? "p-5" : "p-6 md:p-8"}`}
        role="status"
        aria-live="polite"
      >
        <p className="text-lg font-semibold text-charcoal">You&apos;re on the list</p>
        <p className="mt-2 text-sm leading-relaxed text-muted">{message}</p>
        <button
          type="button"
          className="focus-ring mt-5 text-sm font-semibold text-moss-deep underline-offset-4 hover:underline"
          onClick={() => setStatus("idle")}
        >
          Add another email
        </button>
      </div>
    );
  }

  return (
    <form onSubmit={onSubmit} className="space-y-3" noValidate>
      <label className="block text-sm">
        <span className="mb-1.5 block font-medium text-ink">Email</span>
        <input
          name="email"
          type="email"
          autoComplete="email"
          className="focus-ring w-full rounded-xl border border-charcoal/15 bg-white px-4 py-3 text-charcoal"
          placeholder="you@example.com"
        />
      </label>
      {!compact && (
        <label className="block text-sm">
          <span className="mb-1.5 block font-medium text-ink">
            How will you use Fieldbound?
          </span>
          <select
            name="use"
            className="focus-ring w-full rounded-xl border border-charcoal/15 bg-white px-4 py-3 text-charcoal"
            defaultValue="Trail notes"
          >
            <option>Trail notes</option>
            <option>Garden / farm log</option>
            <option>Travel sketches</option>
            <option>Gift for someone else</option>
          </select>
        </label>
      )}
      {status === "error" && (
        <p className="text-sm font-medium text-moss-deep" role="alert">
          {message}
        </p>
      )}
      <button
        type="submit"
        className="focus-ring inline-flex w-full items-center justify-center rounded-xl bg-moss px-6 py-3.5 text-sm font-semibold text-parchment transition hover:bg-moss-deep"
      >
        Join the waitlist
      </button>
      <p className="text-xs text-muted">No spam. Sample form — demo only.</p>
    </form>
  );
}
