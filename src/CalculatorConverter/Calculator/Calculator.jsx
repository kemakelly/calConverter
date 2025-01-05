import { useState } from "react"
import "./Calculator.css"

export default function Calculator() {
  const [value, setValue] = useState("")

  const handleEqual = () => {
    
    try {
      const result = eval(value);
      setValue(result.toString());
    } catch (error) {
      setValue("Error");
    }
  };
  return (
    <div className='calcontainer'>
      <div className="screen">
        <input type="text" value={value}/>
      </div>
    <div className="calccontent">

    <div className="signs">
        <input type="button" value="AC" onClick={e=> setValue("")} className="ac"/>
        <input type="button" value="DC"  onClick={e => setValue(value.slice(0,-1))} className="dc"/>
        <input type="button" value="%" onClick={(e)=> setValue( value + e.target.value)} className="cent"/>
        <input type="button" value="/" className="yellow" onClick={(e)=> setValue( value + e.target.value)}/>
      </div>
      <div className="nums">
        <input type="button" value="7" onClick={(e)=> setValue( value + e.target.value)}/>
        <input type="button" value="8" onClick={(e)=> setValue( value + e.target.value)}/>
        <input type="button" value="9" onClick={(e)=> setValue( value + e.target.value)}/>
        <input type="button" value="*" className="yellow" onClick={(e)=> setValue( value + e.target.value)}/>
      </div>
      <div className="nums">
        <input type="button" value="4" onClick={(e)=> setValue( value + e.target.value)}/>
        <input type="button" value="5" onClick={(e)=> setValue( value + e.target.value)}/>
        <input type="button" value="6" onClick={(e)=> setValue( value + e.target.value)}/>
        <input type="button" value="-" className="yellow" onClick={(e)=> setValue( value + e.target.value)}/>
      </div>
      <div className="nums">
        <input type="button" value="1" onClick={(e)=> setValue( value + e.target.value)}/>
        <input type="button" value="2" onClick={(e)=> setValue( value + e.target.value)}/>
        <input type="button" value="3" onClick={(e)=> setValue( value + e.target.value)}/>
        <input type="button" value="+" className="yellow" onClick={(e)=> setValue( value + e.target.value)}/>
      </div>
      <div className="num">
        <input type="button" value="0" className="zero" onClick={(e)=> setValue( value + e.target.value)}/>
        <input type="button" value="." className="dot" onClick={(e)=> setValue( value + e.target.value)}/>
        <input type="button" value="=" className="yellow" onClick={handleEqual}/>
      </div>
    </div>
      
     
    </div>
  )
}
