export default function RecSection() {
	return (
		<section className="py-16 md:py-32">
			<div className="mx-auto max-w-5xl space-y-8 px-6 md:space-y-12">
				<div className="relative z-10 max-w-xl space-y-6">
					<h2 className="text-4xl font-medium lg:text-5xl">
						Media & Recognition
					</h2>
					<p>
						Lucy's leadership and impact have been recognized across Africa and
						beyond. From global campaigns to local initiatives, her work has
						been featured in leading platforms and honored with awards
					</p>
				</div>
				<div className="grid gap-1 sm:grid-cols-2 md:gap-5 lg:gap-10">
					<div>
						<p>
							Honored for championing governance and development innovation.
						</p>
						<p className="mb-12 mt-5 grid grid-cols-2 gap-2 md:mb-0">
							100 Reputable Women of African Descent (2025)
						</p>
					</div>
					<div className="relative">
						<blockquote className="border-l-4 pl-4">
							<p>
								Interviews, articles, and features on governance, transparency,
								and citizen empowerment.
							</p>

							<div className="mt-6 space-y-3">
								<cite className="block font-medium">
									Featured on Media Platforms
								</cite>
							</div>
						</blockquote>
					</div>
				</div>
				<div className="grid gap-1 sm:grid-cols-2 md:gap-5 lg:gap-10">
					<div>
						<p>
							CEO of the Public and Private Development Centre (PPDC), and
							former campaign director of Follow The Money.s
						</p>
						<p className="mb-12 mt-5 grid grid-cols-2 gap-2 md:mb-0">
							Leadership Roles
						</p>
					</div>
					<div className="relative">
						<blockquote className="border-l-4 pl-4">
							<p>
								Her work and insights have appeared in international development
								and governance reports.
							</p>

							<div className="mt-6 space-y-3">
								<cite className="block font-medium">
									Publications & Mentions
								</cite>
							</div>
						</blockquote>
					</div>
				</div>
			</div>
		</section>
	);
}
