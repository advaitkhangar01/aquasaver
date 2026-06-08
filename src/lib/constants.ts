// ─── Contact ──────────────────────────────────────────────────────────────────
export const PHONE        = "09850760562";
export const PHONE_DISP   = "098507 60562";
export const WHATSAPP     = "919850760562";
export const EMAIL        = "contact@aquasaversolutions.com";

// ─── Address ──────────────────────────────────────────────────────────────────
export const ADDRESS_L1   = "Room 2, Kushinara Society, 25";
export const ADDRESS_L2   = "Manish Nagar, Nagpur, Maharashtra 440037";
export const GMAPS_URL    = "https://maps.app.goo.gl/CkaDkR4Mpm1c7bDk8";
export const GMAPS_EMBED  =
  "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3722.534845156216!2d79.0709486!3d21.0912327!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3bd4bfe8a3a535fd%3A0xd9ece1e789c92a37!2sAqua%20saver%20water%20sensor%20solutions!5e0!3m2!1sen!2sin!4v1780936874580!5m2!1sen!2sin";

// ─── Social ───────────────────────────────────────────────────────────────────
export const INSTAGRAM_URL =
  "https://www.instagram.com/aquasaver_controller?utm_source=ig_web_button_share_sheet&igsh=ZDNlZDc0MzIxNw==";

// ─── WhatsApp pre-filled messages ────────────────────────────────────────────
export const WA_GENERAL   = `https://wa.me/${WHATSAPP}?text=Hi%20Aqua%20Saver!%20I%20need%20help%20with%20my%20water%20system.`;
export const WA_QUOTE     = `https://wa.me/${WHATSAPP}?text=Hi%20Aqua%20Saver!%20I%20need%20a%20free%20quote.`;
export const WA_RECOMMEND = `https://wa.me/${WHATSAPP}?text=Hi%20Aqua%20Saver!%20I%20need%20help%20choosing%20the%20right%20product.`;
export const WA_PROJECT   = `https://wa.me/${WHATSAPP}?text=Hi%20Aqua%20Saver!%20I%20have%20a%20project%20similar%20to%20the%20Mankapur%20Stadium%20and%20need%20a%20solution.`;
export const WA_INQUIRY   = `https://wa.me/${WHATSAPP}?text=Hi%20Aqua%20Saver!%20I%20have%20an%20inquiry.`;

export const waProduct = (name: string) =>
  `https://wa.me/${WHATSAPP}?text=Hi!%20I%20want%20to%20enquire%20about%20the%20${encodeURIComponent(name)}`;

// ─── FormSubmit ───────────────────────────────────────────────────────────────
export const FORMSUBMIT_ENDPOINT = `https://formsubmit.co/${EMAIL}`;
