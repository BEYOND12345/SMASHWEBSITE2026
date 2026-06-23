/**
 * GRP-007 phase 2 — trade invoicing content merged into /invoice-template hub.
 * Former blog survivors (now 301 → hub) are inlined here with anchor IDs.
 */
export type TradeInvoicingGuide = {
  id: string;
  label: string;
  keyword: string;
  summary: string;
  mustInclude: string[];
  lineItems: string[];
  tip?: string;
};

export const invoiceTemplateTradeGuides: TradeInvoicingGuide[] = [
  {
    id: 'electrician',
    label: 'Electrician invoicing',
    keyword: 'how to invoice as an electrician australia',
    summary:
      'Australian electrician tax invoices need your ABN, electrical contractor licence number, itemised labour and materials, GST breakdown, and payment terms. Most sparkies lose margin on cable, conduit, GPOs, and fittings absorbed into flat labour rates.',
    mustInclude: [
      'Business name, ABN, and state licence number (REC in VIC, contractor licence in NSW/QLD)',
      'Invoice number, date, and customer details',
      'Labour hours × rate or flat job rate',
      'Materials itemised separately — cable, conduit, clips, GPOs, junction boxes',
      'Travel, after-hours, and certificate of compliance fees where applicable',
    ],
    lineItems: [
      'Labour — e.g. 2.5 hrs @ $95/hr',
      'TPS cable — metres × unit price',
      'GPO, wall plate, conduit, clips',
      'Call-out or after-hours surcharge',
      'Certificate of compliance (if billed separately)',
    ],
    tip: 'Itemise cable by the metre — a single power point run often has $70–$110 in materials alone.',
  },
  {
    id: 'sole-trader',
    label: 'Sole trader invoicing',
    keyword: 'how to invoice as a sole trader australia',
    summary:
      'Every sole trader invoice in Australia needs your ABN, business name, unique invoice number, date, description of services, total, and GST if registered. Missing any field slows payment and weakens debt recovery.',
    mustInclude: [
      'ABN (mandatory for tax invoices over $82.50)',
      'Business or trading name',
      'Sequential invoice number and invoice date',
      'Description of goods or services supplied',
      'Subtotal, GST amount (or GST-inclusive statement), and total',
      'Payment terms and preferred payment method',
    ],
    lineItems: [
      'Labour or service fee',
      'Materials or parts (itemised)',
      'Travel or call-out fee',
      'GST (10%) shown separately if registered',
    ],
    tip: 'Use sequential invoice numbers from day one — gaps look unprofessional to accountants and insurers.',
  },
  {
    id: 'appliance-repair',
    label: 'Appliance repair callouts',
    keyword: 'appliance repair callout invoice',
    summary:
      'Appliance repair invoices should separate diagnostic fees, labour, parts with markup, and after-hours surcharges. Commercial clients often need PO numbers and site references on every line.',
    mustInclude: [
      'Call-out or diagnostic fee (even if repair not completed)',
      'Labour — on-site time or flat repair rate',
      'Parts with quantity, model number, and markup',
      'After-hours or weekend multiplier where quoted upfront',
      'Warranty note on parts and labour',
    ],
    lineItems: [
      'Diagnostic / call-out fee',
      'Labour — 1 hr repair @ hourly rate',
      'Replacement part — model, qty, unit price',
      'After-hours surcharge (if applicable)',
    ],
    tip: 'Quote diagnostic-only upfront — customers dispute less when the fee is on the invoice before you open the machine.',
  },
  {
    id: 'locksmith',
    label: 'Emergency locksmith call-outs',
    keyword: 'emergency locksmith invoice after-hours',
    summary:
      'Emergency locksmith invoices need transparent after-hours rates, call-out fees, and same-night payment options. Show the rate structure before work starts to avoid chargebacks.',
    mustInclude: [
      'Standard vs after-hours rate clearly labelled',
      'Call-out fee separate from labour',
      'Lock hardware, cylinders, and key cutting itemised',
      'Travel distance or zone fee if applicable',
      'Payment link for same-night collection',
    ],
    lineItems: [
      'After-hours call-out fee',
      'Labour — lockout / rekey @ rate',
      'Lock cylinder or hardware supplied',
      'Key cutting — qty × price',
    ],
    tip: 'Send the invoice with a Pay Now link before you leave — same-night payment drops disputes by half.',
  },
  {
    id: 'pool-maintenance',
    label: 'Pool maintenance',
    keyword: 'how to invoice pool maintenance australia',
    summary:
      'Pool technicians lose margin when chemical costs are buried in flat service fees. Invoice chemicals by quantity — chlorine, acid, algaecide — plus labour and equipment checks separately.',
    mustInclude: [
      'Service visit labour or monthly plan rate',
      'Chemicals itemised by product and quantity',
      'Equipment checks (pump, filter, salt cell) as line items',
      'Green pool or one-off treatment surcharge',
      'GST and payment terms',
    ],
    lineItems: [
      'Monthly service / visit labour',
      'Liquid chlorine — litres × price',
      'Acid / buffer / algaecide — qty × price',
      'Filter clean or cartridge replacement',
    ],
    tip: 'Chemical prices move every month — itemising protects margin when supplier costs spike.',
  },
  {
    id: 'pest-control',
    label: 'Quarterly pest treatments',
    keyword: 'how to invoice quarterly pest control treatments',
    summary:
      'Recurring pest control needs consistent invoice format across quarterly visits — treatment type, chemical notes, property address, and next service date on every bill.',
    mustInclude: [
      'Property address and treatment date',
      'Treatment type (general, termite, rodent, etc.)',
      'Chemical or method notes for compliance',
      'Quarterly or annual contract reference',
      'Next scheduled service date',
    ],
    lineItems: [
      'Quarterly general pest treatment',
      'Rodent bait station service',
      'Termite inspection (annual)',
      'Commercial site — per-unit or per-m² rate',
    ],
    tip: 'Copy the same line structure every quarter — property managers approve faster when format never changes.',
  },
  {
    id: 'tiling',
    label: 'Tiling labour and materials',
    keyword: 'tiling labour and materials invoice',
    summary:
      'Tiling invoices should split floor, wall, and waterproofing by area (m²), plus adhesive, grout, trim, and strip-and-dispose as separate lines. Supply-and-install vs labour-only must be clear.',
    mustInclude: [
      'Floor / wall / outdoor areas in m² × rate',
      'Waterproofing membrane (wet areas)',
      'Adhesive, grout, trim, and consumables',
      'Strip-out and disposal if applicable',
      'GST on materials and labour',
    ],
    lineItems: [
      'Floor tiles — m² × supply-and-install rate',
      'Wall tiles — m² × rate',
      'Waterproofing — m² or lump sum',
      'Strip existing tiles and disposal',
    ],
    tip: 'Never bundle adhesive and grout into labour — material-heavy jobs need visible margin on tiles and consumables.',
  },
  {
    id: 'commercial-cleaning',
    label: 'Commercial cleaning clients',
    keyword: 'how to invoice commercial cleaning clients',
    summary:
      'Commercial cleaning invoices need site address, service period, scope of work, PO number, and line items accounts teams can approve without calling back.',
    mustInclude: [
      'Site address and service period (e.g. March 2026)',
      'Scope — offices, bathrooms, kitchens, windows',
      'PO or cost centre number when required',
      'Hourly or per-visit rate with GST',
      'Payment terms (often 14–30 days for strata and FM companies)',
    ],
    lineItems: [
      'Weekly office clean — visit rate',
      'Deep clean / end-of-lease (hours × rate)',
      'Consumables or equipment hire',
      'After-hours or weekend surcharge',
    ],
    tip: 'Match the PO format exactly — one wrong reference delays payment 30+ days with corporate clients.',
  },
  {
    id: 'concrete',
    label: 'Concrete progress claims',
    keyword: 'concrete progress claim invoice',
    summary:
      'Large concrete jobs need deposit, progress, and final claim invoices tied to milestones — excavation, pour, finish — with cubic metres and reinforcement itemised.',
    mustInclude: [
      'Contract or quote reference number',
      'Milestone description (deposit, slab pour, final)',
      'Cubic metres × rate where applicable',
      'Reinforcement, pump hire, and finish as separate lines',
      'Retention or holdback note if applicable',
    ],
    lineItems: [
      'Deposit — 30% on acceptance',
      'Progress claim — slab pour (m³ × rate)',
      'Pump hire and reinforcement',
      'Final claim — balance on completion',
    ],
    tip: 'Invoice each pour before the next stage starts — cashflow dies when progress claims slip a week.',
  },
  {
    id: 'painting',
    label: 'Multi-day painting jobs',
    keyword: 'how to invoice multi-day painting jobs',
    summary:
      'Multi-day painting jobs need stage-based line items — prep, prime, coats, trim — plus paint quantities and colour codes. Progress invoicing protects cashflow on week-long repaints.',
    mustInclude: [
      'Prep — wash, sand, fill, mask (hours or lump sum)',
      'Primer and top coats by area or room',
      'Paint product and colour code on materials lines',
      'Materials markup separate from labour',
      'Progress invoice schedule for jobs over 3 days',
    ],
    lineItems: [
      'Prep and masking — labour hours',
      'Walls — 2 coats @ m² or room rate',
      'Ceilings and trim — separate lines',
      'Paint and consumables — qty × price',
    ],
    tip: 'Invoice prep day before coats start — clients accept progress billing when each stage is named on the quote.',
  },
  {
    id: 'switchboard',
    label: 'Switchboard upgrades',
    keyword: 'how to invoice switchboard upgrades',
    summary:
      'Switchboard upgrade invoices itemise labour, new board, RCDs, breakers, testing, and compliance certificate. Link to the approved quote so the customer sees the same scope.',
    mustInclude: [
      'Electrical contractor licence and ABN',
      'Labour — removal, install, testing hours',
      'Switchboard, RCDs, and breakers itemised',
      'Testing and compliance certificate line',
      'Quote reference and approval date',
    ],
    lineItems: [
      'Labour — switchboard upgrade (hours × rate)',
      'Main switchboard / MSB unit',
      'RCD and circuit breakers — qty × price',
      'Testing, labelling, and compliance certificate',
    ],
    tip: 'Attach the approved quote PDF — switchboard jobs get queried when line totals differ from the estimate.',
  },
];

/** Blog slugs merged in GRP-007 phase 2 → hub anchor */
export const TEMPLATE_HUB_MERGED_SLUGS: Record<string, string> = {
  'how-to-invoice-as-an-electrician-australia': 'electrician',
  'how-to-invoice-as-a-sole-trader-australia-complete-guide': 'sole-trader',
  'how-to-invoice-appliance-repair-callouts': 'appliance-repair',
  'how-to-invoice-emergency-locksmith-call-outs': 'locksmith',
  'how-to-invoice-pool-maintenance-australia': 'pool-maintenance',
  'how-to-invoice-quarterly-pest-treatments': 'pest-control',
  'how-to-invoice-tiling-labour-and-materials': 'tiling',
  'how-to-invoice-commercial-cleaning-clients': 'commercial-cleaning',
  'how-to-invoice-concrete-progress-claims': 'concrete',
  'how-to-invoice-multi-day-painting-jobs': 'painting',
  'how-to-invoice-switchboard-upgrades': 'switchboard',
};

export function hubAnchorHref(anchorId: string): string {
  return `/invoice-template#${anchorId}`;
}
