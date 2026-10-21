export type Stay = {
  id: string;
  name: string;
  location: string;
  pricePerNight: number;
  rating: number;
  emoji: string;
  blurb: string;
  image: string;
};

export const stays: Stay[] = [
  {
    id: "seabreeze-cabin",
    name: "Seabreeze Cabin",
    location: "Goa, India",
    pricePerNight: 68,
    rating: 4.8,
    emoji: "🏖️",
    blurb:
      "A wooden cabin two minutes from the sand. Wake up to the tide, cook in a bright little kitchen, and watch the sunset from the deck.",
    image: "https://picsum.photos/seed/seabreeze-cabin/1200/800",
  },
  {
    id: "pine-loft",
    name: "Pine Ridge Loft",
    location: "Manali, Himachal Pradesh",
    pricePerNight: 54,
    rating: 4.6,
    emoji: "🌲",
    blurb:
      "A cosy A-frame loft tucked into the pines. Wood stove, mountain views, and the quietest mornings you will ever hear.",
    image: "https://picsum.photos/seed/pine-loft/1200/800",
  },
  {
    id: "old-city-flat",
    name: "Old City Flat",
    location: "Udaipur, Rajasthan",
    pricePerNight: 41,
    rating: 4.5,
    emoji: "🏛️",
    blurb:
      "A restored haveli apartment steps from the lake. Carved balconies, rooftop chai, and the whole old town on your doorstep.",
    image: "https://picsum.photos/seed/old-city-flat/1200/800",
  },
  {
    id: "harbour-studio",
    name: "Harbour Studio",
    location: "Kochi, Kerala",
    pricePerNight: 47,
    rating: 4.7,
    emoji: "⛵",
    blurb:
      "A light-filled studio over the backwaters. Fishing boats drift past the window while you sip filter coffee in bed.",
    image: "https://picsum.photos/seed/harbour-studio/1200/800",
  },
  {
    id: "tea-bungalow",
    name: "Tea Estate Bungalow",
    location: "Munnar, Kerala",
    pricePerNight: 73,
    rating: 4.9,
    emoji: "🍃",
    blurb:
      "A colonial-era bungalow surrounded by rolling tea. Misty hills, a working fireplace, and a cook who makes a mean appam.",
    image: "https://picsum.photos/seed/tea-bungalow/1200/800",
  },
  {
    id: "desert-tent",
    name: "Desert Luxe Tent",
    location: "Jaisalmer, Rajasthan",
    pricePerNight: 59,
    rating: 4.4,
    emoji: "🏜️",
    blurb:
      "A canvas suite in the dunes with a real bed and a private deck. Camel rides at dawn, folk music and a bonfire after dark.",
    image: "https://picsum.photos/seed/desert-tent/1200/800",
  },
];

export function getStay(id: string): Stay | undefined {
  return stays.find((s) => s.id === id);
}
