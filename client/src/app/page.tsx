"use client";
import Image from "next/image";
import YTPlayer from "react-player/youtube";
import Player from "react-player";
import { useState } from "react";

export default function Home() {
	const YTUrl = "https://www.youtube.com/watch?v=FiXOaYnW64w";
	const [userStream, setUserStream] = useState<MediaStream>();
	const streamMedia = async () => {
		const stream = await navigator.mediaDevices.getUserMedia({
			audio: true,
			video: true,
		});
		setUserStream(stream);
	};
	const stopStreaming = async () => {
		await userStream?.getTracks().forEach((item) => item.stop());
	};
	return (
		<div className="grid grid-rows-[20px_1fr_20px] items-center justify-items-center min-h-screen p-8 pb-20 gap-16 sm:p-20 font-[family-name:var(--font-geist-sans)]">
			<main className="flex flex-col gap-8 row-start-2 items-center sm:items-start">
				<YTPlayer url={YTUrl} width={1280} height={720} controls />
				<Player
					url={"/videos/bear-1280x720.mp4"}
					width={1280}
					height={720}
					controls
				/>
				<div className="flex justify-around">
					<button onClick={streamMedia} className="px-6 py-4 border-green-300">
						Start streaming
					</button>
					<button
						onClick={stopStreaming}
						className="px-6 py-4 border-green-300">
						Stop streaming
					</button>
				</div>
				<Player url={userStream} width={1280} height={720} controls />
			</main>
			<footer className="row-start-3 flex gap-6 flex-wrap items-center justify-center">
				<a
					className="flex items-center gap-2 hover:underline hover:underline-offset-4"
					href="https://nextjs.org/learn?utm_source=create-next-app&utm_medium=appdir-template-tw&utm_campaign=create-next-app"
					target="_blank"
					rel="noopener noreferrer">
					<Image
						aria-hidden
						src="https://nextjs.org/icons/file.svg"
						alt="File icon"
						width={16}
						height={16}
					/>
					Learn
				</a>
				<a
					className="flex items-center gap-2 hover:underline hover:underline-offset-4"
					href="https://vercel.com/templates?framework=next.js&utm_source=create-next-app&utm_medium=appdir-template-tw&utm_campaign=create-next-app"
					target="_blank"
					rel="noopener noreferrer">
					<Image
						aria-hidden
						src="https://nextjs.org/icons/window.svg"
						alt="Window icon"
						width={16}
						height={16}
					/>
					Examples
				</a>
				<a
					className="flex items-center gap-2 hover:underline hover:underline-offset-4"
					href="https://nextjs.org?utm_source=create-next-app&utm_medium=appdir-template-tw&utm_campaign=create-next-app"
					target="_blank"
					rel="noopener noreferrer">
					<Image
						aria-hidden
						src="https://nextjs.org/icons/globe.svg"
						alt="Globe icon"
						width={16}
						height={16}
					/>
					Go to nextjs.org →
				</a>
			</footer>
		</div>
	);
}
