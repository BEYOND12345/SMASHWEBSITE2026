/** Value-led quotes for homepage + iOS landing testimonial bands. */
export type ProductTestimonial = {
  quote: string;
  name: string;
  trade: string;
  city: string;
};

export const VALUE_TESTIMONIALS: ProductTestimonial[] = [
  {
    quote: 'Surprised how this actually works.',
    name: 'Marcus W.',
    trade: 'Electrician',
    city: 'Brisbane',
  },
  {
    quote: "This doesn't estimate — it uses my exact prices.",
    name: 'Priya K.',
    trade: 'Cleaner',
    city: 'Melbourne',
  },
  {
    quote: 'I uploaded my details once. It understands exactly what I need.',
    name: 'Tom H.',
    trade: 'Plumber',
    city: 'Perth',
  },
  {
    quote: "I can literally send an invoice while I'm working now.",
    name: 'Jake T.',
    trade: 'Handyman',
    city: 'Sydney',
  },
  {
    quote: 'I now just talk. No more typing.',
    name: 'Dave R.',
    trade: 'Plumber',
    city: 'Byron Bay',
  },
];

export const FEATURED_VALUE_TESTIMONIAL: ProductTestimonial = {
  quote: 'This is a genuine time-saver.',
  name: 'Sam O.',
  trade: 'Gardener',
  city: 'Auckland',
};
