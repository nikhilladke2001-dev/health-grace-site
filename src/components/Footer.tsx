import { Link } from "@tanstack/react-router";
import { Phone, Mail, MapPin } from "lucide-react";

export function Footer() {
  return (
    <footer className="bg-primary text-primary-foreground">
      <div className="mx-auto max-w-7xl px-4 py-16 sm:px-6 lg:px-8">
        <div className="grid gap-10 sm:grid-cols-2 lg:grid-cols-4">
          <div>
            <div className="flex items-center gap-2 mb-4">
              <div className="flex h-9 w-9 items-center justify-center rounded-lg bg-white/20">
                <span className="text-lg font-bold">M</span>
              </div>
              <div className="flex flex-col leading-tight">
                <span className="font-heading text-base font-bold tracking-tight">MediCare</span>
                <span className="text-[10px] font-medium tracking-widest uppercase opacity-70">Hospital</span>
              </div>
            </div>
            <p className="text-sm leading-relaxed opacity-80">
              Providing compassionate, world-class healthcare to our community since 1985.
            </p>
          </div>

          <div>
            <h4 className="font-heading text-sm font-semibold uppercase tracking-wider mb-4">Quick Links</h4>
            <ul className="space-y-2 text-sm opacity-80">
              <li><Link to="/about" className="hover:opacity-100 transition-opacity">About Us</Link></li>
              <li><Link to="/services" className="hover:opacity-100 transition-opacity">Our Services</Link></li>
              <li><Link to="/contact" className="hover:opacity-100 transition-opacity">Contact</Link></li>
            </ul>
          </div>

          <div>
            <h4 className="font-heading text-sm font-semibold uppercase tracking-wider mb-4">Services</h4>
            <ul className="space-y-2 text-sm opacity-80">
              <li>Emergency Care</li>
              <li>Cardiology</li>
              <li>Neurology</li>
              <li>Orthopedics</li>
            </ul>
          </div>

          <div>
            <h4 className="font-heading text-sm font-semibold uppercase tracking-wider mb-4">Contact Info</h4>
            <ul className="space-y-3 text-sm opacity-80">
              <li className="flex items-start gap-2">
                <MapPin className="h-4 w-4 mt-0.5 shrink-0" />
                123 Medical Center Drive, Suite 100, New York, NY 10001
              </li>
              <li className="flex items-center gap-2">
                <Phone className="h-4 w-4 shrink-0" />
                (123) 456-7890
              </li>
              <li className="flex items-center gap-2">
                <Mail className="h-4 w-4 shrink-0" />
                info@medicare-hospital.com
              </li>
            </ul>
          </div>
        </div>

        <div className="mt-12 border-t border-white/20 pt-8 text-center text-sm opacity-60">
          © {new Date().getFullYear()} MediCare Hospital. All rights reserved.
        </div>
      </div>
    </footer>
  );
}