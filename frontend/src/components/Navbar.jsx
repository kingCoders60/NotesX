import React from 'react'
import {Link} from "react-router"
import {PlusIcon} from "lucide-react"
// import Themes from "./Themes"
const Navbar = () => {
  return (
    <header className="bg-base-300 boder-b border-base-container/10">
        <div className="mx- auto max-w-6xl p-4">
            <div className="flex item-center justify-between">
                <h1 className="text-3xl font-bold font-mono text-primary tracking-tight text-green-500">ThinkBeyond</h1>
                <div className="flex item-center gap-4">
                    <Link to={"/create"} className="btn btn-primary bg-green-500 ">
                    <PlusIcon className="size-5"/>
                    <span>New Note</span>
                    </Link>
                    {/* <Themes/> */}
                </div>
            </div>
        </div>
    </header>
  )
}

export default Navbar
