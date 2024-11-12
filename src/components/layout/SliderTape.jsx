/* eslint-disable react/prop-types */
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Slider from "react-slick";
import { useRef, useImperativeHandle, forwardRef } from "react";

const SliderTape = forwardRef(({ slides }, ref) => {
  let sliderRef = useRef(null);
  const nextSlide = () => {
    sliderRef.slickNext();
  };
  const prevSlide = () => {
    sliderRef.slickPrev();
  };
  useImperativeHandle(ref, () => ({
    nextSlide,
    prevSlide,
  }));

  const settings = {
    arrows: false,
    autoplay: false,
    draggable: false,
    speed: 500,
    slidesToShow: 3,
    slidesToScroll: 1,
  };
  return (
    <div className="mx-auto max-w-lg" style={{ marginInline: 15 }}>
      <Slider
        ref={(slider) => {
          sliderRef = slider;
        }}
        {...settings}
      >
        {slides.map((slide, index) => (
          <div
            key={index}
            className={`bg-cover bg-[url('/img/paper_background.png')] bg-center p-5 shadow ${
              index === 0
                ? "border-t border-l"
                : index + 1 === slides.length
                ? "border border-r-4"
                : "border"
            } text-center`}
          >
            <h3 className="text-3xl font-medium">
              {slide === " " ? (
                <span className="text-transparent">0</span> //If there's an empty slide, just made the text transparent so it won't lose the height.
              ) : (
                slide
              )}
            </h3>
          </div>
        ))}
        {/* <div className="bg-cover bg-[url('/img/paper_background.png')] bg-center p-5 shadow border text-center">
          <h3 className="text-3xl font-medium">2</h3>
        </div>
        <div className="bg-cover bg-[url('/img/paper_background.png')] bg-center p-5 shadow border border-r-4 text-center">
          <h3 className="text-3xl font-medium">3</h3>
        </div> */}
      </Slider>
    </div>
  );
});

SliderTape.displayName = "SliderTape";
export default SliderTape;
