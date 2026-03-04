// ─── Business constants ───────────────────────────────────────────────────────
export const BUSINESS = {
  name:        "A&M Auto Repairs",
  phone:       "07572631215",
  phoneDisplay:"07572 631215",
  address:     "95 Wright St, Small Heath, Birmingham B10 9SP",
  addressShort:"Small Heath, Birmingham",
  mapsUrl:     "https://maps.app.goo.gl/9hP7uU1zPch5VFFC9",
  tagline:     "Garage · Wash · Café",
};

// ─── Services ─────────────────────────────────────────────────────────────────
export const SERVICES = [
  {
    id:      "workshop",
    title:   "Workshop & Repairs",
    desc:    "Full mechanical repairs, MOTs, diagnostics, welding, brakes and more. All makes and models welcomed.",
    items:   ["Full Car Service","MOT Testing","Engine Diagnostics","Brake & Clutch","Welding & Exhausts","Electrical Repairs"],
    topColor:"border-t-amber-500",
    accent:  "text-amber-500",
    iconBg:  "bg-amber-500/10",
  },
  {
    id:      "wash",
    title:   "Car Wash & Valet",
    desc:    "Professional hand car wash and full valet packages. We'll have your car gleaming inside and out.",
    items:   ["Hand Exterior Wash","Full Interior Valet","Wax & Polish","Alloy Wheel Clean","Engine Bay Clean","Foam Cannon Treatment"],
    topColor:"border-t-sky-500",
    accent:  "text-sky-500",
    iconBg:  "bg-sky-500/10",
  },
  {
    id:      "cafe",
    title:   "Café – Brum Bites",
    desc:    "Freshly cooked breakfasts and hearty lunches while you wait. Proper Brummie food, brewed coffee and cold drinks.",
    items:   ["Full English Breakfast","Bacon & Egg Baps","Hot Paninis & Wraps","Daily Lunch Specials","Fresh Barista Coffee","Soft Drinks & Teas"],
    topColor:"border-t-orange-500",
    accent:  "text-orange-500",
    iconBg:  "bg-orange-500/10",
  },
];

// ─── Pricing ──────────────────────────────────────────────────────────────────
export const PRICES = {
  workshop: [
    { name: "Basic Service",       price: "£79"  },
    { name: "Full Service",        price: "£139" },
    { name: "MOT Test",            price: "£49"  },
    { name: "MOT + Service",       price: "£169" },
    { name: "Diagnostics",         price: "£45"  },
    { name: "Tyre Fitting (each)", price: "£15"  },
  ],
  wash: [
    { name: "Exterior Wash",    price: "£8"   },
    { name: "Wash & Vac",       price: "£15"  },
    { name: "Mini Valet",       price: "£30"  },
    { name: "Full Valet",       price: "£60"  },
    { name: "Premium Detail",   price: "£120" },
    { name: "Engine Bay Clean", price: "£35"  },
  ],
  cafe: [
    { name: "Full English",       price: "£7.50" },
    { name: "Bacon Bap",          price: "£3.50" },
    { name: "Egg & Cheese Bap",   price: "£3.00" },
    { name: "Panini / Wrap",      price: "£5.00" },
    { name: "Barista Coffee",     price: "£2.50" },
    { name: "Daily Lunch Special",price: "£6.50" },
  ],
};

// ─── Reviews ──────────────────────────────────────────────────────────────────
export const REVIEWS = [
  {
    name:  "Mohammed A.",
    stars: 5,
    text:  "Best garage in Small Heath. Honest, fast and my car came back spotless. Ali and the team are brilliant — won't go anywhere else!",
  },
  {
    name:  "Sarah T.",
    stars: 5,
    text:  "Had my MOT and a full valet done same day. Sat in the café with a coffee and a bacon bap while I waited. Quality all round.",
  },
  {
    name:  "Darius O.",
    stars: 5,
    text:  "Finally a garage that doesn't rip you off. Diagnosed my car quickly, fixed it same day and the price was very fair. Highly recommended.",
  },
  {
    name:  "Priya K.",
    stars: 4,
    text:  "The lunch specials are delicious and the staff are really friendly. My car was washed while I waited — great idea having everything in one place.",
  },
];

// ─── Opening hours ────────────────────────────────────────────────────────────
export const HOURS = [
  { day: "Monday",    time: "10:00am – 7:00pm" },
  { day: "Tuesday",   time: "10:00am – 7:00pm" },
  { day: "Wednesday", time: "10:00am – 7:00pm" },
  { day: "Thursday",  time: "10:00am – 7:00pm" },
  { day: "Friday",    time: "10:00am – 7:00pm" },
  { day: "Saturday",  time: "10:00am – 7:00pm" },
  { day: "Sunday",    time: "10:00am – 7:00pm" },
];

// ─── Stats ────────────────────────────────────────────────────────────────────
export const STATS = [
  { num: "15+",      label: "Years Experience" },
  { num: "5,000+",   label: "Happy Customers"  },
  { num: "3-in-1",   label: "Services"         },
  { num: "Same Day", label: "Turnaround"       },
];

// ─── Nav links ────────────────────────────────────────────────────────────────
export const NAV_LINKS = ["Services", "Pricing", "About", "Reviews", "Contact"];
