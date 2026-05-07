import { createFileRoute } from "@tanstack/react-router";
import { Link } from "@tanstack/react-router";
import { Button } from "@/components/ui/button";
import {
  Heart, Brain, Bone, Stethoscope, Baby, Eye, Pill, Activity,
} from "lucide-react";

export const Route = createFileRoute("/services")({
  head: () => ({
    meta: [
      { title: "Our Services — MediCare Hospital" },
      { name: "description", content: "Explore our comprehensive medical services including cardiology, neurology, orthopedics, pediatrics and more." },
      { property: "og:title", content: "Our Services — MediCare Hospital" },
      { property: "og:description", content: "Comprehensive medical services for the whole family." },
    ],
  }),
  component: ServicesPage,
});

const departments = [
  { icon: Heart, name: "Cardiology", desc: "Heart disease prevention, diagnosis, and treatment with advanced cardiac catheterization and imaging." },
  { icon: Brain, name: "Neurology", desc: "Expert care for neurological conditions including stroke, epilepsy, and neurodegenerative diseases." },
  { icon: Bone, name: "Orthopedics", desc: "Joint replacement, sports medicine, spine surgery, and rehabilitation services." },
  { icon: Stethoscope, name: "Internal Medicine", desc: "Comprehensive adult primary care, chronic disease management, and preventive health." },
  { icon: Baby, name: "Pediatrics", desc: "Complete pediatric care from newborn to adolescence with specialized sub-specialties." },
  { icon: Eye, name: "Ophthalmology", desc: "Vision care including cataract surgery, LASIK, glaucoma treatment, and retinal services." },
  { icon: Pill, name: "Oncology", desc: "Multidisciplinary cancer care with chemotherapy, radiation, and immunotherapy programs." },
  { icon: Activity, name: "Emergency Medicine", desc: "24/7 emergency department staffed by board-certified emergency physicians." },
];

function ServicesPage() {
  return (
    <main>
      <section className="bg-gradient-to-br from-hero-gradient-start to-hero-gradient-end py-20">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <p className="text-sm font-semibold uppercase tracking-widest text-accent-warm">Services</p>
          <h1 className="mt-2 font-heading text-4xl font-extrabold text-white sm:text-5xl">
            Comprehensive Care
          </h1>
          <p className="mt-4 max-w-2xl text-lg text-white/80">
            Over 50 medical specialties under one roof, all working together to provide
            seamless, coordinated care.
          </p>
        </div>
      </section>

      <section className="mx-auto max-w-7xl px-4 py-24 sm:px-6 lg:px-8">
        <div className="grid gap-8 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4">
          {departments.map((dept) => (
            <div
              key={dept.name}
              className="group rounded-xl border border-border bg-card p-6 transition-all hover:shadow-lg hover:-translate-y-1"
            >
              <div className="mb-4 flex h-12 w-12 items-center justify-center rounded-lg bg-secondary/10">
                <dept.icon className="h-6 w-6 text-secondary" />
              </div>
              <h3 className="font-heading text-lg font-semibold text-card-foreground">{dept.name}</h3>
              <p className="mt-2 text-sm leading-relaxed text-muted-foreground">{dept.desc}</p>
            </div>
          ))}
        </div>

        <div className="mt-20 rounded-2xl bg-surface p-10 text-center sm:p-14">
          <h2 className="font-heading text-2xl font-bold text-foreground sm:text-3xl">
            Can't find what you're looking for?
          </h2>
          <p className="mx-auto mt-3 max-w-lg text-muted-foreground">
            We offer over 50 specialties. Contact us and our patient navigators will
            connect you with the right department.
          </p>
          <div className="mt-6">
            <Link to="/contact">
              <Button size="lg">Contact Us</Button>
            </Link>
          </div>
        </div>
      </section>
    </main>
  );
}