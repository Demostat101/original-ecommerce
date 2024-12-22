
// import "./NewArrival.css"
// import { CiMobile2 } from "react-icons/ci";
// import { ArrivalData } from "./NewArrivalData";



import { useEffect, useState } from "react"
const customerDetalsFromLocalStorage = JSON.parse(localStorage.getItem("customers")|| "[]")

const NewArrival = () => {

    const [customerDetals, setCustomerDetails]= useState(customerDetalsFromLocalStorage);
    const [name, setName]= useState("")
    const [surname, setSurname]=useState("")
    const [address, setAddress] = useState("")

    const handleSubmit = ()=>{
        const addDetails = {
            id:customerDetals.length+1,
            name:name,
            surname:surname,
            address:address
        }

        setCustomerDetails((prev)=> {
            return [...prev, addDetails]
        })


    }

    useEffect(()=>{
        localStorage.setItem("customers", JSON.stringify(customerDetals))

    },[customerDetals])

    console.log(customerDetals);
    
    



  return (
    <div className="new-arrival-container">


        <form onSubmit={(e)=> e.preventDefault()} action="">
            <input type="text" placeholder="name" value={name} onChange={(e)=> setName(e.target.value)} /> <br />
            <input type="text" placeholder="surname" value={surname} onChange={(e)=> setSurname(e.target.value)}/> <br />
            <input type="text" placeholder="address" value={address} onChange={(e)=> setAddress(e.target.value)} /> <br />
            <button onClick={handleSubmit}>Submit</button>
        </form>

        <div>
            

            <div>
                {customerDetals.map(({name,surname,address},index)=>(
                    <div key={index}>
                        <div>{name}</div>
                        <div>{surname}</div>
                        <div>{address}</div>
                    </div>
                ))}
            </div>
        </div>



        {/* <div className="category-icon-head">
            <CiMobile2 className="mobile-logo"/>
            <div className="category-title">featured</div>
        </div>

        <div className="arrival-head">New Arrival</div>

        <div className="arrival-grid">
            {
                ArrivalData.map((arriveItems,index)=>{
                    return <div>
                        <div className="grid">
                           <img src={arriveItems.img} alt="" />
                           {arriveItems.head}
                           {arriveItems.paragraph}
                           {arriveItems.shop}
                        </div>
                        
                       
                    </div>
                })
            } */}

            {/* <div className="grid1">fffffffffff</div>
            <div className="grid2">ddddddddddd</div>
            <div className="grid3">hhhhhhhhhh</div>
            <div className="grid4">lkkkkkkkkkkk</div> */}
        </div>
    
  )
}

export default NewArrival
