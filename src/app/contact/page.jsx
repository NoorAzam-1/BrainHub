import Link from "next/link";
import {
  ArrowRight,
  Clock3,
  HelpCircle,
  Mail,
  MapPin,
  MessageCircle,
  Phone,
  Send,
  ShieldCheck,
  Sparkles,
} from "lucide-react";
import { site } from "@/data/site";

export const metadata = {
  title: `Contact ${site.brand}`,
  description:
    "Contact BrainHub for learning support, team onboarding, product questions, and feedback.",
};

const contactMethods = [
  {
    title: "Learning support",
    description: "Get help with courses, library access, checkout, and account issues.",
    value: "support@brainhub.com",
    icon: Mail,
  },
  {
    title: "Team onboarding",
    description: "Talk to us about setting up BrainHub for your class, team, or cohort.",
    value: "+91 98765 43210",
    icon: Phone,
  },
  {
    title: "Product feedback",
    description: "Share ideas, bugs, or requests that can make the platform sharper.",
    value: "feedback@brainhub.com",
    icon: MessageCircle,
  },
];

const quickNotes = [
  {
    title: "Fast response window",
    description: "Most messages receive a reply within one business day.",
    icon: Clock3,
  },
  {
    title: "Safe account help",
    description: "We never ask for passwords or payment details over email.",
    icon: ShieldCheck,
  },
  {
    title: "Better with context",
    description: "Include your account email and a short description of what happened.",
    icon: HelpCircle,
  },
];

