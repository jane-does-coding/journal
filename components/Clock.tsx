"use client";
import React, { useState, useEffect } from "react";

const Clock = ({ setCursorBoosted }: any) => {
	const [timeOpen, setTimeOpen] = useState(false);
	const [now, setNow] = useState(new Date());

	useEffect(() => {
		const interval = setInterval(() => {
			setNow(new Date());
		}, 1000);

		return () => clearInterval(interval);
	}, []);

	const dayNumber = now.getDate().toString().padStart(2, "0");
	const monthNumber = (now.getMonth() + 1).toString().padStart(2, "0");
	const hours = now.getHours().toString().padStart(2, "0");
	const minutes = now.getMinutes().toString().padStart(2, "0");

	return (
		<div>
			<div
				onClick={() => setTimeOpen(false)}
				className={`fixed top-0 left-0 w-full h-screen z-40
				bg-neutral-700/10 backdrop-blur-[3px]
				transition-all duration-500 ease-in-out
				${
					timeOpen
						? "opacity-100 pointer-events-auto"
						: "opacity-0 pointer-events-none"
				}`}
			/>

			<div
				onMouseEnter={() => setCursorBoosted(true)}
				onMouseLeave={() => setCursorBoosted(false)}
				onClick={() => setTimeOpen(!timeOpen)}
				className={`absolute z-50 transition-all ease-in-out duration-350 cursor-pointer drop-shadow-2xl drop-shadow-black/0 ${
					timeOpen
						? "scale-220 hover:scale-[217%] top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2"
						: "scale-100 hover:scale-[98%] top-[1vh] left-[2vh]"
				}`}
			>
				<img src="/imgs/time.png" className="w-[16vw]" alt="" />

				<div className="flex w-full absolute top-[27%] left-0 z-20 px-[1.5vw]">
					<p className="w-[27%] text-center text-[2vh] scribble-box tracking-[-1px]">
						MM
					</p>
					<p className="w-[33%] text-center text-[2vh] scribble-box tracking-[-1px]">
						DD
					</p>
					<p className="w-[40%] text-center text-[2vh] scribble-box tracking-[-1px] pr-[2%]">
						Time
					</p>
				</div>

				<div className="flex w-full absolute top-[51%] left-0 z-20 px-[1.5vw]">
					<p className="w-[27%] text-center text-[2.85vh] scribble-box tracking-[-1px]">
						{monthNumber}
					</p>
					<p className="w-[33%] text-center text-[2.85vh] scribble-box tracking-[-1px]">
						{dayNumber}
					</p>
					<p className="w-[40%] text-center text-[2.5vh] scribble-box tracking-[-1px] pr-[2%]">
						{hours} <span className="font-sans">:</span> {minutes}
					</p>
				</div>
			</div>
		</div>
	);
};

export default Clock;
