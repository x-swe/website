import React from "react";
import img1 from "../images/person1.jpg";
import img2 from "../images/person2.jpg";
import img3 from "../images/person3.jpg";
import img4 from "../images/person4.jpg";
import img5 from "../images/person5.jpg";
import img6 from "../images/person6.jpg";

import tail_img from "../images/tailwind.png";
import github_img from "../images/github.png";
import vercel_img from "../images/vercel.jpg";


function MiddleSection(){

	return (
	<div className="h-fit flex flex-col items-center justify-center mb-40">
		
		<div className="h-fit w-fit flex items-start justify-center rounded-3xl py-2 px-2 mb-6">
		<h1 className="text-white font-sans text-4xl font-bold">Our Community Moderators</h1>
		</div>
		
		<section className="grid lg:grid-cols-3 gap-10 sm:grid-cols-1  mt-20">
			<div className="h-40 w-40 flex flex-col items-center justify-center">
				<img src={img1} className="h-24 w-24 rounded-full object-cover"></img>
				<h2 className="text-white font-bold">Jimmy</h2>
				<p className="text-slate-300">Content Lead</p>
			</div>
			<div className="h-40 w-40 flex flex-col items-center justify-center">
				<img src={img2} className="h-24 w-24 rounded-full object-cover"></img>
				<h2 className="text-white font-bold">Morgan</h2>
				<p className="text-slate-300">Lead Dev</p>
			</div>
			<div className="h-40 w-40 flex flex-col items-center justify-center">
				<img src={img3} className="h-24 w-24 rounded-full object-cover"></img>
				<h2 className="text-white font-bold">Anderson</h2>
				<p className="text-slate-300">Social Media Lead</p>
			</div>
			<div className="h-40 w-40 flex flex-col items-center justify-center mt-8">
				<img src={img4} className="h-24 w-24 rounded-full object-cover"></img>
				<h2 className="text-white font-bold">Sally</h2>
				<p className="text-slate-300">Backend Dev</p>
			</div>
			<div className="h-40 w-40 flex flex-col items-center justify-center mt-8">
				<img src={img5} className="h-24 w-24 rounded-full object-cover"></img>
				<h2 className="text-white font-bold">Jasmine</h2>
				<p className="text-slate-300">Frontend Dev</p>
			</div>
			<div className="h-40 w-40 flex flex-col items-center justify-center mt-8">
				<img src={img6} className="h-24 w-24 rounded-full object-cover"></img>
				<h2 className="text-white font-bold">Rose</h2>
				<p className="text-slate-300">Designer</p>
			</div>
		</section>


		<div className="h-fit w-fit flex items-start justify-center rounded-3xl py-2 px-2 mb-20 mt-40">	
		<h1 className="text-white font-sans text-4xl font-bold">Our Communtiy Partners</h1>
		</div>
		
		<section className="gap-14 flex items-center lg:flex-row sm:flex-col justify-center">
		
		<div className="h-30 w-30 flex flex-col items-center justify-center">
			<img src={github_img} className="h-20 w-20 rounded-full object-cover"></img>
			<h2 className="text-white font-bold">GitHub</h2>
		</div>
		<div className="h-30 w-30 flex flex-col items-center justify-center">
			<img src={vercel_img} className="h-20 w-20 rounded-full"></img>
			<h2 className="text-white font-bold">Vercel</h2>
		</div>
		<div className="h-30 w-30 flex flex-col items-center justify-center">
			<img src={tail_img} className="h-20 w-20 rounded-full object-cover"></img>
			<h2 className="text-white font-bold">Tailwind CSS</h2>
		</div>
		</section>
	</div>
	)
}

export default MiddleSection;
