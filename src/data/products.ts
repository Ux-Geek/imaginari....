export interface Product {
  id: string;
  name: string;
  image: string;
  price: string;
  description: string;
  details: string[];
}

export const products: Product[] = [
  {
    id: "signature-linen-shirt",
    name: "Signature Linen Shirt",
    image: "https://images.unsplash.com/photo-1562157873-818bc0726f68?q=80&w=800",
    price: "$180",
    description: "A testament to enduring style. This shirt is crafted from premium Belgian linen, designed to breathe with you as you navigate the city or the coast.",
    details: ["100% Belgian Linen", "Mother of Pearl buttons", "Relaxed fit", "Hand-finished in Lagos"]
  },
  {
    id: "essential-white-tee",
    name: "Essential White Tee",
    image: "https://images.unsplash.com/photo-1521572267360-ee0c2909d518?q=80&w=800",
    price: "$85",
    description: "The foundation of any wardrobe. Our essential tee is made from ultra-soft organic cotton with a weight that feels substantial yet light.",
    details: ["100% Organic Cotton", "Heavyweight jersey", "Reinforced collar", "Eco-friendly dye"]
  },
  {
    id: "oxford-button-down",
    name: "Oxford Button Down",
    image: "https://images.unsplash.com/photo-1598033129183-c4f50c717658?q=80&w=800",
    price: "$145",
    description: "The classic, redefined. A structured oxford that holds its shape while maintaining a soft hand-feel. Perfect for transitions.",
    details: ["Premium Oxford Cotton", "Button-down collar", "Tailored fit", "Signature gold stitching"]
  },
  {
    id: "classic-black-tee",
    name: "Classic Black Tee",
    image: "https://images.unsplash.com/photo-1618354691373-d851c5c3a990?q=80&w=800",
    price: "$85",
    description: "Shadow and substance. A deep black tee that retains its color wash after wash. An anchor for any layered look.",
    details: ["100% Organic Cotton", "Deep dye process", "Regular fit", "Pre-shrunk"]
  },
  {
    id: "abuja-silk-shirt",
    name: "Abuja Silk Shirt",
    image: "https://images.unsplash.com/photo-1617137968427-85924c800a22?auto=format&fit=crop&q=80&w=800",
    price: "$240",
    description: "Luxury in motion. This silk shirt features a subtle sheen and a drape that captures the light. A piece for the evening.",
    details: ["100% Pure Silk", "Hidden placket", "Fluid drape", "Dry clean only"]
  },
  {
    id: "nomad-linen-top",
    name: "Nomad Linen Top",
    image: "https://images.unsplash.com/photo-1594932224828-b4b059b6ffc0?q=80&w=800",
    price: "$165",
    description: "For the traveler. A breathable linen top with a textured finish that only gets better with time and wear.",
    details: ["Raw Linen Blend", "Textured weave", "Oversized silhouette", "Neutral tones"]
  },
  {
    id: "bridge-knit-shirt",
    name: "Bridge Knit Shirt",
    image: "https://images.unsplash.com/photo-1621072156002-e2fcced0b170?q=80&w=800",
    price: "$195",
    description: "Bridging the gap between casual and formal. A lightweight knit that provides warmth without weight.",
    details: ["Merino Wool / Silk blend", "Breathable knit", "Refined cuffs", "Gentle wash"]
  },
  {
    id: "urban-cotton-shirt",
    name: "Urban Cotton Shirt",
    image: "https://images.unsplash.com/photo-1602810318383-e386cc2a3ccf?q=80&w=800",
    price: "$130",
    description: "Designed for the pace of the city. A durable cotton shirt with functional details and a sharp silhouette.",
    details: ["Crisp Cotton Poplin", "Double-stitched seams", "Modern collar", "Easy care"]
  }
];

export const getProductById = (id: string) => products.find(p => p.id === id);
