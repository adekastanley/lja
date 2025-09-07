import Link from "next/link";
import Image from "next/image";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Calendar, Clock, ChevronRight, User } from "lucide-react";
import { BlogPost } from "@/data/blog";
import { cn } from "@/lib/utils";

interface BlogCardProps {
	post: BlogPost;
	featured?: boolean;
	className?: string;
}

export default function BlogCard({ post, featured = false, className }: BlogCardProps) {
	const formattedDate = new Date(post.publishedAt).toLocaleDateString("en-US", {
		year: "numeric",
		month: "long",
		day: "numeric",
	});

	return (
		<Card className={cn(
			"group overflow-hidden transition-all duration-300 hover:shadow-xl",
			featured && "md:col-span-2 lg:col-span-2",
			className
		)}>
			<div className={cn(
				"relative overflow-hidden",
				featured ? "aspect-[16/9]" : "aspect-[4/3]"
			)}>
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

			<CardHeader className={cn(featured ? "p-8" : "p-6")}>
				<div className="flex items-center gap-4 text-sm text-muted-foreground mb-3">
					<div className="flex items-center gap-1">
						<Calendar className="h-4 w-4" />
						<span>{formattedDate}</span>
					</div>
					<div className="flex items-center gap-1">
						<Clock className="h-4 w-4" />
						<span>{post.readTime} min read</span>
					</div>
				</div>

				<CardTitle className={cn(
					"line-clamp-2 group-hover:text-primary transition-colors duration-200",
					featured ? "text-2xl md:text-3xl" : "text-xl"
				)}>
					{post.title}
				</CardTitle>
				
				<CardDescription className={cn(
					"line-clamp-3",
					featured ? "text-base" : "text-sm"
				)}>
					{post.excerpt}
				</CardDescription>
			</CardHeader>

			<CardContent className={cn(featured ? "px-8 pb-8" : "px-6 pb-6")}>
				<div className="flex items-center justify-between">
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

					<Button asChild variant="ghost" size="sm" className="gap-1 pr-1">
						<Link href={`/blog/${post.slug}`}>
							<span>Read More</span>
							<ChevronRight className="h-3 w-3" />
						</Link>
					</Button>
				</div>

				{/* Tags */}
				<div className="flex flex-wrap gap-2 mt-4">
					{post.tags.slice(0, 3).map((tag) => (
						<span
							key={tag}
							className="inline-flex items-center rounded-md bg-secondary px-2 py-1 text-xs text-secondary-foreground"
						>
							#{tag}
						</span>
					))}
					{post.tags.length > 3 && (
						<span className="inline-flex items-center rounded-md bg-secondary px-2 py-1 text-xs text-secondary-foreground">
							+{post.tags.length - 3} more
						</span>
					)}
				</div>
			</CardContent>
		</Card>
	);
}
