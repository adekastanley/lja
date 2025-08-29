import Link from "next/link";
import about1 from "@/assets/about1.jpg";
import Image from "next/image";
import CallToAction from "@/components/cta";

export default function About() {
	return (
		<section className="py-16 md:py-32">
			<div className="mx-auto max-w-5xl space-y-8 px-6 md:space-y-12">
				{/* <img
					className="rounded-(--radius) grayscale"
					src={about1}
					alt="team image"
					height=""
					width=""
					loading="lazy"
				/> */}
				<Image
					className="rounded-(--radius) grayscale w-full "
					alt="hero image"
					src={about1}
					width={1000}
					height={1000}
				/>

				<div className="grid gap-6 md:grid-cols-2 md:gap-12">
					<h2 className="text-4xl font-medium">About Lucy James Abagi</h2>
					<div className="space-y-6">
						<p>
							Lucy James Abagi is a governance advocate, civic educator, and
							development leader dedicated to building accountable systems and
							empowering citizens to take an active role in shaping democracy.
							With a career rooted in mobilizing communities and advancing
							transparency, Lucy has become a strong voice for change across
							Africa.
						</p>
					</div>
				</div>
			</div>
			<section className="py-16 md:py-32">
				<div className="mx-auto max-w-5xl px-6">
					<div className="grid gap-6 md:grid-cols-2 md:gap-12">
						<h2 className="text-4xl font-medium">Her Journey</h2>
						<div className="space-y-6">
							<p>
								Over the years, Lucy has led initiatives that connect citizens
								with institutions, ensuring resources reach those who need them
								most. From her time directing the globally acclaimed Follow The
								Money campaign — which mobilized over $5 million and impacted
								more than 4 million rural residents across nine African
								countries — to her current role as CEO of the Public and Private
								Development Centre (PPDC), she has consistently championed
								citizen-led accountability.
							</p>
						</div>
					</div>
				</div>
			</section>
			<section className="py-16 md:py-32">
				<div className="mx-auto max-w-5xl px-6">
					<div className="grid gap-6 md:grid-cols-2 md:gap-12">
						<h2 className="text-4xl font-medium">Her Focus</h2>
						<div className="space-y-6">
							<p>
								Lucy's work centers on four key pillars: transparency in
								governance, citizen mobilization, education for democratic
								participation, and development innovation. By bridging the gap
								between people and institutions, she ensures citizens are not
								only heard but also empowered to drive meaningful change.
							</p>
						</div>
					</div>
				</div>
			</section>
			<section className="py-16 md:py-32">
				<div className="mx-auto max-w-5xl px-6">
					<div className="grid gap-6 md:grid-cols-2 md:gap-12">
						<h2 className="text-4xl font-medium">Recognition & Leadership</h2>
						<div className="space-y-6">
							<p>
								Her leadership and impact have earned her recognition on the
								continental stage, including being named among the 100 Reputable
								Women of African Descent in 2025. She continues to inspire as a
								speaker, mentor, and advocate for systems that put people first.
							</p>
						</div>
					</div>
				</div>
			</section>
			<div className="mx-auto max-w-5xl px-6">
				<p>
					For Lucy, governance is not just about policies and institutions —
					it's about people. Her vision is simple yet powerful: a society where
					every citizen feels empowered, every voice counts, and every leader is
					accountable.
				</p>
			</div>

			<CallToAction />
		</section>
	);
}
