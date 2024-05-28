import "./FirstComponent.css"
import { LeftData } from "./ArrayData"
import { RightData } from "./ArrayData"
// import { BsArrowLeftCircleFill } from "react-icons/bs"
// import { BsArrowRightCircleFill } from "react-icons/bs"


import React, { useEffect, useState } from 'react'

const FirstComponent = () => {

    const [currentSlide, setCurrentSlide] = useState(0);

    // const handlePrev = () => {

    //     setCurrentSlide(currentSlide === 0 ? RightData.length - 1 : currentSlide - 1)
        
    // }

    const handleNext = () => {
       
        setCurrentSlide(currentSlide === RightData.length - 1 ? 0 : currentSlide + 1)

    }

    useEffect(()=>{

        setTimeout(()=>{
            handleNext()
        },3000)

    },[currentSlide])

    






  return (
    <div className="first-component">

        <div className="left-component">
            {
                LeftData.map(({head,arrow}) => {
                    return <div key={Math.random()} className="head-arrow">

                        <div className="head">{head}</div>
                        <div className="arrows">{arrow}</div>
                    </div>
                })
            }
        </div>

            {/* <BsArrowLeftCircleFill className="arrow arrow-left" onClick={handlePrev}/> */}
        <div className="right-component">
            <div className="array-display">

            {
                RightData.map(({img},index) => {
                    return <div className="image" key={Math.random()}>
                        <img src={img} alt={img} className={currentSlide === index ? "img" : "img hide-current-img"} />
                    </div>
                })
            }

            <span className="circle-indicators">
                {
                    RightData && RightData.length 
                    ? RightData.map((_,index) => {
                        return <button key={index} className={currentSlide === index ? "current-indicator" : "current-indicator inactive-current-indicator"} /* onClick={()=>setCurrentSlide(index)} */></button>
                    })
                    : null
                }
            </span>
            
            </div>

        </div>
      
                {/* <BsArrowRightCircleFill className="arrow arrow-right"  onClick={handleNext}/> */}
    </div>
  )
}

export default FirstComponent
