import four from "@/assets/four.jpg";
import Image from "next/image";

export default function ImpactSection() {
	return (
		<section className="py-16 md:py-32">
			<div className="mx-auto max-w-5xl space-y-8 px-6 md:space-y-12">
				<div className="mx-auto max-w-xl space-y-6 text-center md:space-y-12">
					<h2 className="text-balance text-4xl font-medium lg:text-5xl">
						Impact & Achievements
					</h2>
					<p>
						Lucy’s work has empowered communities, influenced policy, and
						advanced transparency across Africa. Her leadership continues to
						drive meaningful change in governance and development.
					</p>
				</div>

				<Image
					src={four}
					className="rounded-(--radius) grayscale w-full rounded-lg"
					width={400}
					height={400}
					alt="image"
				/>

				<div className="relative mx-auto grid grid-cols-2 gap-x-3 gap-y-6 sm:gap-8 lg:grid-cols-4">
					<div className="space-y-3">
						<div className="flex items-center gap-2">
							<h3 className="text-sm font-medium">$5 Million+ Mobilized</h3>
						</div>
						<p className="text-muted-foreground text-sm">
							Secured development funds for grassroots communities through
							citizen-led advocacy.
						</p>
					</div>
					<div className="space-y-2">
						<div className="flex items-center gap-2">
							<h3 className="text-sm font-medium">4 Million People Reached</h3>
						</div>
						<p className="text-muted-foreground text-sm">
							Supported rural communities across 9 African countries with
							education and resources.
						</p>
					</div>
					<div className="space-y-2">
						<div className="flex items-center gap-2">
							<h3 className="text-sm font-medium">Transparency & Governance</h3>
						</div>
						<p className="text-muted-foreground text-sm">
							Pioneered initiatives that strengthened accountability between
							governments and citizens.
						</p>
					</div>
					<div className="space-y-2">
						<div className="flex items-center gap-2">
							<h3 className="text-sm font-medium">Citizen Mobilization</h3>
						</div>
						<p className="text-muted-foreground text-sm">
							Led movements like the “Follow the Money” campaign to ensure
							resources reached those in need.
						</p>
					</div>
				</div>
			</div>
		</section>
	);
}