export default function ContactPage() {
  return (
    <main className="relative overflow-hidden text-on-surface">
      <section className="relative overflow-hidden rounded-[2rem] border border-border/60 bg-gradient-futuristic px-5 py-10 shadow-2xl shadow-black/10 sm:px-8 md:py-14 lg:px-14">
        <div className="absolute -left-16 top-10 h-72 w-72 rounded-full bg-primary/15 blur-[110px]" />
        <div className="absolute -right-16 bottom-0 h-80 w-80 rounded-full bg-accent/10 blur-[120px]" />

        <div className="relative z-10 grid gap-10 lg:grid-cols-[0.95fr_1.05fr] lg:items-center">
          <div className="space-y-6">
            <div className="inline-flex items-center gap-2 rounded-full border border-primary/20 bg-white/60 px-4 py-2 text-xs font-bold uppercase tracking-[0.2em] text-primary backdrop-blur-md">
              <Sparkles className="h-4 w-4" />
              Contact {site.brand}
            </div>

            <div className="space-y-4">
              <h1 className="max-w-3xl font-headline text-4xl font-extrabold leading-tight tracking-tight sm:text-5xl lg:text-7xl">
                Tell us what you are building next.
              </h1>
              <p className="max-w-2xl text-base leading-relaxed text-on-surface-variant sm:text-lg md:text-xl">
                Questions about a learning path, team setup, checkout, or your
                personal library? Send us the details and we will help you move
                forward with less friction.
              </p>
            </div>

            <div className="flex flex-col gap-3 sm:flex-row">
              <Link
                href="/feedback"
                className="btn btn-primary gap-2 rounded-2xl px-6 py-3"
              >
                Leave feedback
                <ArrowRight className="h-4 w-4" />
              </Link>
              <Link href="/browse" className="btn btn-ghost rounded-2xl px-6 py-3">
                Explore courses
              </Link>
            </div>
          </div>

          <div className="glass-card rounded-[2rem] border border-white/60 p-4 sm:p-6">
            <div className="rounded-[1.5rem] border border-border/50 bg-surface-light p-5">
              <p className="text-xs font-bold uppercase tracking-[0.2em] text-secondary">
                Message us
              </p>
              <h2 className="mt-2 text-2xl font-bold">We are ready to help</h2>

              <div className="mt-6 grid gap-4">
                {contactMethods.map((method) => {
                  const Icon = method.icon;

                  return (
                    <div
                      key={method.title}
                      className="flex gap-4 rounded-2xl border border-white/70 bg-white/75 p-4"
                    >
                      <span className="flex h-11 w-11 shrink-0 items-center justify-center rounded-2xl bg-primary/10 text-primary">
                        <Icon className="h-5 w-5" />
                      </span>
                      <div>
                        <h3 className="font-bold">{method.title}</h3>
                        <p className="mt-1 text-sm leading-relaxed text-on-surface-variant">
                          {method.description}
                        </p>
                        <p className="mt-2 text-sm font-semibold text-primary">
                          {method.value}
                        </p>
                      </div>
                    </div>
                  );
                })}
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="grid gap-6 py-8 lg:grid-cols-[1.1fr_0.9fr] lg:items-start">
        <form className="glass-card rounded-[2rem] border border-white/60 p-5 sm:p-8">
          <div className="mb-6">
            <p className="text-sm font-bold uppercase tracking-[0.22em] text-secondary">
              Contact form
            </p>
            <h2 className="mt-2 text-3xl font-extrabold tracking-tight">
              Send a clear message
            </h2>
            <p className="mt-2 text-sm text-on-surface-variant">
              This form is ready for wiring to your backend or feedback workflow.
            </p>
          </div>

          <div className="grid gap-4 md:grid-cols-2">
            <label className="space-y-2">
              <span className="label">Full name</span>
              <input
                className="input-no-icon"
                name="name"
                placeholder="Your name"
                type="text"
              />
            </label>

            <label className="space-y-2">
              <span className="label">Email address</span>
              <input
                className="input-no-icon"
                name="email"
                placeholder="you@brainhub.com"
                type="email"
              />
            </label>

            <label className="space-y-2 md:col-span-2">
              <span className="label">Topic</span>
              <select className="input-no-icon" name="topic" defaultValue="">
                <option value="" disabled>
                  Choose a topic
                </option>
                <option value="support">Learning support</option>
                <option value="teams">Team onboarding</option>
                <option value="billing">Billing or checkout</option>
                <option value="feedback">Product feedback</option>
              </select>
            </label>

            <label className="space-y-2 md:col-span-2">
              <span className="label">Message</span>
              <textarea
                className="input-no-icon min-h-36 resize-y"
                name="message"
                placeholder="Tell us what you need help with..."
              />
            </label>
          </div>

          <button
            type="submit"
            className="btn btn-primary mt-5 w-full gap-2 rounded-2xl px-6 py-3 sm:w-auto"
          >
            Send message
            <Send className="h-4 w-4" />
          </button>
        </form>

        <aside className="space-y-4">
          <div className="glass-card rounded-[2rem] border border-white/60 p-5 sm:p-6">
            <div className="flex items-start gap-4">
              <span className="flex h-12 w-12 shrink-0 items-center justify-center rounded-2xl bg-secondary/10 text-secondary">
                <MapPin className="h-5 w-5" />
              </span>
              <div>
                <p className="text-sm font-bold uppercase tracking-[0.18em] text-secondary">
                  Remote first
                </p>
                <h2 className="mt-2 text-2xl font-bold">Built from anywhere</h2>
                <p className="mt-2 text-sm leading-relaxed text-on-surface-variant">
                  BrainHub supports learners and teams online. Share your
                  timezone in the message if you want help scheduling a call.
                </p>
              </div>
            </div>
          </div>

          <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-1">
            {quickNotes.map((note) => {
              const Icon = note.icon;

              return (
                <div
                  key={note.title}
                  className="glass-card rounded-3xl border border-white/60 p-5"
                >
                  <Icon className="h-6 w-6 text-primary" />
                  <h3 className="mt-4 font-bold">{note.title}</h3>
                  <p className="mt-2 text-sm leading-relaxed text-on-surface-variant">
                    {note.description}
                  </p>
                </div>
              );
            })}
          </div>
        </aside>
      </section>
    </main>
  );
}
