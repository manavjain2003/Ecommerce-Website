import { Link } from "react-router-dom";

function AddtoCart() {
	const cartItems = [
	  {
		id: 1,
		img: "https://images.unsplash.com/photo-1526170375885-4d8ecf77b99f?ixlib=rb-1.2.1&auto=format&fit=crop&w=1350&q=80",
		title: "Polaroid camera",
		color: "Classic",
		price: 590,
		originalPrice: 950,
	  },
	  {
		id: 2,
		img: "https://images.unsplash.com/photo-1504274066651-8d31a536b11a?ixlib=rb-1.2.1&auto=format&fit=crop&w=675&q=80",
		title: "Replica headphones",
		color: "White",
		price: 699.95,
		originalPrice: 1150,
	  },
	  {
		id: 3,
		img: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTbWB9A4CTjYfyXxiz-4YZuo96LjvTHWvY42A&s",
		title: "Set of travel chargers",
		color: "Black",
		price: 600.99,
		originalPrice: 2150,
	  },
	];
  
	return (
	  <div className="bg-white">
		<div className="w-full p-6 space-y-4 sm:p-10 dark:bg-white-200 dark:text-gray-800">
		  <h2 className="text-xl font-semibold">Your cart</h2>
		  <ul className="divide-y dark:divide-gray-300">
			{cartItems.map((item) => (
			  <li key={item.id} className="flex py-4 space-x-4 sm:flex-row">
				<img
				  className="w-20 h-20 sm:w-32 sm:h-32 object-cover rounded dark:bg-gray-500"
				  src={item.img}
				  alt={item.title}
				/>
				<div className="flex flex-col justify-between w-full">
				  <div>
					<h3 className="text-lg font-semibold">{item.title}</h3>
					<p className="text-sm dark:text-gray-600">{item.color}</p>
				  </div>
				  <div className="text-right">
					<p className="text-lg font-semibold">Rs. {item.price}</p>
					<p className="text-sm line-through dark:text-gray-400">
					  Rs. {item.originalPrice}
					</p>
				  </div>
				  <div className="flex space-x-4 text-sm">
					<button className="flex items-center">
					  <svg
						xmlns="http://www.w3.org/2000/svg"
						className="w-4 h-4"
						viewBox="0 0 512 512"
					  >
						<path d="M96,472a23.82,23.82,0,0,0,23.579,24H392.421A23.82,23.82,0,0,0,416,472V152H96Zm32-288H384V464H128Z"></path>
						<rect width="32" height="200" x="168" y="216"></rect>
						<rect width="32" height="200" x="240" y="216"></rect>
						<rect width="32" height="200" x="312" y="216"></rect>
						<path d="M328,88V40c0-13.458-9.488-24-21.6-24H205.6C193.488,16,184,26.542,184,40V88H64v32H448V88ZM216,48h80V88H216Z"></path>
					  </svg>
					  Remove
					</button>
					<button className="flex items-center">
					  <svg
						xmlns="http://www.w3.org/2000/svg"
						className="w-4 h-4"
						viewBox="0 0 512 512"
					  >
					  </svg>
					  Add to favorites
					</button>
				  </div>
				</div>
			  </li>
			))}
		  </ul>
		  <div className="text-right space-y-1">
			<p>
			  Total amount:{" "}
			  <span className="font-semibold">Rs. 2057</span>
			</p>
			<p className="text-sm dark:text-gray-600">
			  Not including taxes and shipping costs
			</p>
		  </div>
		  <div className="flex justify-end space-x-4">
			<Link to = "/products" className="px-6 py-2 border rounded-md dark:border-violet-600">
			  Back to shop
			</Link>
			<button className="px-6 py-2 border rounded-md dark:bg-violet-600 dark:text-gray-50">
			  Continue to Checkout
			</button>
		  </div>
		</div>
	  </div>
	);
  }
  
  export default AddtoCart;  