import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Screenshot3 from "./../asset/Screenshot3.png";

const Banner = () => {
  const settings = {
    dots: true,
    speed: 200,
    slidesToShow: 1,
    slidesToScroll: 1,
    infinite: true,
    autoplay: true,
    autoplaySpeed: 1000,
  };

  return (
    <div>
      <Slider {...settings}>
        <div>
            <img src={Screenshot3} alt="" />
          <h3>JEWELLERY FOR THE FEMININE YOU</h3>
          <p>Take a moment and cherish a grand collection</p>
          <button>MAKE ORDER</button>
        </div>
        <div>
          <h4>FROM BLING</h4>
          <h3>Modern Collections</h3>
          <button>VIEW COLLECTIONS</button>
        </div>
        <div>
        <h4>FROM BLING</h4>
          <h3>BRACELETS</h3>
          <button>VIEW COLLECTIONS</button>
        </div>
      </Slider>
    </div>
  );
};

export default Banner;