import { useEffect } from "react";
import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { Heart, Brain, Bone, Stethoscope, Clock, Users, Award, ShieldCheck } from "lucide-react";
import heroImage from "@/assets/hero-hospital.jpg";

const services = [
  { icon: Heart, title: "Cardiology", desc: "Advanced cardiac care with state-of-the-art diagnostics and treatments." },
  { icon: Brain, title: "Neurology", desc: "Comprehensive neurological services for brain and nervous system conditions." },
  { icon: Bone, title: "Orthopedics", desc: "Expert musculoskeletal care from joint replacement to sports medicine." },
  { icon: Stethoscope, title: "Primary Care", desc: "Personalized preventive care and wellness for the whole family." },
];

const stats = [
  { icon: Clock, value: "24/7", label: "Emergency Care" },
  { icon: Users, value: "200+", label: "Expert Doctors" },
  { icon: Award, value: "40+", label: "Years of Excellence" },
  { icon: ShieldCheck, value: "98%", label: "Patient Satisfaction" },
];

export default function Index() {
  useEffect(() => { document.title = "MediCare Hospital — World-Class Healthcare"; }, []);
  return (
    <main>
      <section className="relative overflow-hidden bg-gradient-to-br from-hero-gradient-start to-hero-gradient-end">
        <img src={heroImage} alt="MediCare Hospital building" width={1920} height={1080} className="absolute inset-0 h-full w-full object-cover opacity-20" />
        <div className="relative mx-auto max-w-7xl px-4 py-24 sm:px-6 sm:py-32 lg:px-8 lg:py-40">
          <div className="max-w-2xl">
            <p className="mb-3 text-sm font-semibold uppercase tracking-widest text-accent-warm">Trusted Healthcare Since 1985</p>
            <h1 className="font-heading text-4xl font-extrabold leading-tight tracking-tight text-white sm:text-5xl lg:text-6xl">Your Health,<br />Our Priority</h1>
            <p className="mt-6 text-lg leading-relaxed text-white/80 sm:text-xl">Compassionate, world-class medical care delivered by over 200 specialists using cutting-edge technology — because your wellbeing deserves nothing less.</p>
            <div className="mt-10 flex flex-wrap gap-4">
              <Link to="/contact"><Button variant="hero" size="xl">Book Appointment</Button></Link>
              <Link to="/services"><Button variant="hero-outline" size="xl">Our Services</Button></Link>
            </div>
          </div>
        </div>
      </section>

      <section className="relative z-10 mx-auto -mt-16 max-w-5xl px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-2 gap-4 rounded-2xl bg-white p-6 shadow-xl sm:p-8 lg:grid-cols-4">
          {stats.map((stat) => (
            <div key={stat.label} className="flex flex-col items-center text-center">
              <stat.icon className="mb-2 h-6 w-6 text-secondary" />
              <span className="font-heading text-2xl font-bold text-foreground sm:text-3xl">{stat.value}</span>
              <span className="mt-1 text-xs font-medium text-muted-foreground">{stat.label}</span>
            </div>
          ))}
        </div>
      </section>

      <section className="mx-auto max-w-7xl px-4 py-24 sm:px-6 lg:px-8">
        <div className="text-center">
          <p className="text-sm font-semibold uppercase tracking-widest text-secondary">What We Offer</p>
          <h2 className="mt-2 font-heading text-3xl font-bold text-foreground sm:text-4xl">Our Medical Services</h2>
          <p className="mx-auto mt-4 max-w-2xl text-muted-foreground">From emergency care to specialized treatments, our team of experts is here to provide comprehensive healthcare solutions tailored to your needs.</p>
        </div>
        <div className="mt-14 grid gap-8 sm:grid-cols-2 lg:grid-cols-4">
          {services.map((svc) => (
            <div key={svc.title} className="group rounded-xl border border-border bg-card p-6 transition-all hover:shadow-lg hover:-translate-y-1">
              <div className="mb-4 flex h-12 w-12 items-center justify-center rounded-lg bg-secondary/10">
                <svc.icon className="h-6 w-6 text-secondary" />
              </div>
              <h3 className="font-heading text-lg font-semibold text-card-foreground">{svc.title}</h3>
              <p className="mt-2 text-sm leading-relaxed text-muted-foreground">{svc.desc}</p>
            </div>
          ))}
        </div>
        <div className="mt-12 text-center">
          <Link to="/services"><Button variant="outline" size="lg">View All Services</Button></Link>
        </div>
      </section>

      <section className="bg-surface">
        <div className="mx-auto max-w-7xl px-4 py-24 text-center sm:px-6 lg:px-8">
          <h2 className="font-heading text-3xl font-bold text-surface-foreground sm:text-4xl">Ready to Take the Next Step?</h2>
          <p className="mx-auto mt-4 max-w-xl text-muted-foreground">Schedule an appointment with one of our specialists today and experience healthcare that puts you first.</p>
          <div className="mt-8"><Link to="/contact"><Button size="xl">Book an Appointment</Button></Link></div>
        </div>
      </section>
    </main>
  );
}