"use client";

import { useState } from "react";
import { X } from "lucide-react";
import { Button } from "@/components/ui/button";
import g1 from "@/assets/gallery/g1.jpg";
import g2 from "@/assets/gallery/g2.jpg";
import g3 from "@/assets/gallery/g3.jpg";
import g4 from "@/assets/gallery/g4.jpg";
import g5 from "@/assets/gallery/g5.jpg";
import g6 from "@/assets/gallery/g6.jpg";
import g7 from "@/assets/gallery/g7.jpg";
import g8 from "@/assets/gallery/g8.jpg";
import g9 from "@/assets/gallery/g9.jpg";

interface GalleryImage {
	id: string;
	title: string;
	text: string;
	image: string;
}

interface GalleryProps {
	images?: GalleryImage[];
}

const defaultImages: GalleryImage[] = [
	{
		id: "1",
		title: "image",
		text: "Description",
		image: g1.src,
	},
	{
		id: "2",
		title: "image",
		text: "Description",
		image: g2.src,
	},
	{
		id: "3",
		title: "image",
		text: "Description",
		image: g3.src,
	},
	{
		id: "4",
		title: "image",
		text: "Description",
		image: g4.src,
	},
	{
		id: "5",
		title: "image",
		text: "Description",
		image: g5.src,
	},
	{
		id: "6",
		title: "image",
		text: "Description",
		image: g6.src,
	},
	{
		id: "7",
		title: "image",
		text: "Description",
		image: g7.src,
	},
	{
		id: "8",
		title: "image",
		text: "Description",
		image: g8.src,
	},
	{
		id: "9",
		title: "image",
		text: "Description",
		image: g9.src,
	},
];
export default function Gallery({ images = defaultImages }: GalleryProps) {
	const [expandedImage, setExpandedImage] = useState<GalleryImage | null>(null);

	return (
		<div className="flex flex-col h-full pt-[5rem]">
			<div className="flex-1">
				<div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-2 xl:grid-cols-3 gap-6 p-4 auto-rows-max">
					{images.map((image) => (
						<div
							key={image.id}
							onClick={() => setExpandedImage(image)}
							className="group relative bg-white rounded-[22px] overflow-hidden cursor-pointer w-full aspect-[4/3] hover:scale-105 transition-transform duration-300"
						>
							<img
								src={
									image.image ||
									"/placeholder.svg?height=300&width=400&query=gallery image"
								}
								alt={image.title}
								className="w-full h-full object-cover"
							/>
							<div className="absolute bottom-0 left-0 right-0 h-[30%] bg-gradient-to-t from-black/60 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300">
								<h3 className="absolute bottom-0 left-0 text-white text-xl font-medium p-[1.5px] px-5 py-1.5">
									{image.title}
								</h3>
							</div>
						</div>
					))}
				</div>
			</div>

			{expandedImage && (
				<div
					className="fixed inset-0 bg-black/80 z-50 flex items-center justify-center p-4"
					onClick={() => setExpandedImage(null)}
				>
					<div className="relative max-w-4xl max-h-[90vh] w-full">
						<Button
							onClick={() => setExpandedImage(null)}
							className="absolute -top-12 right-0 text-white hover:text-gray-300 transition-colors"
						>
							<X size={32} />
						</Button>
						<img
							src={expandedImage.image || "/placeholder.svg"}
							alt={expandedImage.title}
							className="w-full h-full object-contain rounded-lg"
							onClick={(e) => e.stopPropagation()}
						/>
						<div className="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-black/60 to-transparent p-6 rounded-b-lg">
							<h2 className="text-white text-2xl font-medium">
								{expandedImage.title}
							</h2>
							<p className="text-white/80 text-sm mt-1">{expandedImage.text}</p>
						</div>
					</div>
				</div>
			)}
		</div>
	);
}
