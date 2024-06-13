import React from "react";
import TwiterIcon from "../logos/TwiterIcon";

function BannerBody(){

	return (
		<div className="h-1/5 mt-20 flex flex-col items-center justify-center mb-60">
			
			<div className="flex flex-col items-center px-2 py-2">
			<div className="mb-4">
				<h1 className="text-white font-sans font-bold text-4xl">Software Engineering Community</h1>
			</div>
			<div className="flex">
				<h2 className="text-white font-sans font-semibold text-xl mr-3">Code. Build. Share </h2> 
				<p className="text-slate-300 text-xl">Empowering developers one line of code at a time.</p>
			</div>
			</div>
			
			<div className="h-40 w-250 mt-10 font-sans text-xl text-slate-300">
			<div className="flex">
				<p className="text-slate-300 font-sans mr-3">A global hub on </p>
				<div className="h-8 w-5 flex items-center justify-center mr-3"><TwiterIcon></TwiterIcon></div>
				<p className="text-slate-300 font-sans">connecting tech enthusiasts everywhere.</p>
			</div>
			</div>
		</div>
	)
}

export default BannerBody;
