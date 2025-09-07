import { notFound } from "next/navigation";
import { blogPosts } from "@/data/blog";
import BlogPost from "@/components/blog/BlogPost";

interface BlogPostPageProps {
	params: {
		slug: string;
	};
}

// Generate static params for all blog posts
export async function generateStaticParams() {
	return blogPosts.map((post) => ({
		slug: post.slug,
	}));
}

// Generate metadata for each blog post
export async function generateMetadata({ params }: BlogPostPageProps) {
	const post = blogPosts.find((post) => post.slug === params.slug);
	
	if (!post) {
		return {
			title: "Post Not Found",
		};
	}

	return {
		title: `${post.title} | Blog`,
		description: post.excerpt,
		openGraph: {
			title: post.title,
			description: post.excerpt,
			images: [post.image],
			type: "article",
			authors: [post.author.name],
			publishedTime: post.publishedAt,
		},
	};
}

export default function BlogPostPage({ params }: BlogPostPageProps) {
	const post = blogPosts.find((post) => post.slug === params.slug);

	if (!post) {
		notFound();
	}

	return <BlogPost post={post} />;
}
