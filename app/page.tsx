import Image from "next/image";

export default function Home() {
	return (
		<div className="h-screen w-screen bg-black relative overflow-x-hidden overflow-y-hidden">
			<div className="bg-yellow-900/15 w-screen h-screen"></div>
			<h1>Lorem ipsum dolor sit amet.</h1>
			{/* <div className="fixed top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[70vw] drop-shadow-2xl drop-shadow-black">
				<img src="/imgs/journal-first.png" className="w-[70vw]" alt="" />
				<img
					src="/imgs/pocket-3.png"
					className="w-[26vw] absolute top-0 left-0"
					alt=""
				/>
				<div className="w-[15vw] h-[18vh] rounded-[0.5vh] bg-green-200 absolute hover:left-[16vw] transition-all duration-250 ease-in-out top-[8vh] left-[12vw]"></div>
				<div className="w-[13vw] h-[35vh] rounded-[0.5vh] bg-neutral-50 absolute hover:left-[16vw] transition-all duration-250 ease-in-out top-[35vh] left-[12vw]"></div>
				<img
					src="/imgs/pocket-2.png"
					className="w-[16.9vw] absolute top-0 left-0"
					alt=""
				/>
				<div className="w-[13vw] h-[40vh] rounded-[1vh] bg-blue-200 absolute hover:left-[6vw] transition-all duration-250 ease-in-out top-[15vh] left-[2vw]"></div>
				<img
					src="/imgs/pocket-1.png"
					className="w-[8vw] absolute top-0 left-0"
					alt=""
				/>
				<div className="absolute top-[5%] right-[12%] h-[90%] w-[36%] py-[1vh] px-[1vw]">
					<p className="text-[2.25vh] hand-coffe text-right">04/09/2036</p>
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
						Lorem, ipsum dolor sit amet consectetur adipisicing elit. Provident,
						obcaecati. Lorem ipsum dolor sit amet consectetur adipisicing elit.
					</p>
					<p className="absolute right-[2vw] bottom-[2vh] hand-coffe text-[4vh]">
						Start {"->"}
					</p>
				</div>
			</div> */}
			<div className="fixed top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[70vw] drop-shadow-2xl drop-shadow-black">
				<img src="/imgs/journal-open.png" className="w-[70vw]" alt="" />

				<div className="absolute top-[5%] right-[12%] h-[90%] w-[36%] py-[1vh] px-[1vw]">
					<p className="text-[2.25vh] hand-coffe text-right">04/09/2036</p>
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
						Lorem, ipsum dolor sit amet consectetur adipisicing elit. Provident,
						obcaecati. Lorem ipsum dolor sit amet consectetur adipisicing elit.
					</p>
					<p className="absolute right-[2vw] bottom-[2vh] hand-coffe text-[4vh]">
						Next {"->"}
					</p>
				</div>
				<div className="absolute top-[5%] left-[9%] h-[90%] w-[36%] py-[1vh] px-[1vw]">
					<p className="text-[2.25vh] hand-coffe text-right">04/09/2036</p>
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
						Lorem, ipsum dolor sit amet consectetur adipisicing elit. Provident,
						obcaecati. Lorem ipsum dolor sit amet consectetur adipisicing elit.
					</p>
					<p className="absolute left-[2vw] bottom-[3vh] hand-coffe text-[4vh]">
						{"<-"} Back
					</p>
				</div>
			</div>
			{/* <div className="fixed top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[70vw] drop-shadow-2xl drop-shadow-black">
				<img src="/imgs/journal-last.png" className="w-[70vw]" alt="" />
				<div className="w-[20vw] h-[35vh] rounded-[0.5vh] bg-neutral-200 absolute hover:right-[16vw] transition-all duration-250 ease-in-out top-[6vh] right-[12vw] shadow-2xl shadow-black"></div>
				<div className="w-[20vw] h-[55vh] rounded-[0.5vh] bg-neutral-50 absolute hover:right-[16vw] transition-all duration-250 ease-in-out top-[17.5vh] right-[10vw] shadow-2xl shadow-neutral-800/30"></div>

				<img
					src="/imgs/back-pocket.png"
					className="w-[27vw] absolute top-0 right-0"
					alt=""
				/>

				<div className="absolute top-[5%] left-[9%] h-[90%] w-[36%] py-[1vh] px-[1vw]">
					<p className="text-[2.25vh] hand-coffe text-right">04/09/2036</p>
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
						Lorem, ipsum dolor sit amet consectetur adipisicing elit. Provident,
						obcaecati. Lorem ipsum dolor sit amet consectetur adipisicing elit.
					</p>
					<p className="absolute left-[2vw] bottom-[2vh] hand-coffe text-[4vh]">
						{"<-"} Back
					</p>
				</div>
			</div> */}
		</div>
	);
}
