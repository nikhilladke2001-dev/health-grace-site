import { createFileRoute } from "@tanstack/react-router";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Label } from "@/components/ui/label";
import { Phone, Mail, MapPin, Clock, Navigation, CreditCard, Lock } from "lucide-react";
import { useState } from "react";

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
  const [step, setStep] = useState<"details" | "payment">("details");

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
            <div className="mb-6 flex items-center gap-3">
              <div className={`flex h-8 w-8 items-center justify-center rounded-full text-sm font-bold ${step === "details" ? "bg-secondary text-white" : "bg-secondary/20 text-secondary"}`}>1</div>
              <div className="h-0.5 flex-1 bg-border" />
              <div className={`flex h-8 w-8 items-center justify-center rounded-full text-sm font-bold ${step === "payment" ? "bg-secondary text-white" : "bg-secondary/20 text-muted-foreground"}`}>2</div>
            </div>
            {step === "details" ? (
              <>
                <h2 className="font-heading text-2xl font-bold text-card-foreground">Book an Appointment</h2>
                <p className="mt-1 text-sm text-muted-foreground">Fill in your details, then proceed to payment.</p>
                <form className="mt-6 space-y-5" onSubmit={(e) => { e.preventDefault(); setStep("payment"); }}>
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
                    <Label htmlFor="department">Department</Label>
                    <select id="department" className="flex h-9 w-full rounded-md border border-input bg-transparent px-3 py-1 text-sm shadow-sm transition-colors focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-ring" required>
                      <option value="">Select a department</option>
                      <option value="cardiology">Cardiology</option>
                      <option value="neurology">Neurology</option>
                      <option value="orthopedics">Orthopedics</option>
                      <option value="pediatrics">Pediatrics</option>
                      <option value="general">General Consultation</option>
                    </select>
                  </div>
                  <div className="space-y-2">
                    <Label htmlFor="message">Additional Notes</Label>
                    <Textarea id="message" rows={3} placeholder="Describe your symptoms or concerns..." />
                  </div>
                  <Button type="submit" size="lg" className="w-full">Continue to Payment</Button>
                </form>
              </>
            ) : (
              <>
                <h2 className="font-heading text-2xl font-bold text-card-foreground flex items-center gap-2">
                  <CreditCard className="h-6 w-6 text-secondary" /> Payment Details
                </h2>
                <p className="mt-1 text-sm text-muted-foreground">Consultation fee: <span className="font-semibold text-foreground">$150.00</span></p>
                <form className="mt-6 space-y-5" onSubmit={(e) => { e.preventDefault(); alert("Booking confirmed! You will receive a confirmation email shortly."); setStep("details"); }}>
                  <div className="space-y-2">
                    <Label htmlFor="cardName">Name on Card</Label>
                    <Input id="cardName" placeholder="John Doe" required />
                  </div>
                  <div className="space-y-2">
                    <Label htmlFor="cardNumber">Card Number</Label>
                    <Input id="cardNumber" placeholder="1234 5678 9012 3456" maxLength={19} required />
                  </div>
                  <div className="grid gap-5 sm:grid-cols-2">
                    <div className="space-y-2">
                      <Label htmlFor="expiry">Expiry Date</Label>
                      <Input id="expiry" placeholder="MM/YY" maxLength={5} required />
                    </div>
                    <div className="space-y-2">
                      <Label htmlFor="cvv">CVV</Label>
                      <Input id="cvv" placeholder="123" maxLength={4} required />
                    </div>
                  </div>
                  <div className="rounded-lg bg-surface p-4">
                    <div className="flex justify-between text-sm"><span className="text-muted-foreground">Consultation Fee</span><span className="text-foreground font-medium">$150.00</span></div>
                    <div className="mt-2 flex justify-between text-sm"><span className="text-muted-foreground">Service Tax</span><span className="text-foreground font-medium">$12.00</span></div>
                    <div className="mt-3 border-t border-border pt-3 flex justify-between font-semibold"><span>Total</span><span>$162.00</span></div>
                  </div>
                  <div className="flex gap-3">
                    <Button type="button" variant="outline" size="lg" className="flex-1" onClick={() => setStep("details")}>Back</Button>
                    <Button type="submit" size="lg" className="flex-1 gap-2"><Lock className="h-4 w-4" /> Pay & Book</Button>
                  </div>
                  <p className="text-center text-xs text-muted-foreground flex items-center justify-center gap-1"><Lock className="h-3 w-3" /> Your payment information is secure and encrypted</p>
                </form>
              </>
            )}
          </div>
        </div>
      </section>

      {/* Map Section */}
      <section className="bg-surface py-24">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <p className="text-sm font-semibold uppercase tracking-widest text-secondary">Find Us</p>
            <h2 className="mt-2 font-heading text-3xl font-bold text-foreground sm:text-4xl">Our Location</h2>
            <p className="mx-auto mt-3 max-w-lg text-muted-foreground">
              Conveniently located in the heart of New York City with easy access to public transit and parking.
            </p>
          </div>
          <div className="mt-10 overflow-hidden rounded-2xl border border-border shadow-lg">
            <iframe
              title="MediCare Hospital Location"
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3022.9663095343008!2d-74.00425878428698!3d40.74076797932681!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x89c259bf5c1654f3%3A0xc80f9cfce5383d5d!2sGoogle!5e0!3m2!1sen!2sus!4v1635200000000"
              width="100%"
              height="450"
              style={{ border: 0 }}
              allowFullScreen
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
              className="w-full"
            />
          </div>
          <div className="mt-6 flex flex-col items-center gap-4 sm:flex-row sm:justify-center">
            <a
              href="https://www.google.com/maps/dir/?api=1&destination=40.7407679,-74.0042588"
              target="_blank"
              rel="noopener noreferrer"
            >
              <Button variant="outline" size="lg" className="gap-2">
                <Navigation className="h-4 w-4" />
                Get Directions
              </Button>
            </a>
            <p className="text-sm text-muted-foreground">
              123 Medical Center Drive, Suite 100, New York, NY 10001
            </p>
          </div>
        </div>
      </section>
    </main>
  );
}