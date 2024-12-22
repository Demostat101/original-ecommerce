import "./SecondComponent.css";
import { CiMobile2 } from "react-icons/ci";
import { FaArrowLeft } from "react-icons/fa";
import { FaArrowRight } from "react-icons/fa";
import { FiHeart } from "react-icons/fi";
import { BiShow } from "react-icons/bi";
import { AiFillStar } from "react-icons/ai";
import { flash } from "../../../ProductsArrayData";
import { passCountdown } from "./CountDown";

const SecondComponent = () => {
  const { time, getFormattedTime,Carousel,responsive } = passCountdown();

 

  return (
    <div className="second-components">
      <div className="Count-down-component">
        <div className="count-down-box">
          <div className="header-phone">
            <CiMobile2 className="mobile-logo" />
            <div className="today">Today's</div>
          </div>

          <div className="flash-countdown">
            <div className="flash">Flash Sales</div>
            <div className="time-details">
              <span className="count-down-title">
                <span className="days">Days</span>{" "}
                <span className="hours">Hours</span>{" "}
                <span className="minutes">Minutes</span>{" "}
                <span className="seconds">Seconds</span>{" "}
              </span>
              <div className="count-down">{getFormattedTime(time)}</div>
            </div>
          </div>

          <div className="arrow-countdown">
            <FaArrowLeft /> <FaArrowRight />
          </div>
        </div>
        
      </div>
      <Carousel className="data-container" responsive={responsive}>
          {flash.map(
            ({ img, title, prevPrice, newPrice, star, reviews }, index) => {
              return (
                <div className="flash-img" key={index}>
                  <div className="image-holder">
                    <div className="discount">-10%</div>
                    <img className="count-images" src={img} alt={img} />
                    <div className="love-eye">
                      <span className="heart1">
                        <FiHeart />
                      </span>{" "}
                      <span className="heart2">
                        <BiShow />
                      </span>{" "}
                    </div>
                    {title === "Nike Air Vapormax Plus" ? (
                      <button className="add-cart">Add To Cart</button>
                    ) : (
                      ""
                    )}
                  </div>
                  <div className="footer">
                    <div className="flash-title">{title}</div>
                    <div className="prev-new-price">
                      <span className="new-price">${newPrice} </span>
                      <del>${prevPrice}</del>{" "}
                    </div>
                    <div className="star-reviews">
                      {reviews < 90 ? (
                        <div>
                          {star}
                          {star}
                          {star}
                          {star}
                          <AiFillStar />
                        </div>
                      ) : (
                        <div>
                          {star}
                          {star}
                          {star}
                          {star}
                          {star}
                        </div>
                      )}{" "}
                      ({reviews})
                    </div>
                  </div>
                </div>
              );
            }
          )}
        </Carousel>

        <div className="show-all-products">
          <button className="all-products">View All Products</button>
        </div>
    </div>
  );
};

export default SecondComponent;
