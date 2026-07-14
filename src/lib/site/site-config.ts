export const site = {
  name: "Al Wahda Foundation",
  tagline: "For Unity, Through Service",
  description:
    "Al Wahda Foundation is a non-profit organization advancing education, humanitarian relief, and community welfare with integrity and care.",
  email: "alwahdafoundationbd@gmail.com",
  phone: "+880 1789-076-804",
  address: "৩৭/২ পুরানা পল্টন, ফায়েনাজ টাওয়ার, (লিফটের ০৮) কালভার্ট রোড, পল্টন, ঢাকা-১০০০",
  registration: "Charity Registration No. AWF-2019-04412",
  social: {
    instagram: "https://instagram.com",
    facebook: "https://facebook.com",
    youtube: "https://youtube.com",
    linkedin: "https://linkedin.com",
  },
};

export const navLinks = [
  { to: "/", label: "Home" },
  { to: "/about", label: "About" },
  { to: "/programs", label: "Programs" },
  { to: "/activities", label: "Activities" },
  { to: "/news", label: "News" },
  { to: "/blog", label: "Blog" },
  { to: "/volunteer", label: "Volunteer" },
  { to: "/contact", label: "Contact" },
] as const;

export const donationFunds = [
  { id: "general", label: "General Welfare Fund", description: "Direct our team to where need is greatest." },
  { id: "zakat", label: "Zakat & Sadaqah", description: "Zakat-eligible programs verified by our board." },
  { id: "education", label: "Education Endowment", description: "Scholarships, schools, and teacher training." },
  { id: "water", label: "Safe Water Initiative", description: "Wells, purification plants, and rural pipelines." },
  { id: "emergency", label: "Emergency Relief", description: "Flood, conflict, and disaster response." },
  { id: "orphans", label: "Orphan Sponsorship", description: "Monthly support for orphaned children." },
  { id: "qurbani", label: "Qurbani & Ramadan", description: "Seasonal meals and Qurbani distribution." },
] as const;
