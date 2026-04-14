"use client";
import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { useEffect } from "react";

export default function Home() {
	const total_pages: number = 3;
	const [page, setPage] = useState(1);
	const [displayPage, setDisplayPage] = useState(1);
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
						className="w-[26vw] absolute top-0 left-0"
						alt=""
					/>
					<img
						src="/imgs/dollar.png"
						alt=""
						className="hover:left-[15vw] transition-all duration-250 ease-in-out top-[-3vh] left-[10vw] rotate-90 absolute w-[13vw] drop-shadow-2xl drop-shadow-black"
					/>
					<img
						src="/imgs/picture.png"
						alt=""
						className="hover:left-[12vw] transition-all duration-250 ease-in-out top-[34vh] left-[7vw] absolute h-[36vh] drop-shadow-xl drop-shadow-black"
					/>
					<img
						rel="preload"
						src="/imgs/pocket-2.png"
						className="w-[16.9vw] absolute top-0 left-0"
						alt=""
					/>
					<div className="w-[13vw] h-[40vh] rounded-[1vh] bg-blue-200 absolute hover:left-[6vw] transition-all duration-250 ease-in-out top-[15vh] left-[2vw]"></div>
					<img
						rel="preload"
						src="/imgs/pocket-1.png"
						className="w-[8vw] absolute top-0 left-0"
						alt=""
					/>
					<AnimatePresence mode="wait">
						{!isFading && (
							<motion.div
								key={displayPage}
								initial={{ opacity: 0, y: 5 }}
								animate={{ opacity: 1, y: 0 }}
								exit={{ opacity: 0, y: -5 }}
								transition={{ duration: 0.3 }}
								className="absolute top-[5%] right-[12%] h-[90%] w-[36%] py-[1vh] px-[1vw]"
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
								key={displayPage}
								initial={{ opacity: 0, y: 5 }}
								animate={{ opacity: 1, y: 0 }}
								exit={{ opacity: 0, y: -5 }}
								transition={{ duration: 0.3 }}
								className="absolute top-[5%] right-[12%] h-[90%] w-[36%] py-[1vh] px-[1vw]"
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
								key={displayPage}
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
								key={displayPage}
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
