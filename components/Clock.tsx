"use client";
import React, { useState, useEffect } from "react";

const Clock = () => {
	const [timeOpen, setTimeOpen] = useState(false);
	const [now, setNow] = useState(new Date());

	// update every second
	useEffect(() => {
		const interval = setInterval(() => {
			setNow(new Date());
		}, 1000);

		return () => clearInterval(interval);
	}, []);

	// formatting
	const dayName = now.toLocaleDateString("en-US", { weekday: "short" });
	const dayNumber = now.getDate().toString().padStart(2, "0");
	const monthNumber = (now.getMonth() + 1).toString().padStart(2, "0");

	const hours = now.getHours().toString().padStart(2, "0");
	const minutes = now.getMinutes().toString().padStart(2, "0");

	return (
		<div>
			<div
				onClick={() => setTimeOpen(!timeOpen)}
				className={`absolute z-80 transition-all ease-in-out duration-350 cursor-pointer drop-shadow-2xl drop-shadow-black/60 ${
					timeOpen
						? "scale-200 hover:scale-[198%] top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2"
						: "scale-100 hover:scale-[98%] top-[1vh] left-[2vh]"
				}`}
			>
				<img src="/imgs/time.png" className="w-[16vw]" alt="" />
				<div className="flex w-full bg-green-200/0 absolute top-[27%] left-0 z-20 px-[1.5vw]">
					<p className="w-[27%] text-center text-[2vh] scribble-box tracking-[-1px]">
						{dayName}
					</p>
					<p className="w-[33%] text-center text-[2vh] scribble-box tracking-[-1px]">
						Day
					</p>
					<p className="w-[40%] text-center text-[2vh] scribble-box tracking-[-1px] pr-[2%]">
						Time
					</p>
				</div>
				<div className="flex w-full bg-green-200/0 absolute top-[51%] left-0 z-20 px-[1.5vw]">
					<p className="w-[27%] text-center text-[2.85vh] pt-[0%] scribble-box tracking-[-1px]">
						{monthNumber}
					</p>
					<p className="w-[33%] text-center text-[2.85vh] pt-[0%] scribble-box tracking-[-1px]">
						{dayNumber}
					</p>
					<p className="w-[40%] text-center text-[2.5vh] scribble-box tracking-[-1px] pr-[2%]">
						{hours} <span className="font-sans">:</span> {minutes}
					</p>
				</div>

				{/* <p className="absolute top-[51%] left-[13.75%] text-[3vh] scribble-box tracking-[-1px]">
					{monthNumber}
				</p>

				<p className="absolute top-[51%] left-[39%] text-[3vh] scribble-box tracking-[-1px]">
					{dayNumber}
				</p>

				<p className="absolute top-[50.5%] left-[63%] text-[2.7vh] scribble-box tracking-[-1.5px]">
					{hours} <span className="font-sans">:</span> {minutes}
				</p> */}
			</div>
		</div>
	);
};

export default Clock;
