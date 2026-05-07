import { createFileRoute } from "@tanstack/react-router";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Label } from "@/components/ui/label";
import { Phone, Mail, MapPin, Clock } from "lucide-react";

export const Route = createFileRoute("/contact")({
  head: () => ({
    meta: [
      { title: "Contact Us — MediCare Hospital" },
      { name: "description", content: "Get in touch with MediCare Hospital. Book an appointment, ask questions, or find our location." },
      { property: "og:title", content: "Contact Us — MediCare Hospital" },
      { property: "og:description", content: "Book an appointment or get in touch with our team." },
    ],
  }),
  component: ContactPage,
});

const contactInfo = [
  { icon: Phone, label: "Phone", value: "(123) 456-7890", href: "tel:+1234567890" },
  { icon: Mail, label: "Email", value: "info@medicare-hospital.com", href: "mailto:info@medicare-hospital.com" },
  { icon: MapPin, label: "Address", value: "123 Medical Center Drive, Suite 100, New York, NY 10001" },
  { icon: Clock, label: "Hours", value: "Emergency: 24/7 · Outpatient: Mon–Fri 8am–6pm" },
];

function ContactPage() {
  return (
    <main>
      <section className="bg-gradient-to-br from-hero-gradient-start to-hero-gradient-end py-20">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <p className="text-sm font-semibold uppercase tracking-widest text-accent-warm">Contact</p>
          <h1 className="mt-2 font-heading text-4xl font-extrabold text-white sm:text-5xl">
            Get in Touch
          </h1>
          <p className="mt-4 max-w-2xl text-lg text-white/80">
            We're here to help. Reach out for appointments, questions, or directions.
          </p>
        </div>
      </section>

      <section className="mx-auto max-w-7xl px-4 py-24 sm:px-6 lg:px-8">
        <div className="grid gap-16 lg:grid-cols-2">
          {/* Contact Info */}
          <div>
            <h2 className="font-heading text-2xl font-bold text-foreground">Contact Information</h2>
            <p className="mt-2 text-muted-foreground">
              Our patient services team is ready to assist you.
            </p>
            <div className="mt-8 space-y-6">
              {contactInfo.map((item) => (
                <div key={item.label} className="flex gap-4">
                  <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-lg bg-secondary/10">
                    <item.icon className="h-5 w-5 text-secondary" />
                  </div>
                  <div>
                    <p className="text-sm font-semibold text-foreground">{item.label}</p>
                    {item.href ? (
                      <a href={item.href} className="text-sm text-muted-foreground hover:text-secondary transition-colors">
                        {item.value}
                      </a>
                    ) : (
                      <p className="text-sm text-muted-foreground">{item.value}</p>
                    )}
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Contact Form */}
          <div className="rounded-2xl border border-border bg-card p-8 shadow-sm">
            <h2 className="font-heading text-2xl font-bold text-card-foreground">Send Us a Message</h2>
            <p className="mt-1 text-sm text-muted-foreground">
              Fill out the form and we'll get back to you within 24 hours.
            </p>
            <form
              className="mt-6 space-y-5"
              onSubmit={(e) => {
                e.preventDefault();
                alert("Thank you! We'll be in touch shortly.");
              }}
            >
              <div className="grid gap-5 sm:grid-cols-2">
                <div className="space-y-2">
                  <Label htmlFor="firstName">First Name</Label>
                  <Input id="firstName" placeholder="John" required />
                </div>
                <div className="space-y-2">
                  <Label htmlFor="lastName">Last Name</Label>
                  <Input id="lastName" placeholder="Doe" required />
                </div>
              </div>
              <div className="space-y-2">
                <Label htmlFor="email">Email</Label>
                <Input id="email" type="email" placeholder="john@example.com" required />
              </div>
              <div className="space-y-2">
                <Label htmlFor="phone">Phone</Label>
                <Input id="phone" type="tel" placeholder="(123) 456-7890" />
              </div>
              <div className="space-y-2">
                <Label htmlFor="message">Message</Label>
                <Textarea id="message" rows={4} placeholder="How can we help you?" required />
              </div>
              <Button type="submit" size="lg" className="w-full">
                Send Message
              </Button>
            </form>
          </div>
        </div>
      </section>
    </main>
  );
}