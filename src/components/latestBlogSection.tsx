import Link from "next/link";
import Image from "next/image";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Calendar, Clock, ChevronRight, ArrowRight } from "lucide-react";
import { blogPosts } from "@/data/blog";

export default function LatestBlogSection() {
	// Get the latest 2 blog posts
	const latestPosts = blogPosts
		.sort((a, b) => new Date(b.publishedAt).getTime() - new Date(a.publishedAt).getTime())
		.slice(0, 2);

	const formatDate = (dateString: string) => {
		return new Date(dateString).toLocaleDateString("en-US", {
			year: "numeric",
			month: "long",
			day: "numeric",
		});
	};

	return (
		<section className="mt-20 lg:mt-32">
			<div className="mx-auto max-w-7xl px-6 lg:px-12">
				{/* Section Header */}
				<div className="text-center mb-12">
					<div className="inline-flex items-center rounded-full bg-secondary px-4 py-2 text-sm text-secondary-foreground mb-6">
						<span>Latest Insights</span>
					</div>
					<h2 className="text-3xl font-bold tracking-tight lg:text-4xl mb-4">
						From the Blog
					</h2>
					<p className="mx-auto max-w-2xl text-lg text-muted-foreground">
						Stay updated with our latest thoughts on governance, development, and social impact across Africa.
					</p>
				</div>

				{/* Blog Posts Grid */}
				<div className="grid gap-8 md:grid-cols-2 mb-12">
					{latestPosts.map((post) => (
						<Card key={post.id} className="group overflow-hidden transition-all duration-300 hover:shadow-xl">
							{/* Image */}
							<div className="relative aspect-[16/10] overflow-hidden">
								<Image
									src={post.image}
									alt={post.title}
									fill
									className="object-cover transition-transform duration-300 group-hover:scale-105"
								/>
								<div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent" />
								
								{/* Category Badge */}
								<div className="absolute top-4 left-4">
									<span className="inline-flex items-center rounded-full bg-primary/90 backdrop-blur-sm px-3 py-1 text-xs font-medium text-primary-foreground">
										{post.category}
									</span>
								</div>

								{/* Featured Badge */}
								{post.featured && (
									<div className="absolute top-4 right-4">
										<span className="inline-flex items-center rounded-full bg-accent/90 backdrop-blur-sm px-3 py-1 text-xs font-medium text-accent-foreground">
											Featured
										</span>
									</div>
								)}
							</div>

							<CardHeader className="pb-4">
								{/* Meta Info */}
								<div className="flex items-center gap-4 text-sm text-muted-foreground mb-3">
									<div className="flex items-center gap-1">
										<Calendar className="h-4 w-4" />
										<span>{formatDate(post.publishedAt)}</span>
									</div>
									<div className="flex items-center gap-1">
										<Clock className="h-4 w-4" />
										<span>{post.readTime} min read</span>
									</div>
								</div>

								<CardTitle className="text-xl line-clamp-2 group-hover:text-primary transition-colors duration-200">
									{post.title}
								</CardTitle>
								
								<CardDescription className="text-sm line-clamp-3">
									{post.excerpt}
								</CardDescription>
							</CardHeader>

							<CardContent className="pt-0">
								<div className="flex items-center justify-between">
									{/* Author Info */}
									<div className="flex items-center gap-3">
										<div className="relative h-8 w-8 rounded-full overflow-hidden bg-muted">
											<Image
												src={post.author.avatar}
												alt={post.author.name}
												fill
												className="object-cover"
											/>
										</div>
										<div>
											<p className="text-sm font-medium">{post.author.name}</p>
										</div>
									</div>

									{/* Read More Button */}
									<Button asChild variant="ghost" size="sm" className="gap-1 pr-1">
										<Link href={`/blog/${post.slug}`}>
											<span>Read More</span>
											<ChevronRight className="h-3 w-3" />
										</Link>
									</Button>
								</div>

								{/* Tags */}
								<div className="flex flex-wrap gap-2 mt-4">
									{post.tags.slice(0, 2).map((tag) => (
										<span
											key={tag}
											className="inline-flex items-center rounded-md bg-secondary px-2 py-1 text-xs text-secondary-foreground"
										>
											#{tag}
										</span>
									))}
									{post.tags.length > 2 && (
										<span className="inline-flex items-center rounded-md bg-secondary px-2 py-1 text-xs text-secondary-foreground">
											+{post.tags.length - 2} more
										</span>
									)}
								</div>
							</CardContent>
						</Card>
					))}
				</div>

				{/* View All Button */}
				<div className="text-center">
					<Button asChild size="lg" className="gap-2">
						<Link href="/blog">
							<span>View All Articles</span>
							<ArrowRight className="h-4 w-4" />
						</Link>
					</Button>
				</div>
			</div>
		</section>
	);
}
