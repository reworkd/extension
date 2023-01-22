import Link from "next/link";
import Logo from "./Logo";

type FooterContent = {
	sectionTitle: string;
	links: {
		title: string;
		href: string;
	}[];
}[];

/**
 * Based of off https://www.hyperui.dev/components/marketing/footers -> simple row
 */
const Footer = () => {
	const content: FooterContent = [
		{
			sectionTitle: "Company",
			links: [
				{ title: "About", href: "/about" },
				{ title: "Careers", href: "/careers" },
				{ title: "Contact", href: "/contact" },
				{ title: "Press", href: "/press" },
			],
		},
		{
			sectionTitle: "Use Cases",
			links: [
				{ title: "Email", href: "/email" },
				{ title: "Messaging", href: "/messaging" },
				{ title: "Twitter", href: "/twitter" },
				{ title: "Slack", href: "/slack" },
			],
		},
		{
			sectionTitle: "Resources",
			links: [
				{ title: "FAQ", href: "/faq" },
				{ title: "Terms and Conditions", href: "/terms" },
				{ title: "Privacy Policy", href: "/privacy" },
				{ title: "Blog", href: "/Blog" },
			],
		},
	];

	return (
		<footer aria-label="Site Footer" className="mt-auto w-full translate-y-[80em] sm:translate-y-[90em] lg:translate-y-[40em] text-white">
			<div className="mx-auto max-w-screen-xl space-y-8 px-4 py-4 sm:py-8 lg:space-y-16">
				<div className="grid grid-cols-1 gap-8 sm:grid-cols-2">
					<div className="order-last flex flex-col items-center justify-around sm:order-first">
						<Logo width={300} className="p-4" />
						<p className="text-xs text-gray-400">
							&copy; {new Date().getFullYear()}. Reworkd. All rights reserved.
						</p>
					</div>

					<div className="grid grid-cols-3 gap-8">
						{content.map((section, i) => (
							<div key={i}>
								<p className="font-medium">{section.sectionTitle}</p>

								<nav
									aria-label={`Footer Navigation - ${section.sectionTitle}`}
									className="mt-6"
								>
									<ul className="space-y-4 text-sm">
										{section.links.map((e, j) => (
											<li key={j}>
												<Link
													href={e.href}
													className="text-gray-200 transition hover:opacity-75"
												>
													{e.title}
												</Link>
											</li>
										))}
									</ul>
								</nav>
							</div>
						))}
					</div>
				</div>
			</div>
		</footer>
	);
};

export default Footer;