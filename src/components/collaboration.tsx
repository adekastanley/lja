import Image from "next/image";
import six from "@/assets/six.jpg";

export default function CollaborationSection() {
	return (
		<section className="py-16 md:py-32">
			<div className="mx-auto max-w-5xl space-y-8 px-6 md:space-y-16">
				<h2 className="relative z-10 max-w-xl text-4xl font-medium lg:text-5xl">
					Get Involved
				</h2>
				<div className="relative">
					<div className="relative z-10 space-y-4 md:w-1/2">
						<p>
							Lucy believes real change happens when citizens, institutions, and
							partners come together. There are many ways to collaborate and
							support her work in building transparent and accountable
							governance.
						</p>
						<p>Ways to Engage</p>

						<div className="grid grid-cols-2 gap-3 pt-6 sm:gap-4">
							<div className="space-y-3">
								<div className="flex items-center gap-2">
									<h3 className="text-sm font-medium">Partnerships</h3>
								</div>
								<p className="text-muted-foreground text-sm">
									Work with Lucy on initiatives that promote accountability and
									citizen empowerment.
								</p>
							</div>
							<div className="space-y-2">
								<div className="flex items-center gap-2">
									<h3 className="text-sm font-medium">Speaking & Training</h3>
								</div>
								<p className="text-muted-foreground text-sm">
									Invite Lucy to share her expertise at conferences, panels, and
									workshops.
								</p>
							</div>
						</div>
						<div className="grid grid-cols-2 gap-3 pt-2 sm:gap-4">
							<div className="space-y-3">
								<div className="flex items-center gap-2">
									<h3 className="text-sm font-medium">Advocacy & Campaigns</h3>
								</div>
								<p className="text-muted-foreground text-sm">
									Join efforts that mobilize citizens and demand better
									governance.
								</p>
							</div>
						</div>
					</div>
					<div className="mt-12 h-fit md:absolute md:-inset-y-12 md:inset-x-0 md:mt-0">
						<div
							aria-hidden
							className="bg-linear-to-l z-1 to-background absolute inset-0 hidden from-transparent to-55% md:block"
						></div>
						<div className="border-border/50 relative rounded-2xl border border-dotted p-2">
							<Image
								src={six}
								className="hidden rounded-[12px] dark:block"
								alt="payments illustration dark"
								width={1207}
								height={929}
							/>
							<Image
								src={six}
								className="rounded-[12px] shadow dark:hidden"
								alt="payments illustration light"
								width={1207}
								height={929}
							/>
						</div>
					</div>
					<p className="mt-5">
						Together, we can create systems that truly serve the people.
					</p>
				</div>
			</div>
		</section>
	);
}
