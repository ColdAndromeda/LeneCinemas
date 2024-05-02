import "./Banner.css";
import "bootstrap/dist/css/bootstrap.min.css";
import Autoplay from "embla-carousel-autoplay";
import useEmblaCarousel from "embla-carousel-react";

import httyd from "../../Images/httyd.jpg";
import KungFu from "../../Images/Panda.jpg";
import Mario from "../../Images/Mario.jpg";

const Banner = () => {
    const [emblaRef] = useEmblaCarousel({loop: false}, [Autoplay()])

    return (
        <div className="embla" ref={emblaRef}>
            <div className="embla__container">
                <div className="embla__slide">
                    <img src={KungFu} alt={"KungFu Panada"}/>
                </div>
                <div className="embla__slide">
                    <img src={Mario} alt={"Mario"}/>
                </div>
                <div className="embla__slide">
                    <img src={httyd} alt={"How To Train Your Dragon"}/>
                </div>
            </div>
        </div>
    );
};

export default Banner;