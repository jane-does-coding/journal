"use client";
import { useState } from "react";
import { useEffect } from "react";
import Journal from "@/components/Journal";
import FAQ from "@/components/FAQ";

export default function Home() {
	const total_pages: number = 3;
	const [page, setPage] = useState(1);
	const [selectedItem, setSelectedItem] = useState<string | null>(null);
	const [isFading, setIsFading] = useState(false);

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
			<div className="h-screen w-screen bg-black relative overflow-x-hidden overflow-y-hidden">
				<div className="bg-yellow-900/15 w-screen h-screen"></div>
				<Journal />
				<FAQ />
			</div>
		</div>
	);
}
