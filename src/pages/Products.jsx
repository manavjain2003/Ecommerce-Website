import React from "react";

// Sample product data without price
const products = [
  {
    id: 1,
    name: "Electronics",
    description: "Explore a variety of electronic gadgets and devices.",
    image: "https://img.freepik.com/free-photo/modern-stationary-collection-arrangement_23-2149309643.jpg?semt=ais_hybrid",
  },
  {
    id: 2,
    name: "Books",
    description: "Find a great collection of books across various genres.",
    image: "https://prh.imgix.net/articles/top10-fiction-1600x800.jpg",
  },
  {
    id: 3,
    name: "Clothing",
    description: "Discover the latest trends in fashion and accessories.",
    image: "https://img.freepik.com/free-photo/surprised-astonished-pretty-female-dressed-casually-choosing-dress-everyday-work-holding-two-hangers-with-clothes-hands-being-shocked-buy-it-sale-low-prices-clearance-sale_273609-708.jpg?ga=GA1.1.2118442321.1732881125&semt=ais_hybrid",
  },
  {
    id: 4,
    name: "Home & Kitchen",
    description: "Upgrade your home with quality kitchenware and decor.",
    image: "https://houseandhome.com/wp-content/uploads/2018/01/Ultimate-Kitchens-LopesTapscott-Condo_HH_MR17.jpg",
  },
  {
    id: 5,
    name: "Sports & Fitness",
    description: "Get fit with our range of sports equipment and accessories.",
    image: "https://static.wixstatic.com/media/e80c34_d59dfb85fdad4417b0daa3e65da41744~mv2.jpg/v1/fill/w_844,h_368,al_c,lg_1,q_80,enc_auto/e80c34_d59dfb85fdad4417b0daa3e65da41744~mv2.jpg",
  },
];

function ProductList() {
  return (
    <div className="p-6 grid gap-6 sm:grid-cols-2 lg:grid-cols-3 bg-white">
      {products.map((product) => (
        <div className="bg-white rounded-lg shadow-lg overflow-hidden">
          <img
            src={product.image}
            alt={product.name}
            className="object-cover w-full h-48"
          />
          <div className="p-4">
            <h2 className="text-xl font-bold">{product.name}</h2>
            <p className="text-gray-600">{product.description}</p>
          </div>
        </div>
      ))}
    </div>
  );
}

export default ProductList;
