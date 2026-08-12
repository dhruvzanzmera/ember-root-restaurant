import {
  Flame,
  Star,
  Leaf,
  Truck,
  ChefHat,
  ShoppingBag,
} from "lucide-react";

export const CATEGORIES = [
  { label: "Starters", icon: Leaf },
  { label: "Mains", icon: Flame },
  { label: "Grill", icon: ChefHat },
  { label: "Desserts", icon: Star },
  { label: "Drinks", icon: ShoppingBag },
];

export const DISHES = [
  {
    name: "Charred Lemon Chicken",
    tag: "Chef's Pick",
    price: "$18",
    time: "25 min",
    rating: 4.9,
    img: "https://images.unsplash.com/photo-1598515214211-89d3c73ae83b?q=80&w=600&auto=format&fit=crop",
  },
  {
    name: "Smoked Brisket Bowl",
    tag: "Spicy",
    price: "$21",
    time: "30 min",
    rating: 4.8,
    img: "https://images.unsplash.com/photo-1568901346375-23c9450c58cd?q=80&w=600&auto=format&fit=crop",
  },
  {
    name: "Wild Mushroom Risotto",
    tag: "Vegetarian",
    price: "$16",
    time: "20 min",
    rating: 4.7,
    img: "https://images.unsplash.com/photo-1476124369491-e7addf5db371?q=80&w=600&auto=format&fit=crop",
  },
  {
    name: "Charcoal Grilled Salmon",
    tag: "Signature",
    price: "$24",
    time: "22 min",
    rating: 5.0,
    img: "https://images.unsplash.com/photo-1467003909585-2f8a72700288?q=80&w=600&auto=format&fit=crop",
  },
  {
    name: "Roasted Root Vegetable Tart",
    tag: "Vegan",
    price: "$14",
    time: "18 min",
    rating: 4.6,
    img: "https://images.unsplash.com/photo-1476718406336-bb5a9690ee2a?q=80&w=600&auto=format&fit=crop",
  },
  {
    name: "Slow-Braised Short Rib",
    tag: "House Favorite",
    price: "$27",
    time: "35 min",
    rating: 4.9,
    img: "https://images.unsplash.com/photo-1544025162-d76694265947?q=80&w=600&auto=format&fit=crop",
  },
];

export const FEATURES = [
  {
    icon: Leaf,
    title: "Farm to Table",
    desc: "Ingredients sourced from local growers, delivered to our kitchen within 24 hours of harvest.",
  },
  {
    icon: Flame,
    title: "Wood-Fired Kitchen",
    desc: "Every dish passes through our open flame grill for that signature smoked depth of flavor.",
  },
  {
    icon: Truck,
    title: "Fast Delivery",
    desc: "Hot food at your door in under 30 minutes across the city, tracked live from stove to step.",
  },
];

export const GALLERY = [
  "https://images.unsplash.com/photo-1414235077428-338989a2e8c0?q=80&w=700&auto=format&fit=crop",
  "https://images.unsplash.com/photo-1504674900247-0877df9cc836?q=80&w=700&auto=format&fit=crop",
  "https://images.unsplash.com/photo-1550547660-d9450f859349?q=80&w=700&auto=format&fit=crop",
  "https://images.unsplash.com/photo-1559339352-11d035aa65de?q=80&w=700&auto=format&fit=crop",
  "https://images.unsplash.com/photo-1424847651672-bf20a4b0982b?q=80&w=700&auto=format&fit=crop",
  "https://images.unsplash.com/photo-1544148103-0773bf10d330?q=80&w=700&auto=format&fit=crop",
];

export const TEAM = [
  {
    name: "Arjun Mehta",
    role: "Executive Chef",
    img: "https://images.unsplash.com/photo-1583394293214-28ded15ee548?q=80&w=500&auto=format&fit=crop",
    bio: "15 years across wood-fired kitchens in Mumbai and Lyon.",
  },
  {
    name: "Saran Fernandes",
    role: "Head of Pastry",
    img: "https://img.magnific.com/free-photo/chef-cooking-kitchen-while-wearing-professional-attire_23-2151208316.jpg?semt=ais_test_b&w=740&q=80",
    bio: "Trained in Paris, obsessed with seasonal fruit and dark chocolate.",
  },
  {
    name: "Dev Rathod",
    role: "Sous Chef",
    img: "https://images.unsplash.com/photo-1577219491135-ce391730fb2c?q=80&w=500&auto=format&fit=crop",
    bio: "Runs the grill station like clockwork, every single service.",
  },
];

export const TESTIMONIALS = [
  {
    quote:
      "Every plate feels like it took all afternoon to make — because it did. This is the kind of place you bring people you actually like.",
    name: "Riya Kapoor",
    meta: "Regular Guest, since 2021",
  },
  {
    quote:
      "The brisket bowl alone is worth the drive across town. Portions are generous and nothing tastes rushed.",
    name: "Karan Shah",
    meta: "Food Blogger",
  },
  {
    quote:
      "Booked for a birthday dinner and the whole table agreed — best service and plating we've had all year.",
    name: "Meera Joshi",
    meta: "First-time Guest",
  },
];

export const FAQS = [
  {
    q: "Do you take walk-ins or only reservations?",
    a: "We hold about half our seats for walk-ins every night, but for weekends and groups of four or more we'd recommend reserving ahead.",
  },
  {
    q: "Is there a vegetarian or vegan menu?",
    a: "Yes — roughly a third of our menu is plant-based, and our kitchen can adapt most grill dishes on request.",
  },
  {
    q: "How far do you deliver?",
    a: "We deliver within a 7km radius of the restaurant, with live tracking from the moment your order leaves the kitchen.",
  },
  {
    q: "Can you host private events?",
    a: "Absolutely — our back room seats up to 24 and comes with a dedicated tasting menu built around your guest list.",
  },
];
