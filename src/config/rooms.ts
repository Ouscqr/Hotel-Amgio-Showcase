import type { ApartmentProps } from "@/components/ApartmentCard";

/**
 * Demo room catalogue for the marketing page.
 *
 * The entries below are generic placeholders with stock photography so the
 * repository can be public. For a real deployment, replace them with your own
 * inventory (or fetch them from your PMS/CMS) and point `image` at assets you
 * own or are licensed to use.
 */
export const featuredRooms: ApartmentProps[] = [
  {
    id: "1",
    name: "Deluxe Double Room",
    description: "Bright double room with a private bathroom and free Wi-Fi.",
    capacity: 2,
    image:
      "https://images.unsplash.com/photo-1582719478250-c89cae4dc85b?w=800&h=600&fit=crop",
    features: ["Wi-Fi", "Private Bathroom"],
  },
  {
    id: "2",
    name: "Bed in 8-Bed Shared Dormitory",
    description:
      "Single bed in a shared dormitory room with a shared bathroom and free Wi-Fi.",
    capacity: 8,
    image:
      "https://images.unsplash.com/photo-1598928506311-c55ded91a20c?w=800&h=600&fit=crop",
    features: ["Wi-Fi", "Public Bathroom"],
  },
  {
    id: "3",
    name: "Standard Double Room",
    description:
      "Double room for two guests with a shared bathroom and free Wi-Fi.",
    capacity: 2,
    image:
      "https://images.unsplash.com/photo-1502672260266-1c1ef2d93688?w=800&h=600&fit=crop",
    features: ["Wi-Fi", "Public Bathroom"],
  },
];
