import Clothes from "../assets/Clothes.png"

function Cards() {
    return (
        <div className="bg-white flex flex-row gap-6 ">
                {/* Card 1 -Start*/}
                <div className="card bg-gray-200 w-96 mt-5 mb-4 ml-4 hover:shadow-2xl bg-black w-full">
                    <figure className="px-10 pt-10">
                        <img
                            src="https://img.daisyui.com/images/stock/photo-1606107557195-0e29a4b5b4aa.webp"
                            alt="Shoes"
                            className="rounded-xl" />
                    </figure>
                    <div className="card-body items-center text-center">
                        <h2 className="card-title text-black">Shoes!</h2>
                        <p className="text-black">If a dog chews shoes whose shoes does he choose?</p>
                        <div className="card-actions">
                            <button className="btn btn-primary">Buy Now</button>
                        </div>
                    </div>
                </div>
                <div className="card bg-gray-200 w-96 mt-5 mb-4 ml-4 hover:shadow-2xl bg-black w-full">
                    <figure className="px-10 pt-10">
                        <img
                            src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRhtPrmIY_EEc4TAeyQ3UW3nD8BGZ0g8ANe7w&s"
                            alt="Electronics"
                            className="rounded-xl" />
                    </figure>
                    <div className="card-body items-center text-center">
                        <h2 className="card-title text-black">Electronics</h2>
                        <p className="text-black">Let's be Digital</p>
                        <div className="card-actions">
                            <button className="btn btn-primary">Buy Now</button>
                        </div>
                    </div>
                </div>
                <div className="card bg-gray-200 w-96 mt-5 mb-4 ml-4 hover:shadow-2xl bg-black w-full">
                    <figure className="px-10 pt-10">
                        <img
                            src={Clothes}
                            alt="Clothes"
                            className="rounded-xl" />
                    </figure>
                    <div className="card-body items-center text-center">
                        <h2 className="card-title text-black">Cloths</h2>
                        <p className="text-black">Dress the way you love</p>
                        <div className="card-actions">
                            <button className="btn btn-primary">Buy Now</button>
                        </div>
                    </div>
                </div>
                
        </div>
        
    )
}

export default Cards