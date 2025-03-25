import Collection from "../assets/Collection.png"
import Banner from "../assets/Banner.png"

function Carousel() {
  return (
    <div>
    <div className="carousel w-full rounded">
                        <div id="item1" className="carousel-item w-full">
                            <img
                                src={Banner}
                                className="w-[1400px] h-[330px] w-full "
                            />
                        </div>
                        <div id="item2" className="carousel-item w-full">
                            <img
                                src={Collection}
                                className="w-[1400px] h-[330px] object-cover "
                            />
                        </div>
                        <div id="item3" className="carousel-item w-full">
                            <img
                                src="data:image/jpeg;base64,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"
                                className="w-[1400px] h-[330px] object-cover" />
                        </div>
                        <div id="item4" className="carousel-item w-full">
                            <img
                                src="https://www.shutterstock.com/image-vector/promo-sale-banner-library-bookshop-260nw-1790872166.jpg"
                                className="w-[1400px] h-[330px] object-cover " />
                        </div>
                    </div>
                    <div className="bg-gray-200 flex w-full justify-center gap-2 py-2 shadow-lg overflow-hidden rounded">
                        <a href="#item1" className="btn btn-xs">1</a>
                        <a href="#item2" className="btn btn-xs">2</a>
                        <a href="#item3" className="btn btn-xs">3</a>
                        <a href="#item4" className="btn btn-xs">4</a>
                    </div>  
    </div>
  )
}

export default Carousel
