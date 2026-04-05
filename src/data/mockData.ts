export interface Product {
  id: string;
  name: string;
  price: number;
  category: string;
  images: string[];
  description: string;
  sizes: string[];
  inStock: boolean;
  isNewArrival: boolean;
}

export const products: Product[] = [
  {
    id: "p1",
    name: "The Perfect Striped Linen Top",
    price: 128,
    category: "Tops",
    images: [
      "https://cdn.shopify.com/s/files/1/0768/2070/products/Boem_-_Morrison_Place_-_The_Perfect_Striped_Linen_Top_-_June_2023_-_low_res_1.jpg?v=1687124451",
      "https://cdn.shopify.com/s/files/1/0768/2070/products/Boem_-_Morrison_Place_-_The_Perfect_Striped_Linen_Top_-_June_2023_-_low_res_2.jpg?v=1687124451",
      "https://cdn.shopify.com/s/files/1/0768/2070/products/Boem_-_Morrison_Place_-_The_Perfect_Striped_Linen_Top_-_June_2023_-_low_res_3.jpg?v=1687124451",
      "https://cdn.shopify.com/s/files/1/0768/2070/products/Boem_-_Morrison_Place_-_The_Perfect_Striped_Linen_Top_-_June_2023_-_low_res_4.jpg?v=1687124451",
      "https://cdn.shopify.com/s/files/1/0768/2070/products/Boem_-_Morrison_Place_-_The_Perfect_Striped_Linen_Top_-_June_2023_-_low_res_5.jpg?v=1687124451"
    ],
    description: "An effortless essential. This striped linen top features a relaxed fit and breathable fabric, perfect for warm days in the city or coastal getaways.",
    sizes: ["XS", "S", "M", "L"],
    inStock: true,
    isNewArrival: true,
  },
  {
    id: "p2",
    name: "Stephie Sleeveless V Neck Cardigan",
    price: 145,
    category: "Knitwear",
    images: [
      "https://cdn.shopify.com/s/files/1/0768/2070/products/Boem_-_Morrison_Place_-_Stephie_Sleeveless_V_Neck_Cardigan_-_June_2023_-_low_res_1.jpg?v=1687124451",
      "https://cdn.shopify.com/s/files/1/0768/2070/products/Boem_-_Morrison_Place_-_Stephie_Sleeveless_V_Neck_Cardigan_-_June_2023_-_low_res_2.jpg?v=1687124451",
      "https://cdn.shopify.com/s/files/1/0768/2070/products/Boem_-_Morrison_Place_-_Stephie_Sleeveless_V_Neck_Cardigan_-_June_2023_-_low_res_3.jpg?v=1687124451",
      "https://cdn.shopify.com/s/files/1/0768/2070/products/Boem_-_Morrison_Place_-_Stephie_Sleeveless_V_Neck_Cardigan_-_June_2023_-_low_res_4.jpg?v=1687124451"
    ],
    description: "A versatile layering piece. This sleeveless V-neck cardigan is crafted from a soft knit blend, offering a modern silhouette that transitions seamlessly from day to night.",
    sizes: ["S", "M", "L"],
    inStock: true,
    isNewArrival: true,
  },
  {
    id: "p3",
    name: "Hari Tank",
    price: 78,
    category: "Tops",
    images: [
      "https://cdn.shopify.com/s/files/1/0768/2070/products/Boem_-_Morrison_Place_-_Hari_Tank_-_June_2023_-_low_res_1.jpg?v=1687124451",
      "https://cdn.shopify.com/s/files/1/0768/2070/products/Boem_-_Morrison_Place_-_Hari_Tank_-_June_2023_-_low_res_2.jpg?v=1687124451",
      "https://cdn.shopify.com/s/files/1/0768/2070/products/Boem_-_Morrison_Place_-_Hari_Tank_-_June_2023_-_low_res_3.jpg?v=1687124451"
    ],
    description: "The ultimate everyday tank. The Hari Tank features a flattering fit and premium ribbed cotton, making it a foundational piece for any curated wardrobe.",
    sizes: ["XS", "S", "M", "L"],
    inStock: true,
    isNewArrival: false,
  },
  {
    id: "p4",
    name: "Cassius Denim Set",
    price: 210,
    category: "Sets",
    images: [
      "https://cdn.shopify.com/s/files/1/0768/2070/products/Boem_-_Morrison_Place_-_Cassius_Denim_Set_-_June_2023_-_low_res_1.jpg?v=1687124451",
      "https://cdn.shopify.com/s/files/1/0768/2070/products/Boem_-_Morrison_Place_-_Cassius_Denim_Set_-_June_2023_-_low_res_2.jpg?v=1687124451",
      "https://cdn.shopify.com/s/files/1/0768/2070/products/Boem_-_Morrison_Place_-_Cassius_Denim_Set_-_June_2023_-_low_res_3.jpg?v=1687124451"
    ],
    description: "A coordinated look for the modern woman. The Cassius Denim Set includes a structured top and matching bottoms, crafted from premium denim for a sophisticated yet relaxed feel.",
    sizes: ["XS", "S", "M", "L"],
    inStock: true,
    isNewArrival: true,
  },
  {
    id: "p5",
    name: "Next Level Tee",
    price: 65,
    category: "Tops",
    images: [
      "https://cdn.shopify.com/s/files/1/0768/2070/products/Boem_-_Morrison_Place_-_Next_Level_Tee_-_June_2023_-_low_res_1.jpg?v=1687124451",
      "https://cdn.shopify.com/s/files/1/0768/2070/products/Boem_-_Morrison_Place_-_Next_Level_Tee_-_June_2023_-_low_res_2.jpg?v=1687124451"
    ],
    description: "The ultimate elevated basic. Our Next Level Tee is crafted from premium, ultra-soft cotton with a perfect relaxed fit that pairs with anything.",
    sizes: ["XS", "S", "M", "L", "XL"],
    inStock: true,
    isNewArrival: false,
  },
  {
    id: "p6",
    name: "The Perfect Button Up",
    price: 110,
    category: "Tops",
    images: [
      "https://cdn.shopify.com/s/files/1/0768/2070/products/Boem_-_Morrison_Place_-_The_Perfect_Button_Up_-_June_2023_-_low_res_1.jpg?v=1687124451",
      "https://cdn.shopify.com/s/files/1/0768/2070/products/Boem_-_Morrison_Place_-_The_Perfect_Button_Up_-_June_2023_-_low_res_2.jpg?v=1687124451"
    ],
    description: "A wardrobe staple redefined. The Perfect Button Up features a crisp, tailored fit and timeless design, making it the ideal choice for both professional and casual looks.",
    sizes: ["S", "M", "L"],
    inStock: true,
    isNewArrival: false,
  }
];
