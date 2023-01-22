import {motion} from "framer-motion";
import cx from "classnames";
import {FC, ReactNode} from "react";
import Image from "next/image";

const InformationCards = () => {
	return (
		<>
			<InformationCard
				title="Compose emails"
				color="rgb(232 129 249 / 50%)"
				text="Simplify your email communication by using AI to compose detailed messages with just a brief prompt. Say goodbye to tedious typing and let the AI handle the heavy lifting for you."
			/>
			<InformationCard
				flip
				color="rgb(65 165 250 / 75%)"
				title="Reply to tweets" text="Companies can now create tailored responses to their customers' tweets, replacing the use of generic replies. "
			>
				<div className="bg-white text-black p-3 rounded-md flex gap-2 items-center">
					<Image src="/elon.jpg" alt="elon" width="50" height="5" className="rounded-full"/>
					<div>
						<div className="flex gap-1 items-center">
							<p className="font-bold">Elon Musk</p>
							<Image src="/verified.png" alt="Verified" width="20" height="5" className="h-5 sm:20"/>
							<p className="text-gray-500 hidden sm:block">@ElonMusk · Jan 20</p>
						</div>
						<p>Just wrote this tweet with <span className="text-blue-500">#Reworkd</span> lol 🚀</p>
					</div>
				</div>
			</InformationCard>
			<InformationCard
				color="rgb(127 255 212 / 50%)"
				title="Regenerate sentences"
				text="If you are not satisfied with the AI's response, you can easily generate a new one by clicking 'regenerate' which eliminates the need to spend extra time thinking of an alternate way to phrase your response."
			>
				{
					[
						"He got lost.",
						"The boy got lost in the woods.",
						"Jimmy stumbled and found himself lost in the forest.",
					].map((item, i) => { return (
						<div key={item} className="flex flex-col gap-2 text-black items-center">
							<motion.div
								initial={{ opacity: 0 }}
								whileInView={{ opacity: 1 }}
								viewport={{ once: true }}
								transition={{ duration: 0.5, ease: "easeOut", delay: (i * 2) + 0.25}}
								className="bg-white rounded-md p-1 px-3 w-fit">
								...
							</motion.div>
							<motion.div
								initial={{ opacity: 0 }}
								whileInView={{ opacity: 1 }}
								viewport={{ once: true }}
								transition={{ duration: 0.5, ease: "easeOut", delay: (i * 2.25) + 1.25}}
								className="bg-white rounded-md p-1 px-3">
								{item}
							</motion.div>
						</div>
					)})
				}
			</InformationCard>
			<InformationCard
				flip
				color="rgb(255 255 255 / 70%)"
				title="Tailored responses"
				text="Response customization can be achieved by using different options such as emojis, response length, and level of detail. Using a combination of options can help you effectively convey your message in specific circumstances."
			>
				{
					[
						{
							emoji: "😀",
							text: "Awesome!",
						},
						{
							emoji: "🤬",
							text: "F**k you!",
						},
						{
							emoji: "😀",
							text: "I love you!",
						},
					].map((item, i) => { return (
						<div key={item.emoji} className="flex gap-2 text-black">
							<motion.div
								initial={{ opacity: 0 }}
								whileInView={{ opacity: 1 }}
								viewport={{ once: true }}
								transition={{ duration: 0.5, ease: "easeOut", delay: (i * 2) + 0.5}}
								className="bg-white rounded-md p-1 px-3">
								{item.emoji}
							</motion.div>
							<motion.div
								initial={{ opacity: 0 }}
								whileInView={{ opacity: 1 }}
								viewport={{ once: true }}
								transition={{ duration: 0.5, ease: "easeOut", delay: (i * 2) + 1}}
								className="bg-white rounded-md p-1 px-3">
								...
							</motion.div>
							<motion.div
								initial={{ opacity: 0 }}
								whileInView={{ opacity: 1 }}
								viewport={{ once: true }}
								transition={{ duration: 0.5, ease: "easeOut", delay: (i * 2) + 1.5 }}
								className="bg-white rounded-md p-1 px-3"
							>
								{item.text}
							</motion.div>
						</div>
					)})
				}
			</InformationCard>
		</>
	)
}

type InformationCardProps = {
	title: string;
	text: string;
	flip?: boolean;
	color: string;
	children?:  JSX.Element | JSX.Element[];
}

const InformationCard = ({title, text, flip, color, children}: InformationCardProps) => {
	return (
		<motion.div
			className="flex justify-center xl:justify-between items-center flex-wrap m-10 gap-12 max-w-screen-lg">
			<motion.div
				initial={{ opacity: 0, x: flip ? 30 : -30 }}
				whileInView={{ opacity: 1, x: 0 }}
				transition={{ duration: 1.3, ease: "easeOut", delay: 0.3}}
				whileHover={{
					scale: 1.1,
					transition: { duration: 0.2, ease: "easeInOut", delay: 0 },
				}}
				className={`shadow-[shadowColour] ${flip ? "order-1 " : " "}`}
				style={{ boxShadow: `0 0 100px 10px ${color}`}}
			>
				<MacWindowHeader/>
				<div className={`w-[20em] sm:w-[30em] h-[20em] rounded-b-md flex flex-col items-center justify-center gap-2`} style={{ background: color }}>
					{children}
				</div>
			</motion.div>
			<motion.div
				initial={{ opacity: 0, x: flip ? -30 : 30 }}
				whileInView={{ opacity: 1, x: 0 }}
				transition={{ duration: 1.3, ease: "easeOut", delay: 0.3}}
				className="flex flex-col gap-2 w-[25em]"
				style={{textShadow: `0px 0px 20px ${color}, 0px 0px 20px ${color}, 0px 0px 20px ${color}`}}
			>
				<h1 className="text-4xl">{title}</h1>
				<p className="font-thin text-sm sm:text-lg font-sans">{text}</p>
			</motion.div>
		</motion.div>
	)
}

const MacWindowHeader = () => {
	return (
		<div
			className={cx(
				"flex gap-1 rounded-t-md border-[1px] p-2",
				"border-white/25 bg-black"
			)}
		>
			<div className="h-3 w-3 rounded-full bg-red-500"></div>
			<div className="h-3 w-3 rounded-full bg-yellow-500"></div>
			<div className="h-3 w-3 rounded-full bg-green-500"></div>
		</div>
	);
};
export default InformationCards;