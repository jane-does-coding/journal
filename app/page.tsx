"use client";
import { useState, useEffect } from "react";
import Journal from "@/components/Journal";
import FAQ from "@/components/FAQ";
import Clock from "@/components/Clock";
import { motion, AnimatePresence } from "framer-motion";

export default function Home() {
	// preload images
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

	// mouse tracking
	const [mouse, setMouse] = useState({ x: 0, y: 0 });
	const [hoveringStand, setHoveringStand] = useState(false);

	useEffect(() => {
		const handleMove = (e: MouseEvent) => {
			setMouse({ x: e.clientX, y: e.clientY });
		};

		window.addEventListener("mousemove", handleMove);
		return () => window.removeEventListener("mousemove", handleMove);
	}, []);

	return (
		<div className="bg-black h-screen w-full">
			<div
				className={`h-screen w-screen bg-neutral-200/90 relative overflow-x-hidden overflow-y-hidden ${
					hoveringStand ? "cursor-none" : ""
				}`}
			>
				<div className="bg-yellow-950/15 w-screen h-screen"></div>

				<Clock />

				{/* NEWS STAND */}
				<a
					href="/newspaper"
					onMouseEnter={() => setHoveringStand(true)}
					onMouseLeave={() => setHoveringStand(false)}
					className="absolute cursor-none top-1/2 left-1/2 -translate-y-1/2 -translate-x-1/2"
				>
					<img
						src="/imgs/news-stand.png"
						alt="news stand"
						className="w-[80vw] object-fill scale-x-130 h-[90vh]"
					/>
				</a>

				{/* CUSTOM CURSOR */}
				<AnimatePresence>
					{hoveringStand && (
						<motion.div
							initial={{ opacity: 0, scale: 0.8 }}
							animate={{
								opacity: 1,
								scale: 1,
								left: mouse.x,
								top: mouse.y,
							}}
							exit={{ opacity: 0, scale: 0.8 }}
							transition={{
								left: { type: "spring", stiffness: 120, damping: 20 },
								top: { type: "spring", stiffness: 120, damping: 20 },
								opacity: { duration: 0.2 },
								scale: { duration: 0.2 },
							}}
							className="fixed pointer-events-none z-[999] px-3 py-1 bg-amber-50 border-2 border-dashed text-black text-[2vh] hand-coffe"
							style={{
								x: "-50%",
								y: "-50%",
							}}
						>
							buy a newspaper
						</motion.div>
					)}
				</AnimatePresence>

				<Journal />
				<FAQ />
			</div>
		</div>
	);
}
