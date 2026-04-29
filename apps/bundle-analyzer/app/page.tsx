import React from "react";
import { motion } from "framer-motion";
import { Phone, Snowflake, Sun, Flame, ShieldCheck, Clock, MapPin, Star, Wrench, CalendarCheck, ChevronRight } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";

export default function TMBWebsite() {
  const services = [
    { icon: Flame, title: "Heating Repair", text: "Fast furnace and boiler troubleshooting, repairs, and replacement options." },
    { icon: Snowflake, title: "AC Service", text: "Air conditioning diagnostics, maintenance, refrigerant checks, and repairs." },
    { icon: Wrench, title: "Installations", text: "Professional furnace, AC, water heater, and HVAC system installations." },
    { icon: CalendarCheck, title: "Maintenance Plans", text: "Seasonal tune-ups designed to improve reliability, comfort, and efficiency." },
  ];

  const areas = ["Buffalo", "Tonawanda", "North Tonawanda", "Amherst", "Cheektowaga", "Williamsville", "Kenmore", "Niagara Falls", "Lockport", "Grand Island"];

  return (
    <main className="min-h-screen bg-slate-950 text-white">
      <section className="relative overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-br from-slate-950 via-slate-900 to-blue-950" />
        <div className="absolute -right-24 -top-24 h-80 w-80 rounded-full bg-orange-400/20 blur-3xl" />
        <div className="absolute -left-24 bottom-0 h-80 w-80 rounded-full bg-blue-400/20 blur-3xl" />

        <nav className="relative z-10 mx-auto flex max-w-7xl items-center justify-between px-6 py-5">
          <div className="flex items-center gap-3">
            <div className="flex h-12 w-12 items-center justify-center rounded-2xl bg-white text-slate-950 shadow-lg">
              <span className="text-lg font-black">TMB</span>
            </div>
            <div>
              <p className="text-lg font-bold tracking-tight">TMB Heating & Cooling</p>
              <p className="text-xs text-slate-300">Temperature Made Better</p>
            </div>
          </div>
          <div className="hidden items-center gap-8 text-sm text-slate-200 md:flex">
            <a href="#services" className="hover:text-white">Services</a>
            <a href="#plans" className="hover:text-white">Maintenance</a>
            <a href="#areas" className="hover:text-white">Service Area</a>
            <a href="#contact" className="hover:text-white">Contact</a>
          </div>
          <Button className="rounded-2xl bg-orange-500 px-5 py-6 text-white hover:bg-orange-600">
            <Phone className="mr-2 h-4 w-4" /> Call Now
          </Button>
        </nav>

        <div className="relative z-10 mx-auto grid max-w-7xl items-center gap-12 px-6 pb-24 pt-12 md:grid-cols-2 md:pt-20">
          <motion.div initial={{ opacity: 0, y: 16 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.6 }}>
            <div className="mb-6 inline-flex items-center gap-2 rounded-full border border-white/15 bg-white/10 px-4 py-2 text-sm text-slate-100 backdrop-blur">
              <Clock className="h-4 w-4 text-orange-300" /> 24-Hour Emergency Service Available
            </div>
            <h1 className="max-w-2xl text-5xl font-black leading-tight tracking-tight md:text-7xl">
              Reliable HVAC service for Western New York homes.
            </h1>
            <p className="mt-6 max-w-xl text-lg leading-8 text-slate-300">
              Heating, cooling, maintenance, and installation services for Erie and Niagara County homeowners — done with honest diagnostics, clean workmanship, and straight answers.
            </p>
            <div className="mt-8 flex flex-col gap-3 sm:flex-row">
              <Button className="rounded-2xl bg-orange-500 px-7 py-6 text-base font-semibold hover:bg-orange-600">
                Schedule Service <ChevronRight className="ml-2 h-4 w-4" />
              </Button>
              <Button variant="outline" className="rounded-2xl border-white/20 bg-white/10 px-7 py-6 text-base font-semibold text-white hover:bg-white/20">
                View Maintenance Plans
              </Button>
            </div>
            <div className="mt-8 flex flex-wrap gap-4 text-sm text-slate-300">
              <span className="flex items-center gap-2"><ShieldCheck className="h-4 w-4 text-green-300" /> Licensed & Insured</span>
              <span className="flex items-center gap-2"><Star className="h-4 w-4 text-yellow-300" /> Local Owner-Operated Service</span>
            </div>
          </motion.div>

          <motion.div initial={{ opacity: 0, scale: 0.96 }} animate={{ opacity: 1, scale: 1 }} transition={{ duration: 0.6, delay: 0.1 }} className="relative">
            <Card className="overflow-hidden rounded-[2rem] border-white/10 bg-white/10 shadow-2xl backdrop-blur">
              <CardContent className="p-0">
                <div className="grid gap-1 bg-slate-900/80 p-5">
                  <div className="flex items-center justify-between rounded-3xl bg-white p-5 text-slate-950">
                    <div>
                      <p className="text-sm font-semibold text-slate-500">Comfort Call</p>
                      <p className="text-2xl font-black">Furnace not keeping up?</p>
                    </div>
                    <Flame className="h-10 w-10 text-orange-500" />
                  </div>
                  <div className="grid grid-cols-2 gap-1">
                    <div className="rounded-3xl bg-blue-500/20 p-5">
                      <Snowflake className="mb-6 h-8 w-8 text-blue-200" />
                      <p className="font-bold">Cooling Repairs</p>
                      <p className="mt-1 text-sm text-slate-300">AC diagnostics and tune-ups.</p>
                    </div>
                    <div className="rounded-3xl bg-orange-500/20 p-5">
                      <Sun className="mb-6 h-8 w-8 text-orange-200" />
                      <p className="font-bold">Seasonal Care</p>
                      <p className="mt-1 text-sm text-slate-300">Maintenance that protects comfort.</p>
                    </div>
                  </div>
                </div>
              </CardContent>
            </Card>
          </motion.div>
        </div>
      </section>

      <section id="services" className="bg-white px-6 py-20 text-slate-950">
        <div className="mx-auto max-w-7xl">
          <div className="mb-12 max-w-3xl">
            <p className="text-sm font-bold uppercase tracking-widest text-orange-600">Services</p>
            <h2 className="mt-3 text-4xl font-black tracking-tight md:text-5xl">Heating and cooling help without the runaround.</h2>
            <p className="mt-4 text-lg leading-8 text-slate-600">From no-heat calls to seasonal maintenance, TMB provides straightforward HVAC service built around comfort, safety, and long-term reliability.</p>
          </div>
          <div className="grid gap-5 md:grid-cols-4">
            {services.map((service) => (
              <Card key={service.title} className="rounded-3xl border-slate-200 shadow-sm transition hover:-translate-y-1 hover:shadow-xl">
                <CardContent className="p-6">
                  <service.icon className="mb-6 h-9 w-9 text-orange-500" />
                  <h3 className="text-xl font-black">{service.title}</h3>
                  <p className="mt-3 text-sm leading-6 text-slate-600">{service.text}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      <section id="plans" className="bg-slate-100 px-6 py-20 text-slate-950">
        <div className="mx-auto grid max-w-7xl gap-10 md:grid-cols-2">
          <div>
            <p className="text-sm font-bold uppercase tracking-widest text-orange-600">Maintenance Plans</p>
            <h2 className="mt-3 text-4xl font-black tracking-tight">Keep your system running when you need it most.</h2>
            <p className="mt-5 text-lg leading-8 text-slate-600">Preventative maintenance helps catch issues early, improve performance, and reduce surprise breakdowns during extreme weather.</p>
          </div>
          <Card className="rounded-[2rem] border-0 shadow-xl">
            <CardContent className="p-8">
              <ul className="space-y-4 text-slate-700">
                {["Spring/Summer AC tune-ups", "Fall/Winter heating safety checks", "Filter, blower, coil, and electrical inspections", "Priority scheduling options", "Clear recommendations before repairs are made"].map((item) => (
                  <li key={item} className="flex gap-3"><ShieldCheck className="mt-1 h-5 w-5 shrink-0 text-green-600" /> {item}</li>
                ))}
              </ul>
            </CardContent>
          </Card>
        </div>
      </section>

      <section id="areas" className="bg-white px-6 py-20 text-slate-950">
        <div className="mx-auto max-w-7xl">
          <div className="mb-8 flex items-center gap-3">
            <MapPin className="h-7 w-7 text-orange-500" />
            <h2 className="text-4xl font-black tracking-tight">Serving Erie & Niagara County</h2>
          </div>
          <div className="flex flex-wrap gap-3">
            {areas.map((area) => (
              <span key={area} className="rounded-full bg-slate-100 px-5 py-3 text-sm font-semibold text-slate-700">{area}</span>
            ))}
          </div>
        </div>
      </section>

      <section id="contact" className="bg-slate-950 px-6 py-20 text-white">
        <div className="mx-auto grid max-w-7xl gap-8 rounded-[2rem] bg-gradient-to-br from-blue-950 to-slate-900 p-8 shadow-2xl md:grid-cols-2 md:p-12">
          <div>
            <p className="text-sm font-bold uppercase tracking-widest text-orange-300">Contact</p>
            <h2 className="mt-3 text-4xl font-black tracking-tight">Need HVAC service?</h2>
            <p className="mt-4 text-lg leading-8 text-slate-300">Call TMB Heating & Cooling for professional service, emergency support, and honest recommendations.</p>
          </div>
          <div className="flex flex-col justify-center gap-4 md:items-end">
            <Button className="w-full rounded-2xl bg-orange-500 px-8 py-7 text-lg font-bold hover:bg-orange-600 md:w-auto">
              <Phone className="mr-2 h-5 w-5" /> Call TMB Heating & Cooling
            </Button>
            <p className="text-sm text-slate-400">Business Hours: Monday–Friday, 7:30 AM–4:00 PM</p>
          </div>
        </div>
      </section>
    </main>
  );
}
