// src/data/menu.ts

export interface MenuItem {
  category: string;
  price: Number;
  unit: 'dozen' | 'each' | 'starting' | 'half-dozen' | 'two-dozen';
}

export const BAKERY_MENU: Record<string, MenuItem> = {
  "cake-pops": {
    category: "Cake Pops",
    price: 40,
    unit: "dozen"
  },
  "cake-six-inch": {
    category: "Custom Cakes",
    price: 40,
    unit: "starting"
  },
  "cake-eight-inch": {
    category: "Custom Cakes",
    price: 65,
    unit: "starting"
  },
  "cake-ten-inch": {
    category: "Custom Cakes",
    price: 95,
    unit: "starting"
  },
  "cake-twelve-inch": {
    category: "Custom Cakes",
    price: 127,
    unit: "starting"
  },
  "cake-wedding-fondant": {
    category: "Custom Cakes",
    price: 7,
    unit: "starting"
  },
  "cake-wedding-icing": {
    category: "Custom Cakes",
    price: 5.50,
    unit: "starting"
  },
  "cupcakes": {
    category: "Signature Cupcakes",
    price: 40,
    unit: "dozen"
  },
  "mini-cupcakes": {
    category: "Mini Cupcakes",
    price: 40,
    unit: "dozen"
  },
  "cake-pucks": {
    category: "Cake-pucks",
    price: 40,
    unit: "dozen"
  },
  "cookies-traditional": {
    category: "cookies",
    price: 27,
    unit: "dozen"
  },
  "cookies-special": {
    category: "cookies",
    price: 30,
    unit: "dozen"
  },
  "cookies-decorated-icing": {
    category: "cookies",
    price: 40,
    unit: "dozen"
  },
  "cookies-decorated-logos": {
    category: "cookies",
    price: 43,
    unit: "dozen"
  },
  "cookies-biscotti": {
    category: "cookies",
    price: 27,
    unit: "dozen"
  },
  "macarons": {
    category: "macarons",
    price: 40,
    unit: "dozen"
  },
  
  "macaron-special": {
    category: "macarons",
    price: 43,
    unit: "dozen"
  },
  "donuts": {
    category: "donuts",
    price: 30,
    unit: "dozen"
  },
  "filled-donuts": {
    category: "donuts",
    price: 33,
    unit: "dozen"
  },
  "mini-donuts": {
    category: "donuts",
    price: 17,
    unit: "dozen"
  },
  "pie": {
    category: "pie",
    price: 27,
    unit: "dozen"
  }
};