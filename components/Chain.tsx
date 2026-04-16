"use client";

import { useEffect, useRef } from "react";

type Point = {
	x: number;
	y: number;
	px: number;
	py: number;
};

export default function Chain() {
	const chainLength = 22;
	const segmentLength = 18;

	const points = useRef<Point[]>([]);
	const pointEls = useRef<HTMLDivElement[]>([]);
	const segmentEls = useRef<HTMLDivElement[]>([]);

	const mouse = useRef({ x: 0, y: 0 });

	if (points.current.length === 0) {
		const startX = window.innerWidth / 2;
		const startY = 80;

		points.current = Array.from({ length: chainLength }, (_, i) => ({
			x: startX,
			y: startY + i * segmentLength,
			px: startX,
			py: startY + i * segmentLength,
		}));
	}

	useEffect(() => {
		const handleMouseMove = (e: MouseEvent) => {
			mouse.current.x = e.clientX;
			mouse.current.y = e.clientY;
		};

		window.addEventListener("mousemove", handleMouseMove);

		const anchor = {
			x: window.innerWidth / 2,
			y: 80,
		};

		let frame: number;

		const animate = () => {
			const pts = points.current;

			pts[0].x = anchor.x;
			pts[0].y = anchor.y;

			for (let i = 1; i < pts.length; i++) {
				const p = pts[i];

				const vx = p.x - p.px;
				const vy = p.y - p.py;

				p.px = p.x;
				p.py = p.y;

				p.y += 0.8;

				p.x += vx * 0.98;
				p.y += vy * 0.98;

				const dx = p.x - mouse.current.x;
				const dy = p.y - mouse.current.y;
				const dist = Math.hypot(dx, dy);

				if (dist < 60) {
					const force = (60 - dist) / 60;
					p.x += (dx / dist) * force * 6;
					p.y += (dy / dist) * force * 6;
				}
			}

			for (let k = 0; k < 6; k++) {
				pts[0].x = anchor.x;
				pts[0].y = anchor.y;

				for (let i = 1; i < pts.length; i++) {
					const p1 = pts[i - 1];
					const p2 = pts[i];

					const dx = p2.x - p1.x;
					const dy = p2.y - p1.y;

					const dist = Math.hypot(dx, dy) || 0.0001;
					const diff = (dist - segmentLength) / dist;

					const offsetX = dx * diff * 0.5;
					const offsetY = dy * diff * 0.5;

					if (i !== 1) {
						p1.x += offsetX;
						p1.y += offsetY;
					}

					p2.x -= offsetX;
					p2.y -= offsetY;
				}
			}

			for (let i = 0; i < pts.length; i++) {
				const el = pointEls.current[i];
				if (!el) continue;

				el.style.transform = `translate(${pts[i].x}px, ${pts[i].y}px)`;
			}

			for (let i = 0; i < pts.length - 1; i++) {
				const a = pts[i];
				const b = pts[i + 1];

				const el = segmentEls.current[i];
				if (!el) continue;

				const dx = b.x - a.x;
				const dy = b.y - a.y;
				const angle = Math.atan2(dy, dx);

				el.style.transform = `
					translate(${a.x}px, ${a.y}px)
					rotate(${angle}rad)
				`;
				el.style.width = `${segmentLength}px`;
			}

			frame = requestAnimationFrame(animate);
		};

		animate();

		return () => {
			window.removeEventListener("mousemove", handleMouseMove);
			cancelAnimationFrame(frame);
		};
	}, []);

	return (
		<div className="fixed inset-0 pointer-events-none top-[10vh] left-[-1vw]">
			{Array.from({ length: chainLength - 1 }).map((_, i) => (
				<div
					key={`seg-${i}`}
					ref={(el) => {
						if (el) segmentEls.current[i] = el;
					}}
					className="absolute h-[2px] border border-black rounded-full origin-left"
					style={{ top: 0, left: 0 }}
				/>
			))}

			{points.current.map((_, i) => (
				<div
					key={`pt-${i}`}
					ref={(el) => {
						if (el) pointEls.current[i] = el!;
					}}
					className="absolute w-[10px] h-[10px] rounded-full border-2 border-black"
					style={{ left: 0, top: 0 }}
				/>
			))}

			<div
				className="absolute w-[14px] h-[14px] border-4 border-black rounded-full"
				style={{
					left: "50%",
					top: "80px",
					transform: "translate(-50%, -50%)",
				}}
			/>
		</div>
	);
}
