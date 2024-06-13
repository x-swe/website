import React from "react";
import GithubIcon from "../logos/GithubIcon";
import DiscordIcon from "../logos/DiscordIcon";
import InstagramIcon from "../logos/InstagramIcon";
import FacebooIcon from "../logos/FacebookIcon";

function BodyFooter(){

	return(
		<>
			<footer className="bg-black h-40 w-full mt-6 flex flex-col">
				<div className="h-20 w-full gap-14 flex items-center justify-center">
				<DiscordIcon></DiscordIcon>
				<GithubIcon></GithubIcon>
				<FacebooIcon></FacebooIcon>
				<InstagramIcon></InstagramIcon>
			</div>
			<div className="h-20 w-full flex flex-col items-center justify-center">
				<h2 className="text-white font-sans font-semibold">Copyright &copy;</h2>
				<p className="text-white font-sans">All rights are reserved under the copyright of the community</p>
			</div>
			</footer>
		</>
	)
}

export default BodyFooter;
