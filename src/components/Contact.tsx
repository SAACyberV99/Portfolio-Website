"use client";
import { useRef, useState } from "react";
import { Send, CheckCircle } from "lucide-react";
import {
  cardClass,
  outlineButtonClass,
  primaryButtonClass,
  sectionHeadingClass,
  sectionLabelClass,
} from "@/lib/styles";

type FormState = "idle" | "loading" | "success" | "error";

export default function Contact() {
  const ref = useRef<HTMLDivElement>(null);
  const [formState, setFormState] = useState<FormState>("idle");
  const [form, setForm] = useState({ name: "", email: "", message: "" });

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>,
  ) => setForm({ ...form, [e.target.name]: e.target.value });

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setFormState("loading");
    // Replace with your form API (Formspree, Resend, etc.)
    await new Promise((r) => setTimeout(r, 1200));
    setFormState("success");
  };

  return (
    <section id="contact" className="py-32 px-6 border-t border-border">
      <div className="max-w-6xl mx-auto">
        <div ref={ref} className="grid grid-cols-1 gap-16 lg:grid-cols-2">
          {/* Left */}
          <div>
            <p className={sectionLabelClass}>Contact</p>
            <h2 className={`${sectionHeadingClass} mb-6`}>
              Get In
              <br />
              <span className="text-amber">Touch.</span>
            </h2>
            <p className="font-body text-muted leading-relaxed max-w-sm mb-8">
              Whether you just want to connect or say hi — my inbox is always
              open.
            </p>
            <a
              href="mailto:SABERAA999@protonmail.com"
              className="font-display text-xl italic text-paper hover:text-amber transition-colors"
            >
              SABERAA999@protonmail.com
            </a>
          </div>

          {/* Right — form */}
          <div>
            {formState === "success" ? (
              <div
                className={`${cardClass} flex h-full flex-col items-center justify-center gap-4 py-16 text-center`}
              >
                <CheckCircle className="text-amber" size={40} />
                <p className="font-display text-2xl font-bold text-paper">
                  Message sent!
                </p>
                <p className="font-body text-muted text-sm">
                  I&apos;ll get back to you within 24 hours.
                </p>
                <button
                  onClick={() => {
                    setFormState("idle");
                    setForm({ name: "", email: "", message: "" });
                  }}
                  className={`${outlineButtonClass} mt-4`}
                >
                  Send another
                </button>
              </div>
            ) : (
              <form onSubmit={handleSubmit} className="space-y-4">
                {/* Name */}
                <div>
                  <label className="font-mono text-xs text-muted uppercase tracking-widest block mb-2">
                    Name
                  </label>
                  <input
                    type="text"
                    name="name"
                    value={form.name}
                    onChange={handleChange}
                    required
                    placeholder="John Doe"
                    className="w-full bg-[#111] border border-border px-4 py-3 font-body text-sm text-paper placeholder:text-border focus:outline-none focus:border-amber transition-colors"
                  />
                </div>

                {/* Email */}
                <div>
                  <label className="font-mono text-xs text-muted uppercase tracking-widest block mb-2">
                    Email
                  </label>
                  <input
                    type="email"
                    name="email"
                    value={form.email}
                    onChange={handleChange}
                    required
                    placeholder="john@example.com"
                    className="w-full bg-[#111] border border-border px-4 py-3 font-body text-sm text-paper placeholder:text-border focus:outline-none focus:border-amber transition-colors"
                  />
                </div>

                {/* Message */}
                <div>
                  <label className="font-mono text-xs text-muted uppercase tracking-widest block mb-2">
                    Message
                  </label>
                  <textarea
                    name="message"
                    value={form.message}
                    onChange={handleChange}
                    required
                    rows={5}
                    placeholder="Tell me about your project..."
                    className="w-full bg-[#111] border border-border px-4 py-3 font-body text-sm text-paper placeholder:text-border focus:outline-none focus:border-amber transition-colors resize-none"
                  />
                </div>

                <button
                  type="submit"
                  disabled={formState === "loading"}
                  className={`${primaryButtonClass} w-full justify-center disabled:opacity-60`}
                >
                  {formState === "loading" ? (
                    "Sending..."
                  ) : (
                    <>
                      Send Message <Send size={14} />
                    </>
                  )}
                </button>
              </form>
            )}
          </div>
        </div>
      </div>
    </section>
  );
}
