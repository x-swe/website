import React from "react";
import BlackIcon from "../logos/BlackIcon";
//import { useState,useEffect } from "react";


function NavBar(){

	//let [fill,setFill] = useState("none");

	//const MouseCtrl = e => {
	//	setFill("white")

	//	setTimeout(() => {
	//		setFill("none");
	//	},500)
	//}

	//useEffect(() => {

	//	document.addEventListener("mouseover",MouseCtrl)
	//},[])

	return (
		<header className="h-15 w-full flex items-center fixed left-0 top-0 bg-black">
			<div className="">
			<BlackIcon></BlackIcon>
			</div>
			<div className="w-full">
				<a className="text-slate-300 hover:text-white" href="">
			Home 
			</a>
				<a className="ml-20 text-slate-300 hover:text-white" href="">
			GitHub
			</a>
				<a className="ml-20 text-slate-300 hover:text-white" href="">
			Community
			</a>
				<a className="ml-20 text-slate-300 hover:text-white" href="">
			Contact us
			</a>
			</div>
		</header>
	)
}

export default NavBar;
