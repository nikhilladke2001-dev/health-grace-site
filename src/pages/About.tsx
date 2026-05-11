import { useEffect } from "react";
import teamImage from "@/assets/medical-team.jpg";
import { CheckCircle } from "lucide-react";

const values = [
  { title: "Patient-Centered Care", desc: "Every decision we make starts with what's best for our patients." },
  { title: "Clinical Excellence", desc: "Our physicians are leaders in their fields, trained at top institutions worldwide." },
  { title: "Innovation", desc: "We invest in cutting-edge technology to deliver the most advanced treatments available." },
  { title: "Compassion", desc: "We treat every patient with dignity, empathy, and respect." },
];

export default function About() {
  useEffect(() => { document.title = "About Us — MediCare Hospital"; }, []);
  return (
    <main>
      <section className="bg-gradient-to-br from-hero-gradient-start to-hero-gradient-end py-20">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <p className="text-sm font-semibold uppercase tracking-widest text-accent-warm">About Us</p>
          <h1 className="mt-2 font-heading text-4xl font-extrabold text-white sm:text-5xl">A Legacy of Healing</h1>
          <p className="mt-4 max-w-2xl text-lg text-white/80">For over four decades, MediCare Hospital has been a beacon of hope and health for our community.</p>
        </div>
      </section>

      <section className="mx-auto max-w-7xl px-4 py-24 sm:px-6 lg:px-8">
        <div className="grid items-center gap-12 lg:grid-cols-2">
          <div>
            <h2 className="font-heading text-3xl font-bold text-foreground">Our Story</h2>
            <p className="mt-4 leading-relaxed text-muted-foreground">Founded in 1985, MediCare Hospital began as a small community clinic with a mission to provide accessible, high-quality healthcare. Over the years, we've grown into a world-class medical center with over 200 physicians, 50 specialties, and a reputation for clinical excellence.</p>
            <p className="mt-4 leading-relaxed text-muted-foreground">Today, we serve hundreds of thousands of patients annually, combining advanced medical technology with the compassionate, personalized care that has defined us from day one.</p>
          </div>
          <div className="overflow-hidden rounded-2xl shadow-lg">
            <img src={teamImage} alt="MediCare medical team" width={1024} height={1024} loading="lazy" className="h-full w-full object-cover" />
          </div>
        </div>
      </section>

      <section className="bg-surface py-24">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <p className="text-sm font-semibold uppercase tracking-widest text-secondary">What Guides Us</p>
            <h2 className="mt-2 font-heading text-3xl font-bold text-foreground sm:text-4xl">Our Core Values</h2>
          </div>
          <div className="mt-14 grid gap-8 sm:grid-cols-2">
            {values.map((v) => (
              <div key={v.title} className="flex gap-4 rounded-xl bg-white p-6 shadow-sm">
                <CheckCircle className="mt-0.5 h-6 w-6 shrink-0 text-secondary" />
                <div>
                  <h3 className="font-heading text-lg font-semibold text-foreground">{v.title}</h3>
                  <p className="mt-1 text-sm text-muted-foreground">{v.desc}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>
    </main>
  );
}