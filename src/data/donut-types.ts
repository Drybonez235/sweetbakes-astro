export interface Category {
  title: string;
  items: string[];
}

export interface DonutSection {
  sectionTitle: string;
  subHeading: string;
  backgroundImage?: string;
  categories: Category[];
}

export const donutContent: DonutSection = {
  sectionTitle: "Donut Types",
  subHeading: "Our donuts are handcrafted daily with premium ingredients to ensure the perfect texture and flavor in every bite.",
  //backgroundImage: , // Optional path to your asset
  categories: [
    {
      title: "Fried Cake Donuts",
      items: [
        "Vanilla",
        "Chocolate",
        "Red Velvet",
        "Apple Cider"
      ]
    },
    {
      title: "Traditional Yeast",
      items: [
        "Ring",
        "Filled"
      ]
    }
  ]
};