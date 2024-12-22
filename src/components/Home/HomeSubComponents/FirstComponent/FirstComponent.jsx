import "./FirstComponent.css";
import { LeftData, RightData } from "./ArrayData";
import React, { useEffect, useState } from 'react';

const FirstComponent = () => {
    const [currentSlide, setCurrentSlide] = useState(0);

    const handleNext = () => {
        setCurrentSlide((prevSlide) => (prevSlide + 1) % RightData.length); // Loop through images
    };

    useEffect(() => {
        const timer = setTimeout(handleNext, 3000); // Auto slide every 3 seconds
        return () => clearTimeout(timer); // Cleanup on every render
    }, [currentSlide]);

    return (
        <div className="first-component">
            <div className="left-component">
                {LeftData.map(({ head, arrow }, index) => (
                    <div key={index} className="head-arrow">
                        <div className="head">{head}</div>
                        <div className="arrows">{arrow}</div>
                    </div>
                ))}
            </div>

            <div className="right-component">
                <div className="array-display">
                    {/* Display the current and next image */}
                    {RightData.slice(currentSlide, currentSlide + 2).map(({ img }, index) => (
                        <div className="image" key={index}>
                            <img src={img} alt={img} className="img" />
                        </div>
                    ))}
                    {/* If we're at the end, display the first image alongside the last image */}
                    {currentSlide === RightData.length - 1 && (
                        <div className="image">
                            <img src={RightData[0].img} alt={RightData[0].img} className="img" />
                        </div>
                    )}
                </div>

                <span className="circle-indicators">
                    {RightData.map((_, index) => (
                        <button
                            key={index}
                            className={currentSlide === index ? "current-indicator" : "current-indicator inactive-current-indicator"}
                            onClick={() => setCurrentSlide(index)} // Allow manual selection
                        />
                    ))}
                </span>
            </div>
        </div>
    );
};

export default FirstComponent;




// import "./FirstComponent.css"
// import { LeftData } from "./ArrayData"
// import { RightData } from "./ArrayData"
// // import { BsArrowLeftCircleFill } from "react-icons/bs"
// // import { BsArrowRightCircleFill } from "react-icons/bs"


// import React, { useEffect, useState } from 'react'

// const FirstComponent = () => {

//     const [currentSlide, setCurrentSlide] = useState(0);

//     // const handlePrev = () => {

//     //     setCurrentSlide(currentSlide === 0 ? RightData.length - 1 : currentSlide - 1)
        
//     // }

//     const handleNext = () => {
       
//         setCurrentSlide(currentSlide === RightData.length - 1 ? 0 : currentSlide + 1)

//     }

//     useEffect(()=>{

//         setTimeout(()=>{
//             handleNext()
//         },3000)

//     },[currentSlide])

    






//   return (
//     <div className="first-component">

//         <div className="left-component">
//             {
//                 LeftData.map(({head,arrow}) => {
//                     return <div key={Math.random()} className="head-arrow">

//                         <div className="head">{head}</div>
//                         <div className="arrows">{arrow}</div>
//                     </div>
//                 })
//             }
//         </div>

//             {/* <BsArrowLeftCircleFill className="arrow arrow-left" onClick={handlePrev}/> */}
//         <div className="right-component">
//             <div className="array-display">

//             {
//                 RightData.map(({img},index) => {
//                     return <div className="image" key={Math.random()}>
//                         <img src={img} alt={img} className={currentSlide === index ? "img" : "img hide-current-img"} />
//                     </div>
//                 })
//             }

//             <span className="circle-indicators">
//                 {
//                     RightData && RightData.length 
//                     ? RightData.map((_,index) => {
//                         return <button key={index} className={currentSlide === index ? "current-indicator" : "current-indicator inactive-current-indicator"} /* onClick={()=>setCurrentSlide(index)} */></button>
//                     })
//                     : null
//                 }
//             </span>
            
//             </div>

//         </div>
      
//                 {/* <BsArrowRightCircleFill className="arrow arrow-right"  onClick={handleNext}/> */}
//     </div>
//   )
// }

// export default FirstComponent
