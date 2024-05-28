import React, { createContext, useContext, useEffect, useState } from 'react'



export const CountdownContext = createContext();

export const passCountdown = ()=>{
    return useContext(CountdownContext)
}




export const CountDown = ({children}) => {
   //COUNT-DOWN FUNCTION 
    const duration = 60*24*60*1000
    const [time, setTime] = useState(duration);
    
    useEffect(()=>{

        setTimeout(()=>{

            setTime(time-1000)

        },1000)

    },[time])

    const getFormattedTime = (millseconds)=>{
        const totalSeconds = parseInt(Math.floor((millseconds/1000)));
        const totalMinutes = parseInt(Math.floor((totalSeconds/60)));
        const totalHours = parseInt(Math.floor((totalMinutes/60)));
        const days = parseInt(Math.floor(totalHours/6));


        const seconds = parseInt(totalSeconds % 60);
        const minutes = parseInt(totalMinutes % 60);
        const hours = parseInt(totalHours % 60);
        
        
        return  `0${days}  :   ${hours} :   ${minutes} :   ${seconds}`
    }
    




  return (
 

        
        <CountdownContext.Provider value={{time,getFormattedTime}}>
             {children}
        </CountdownContext.Provider>
      

  )
}


