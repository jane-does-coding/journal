"use client";
import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { useEffect } from "react";

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

	const goToPage = (newPage: number) => {
		setIsFading(true);

		setTimeout(() => {
			setPage(newPage);

			setTimeout(() => {
				setIsFading(false);
			}, 100);
		}, 300);
	};

	return (
		<div className="h-screen w-screen bg-black relative overflow-x-hidden overflow-y-hidden">
			<div className="bg-yellow-900/15 w-screen h-screen"></div>
			<h1>Lorem ipsum dolor sit amet.</h1>

			{page == 1 && (
				<div className="fixed top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[70vw] drop-shadow-2xl drop-shadow-black">
					<img
						rel="preload"
						src="/imgs/journal-first.png"
						className="w-[70vw]"
						alt=""
					/>
					<img
						rel="preload"
						src="/imgs/pocket-3.png"
						className="w-[26vw] absolute top-0 left-0 z-1"
						alt=""
					/>
					<p
						className={`px-[2.5vw] py-[1.5vh] pt-[2.5vh] bg-neutral-50 w-fit transition-all ease-in-out duration-350 absolute z-3 scribble-box text-[4vh] leading-[4vh] border-dashed border-2 ${
							selectedItem === "dollar"
								? "left-[33%] top-[10%] rotate-0 w-[17vw] hover:scale-[98%] delay-200"
								: "rotate-90  left-[5vw] w-[13vw] top-[20vh]"
						}`}
					>
						5 Dollars
					</p>
					<img
						src="/imgs/dollar.png"
						alt=""
						onClick={() =>
							setSelectedItem(selectedItem == "dollar" ? null : "dollar")
						}
						className={` transition-all duration-350 ease-in-out absolute drop-shadow-2xl drop-shadow-black z-2 cursor-pointer ${
							selectedItem === "dollar"
								? "left-[40%] top-[15%] rotate-0 w-[18vw] hover:scale-[98%]"
								: "rotate-90  left-[10vw] hover:left-[15vw] w-[13vw] top-[-3vh] "
						}`}
					/>
					<p
						className={`px-[2.5vw] py-[1.5vh] pt-[2.5vh] bg-neutral-50 w-fit transition-all ease-in-out duration-350 absolute z-7 scribble-box text-[4vh] leading-[4vh] border-dashed border-2 ${
							selectedItem === "picture"
								? "left-[25%] top-[13%] rotate-0 w-[17vw] hover:scale-[98%] delay-200"
								: "rotate-90  left-[-7vw] w-[13vw] top-[38vh]"
						}`}
					>
						Cloudy Sky
					</p>
					<img
						src="/imgs/picture.png"
						alt=""
						onClick={() =>
							setSelectedItem(selectedItem == "picture" ? null : "picture")
						}
						className={`transition-all duration-350 ease-in-out absolute drop-shadow-xl drop-shadow-black z-6 cursor-pointer ${
							selectedItem === "picture"
								? "left-[33%] top-[20%] rotate-0 hover:scale-[98%] h-[48vh]"
								: "rotate-90  top-[23vh] left-[1vw] hover:left-[5vw] h-[36vh]"
						}`}
					/>
					<img
						rel="preload"
						src="/imgs/pocket-2.png"
						className="w-[16.9vw] absolute top-0 left-0 z-5"
						alt=""
					/>
					{/* 					<div className="w-[13vw] h-[40vh] rounded-[1vh] bg-blue-200 absolute hover:left-[6vw] transition-all duration-250 ease-in-out top-[15vh] left-[2vw] z-6"></div>
					 */}{" "}
					<img
						rel="preload"
						src="/imgs/pocket-1.png"
						className="w-[8vw] absolute top-0 left-0 z-9"
						alt=""
					/>
					<AnimatePresence mode="wait">
						{!isFading && (
							<motion.div
								key={page}
								initial={{ opacity: 0, y: 5 }}
								animate={{ opacity: 1, y: 0 }}
								exit={{ opacity: 0, y: -5 }}
								transition={{ duration: 0.3 }}
								className="absolute top-[5%] right-[12%] h-[90%] w-[36%] py-[0vh] px-[0.5vw] z-0"
							>
								<div className="flex items-center justify-between">
									<p className="text-[2vh] hand-coffe text-left">Page 1</p>
									<p className="text-[2vh] hand-coffe text-left">04/09/2036</p>
								</div>
								<h1 className="text-[5vh] leading-[5vh] scribble-box text-center text-black/80 mt-[1.5vh]">
									The New Beginning
								</h1>
								<div className="flex gap-[1vw] mt-[1.5vh]">
									<img
										src="/imgs/memories.png"
										className="min-w-[13vw] w-[13vw] h-[30vh]"
										alt=""
									/>
									<p className="hand-coffe text-black/80 text-[2.6vh] font-extralight w-full text-left">
										Today, I'm starting a new life, the life where I can be
										myself, the life where I can be free.
									</p>
								</div>
								<p className="text-[2.6vh] hand-coffe text-black/80 mt-[2vh] px-[1.75vw]">
									I'm leaving everything behind, all the memories, and starting
									from a blank page.
								</p>
								<button
									onClick={() => goToPage(page + 1)}
									className="absolute right-[2vw] bottom-[2vh] hand-coffe text-[4vh] cursor-pointer"
								>
									Start {"->"}
								</button>
							</motion.div>
						)}
					</AnimatePresence>
				</div>
			)}
			{page == 2 && (
				<div className="fixed top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[70vw] drop-shadow-2xl drop-shadow-black">
					<img
						rel="preload"
						src="/imgs/journal-open.png"
						className="w-[70vw]"
						alt=""
					/>
					<AnimatePresence mode="wait">
						{!isFading && (
							<motion.div
								key={page}
								initial={{ opacity: 0, y: 5 }}
								animate={{ opacity: 1, y: 0 }}
								exit={{ opacity: 0, y: -5 }}
								transition={{ duration: 0.3 }}
								className="absolute top-[5%] right-[12%] h-[90%] w-[36%] py-[0vh] px-[1vw] z-0"
							>
								<div className="flex items-center justify-between">
									<p className="text-[2vh] hand-coffe text-left">Page 3</p>
									<p className="text-[2vh] hand-coffe text-left">04/09/2036</p>
								</div>
								<h1 className="text-[5vh] leading-[5vh] scribble-box text-center text-black/80 mt-[1vh]">
									Calendar
								</h1>
								<div className="w-full h-[52vh] mt-[1vh] border border-dashed grid grid-cols-2">
									<div className="border-b border-r border-dashed w-full h-full px-[0.75vw] py-[0.75vh] pt-0 pl-0">
										<p className="text-[1.75vh] border-r border-b border-dashed w-fit px-[0.35vw] py-[0.25vh] font-extrabold hand-coffe leading-[2vh]">
											Monday
										</p>
										<p className="text-[2vh] hand-coffe leading-[3vh] pl-[1vw] mt-[1vh]">
											Job Interview
										</p>
									</div>
									<div className="border-b border-dashed w-full h-full px-[0.75vw] py-[0.75vh] pt-0 pl-0">
										<p className="text-[1.75vh] border-r border-b border-dashed w-fit px-[0.35vw] py-[0.25vh] font-extrabold hand-coffe leading-[2vh]">
											Tuesday
										</p>
										<p className="text-[2vh] hand-coffe leading-[3vh] pl-[1vw] mt-[1vh]">
											Volunteering at the animal shelter
										</p>
									</div>
									<div className="border-b border-r border-dashed w-full h-full px-[0.75vw] py-[0.75vh] pt-0 pl-0">
										<p className="text-[1.75vh] border-r border-b border-dashed w-fit px-[0.35vw] py-[0.25vh] font-extrabold hand-coffe leading-[2vh]">
											Wednesday
										</p>
										<p className="text-[2vh] hand-coffe leading-[3vh] pl-[1vw] mt-[1vh]">
											-
										</p>
									</div>
									<div className="border-b border-dashed w-full h-full px-[0.75vw] py-[0.75vh] pt-0 pl-0">
										<p className="text-[1.75vh] border-r border-b border-dashed w-fit px-[0.35vw] py-[0.25vh] font-extrabold hand-coffe leading-[2vh]">
											Thursday
										</p>
										<p className="text-[2vh] hand-coffe leading-[3vh] pl-[1vw] mt-[1vh]">
											Talk with a Client
										</p>
									</div>
									<div className="border-r border-dashed w-full h-full px-[0.75vw] py-[0.75vh] pt-0 pl-0">
										<p className="text-[1.75vh] border-r border-b border-dashed w-fit px-[0.35vw] py-[0.25vh] font-extrabold hand-coffe leading-[2vh]">
											Friday
										</p>
										<p className="text-[2vh] hand-coffe leading-[3vh] pl-[1vw] mt-[1vh]">
											Website Design
										</p>
									</div>
									<div className="w-full h-full px-[0.75vw] py-[0.75vh] pt-0 pl-0">
										<p className="text-[1.75vh] border-r border-b border-dashed w-fit px-[0.35vw] py-[0.25vh] font-extrabold hand-coffe leading-[2vh]">
											Saturday - Sunday
										</p>
										<p className="text-[2vh] hand-coffe leading-[3vh] pl-[1vw] mt-[1vh]">
											-
										</p>
									</div>
								</div>

								<button
									onClick={() => goToPage(page + 1)}
									className="absolute right-[2vw] bottom-[2vh] hand-coffe text-[4vh] cursor-pointer"
								>
									Next {"->"}
								</button>
							</motion.div>
						)}
					</AnimatePresence>
					<AnimatePresence mode="wait">
						{!isFading && (
							<motion.div
								key={page}
								initial={{ opacity: 0, y: 5 }}
								animate={{ opacity: 1, y: 0 }}
								exit={{ opacity: 0, y: -5 }}
								transition={{ duration: 0.3 }}
								className="absolute top-[5%] left-[9%] h-[90%] w-[38%] py-[0vh] px-[1vw]"
							>
								<div className="flex items-center justify-between">
									<p className="text-[2vh] hand-coffe text-left">Page 2</p>
									<p className="text-[2vh] hand-coffe text-left">04/09/2036</p>
								</div>
								<h1 className="text-[5vh] leading-[5vh] scribble-box text-center text-black/80 mt-[1.5vh]">
									Table of Contents
								</h1>

								<div className="flex flex-col px-[1vw]">
									<div className="flex items-center justify-between border-b border-black/40 py-[0.5vh]">
										<p className="hand-coffe text-[2.25vh]">Content</p>
										<p className="hand-coffe text-[2.25vh]">Page</p>
									</div>
									<div className="flex items-center justify-between border-b border-black/40 py-[0.25vh] ">
										<p className="hand-coffe text-[2.5vh] leading-[3.5vh] text-center">
											The new Beginning
										</p>
										<p className="hand-coffe text-[2.5vh] leading-[3.5vh] text-center w-[2vw]">
											01
										</p>
									</div>
									<div className="flex items-center justify-between border-b border-black/40 py-[0.25vh] ">
										<p className="hand-coffe text-[2.5vh] leading-[3.5vh] text-center">
											Table of Contents
										</p>
										<p className="hand-coffe text-[2.5vh] leading-[3.5vh] text-center w-[2vw]">
											02
										</p>
									</div>
									<div className="flex items-center justify-between border-b border-black/40 py-[0.25vh] ">
										<p className="hand-coffe text-[2.5vh] leading-[3.5vh] text-center">
											Calendar
										</p>
										<p className="hand-coffe text-[2.5vh] leading-[3.5vh] text-center w-[2vw]">
											03
										</p>
									</div>
									<div className="flex items-center justify-between border-b border-black/40 py-[0.25vh] ">
										<p className="hand-coffe text-[2.5vh] leading-[3.5vh] text-center blur-[0.5px] opacity-30">
											xxxxxxxxxx
										</p>
										<p className="hand-coffe text-[2.5vh] leading-[3.5vh] text-center w-[2vw] blur-[0.5px] opacity-30">
											04
										</p>
									</div>
									<div className="flex items-center justify-between border-b border-black/40 py-[0.25vh] ">
										<p className="hand-coffe text-[2.5vh] leading-[3.5vh] text-center blur-[0.5px] opacity-30">
											xxxxxxxxxx
										</p>
										<p className="hand-coffe text-[2.5vh] leading-[3.5vh] text-center w-[2vw] blur-[0.5px] opacity-30">
											05
										</p>
									</div>
									<div className="flex items-center justify-between border-b border-black/40 py-[0.25vh] ">
										<p className="hand-coffe text-[2.5vh] leading-[3.5vh] text-center blur-[0.5px] opacity-30">
											xxxxxxxxxx
										</p>
										<p className="hand-coffe text-[2.5vh] leading-[3.5vh] text-center w-[2vw] blur-[0.5px] opacity-30">
											06
										</p>
									</div>
									<div className="flex items-center justify-between border-b border-black/40 py-[0.25vh] ">
										<p className="hand-coffe text-[2.5vh] leading-[3.5vh] text-center blur-[0.5px] opacity-30">
											xxxxxxxxxx
										</p>
										<p className="hand-coffe text-[2.5vh] leading-[3.5vh] text-center w-[2vw] blur-[0.5px] opacity-30">
											07
										</p>
									</div>
									<div className="flex items-center justify-between border-b border-black/40 py-[0.25vh] ">
										<p className="hand-coffe text-[2.5vh] leading-[3.5vh] text-center  blur-[0.5px] opacity-30">
											xxxxxxxxxx
										</p>
										<p className="hand-coffe text-[2.5vh] leading-[3.5vh] text-center w-[2vw] blur-[0.5px] opacity-30">
											08
										</p>
									</div>
									<div className="flex items-center justify-between border-b border-black/40 py-[0.25vh] ">
										<p className="hand-coffe text-[2.5vh] leading-[3.5vh] text-center blur-[0.5px] opacity-30">
											xxxxxxxxxx
										</p>
										<p className="hand-coffe text-[2.5vh] leading-[3.5vh] text-center w-[2vw] blur-[0.5px] opacity-30">
											09
										</p>
									</div>
									<div className="flex items-center justify-between border-b border-black/40 py-[0.25vh] ">
										<p className="hand-coffe text-[2.5vh] leading-[3.5vh] text-center blur-[0.5px] opacity-30">
											xxxxxxxxxx
										</p>
										<p className="hand-coffe text-[2.5vh] leading-[3.5vh] text-center w-[2vw] blur-[0.5px] opacity-30">
											10
										</p>
									</div>
								</div>

								<img
									src="/imgs/spiral.png"
									className="absolute bottom-[3.5vh] right-[2vw] w-[3vw]"
									alt=""
								/>
								<img
									src="/imgs/star1.png"
									className="absolute bottom-[8vh] right-[4vw] w-[3vw]"
									alt=""
								/>
								<img
									src="/imgs/frown.png"
									className="absolute bottom-[2vh] right-[6vw] w-[2.5vw]"
									alt=""
								/>
								<button
									onClick={() => goToPage(page - 1)}
									className="absolute left-[2vw] bottom-[2vh] hand-coffe text-[4vh] cursor-pointer"
								>
									{"<-"} Back
								</button>
							</motion.div>
						)}
					</AnimatePresence>
				</div>
			)}
			{page == 3 && (
				<div className="fixed top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[70vw] drop-shadow-2xl drop-shadow-black">
					<img
						rel="preload"
						src="/imgs/journal-last.png"
						className="w-[70vw]"
						alt=""
					/>
					<div className="w-[20vw] h-[35vh] rounded-[0.5vh] bg-neutral-200 absolute hover:right-[16vw] transition-all duration-250 ease-in-out top-[6vh] right-[12vw] shadow-2xl shadow-black"></div>
					<div className="w-[20vw] h-[55vh] rounded-[0.5vh] bg-neutral-50 absolute hover:right-[16vw] transition-all duration-250 ease-in-out top-[17.5vh] right-[10vw] shadow-2xl shadow-neutral-800/30"></div>

					<img
						rel="preload"
						src="/imgs/back-pocket.png"
						className="w-[27vw] absolute top-0 right-0"
						alt=""
					/>
					<AnimatePresence mode="wait">
						{!isFading && (
							<motion.div
								key={page}
								initial={{ opacity: 0, y: 5 }}
								animate={{ opacity: 1, y: 0 }}
								exit={{ opacity: 0, y: -5 }}
								transition={{ duration: 0.3 }}
								className="absolute top-[5%] left-[9%] h-[90%] w-[36%] py-[1vh] px-[1vw]"
							>
								<p className="text-[2.25vh] hand-coffe text-right">
									04/09/2036
								</p>
								<h1 className="text-[6vh] hand-coffe text-center text-black/80 mt-[1vh]">
									The Title
								</h1>
								<div className="flex gap-[1vw] mt-[1vh]">
									<div className="w-1/2 h-auto bg-black/50"></div>
									<p className="hand-coffe text-[2.75vh] w-1/2 text-right">
										Lorem ipsum dolor sit amet consectetur adipisicing elit.
									</p>
								</div>
								<p className="text-[2.75vh] hand-coffe mt-[3.5vh]">
									Lorem, ipsum dolor sit amet consectetur adipisicing elit.
									Provident, obcaecati. Lorem ipsum dolor sit amet consectetur
									adipisicing elit.
								</p>
								<button
									onClick={() => goToPage(page - 1)}
									className="absolute left-[2vw] bottom-[2vh] hand-coffe text-[4vh] cursor-pointer"
								>
									{"<-"} Back
								</button>
							</motion.div>
						)}
					</AnimatePresence>
				</div>
			)}
		</div>
	);
}
