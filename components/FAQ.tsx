"use client";

import { useState } from "react";

export default function FAQ() {
	const [isOpen, setIsOpen] = useState(false);
	const [currentTab, setCurrentTab] = useState<"objective" | "previous">(
		"objective"
	);

	return (
		<div className="">
			<button
				onClick={() => setIsOpen(!isOpen)}
				className="border-2 border-dashed h-[7vh] w-[7vh] fixed bg-amber-50 top-[2vh] right-[2vh] hand-coffe text-[5vh] leading-[5vh] z-[99]"
			>
				?
			</button>

			<div
				className={`w-full h-screen fixed top-0 left-0 bg-neutral-700/10 backdrop-blur-[3px]
				transition-all duration-500 ease-out
				${
					isOpen
						? "opacity-100 pointer-events-auto"
						: "opacity-0 pointer-events-none"
				}`}
			>
				<div
					className={`fixed top-1/2 left-1/2 -translate-x-1/2 w-[50vw]
					flex flex-col items-center justify-center gap-0
					transition-all duration-500 ease-out
					${isOpen ? "-translate-y-1/2 opacity-100" : "-translate-y-[40%] opacity-0"}`}
				>
					<div className="border-dashed border-2 bg-amber-50 h-fit w-full flex flex-col transition-all duration-500 ease-out">
						<div className="flex border-b-2 border-dashed py-[1.5vh] px-[1vw] gap-[1vw] items-center justify-center">
							<p className="hand-coffe text-[2.25vh]">3/10</p>
							<div className="h-[2.5vh] w-full bg-neutral-500/30 rounded-full">
								<div className="w-[30%] bg-neutral-900 h-full rounded-full"></div>
							</div>
						</div>

						<div className="flex w-full items-center justify-center">
							<div className="w-1/3 border-r-2 border-dashed">
								<p className="hand-coffe text-[2.5vh] py-[1.5vh] px-[1vw]">
									Section 3
								</p>
							</div>
							<div className="w-2/3">
								<p className="hand-coffe text-[2.5vh] py-[1.5vh] px-[1vw]">
									The New Beginning
								</p>
							</div>
						</div>
					</div>

					<div
						className={`mt-[2vh] w-full gap-[0.75vw] flex items-end justify-start h-[8vh]
						transition-all duration-500 ease-out
						${isOpen ? "opacity-100 translate-y-0" : "opacity-0 translate-y-2"}`}
						style={{
							transitionDelay: isOpen ? "100ms" : "0ms",
						}}
					>
						<button
							onClick={() => setCurrentTab("objective")}
							className={`w-fit px-[2vw] ${
								currentTab == "objective"
									? "h-[7.5vh] opacity-100 bg-amber-50"
									: "h-[5vh] hover:h-[6vh] text-neutral-500 bg-neutral-300"
							} duration-300 transition-all cursor-pointer ease-in-out border-dashed border-2 border-b-0 flex items-start pt-[0.75vh] justify-center`}
						>
							<p className="hand-coffe text-[2.5vh]">Objective</p>
						</button>

						<button
							onClick={() => setCurrentTab("previous")}
							className={`w-fit px-[2vw] ${
								currentTab == "previous"
									? "h-[7.5vh] opacity-100 bg-amber-50"
									: "h-[5vh] hover:h-[6vh] text-neutral-500 bg-neutral-300"
							} duration-300 transition-all cursor-pointer ease-in-out border-dashed border-2 border-b-0 flex items-start pt-[0.75vh] justify-center`}
						>
							<p className="hand-coffe text-[2.5vh]">Previous Tasks</p>
						</button>
					</div>

					<div
						className={`border-dashed border-2 bg-amber-50 h-[55vh] w-full
						transition-all duration-500 ease-out
						${isOpen ? "opacity-100 translate-y-0" : "opacity-0 translate-y-2"}`}
						style={{
							transitionDelay: isOpen ? "200ms" : "0ms",
						}}
					>
						<div className="flex w-full h-full items-center justify-center">
							{currentTab === "objective" ? (
								<div className="w-2/3 border-r-2 border-dashed h-full flex flex-col pt-0">
									<h3 className="scribble-box text-[4vh] px-[2vw] mt-[2vh] border-b-2 border-dashed mb-[1vh]">
										Current Objective
									</h3>

									<p className="text-[2.5vh] hand-coffe px-[2vw] mb-[1vh]">
										Buy the Newspaper from the News Stand and read about current
										events.
									</p>

									<div className="py-[1vh] hover:h-[28vh] h-[8vh] overflow-hidden border-t-2 border-dashed duration-400 transition-all ease-in-out mt-auto">
										<p className="text-[2.5vh] hand-coffe px-[1vw] py-[1vh] text-right">
											Help ?
										</p>

										<div className="overflow-y-scroll flex flex-col relative h-full mt-[1vh] pb-[3vh]">
											<p className="hand-coffe text-[2.5vh] px-[2vw] mt-[0.5vh]">
												Click on the person in the stand to chat with them, and
												then use the 5 dollars you have in your wallet to
												purchase the newspaper.
											</p>
										</div>
									</div>
								</div>
							) : (
								<div className="w-2/3 border-r-2 border-dashed h-full flex flex-col pt-0 pb-[3vh] overflow-y-scroll">
									<h3 className="scribble-box text-[4vh] px-[2vw] mt-[2vh] border-b-2 border-dashed mb-[1vh]">
										Previous Tasks
									</h3>

									{Array.from({ length: 4 }).map((_, i) => (
										<div key={i}>
											<p className="scribble-box text-[3vh] px-[2vw] mt-[1.75vh] relative">
												The New Beginning
											</p>
											<p className="text-[2.5vh] hand-coffe px-[2vw] mb-[1vh]">
												Buy the Newspaper from the News Stand and read about
												current events.
											</p>
										</div>
									))}
								</div>
							)}

							<div className="w-1/3 h-full flex items-center justify-center">
								<img
									src="/imgs/memories.png"
									className="w-[90%] mx-auto my-auto"
									alt=""
								/>
							</div>
						</div>
					</div>
				</div>
			</div>
		</div>
	);
}
