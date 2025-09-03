import { Button } from "@/components/ui/button";
import { ChevronRight } from "lucide-react";
import Link from "next/link";
import Image from "next/image";
import two from "@/assets/two.jpg";

export default function AboutSection() {
	return (
		<section className="mt-20 lg:mt-32">
			<div className="mx-auto max-w-5xl space-y-8 px-6 md:space-y-12">
				{/* <img
					className="rounded-(--radius) grayscale"
					src="https://images.unsplash.com/photo-1530099486328-e021101a494a?q=80&w=2747&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
					alt="team image"
					height=""
					width=""
					loading="lazy"
				/> */}
				<Image
					src={two}
					className="rounded-(--radius) grayscale w-full rounded-lg"
					width={300}
					height={300}
					alt="portait image"
				/>

				<div className="grid gap-6 md:grid-cols-2 md:gap-12">
					<h2 className="text-4xl font-medium">About Lucy</h2>
					<div className="space-y-6">
						<p>
							Lucy James Abagi is a governance advocate and development leader
							committed to empowering citizens, promoting transparency, and
							strengthening democratic participation. With years of experience
							mobilizing communities and leading initiatives across Africa, she
							continues to bridge the gap between people and institutions.
						</p>

						<Button
							asChild
							variant="secondary"
							size="sm"
							className="gap-1 pr-1.5"
						>
							<Link href="/about">
								<span>Learn More</span>
								<ChevronRight className="size-2" />
							</Link>
						</Button>
					</div>
				</div>
			</div>
		</section>
	);
}
