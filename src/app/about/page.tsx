"use client";

import about1 from "@/assets/about1.jpg";
import { TextGradientScroll } from "@/components/ui/text-gradient-scroll";
import { Timeline } from "@/components/ui/timelineUI";
import "../globals.css";
import { StaggerTestimonials } from "@/components/ui/testimonials";
import { motion } from "framer-motion";
import SmoothScrollHero from "@/components/ui/smoot-scroll-hero";
import Image from "next/image";
import hj1 from "@/assets/hj1.jpg";
import hf1 from "@/assets/hf1.jpg";
import rec1 from "@/assets/rec1.jpg";

export default function Page() {
	const aboutStatement = `Lucy James Abagi is a governance advocate, civic educator, and
							development leader dedicated to building accountable systems and
							empowering citizens to take an active role in shaping democracy.
							With a career rooted in mobilizing communities and advancing
							transparency, Lucy has become a strong voice for change across
							Africa.`;

	const journeyEntries = [
		{
			id: 1,
			image: hj1.src,
			alt: "Her Journey",
			title: "Her Journey",
			description: `Over the years, Lucy has led initiatives that connect citizens
								with institutions, ensuring resources reach those who need them
								most. From her time directing the globally acclaimed Follow The
								Money campaign — which mobilized over $5 million and impacted
								more than 4 million rural residents across nine African
								countries — to her current role as CEO of the Public and Private
								Development Centre (PPDC), she has consistently championed
								citizen-led accountability.`,
			layout: "left" as const,
		},
		{
			id: 2,
			image: hf1.src,
			alt: "her focus",
			title: "Her Focus",
			description: `	Lucy's work centers on four key pillars: transparency in
								governance, citizen mobilization, education for democratic
								participation, and development innovation. By bridging the gap
								between people and institutions, she ensures citizens are not
								only heard but also empowered to drive meaningful change.`,
			layout: "right" as const,
		},
		{
			id: 3,
			image: rec1.src,
			alt: "Recognition & Leadership",
			title: "Recognition & Leadership",
			description: `	Her leadership and impact have earned her recognition on the
								continental stage, including being named among the 100 Reputable
								Women of African Descent in 2025. She continues to inspire as a
								speaker, mentor, and advocate for systems that put people first.`,
			layout: "left" as const,
		},
	];

	return (
		<div className="min-h-screen ">
			{/* Hero Section */}
			<section className="py-16 md:py-32">
				<div className="mx-auto max-w-5xl space-y-8 px-6 md:space-y-12">
					<Image
						className="rounded-(--radius) grayscale"
						src={about1}
						alt="team image"
						height={2000}
						width={2000}
						loading="lazy"
					/>
				</div>
			</section>
			{/* About Statement Section with Grid Background */}
			<section
				id="about"
				className="relative min-h-screen flex items-center justify-center py-20 "
			>
				{/* Subtle Grid Pattern */}
				<div className="absolute inset-0 bg-grid-subtle opacity-30 pointer-events-none" />

				<div className="container mx-auto px-6 relative z-10">
					<div className="max-w-4xl mx-auto text-center">
						<h2 className="text-4xl md:text-6xl font-black tracking-wider mb-12 ">
							ABOUT ME
						</h2>
						<TextGradientScroll
							text={aboutStatement}
							className="text-2xl md:text-3xl lg:text-4xl font-medium leading-relaxed text"
							type="word"
							textOpacity="soft"
						/>
					</div>
				</div>
			</section>

			{/* Journey Timeline Section */}
			<section id="journey" className="relative py-20 ">
				{/* Subtle Grid Pattern */}
				<div className="absolute inset-0 bg-grid-subtle opacity-30 pointer-events-none" />

				<div className="relative z-10">
					<div className="container mx-auto px-6 mb-16">
						<div className="text-center">
							<h2 className="text-4xl md:text-6xl font-black tracking-wider mb-6">
								MY JOURNEY
							</h2>
							<p className="text-xl md:text-2xl  max-w-3xl mx-auto">
								Every professional path has its defining moments. Here are some
								key chapters from my creative journey.
							</p>
						</div>
					</div>

					<Timeline entries={journeyEntries} />
				</div>
			</section>

			{/* closing*/}
			<section id="recommendations" className="relative py-20 ">
				{/* Subtle Grid Pattern */}
				<div className="absolute inset-0 bg-grid-subtle opacity-30 pointer-events-none" />

				<div className="container mx-auto px-6 relative z-10">
					<motion.div
						initial={{ opacity: 0, y: 20 }}
						whileInView={{ opacity: 1, y: 0 }}
						transition={{ duration: 0.8, delay: 0.1, ease: [0.16, 1, 0.3, 1] }}
						viewport={{ once: true }}
						className="text-center mb-16"
					>
						<p className="text-xl md:text-2xl  max-w-3xl mx-auto leading-relaxed mb-12">
							For Lucy, governance is not just about policies and institutions —
							it's about people. Her vision is simple yet powerful: a society
							where every citizen feels empowered, every voice counts, and every
							leader is accountable.
						</p>
					</motion.div>
				</div>
			</section>
			<section id="recommendations" className="relative py-20 ">
				{/* Subtle Grid Pattern */}
				<div className="absolute inset-0 bg-grid-subtle opacity-30 pointer-events-none" />

				<div className="container mx-auto px-6 relative z-10">
					<motion.div
						initial={{ opacity: 0, y: 20 }}
						whileInView={{ opacity: 1, y: 0 }}
						transition={{ duration: 0.8, delay: 0.1, ease: [0.16, 1, 0.3, 1] }}
						viewport={{ once: true }}
						className="text-center mb-16"
					>
						<h2 className="text-4xl md:text-6xl font-black tracking-wider text-gray-900 mb-6">
							What{" "}
							<span className="bg-gradient-to-r from-gray-900 to-gray-600 bg-clip-text text-transparent">
								OTHERS
							</span>{" "}
							say.
						</h2>
						<p className="text-xl md:text-2xl text-gray-600 max-w-3xl mx-auto leading-relaxed mb-12">
							Testimonials and recommendations from colleagues, clients, and
							collaborators I've had the pleasure to work with.
						</p>
					</motion.div>

					<StaggerTestimonials />
				</div>
			</section>

			{/* Smooth Scroll Hero with Contact CTA */}
			<section id="contact" className="relative">
				<SmoothScrollHero
					scrollHeight={2500}
					desktopImage=""
					// desktopImage={hf1.src}
					mobileImage=""
					// mobileImage="/images/runners-motion-blur.png"
					initialClipPercentage={30}
					finalClipPercentage={70}
				/>
			</section>
		</div>
	);
}
