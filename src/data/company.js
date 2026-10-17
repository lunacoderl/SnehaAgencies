const addressDetails = {
  line1: "67-13-7, Ground Floor, Lakshmi Nilayam",
  line2: "Road No : 4, Nagamalli Thota",
  area: "Rajeswar Nagar",
  city: "Kakinada",
  state: "Andhra Pradesh",
  pincode: "533003",
  full: "67-13-7, Ground Floor, Lakshmi Nilayam, Road No : 4, Nagamalli Thota, Rajeswar Nagar, Kakinada - 533003, Andhra Pradesh",
  toString() {
    return this.full;
  }
};

const hoursDetails = {
  monSat: "9:00 AM - 8:30 PM",
  sun: "10:00 AM - 2:00 PM",
  toString() {
    return "Mon - Sat: 9:00 AM - 8:30 PM | Sunday: 10:00 AM - 2:00 PM";
  }
};

export const COMPANY = {
  name: "Sneha Agencies",
  nameRegional: "స్నేహ ఏజెన్సీస్",
  proprietor: "Sri P. Satyanarayana Murthy",
  tagline: "Building Material Solutions",
  motto: "Building Better Spaces Together",
  role: "Authorised Distributor & Building Material Supplier",
  gstin: "37AAXFS3750J1ZG",
  parentGroup: "NCL Group Partner & Authorised Distributor",

  // Phones (both alias conventions supported)
  phonePrimary: "+91 92478 66866",
  primaryPhone: "+91 92478 66866",
  phonePrimaryRaw: "9247866866",
  primaryPhoneRaw: "9247866866",

  phoneSecondary: "+91 94401 03653",
  secondaryPhone: "+91 94401 03653",
  phoneSecondaryRaw: "9440103653",
  secondaryPhoneRaw: "9440103653",

  // WhatsApp
  whatsapp: "919247866866",
  whatsappRaw: "919247866866",

  // Email
  email: "snehaagencieskkd@gmail.com",

  // Geo & Location
  city: "Kakinada",
  state: "Andhra Pradesh",
  pincode: "533003",
  address: addressDetails,

  // Hours
  openingHours: hoursDetails,

  // Map & Navigation
  mapUrl: "https://maps.google.com/?q=Nagamalli+Thota+Road+No+4+Kakinada+Sneha+Agencies",

  social: {
    whatsapp: "https://wa.me/919247866866",
    call: "tel:+919247866866"
  }
};
