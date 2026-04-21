"use client";
import { useState } from "react";
import { useEffect } from "react";
import Journal from "@/components/Journal";
import FAQ from "@/components/FAQ";
import Clock from "@/components/Clock";

export default function Home() {
	useEffect(() => {
		const images = [
			"/imgs/journal-first.png",
			"/imgs/journal-open.png",
			"/imgs/journal-last.png",
			"/imgs/pocket-1.png",
			"/imgs/pocket-2.png",
			"/imgs/pocket-3.png",
			"/imgs/back-pocket.png",
			"/imgs/dollar.png",
			"/imgs/picture.png",
		];

		images.forEach((src) => {
			const img = new Image();
			img.src = src;
		});
	}, []);

	return (
		<div className="bg-black h-screen w-full">
			<div className="h-screen w-screen bg-neutral-200/90 relative overflow-x-hidden overflow-y-hidden">
				<div className="bg-yellow-950/15 w-screen h-screen"></div>
				<Clock />
				<img
					src="/imgs/news-stand.png"
					alt="idk"
					className="w-[65vw] h-[90vh] absolute top-1/2 left-1/2 -translate-y-1/2 -translate-x-1/2 "
				/>
				{/* 	<img
					src="/imgs/journal-closed.png"
					alt="idk"
					className="w-[10vw] absolute bottom-[2vh] right-[2vh] hover:scale-[98%] transition-all ease-in-out duration-350 cursor-pointer "
				/> */}
				<Journal />
				<FAQ />
			</div>
		</div>
	);
}
