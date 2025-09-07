import { blogPosts } from "@/data/blog";
import BlogCard from "@/components/blog/BlogCard";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Search, Filter, ArrowRight } from "lucide-react";

export default function BlogPage() {
	// Separate featured and regular posts
	const featuredPosts = blogPosts.filter(post => post.featured);
	const regularPosts = blogPosts.filter(post => !post.featured);

	return (
		<div className="min-h-screen bg-background">
			{/* Hero Section */}
			<section className="relative pt-32 pb-16 lg:pt-40 lg:pb-20">
				<div className="mx-auto max-w-7xl px-6 lg:px-12">
					<div className="text-center space-y-6">
						<div className="inline-flex items-center rounded-full bg-secondary px-4 py-2 text-sm text-secondary-foreground">
							<span>Latest Insights & Stories</span>
						</div>
						<h1 className="text-4xl font-bold tracking-tight lg:text-6xl">
							Blog & Insights
						</h1>
						<p className="mx-auto max-w-2xl text-lg text-muted-foreground">
							Exploring governance, development, and social impact across Africa.
							Discover stories, insights, and lessons from the field.
						</p>
					</div>

					{/* Search and Filter Bar */}
					<div className="mt-12 flex flex-col sm:flex-row gap-4 max-w-2xl mx-auto">
						<div className="relative flex-1">
							<Search className="absolute left-3 top-1/2 transform -translate-y-1/2 h-4 w-4 text-muted-foreground" />
							<Input 
								placeholder="Search articles..." 
								className="pl-10" 
							/>
						</div>
						<Button variant="outline" className="gap-2">
							<Filter className="h-4 w-4" />
							Filters
						</Button>
					</div>
				</div>
			</section>

			{/* Featured Posts Section */}
			{featuredPosts.length > 0 && (
				<section className="py-12">
					<div className="mx-auto max-w-7xl px-6 lg:px-12">
						<div className="flex items-center justify-between mb-8">
							<h2 className="text-2xl font-semibold">Featured Articles</h2>
							<Button variant="ghost" className="gap-1 pr-1">
								<span>View All</span>
								<ArrowRight className="h-3 w-3" />
							</Button>
						</div>

						<div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3">
							{featuredPosts.map((post) => (
								<BlogCard 
									key={post.id} 
									post={post} 
									featured 
								/>
							))}
						</div>
					</div>
				</section>
			)}

			{/* All Posts Section */}
			<section className="py-12 bg-secondary/20">
				<div className="mx-auto max-w-7xl px-6 lg:px-12">
					<div className="mb-8">
						<h2 className="text-2xl font-semibold mb-2">Latest Articles</h2>
						<p className="text-muted-foreground">Stay up to date with our latest insights and stories</p>
					</div>

					<div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3">
						{blogPosts.map((post) => (
							<BlogCard key={post.id} post={post} />
						))}
					</div>
				</div>
			</section>

			{/* Newsletter Section */}
			<section className="py-16">
				<div className="mx-auto max-w-4xl px-6 lg:px-12">
					<div className="text-center space-y-6 p-8 rounded-2xl border bg-card">
						<h2 className="text-2xl font-semibold">Stay Updated</h2>
						<p className="text-muted-foreground max-w-md mx-auto">
							Get the latest articles and insights delivered to your inbox.
							No spam, just valuable content.
						</p>
						<div className="flex flex-col sm:flex-row gap-4 max-w-md mx-auto">
							<Input 
								type="email" 
								placeholder="Enter your email" 
								className="flex-1" 
							/>
							<Button className="gap-1">
								<span>Subscribe</span>
								<ArrowRight className="h-3 w-3" />
							</Button>
						</div>
					</div>
				</div>
			</section>
		</div>
	);
}
