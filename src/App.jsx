
import { createBrowserRouter, createRoutesFromElements, RouterProvider, Route } from 'react-router-dom'
import Rootlayout from './CalculatorConverter/Root/Rootlayout'
import Calculator from './CalculatorConverter/Calculator/Calculator'

import Converter from "./CalculatorConverter/Converter/Converter";

export default function App() {
  const router = createBrowserRouter(createRoutesFromElements(
    <Route path='/' element={<Rootlayout/>}>
      <Route index element={<Calculator/>}/>
      <Route path='Calculator' element={<Calculator/>}/>
      <Route path='Converter' element={<Converter/>}/>

    </Route>

  ))
  return (
    <RouterProvider router ={router}/>
  )
}


