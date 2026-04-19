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
			<div className="h-screen w-screen bg-neutral-50/90 relative overflow-x-hidden overflow-y-hidden">
				<div className="bg-yellow-950/15 w-screen h-screen"></div>
				<Clock />
				<Journal />

				<FAQ />
			</div>
		</div>
	);
}
