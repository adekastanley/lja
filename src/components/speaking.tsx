import Image from "next/image";
import five from "@/assets/five.jpg";
import { Button } from "./ui/button";

export default function SpeakingSection() {
	return (
		<section className="py-16 md:py-32">
			<div className="mx-auto max-w-5xl space-y-8 px-6 md:space-y-16">
				<h2 className="relative z-10 max-w-xl text-4xl font-medium lg:text-5xl">
					Speaking & Engagements
				</h2>
				<div className="grid gap-6 sm:grid-cols-2 md:gap-12 lg:gap-24">
					<div className="relative mb-6 sm:mb-0">
						<div className="bg-linear-to-b aspect-76/59 relative rounded-2xl from-zinc-300 to-transparent p-px dark:from-zinc-700">
							<Image
								src={five}
								className="hidden rounded-[15px] dark:block"
								alt="payments illustration dark"
								width={1207}
								height={929}
							/>
							<Image
								src={five}
								className="rounded-[15px] shadow dark:hidden"
								alt="payments illustration light"
								width={1207}
								height={929}
							/>
						</div>
					</div>

					<div className="relative space-y-4">
						<p className="text-muted-foreground">
							Lucy is a passionate speaker and facilitator, known for her
							ability to connect with diverse audiences on issues of
							<span className="text-accent-foreground font-bold ml-1">
								governance, accountability, and citizen empowerment.
							</span>{" "}
							and
							<span className="text-accent-foreground font-bold ml-1">
								citizen empowerment.
							</span>
							— from products innovate.
						</p>
						<ul className="list-disc">
							<li>
								<h3 className="font-bold">Conferences & Panels</h3>

								<p className="text-muted-foreground ml-2">
									Sharing insights on democracy, governance, and citizen
									participation.
								</p>
							</li>
							<li>
								<h3 className="font-bold">Workshops & Trainings</h3>

								<p className="text-muted-foreground ml-2">
									Equipping communities and organizations with practical tools
									for accountability.
								</p>
							</li>
							<li>
								<h3 className="font-bold">Keynote Addresses</h3>

								<p className="text-muted-foreground ml-2">
									Inspiring audiences with stories of change and citizen-led
									innovation.
								</p>
							</li>
						</ul>

						<div className="pt-6">
							<blockquote className="border-l-4 pl-4">
								<p>
									Invite Lucy to bring her voice, experience, and passion for
									accountability to your next event.
								</p>

								<div className="mt-6 space-y-3">
									{/* <cite className="block font-medium">John Doe, CEO</cite> */}
									<a href="/contact">
										{" "}
										<Button>Book Lucy for an Event</Button>
									</a>
								</div>
							</blockquote>
						</div>
					</div>
				</div>
			</div>
		</section>
	);
}
