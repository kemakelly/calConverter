import { Outlet } from "react-router-dom"
import CalculatorConverter from "../CalculatorConverter"
import "./Rootlayout.css"

export default function Rootlayout() {
  return (
    <div className='Rootlayout'>
      <CalculatorConverter/>
       
    </div>
  )
}
