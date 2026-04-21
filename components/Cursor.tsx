"use client";
import { useEffect } from "react";
import { motion, useMotionValue, useSpring } from "framer-motion";

export default function Cursor({
	boosted,
	hidden = false,
}: {
	boosted: boolean;
	hidden?: boolean;
}) {
	const mouseX = useMotionValue(0);
	const mouseY = useMotionValue(0);

	// smooth / stretchy motion
	const springX = useSpring(mouseX, {
		stiffness: 200,
		damping: 20,
	});
	const springY = useSpring(mouseY, {
		stiffness: 200,
		damping: 20,
	});

	useEffect(() => {
		const move = (e: MouseEvent) => {
			mouseX.set(e.clientX);
			mouseY.set(e.clientY);
		};

		window.addEventListener("mousemove", move);
		return () => window.removeEventListener("mousemove", move);
	}, [mouseX, mouseY]);

	if (hidden) return null;

	return (
		<motion.div
			className="fixed top-0 left-0 pointer-events-none z-[998]
				w-[2.5vh] h-[2.5vh] bg-amber-50 border border-dashed rounded-full"
			animate={{
				scale: boosted ? 1.7 : 1,
			}}
			style={{
				x: springX,
				y: springY,
				translateX: "-50%",
				translateY: "-50%",
			}}
		/>
	);
}
