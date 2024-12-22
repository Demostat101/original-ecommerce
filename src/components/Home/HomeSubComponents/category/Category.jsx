import "./Category.css"
import { categoryList } from "./CategoryArray";
import { CiMobile2 } from "react-icons/ci";
import { FaArrowLeft } from "react-icons/fa";
import { FaArrowRight } from "react-icons/fa";
import { passCountdown } from "../SecondComponent/CountDown";




const Category = () => {
const {Carousel,responsive} = passCountdown()

  return (
    <div className="category-container-component">

        <div className="category-icon-head">
            <CiMobile2 className="mobile-logo"/>
            <div className="category-title">Categories</div>
        </div>

        <div className="browse-category">
            <h2>Browse By Category</h2>
            <div className="category-arrows">
                <FaArrowLeft/>
                <FaArrowRight/>
            </div>
        </div>

        {/* <Carousel className="category-data-array" responsive={responsive}> */}
          <marquee behavior="scroll"  className="scroll-container">
          {
                categoryList.map(({icon, title},index)=>{
                    return <div className="/* display-data */ scroll-content" key={index}>
                        <div className="icon-display">{icon}</div>
                        <div className="title-display">{title}</div>

                    </div>
                })

            }
          </marquee>
        {/* </Carousel> */}
        <div className="hr-line"></div>
       
  
    </div>
  )
}

export default Category
