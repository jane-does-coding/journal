import Image from "next/image";

export default function Home() {
	return (
		<div className="h-screen w-screen bg-black relative overflow-x-hidden overflow-y-hidden">
			<div className="bg-yellow-900/15 w-screen h-screen"></div>
			<h1>Lorem ipsum dolor sit amet.</h1>
			<div className="fixed top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[70vw] drop-shadow-2xl drop-shadow-black">
				<img src="/imgs/wallet.png" className="w-[70vw]" alt="" />
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
					<p className="absolute right-[2vw] bottom-[3vh] hand-coffe text-[4vh]">
						Start {"->"}
					</p>
				</div>
			</div>
		</div>
	);
}
