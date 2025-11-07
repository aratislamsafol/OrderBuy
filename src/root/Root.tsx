import { Outlet } from "react-router-dom"

import Footer from "../components/common/Footer"
import Navbar from "../components/navbar/Navbar"

const Root = () => {
  return (
    <div className="max-w-[1440px] mx-auto">
        <Navbar/>
        <Outlet/>
        <Footer/>
    </div>
  )
}

export default Root
