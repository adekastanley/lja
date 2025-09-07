"use client";

import Link from "next/link";
import Image from "next/image";
import { Button } from "@/components/ui/button";
import { Separator } from "@/components/ui/separator";
import { Calendar, Clock, ArrowLeft, Share2, BookOpen, User } from "lucide-react";
import { BlogPost as BlogPostType } from "@/data/blog";
import { cn } from "@/lib/utils";

interface BlogPostProps {
	post: BlogPostType;
	className?: string;
}

export default function BlogPost({ post, className }: BlogPostProps) {
	const formattedDate = new Date(post.publishedAt).toLocaleDateString("en-US", {
		year: "numeric",
		month: "long",
		day: "numeric",
	});

	// Simple markdown-to-HTML conversion for basic formatting
	const formatContent = (content: string) => {
		return content
			.replace(/^# (.*$)/gm, '<h1 class="text-3xl font-bold mt-8 mb-4">$1</h1>')
			.replace(/^## (.*$)/gm, '<h2 class="text-2xl font-semibold mt-6 mb-3">$1</h2>')
			.replace(/^### (.*$)/gm, '<h3 class="text-xl font-medium mt-5 mb-2">$1</h3>')
			.replace(/^\*\* (.*$)/gm, '<p class="font-semibold mt-4 mb-2">$1</p>')
			.replace(/^- (.*$)/gm, '<li class="ml-6 list-disc">$1</li>')
			.replace(/^\d+\. (.*$)/gm, '<li class="ml-6 list-decimal">$1</li>')
			.replace(/\n\n/g, '</p><p class="mb-4">')
			.replace(/\n/g, '<br />')
			.replace(/^(?!<[h|l|p])(.+)$/gm, '<p class="mb-4">$1</p>');
	};

	return (
		<article className={cn("min-h-screen bg-background", className)}>
			{/* Navigation */}
			<div className="sticky top-0 z-10 bg-background/80 backdrop-blur-lg border-b">
				<div className="mx-auto max-w-4xl px-6 lg:px-12 py-4">
					<Button asChild variant="ghost" size="sm" className="gap-2">
						<Link href="/blog">
							<ArrowLeft className="h-4 w-4" />
							Back to Blog
						</Link>
					</Button>
				</div>
			</div>

			{/* Hero Section */}
			<div className="relative">
				<div className="aspect-[21/9] md:aspect-[21/8] relative overflow-hidden">
					<Image
						src={post.image}
						alt={post.title}
						fill
						className="object-cover"
					/>
					<div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/40 to-transparent" />
				</div>
				
				{/* Content overlay */}
				<div className="absolute inset-0 flex items-end">
					<div className="mx-auto max-w-4xl px-6 lg:px-12 pb-12 w-full">
						<div className="space-y-4">
							{/* Category Badge */}
							<span className="inline-flex items-center rounded-full bg-primary px-4 py-2 text-sm font-medium text-primary-foreground">
								{post.category}
							</span>
							
							{/* Title */}
							<h1 className="text-3xl md:text-5xl lg:text-6xl font-bold text-white leading-tight">
								{post.title}
							</h1>
							
							{/* Meta info */}
							<div className="flex flex-wrap items-center gap-6 text-white/90">
								<div className="flex items-center gap-2">
									<Calendar className="h-4 w-4" />
									<span>{formattedDate}</span>
								</div>
								<div className="flex items-center gap-2">
									<Clock className="h-4 w-4" />
									<span>{post.readTime} min read</span>
								</div>
								<div className="flex items-center gap-2">
									<BookOpen className="h-4 w-4" />
									<span>{post.tags.length} topics</span>
								</div>
							</div>
						</div>
					</div>
				</div>
			</div>

			{/* Article Content */}
			<div className="mx-auto max-w-4xl px-6 lg:px-12 py-12">
				{/* Article Info */}
				<div className="flex flex-col md:flex-row md:items-center md:justify-between gap-6 mb-8">
					<div className="flex items-center gap-4">
						<div className="relative h-12 w-12 rounded-full overflow-hidden bg-muted">
							<Image
								src={post.author.avatar}
								alt={post.author.name}
								fill
								className="object-cover"
							/>
						</div>
						<div>
							<p className="font-medium">{post.author.name}</p>
							<p className="text-sm text-muted-foreground">{post.author.bio}</p>
						</div>
					</div>
					
					<div className="flex items-center gap-2">
						<Button variant="outline" size="sm" className="gap-2">
							<Share2 className="h-4 w-4" />
							Share
						</Button>
					</div>
				</div>

				<Separator className="mb-8" />

				{/* Article Content */}
				<div 
					className="prose prose-gray max-w-none dark:prose-invert 
						prose-headings:font-semibold 
						prose-h1:text-3xl prose-h1:mt-8 prose-h1:mb-4
						prose-h2:text-2xl prose-h2:mt-6 prose-h2:mb-3  
						prose-h3:text-xl prose-h3:mt-5 prose-h3:mb-2
						prose-p:mb-4 prose-p:leading-relaxed
						prose-ul:my-4 prose-li:mb-1
						prose-strong:font-semibold prose-strong:text-foreground"
					dangerouslySetInnerHTML={{ __html: formatContent(post.content) }}
				/>

				{/* Tags */}
				<div className="mt-12 pt-8 border-t">
					<p className="text-sm font-medium mb-4">Topics covered:</p>
					<div className="flex flex-wrap gap-2">
						{post.tags.map((tag) => (
							<span
								key={tag}
								className="inline-flex items-center rounded-full bg-secondary px-3 py-1 text-sm text-secondary-foreground hover:bg-secondary/80 transition-colors cursor-pointer"
							>
								#{tag}
							</span>
						))}
					</div>
				</div>

				{/* Author Bio */}
				<div className="mt-12 p-6 rounded-2xl border bg-card">
					<div className="flex items-start gap-4">
						<div className="relative h-16 w-16 rounded-full overflow-hidden bg-muted flex-shrink-0">
							<Image
								src={post.author.avatar}
								alt={post.author.name}
								fill
								className="object-cover"
							/>
						</div>
						<div className="flex-1">
							<h3 className="font-semibold mb-2">About {post.author.name}</h3>
							<p className="text-muted-foreground mb-4">{post.author.bio}</p>
							<div className="flex gap-2">
								<Button variant="outline" size="sm">
									Follow
								</Button>
								<Button variant="ghost" size="sm">
									More Posts
								</Button>
							</div>
						</div>
					</div>
				</div>
			</div>
		</article>
	);
}
