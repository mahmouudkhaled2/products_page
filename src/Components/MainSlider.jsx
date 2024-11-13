import Slider from "react-slick";
import ProductItem from "./ProductItem";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import { ProductsContext } from "./../Contexts/ProuductsContext";
import { useContext } from "react";

export default function MainSlider() {
  const { allPro } = useContext(ProductsContext);

  const settings = {
    dots: false,
    infinite: true,
    speed: 500,
    slidesToShow: 3,
    slidesToScroll: 1,
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 3,
          slidesToScroll: 3,
          infinite: true,
          dots: true,
        },
      },
      {
        breakpoint: 767,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 2,
          initialSlide: 2,
        },
      },
      {
        breakpoint: 480,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
        },
      },
    ],
  };

  return (
    <div className="container mx-auto flex flex-col xl:flex-row justify-center items-center py-14 border-b">
      <div className="txt xl:w-1/3 mb-7 xl:mb-0 px-5 ">
        <h2 className="xl:w-3/5 text-4xl font-bold mb-5">
          We thought you might like these!
        </h2>
        <p className="text-xl">Based on your habits...</p>
      </div>

      <div className="slider w-full px-7 xl:px-0 xl:w-2/3 shadow-[-10px_0px_30px_-19px_rgba(0,0,0,0.3)] p-8">
        <Slider {...settings}>
          {allPro?.map((item, index) => (
            <div key={index}>
              <div className="px-5">
                <ProductItem item={item} slider={true} />
              </div>
            </div>
          ))}
        </Slider>
      </div>
    </div>
  );
}
