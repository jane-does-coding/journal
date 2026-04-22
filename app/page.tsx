"use client";
import { useState, useEffect, useRef } from "react";
import Journal from "@/components/Journal";
import FAQ from "@/components/FAQ";
import Clock from "@/components/Clock";
import { motion, AnimatePresence } from "framer-motion";
import Cursor from "@/components/Cursor";

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

	const [mouse, setMouse] = useState({ x: 0, y: 0 });
	const [hoveringStand, setHoveringStand] = useState(false);
	const [cursorBoosted, setCursorBoosted] = useState(false);

	const [smoothedMouse, setSmoothedMouse] = useState({ x: 0, y: 0 });
	const rafRef = useRef<number>(0);
	const targetMouseRef = useRef({ x: 0, y: 0 });

	useEffect(() => {
		const handleMove = (e: MouseEvent) => {
			setMouse({ x: e.clientX, y: e.clientY });
			targetMouseRef.current = { x: e.clientX, y: e.clientY };
		};

		window.addEventListener("mousemove", handleMove);
		return () => window.removeEventListener("mousemove", handleMove);
	}, []);

	useEffect(() => {
		const animate = () => {
			setSmoothedMouse((prev) => ({
				x: prev.x + (targetMouseRef.current.x - prev.x) * 0.1,
				y: prev.y + (targetMouseRef.current.y - prev.y) * 0.1,
			}));
			rafRef.current = requestAnimationFrame(animate);
		};

		rafRef.current = requestAnimationFrame(animate);
		return () => {
			if (rafRef.current) cancelAnimationFrame(rafRef.current);
		};
	}, []);

	return (
		<div className="bg-black h-screen w-full">
			<Cursor boosted={cursorBoosted} hidden={hoveringStand} />{" "}
			<div
				className={`h-screen w-screen bg-neutral-200/90 relative overflow-x-hidden overflow-y-hidden ${
					hoveringStand ? "cursor-none" : ""
				}`}
			>
				<div className="bg-yellow-950/15 w-screen h-screen"></div>

				<Clock setCursorBoosted={setCursorBoosted} />

				<a
					href="/newspaper"
					onMouseEnter={() => setHoveringStand(true)}
					onMouseLeave={() => setHoveringStand(false)}
					className="absolute cursor-none top-1/2 left-1/2 -translate-y-1/2 -translate-x-1/2"
				>
					<img
						src="/imgs/news-stand.png"
						alt="news stand"
						className="w-[80vw] object-fill scale-x-120 h-[90vh]"
					/>
				</a>

				<AnimatePresence>
					{hoveringStand && (
						<motion.div
							initial={{ opacity: 0, scale: 0.8, y: -20 }}
							animate={{ opacity: 1, scale: 1, y: 0 }}
							exit={{ opacity: 0, scale: 0.8, y: -20 }}
							transition={{
								opacity: { duration: 0.2 },
								scale: {
									duration: 0.2,
									type: "spring",
									stiffness: 800,
									damping: 20,
								},
								y: {
									duration: 0.2,
									type: "spring",
									stiffness: 800,
									damping: 20,
								},
							}}
							className="fixed pointer-events-none z-999 px-4 py-2 bg-amber-50 border-2 border-dashed text-black hand-coffe text-[2vh] font-medium shadow-lg rounded-md whitespace-nowrap"
							style={{
								left: smoothedMouse.x,
								top: smoothedMouse.y - 30,
								transform: "translate(-50%, -50%)",
								willChange: "left, top",
							}}
						>
							buy a newspaper
						</motion.div>
					)}
				</AnimatePresence>

				<Journal setCursorBoosted={setCursorBoosted} />
				<FAQ setCursorBoosted={setCursorBoosted} />
			</div>
		</div>
	);
}
