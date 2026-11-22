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
        </div>
      </div>
    </section>
  );
}
