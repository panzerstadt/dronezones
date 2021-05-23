export function colorLuminance(hex, lum) {
  // validate hex string
  hex = String(hex).replace(/[^0-9a-f]/gi, "");
  if (hex.length < 6) {
    hex = hex[0] + hex[0] + hex[1] + hex[1] + hex[2] + hex[2];
  }
  lum = lum || 0;

  // convert to decimal and change luminosity
  let rgb = "#",
    c,
    i;
  for (i = 0; i < 3; i++) {
    c = parseInt(hex.substr(i * 2, 2), 16);
    c = Math.round(Math.min(Math.max(0, c + c * lum), 255)).toString(16);
    rgb += ("00" + c).substr(c.length);
  }

  return rgb;
}

export const twGrayToHex = {
  "bg-gray-50": "#F9FAFB",
  "bg-gray-100": "#F3F4F6",
  "bg-gray-200": "#E5E7EB",
  "bg-gray-300": "#D1D5DB",
  "bg-gray-400": "#9CA3AF",
  "bg-gray-500": "#6B7280",
  "bg-gray-600": "#4B5563",
  "bg-gray-700": "#374151",
  "bg-gray-800": "#1F2937",
  "bg-gray-900": "#111827",
};

export type TWGrayColors = keyof typeof twGrayToHex;
