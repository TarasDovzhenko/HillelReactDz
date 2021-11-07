import React, {useState}  from "react"

function Dates() {
    let [isOpen, setIsOpen] = useState(false);
   let [random, setRandom] = useState("0")
   function handleClick() {
        setRandom((Math.floor(Math.random() * 100)))
    
   }
    return (
        
    <div>
        <form >
        <input onChange={()=> setIsOpen(!isOpen)} type="checkbox" name="" id="Date" />
        <label htmlFor="Date">get Date</label>
        </form>
        {isOpen && <h2>{(new Date()).getDate()}</h2>}
       <button onClick= {handleClick}>Get random</button>
       
      <h3>{random}</h3>
        
    </div>)
}
export default Dates