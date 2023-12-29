
import { Link } from "react-router-dom"

export default function Navbar(){

    let Links =[
        {name: "Start" , link: "#start"},
        {name: "About" , link: "#about"},
        {name: "Work" , link: "#work"},
        {name: "Lab" , link: "#lab"},
        {name: "Contact" , link: "#contact"},
    ]
    return(
        <header className="fixed top-0 left-0 right-0 z-50">
            <nav className="container flex justify-between items-center h-24 m-auto">
                <a href="#" className="logo text-white font-bold text-3xl flex items-center gap-1"><span className="text-[--main] text-2xl font-extrabold">&lt;</span>AboReda <span className="font-extrabold text-[--main] text-2xl">/&gt;</span> </a>
                <ul className="flex gap-10">
              
                    {
                        Links.map((link)=>(
                            <li className="text-gray-500 font-bold text-lg">
                                <a href={link.link} className="text-white">{link.name}</a> /&gt;
                                </li>
                        ))
                    }
                
                </ul>
            </nav>

        </header>
    )
}
