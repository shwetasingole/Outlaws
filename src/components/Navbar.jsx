import React, { useState } from "react";
function Navbar(props) {
    const [isMenuOpen, setIsMenuOpen] = useState(false);
    return (
        <div className="flex justify-between items-center align-middle py-7 px-9">
            <h1 className="text-2xl font-semibold font-playfair
             ">{props.title}</h1>
            <div className="flex gap-8 ">
                <ul className="hidden md:flex">
                    <li className="flex gap-8 py-2.5 font-semibold text-black">
                        <a href="#" className="hover:text-navitems ">{props.navitem1}</a>
                        <a href="#" className="hover:text-navitems ">{props.navitem2}</a>
                        <a href="#" className="hover:text-navitems ">{props.navitem3}</a>
                        <a href="#" className="hover:text-navitems ">{props.navitem4}</a>
                        <a href="#" className="hover:text-navitems ">{props.navitem5}</a>
                    </li>
                </ul>

                <button className="bg-btnbg hidden md:block py-2.5 px-5 font-semibold rounded shadow ">{props.button}</button>
                <div className="md:hidden " ><box-icon name='menu' color='#edb970' onClick={() => setIsMenuOpen(!isMenuOpen)} ></box-icon></div>
                <div className={`absolute md:hidden top-24 left-0 w-full bg-hero flex flex-col p-3 shadow items-center gap-6 font-semibold transform transition-transform ${isMenuOpen ? "opacity-100" : "opacity-0"}`} >
                    <a href="#" className=" rounded p-2 hover:bg-navitems hover:text-black w-full">{props.navitem1}</a>
                    <a href="#" className=" rounded p-2 hover:bg-navitems hover:text-black w-full">{props.navitem2}</a>
                    <a href="#" className=" rounded p-2 hover:bg-navitems hover:text-black w-full">{props.navitem3}</a>
                    <a href="#" className=" rounded p-2 hover:bg-navitems hover:text-black w-full">{props.navitem4}</a>
                    <a href="#" className=" rounded p-2 hover:bg-navitems hover:text-black w-full">{props.navitem5}</a>
                    <a href="#" className="rounded p-2 hover:bg-btnbg hover:text-black w-full ">{props.button}</a>
                </div>
            </div>




        </div>
    );
}
export default Navbar;