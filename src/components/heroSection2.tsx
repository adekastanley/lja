"use client";

import { LiquidButton } from "./ui/Liquid Glass Button";
import { ChevronLeft, ChevronRight, X } from "lucide-react";
import hero1 from "@/assets/lj01.png";
import hero2 from "@/assets/four.jpg";
import hero3 from "@/assets/hero1.png";
import { useState } from "react";

export default function HeroSection() {
	const [currentSlide, setCurrentSlide] = useState(0);

	const slides = [
		{
			image: hero1.src,
			alt: "Group of runners in motion",
		},
		{
			image: hero2.src,
			alt: "Female runner with motion blur",
		},
		{
			image: hero3.src,
			alt: "Male runner leading group",
		},
	];

	const navItems = [
		{ name: "Home", href: "#hero" },
		{ name: "Mission", href: "#mission" },
		{ name: "Community", href: "#community" },
		{ name: "Testimonials", href: "#testimonials" },
		{ name: "Join Us", href: "#join" },
	];

	// Navigation handlers
	const nextSlide = () => setCurrentSlide((prev) => (prev + 1) % slides.length);
	const prevSlide = () =>
		setCurrentSlide((prev) => (prev - 1 + slides.length) % slides.length);

	// const scrollToSection = (href: string) => {
	// 	const element = document.querySelector(href);
	// 	if (element) {
	// 		element.scrollIntoView({ behavior: "smooth" });
	// 	}
	// 	setIsMenuOpen(false);
	// };

	return (
		<div
			id="hero"
			className="relative h-screen w-full overflow-hidden bg-black"
		>
			{/* Background Image */}
			<div
				className="absolute  inset-0 bg-cover bg-center bg-no-repeat transition-all duration-1000 ease-in-out"
				style={{
					backgroundImage: `url('${slides[currentSlide].image}')`,
				}}
			>
				{/* Dark overlay for better text readability */}
				<div className="absolute inset-0 bg-black/40" />
			</div>

			{/* Hero Content */}
			<div className="relative z-10 flex h-full items-center justify-center px-6">
				<div className="text-center text-white max-w-4xl">
					{/* Main Title */}
					<h1 className="text-5xl md:text-7xl lg:text-8xl font-black tracking-wider mb-4 leading-none">
						LUCY
						<br />
						JAMES ABAGI
					</h1>

					{/* Subtitle */}
					<p className="text-xl md:text-2xl font-light tracking-wide mb-8 text-gray-200">
						Governance advocate and development leader dedicated to mobilizing
						citizens, strengthening democracy, and building transparent systems
						across Africa.
					</p>

					{/* CTA Button - Now using LiquidButton */}
					<LiquidButton
						size="xxl"
						className="font-semibold text-lg tracking-wide"
						// onClick={() => scrollToSection("")}
					>
						Get Started
					</LiquidButton>
				</div>
			</div>

			{/* Slider Navigation */}
			<div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 z-20">
				<div className="flex items-center space-x-4">
					{/* Previous Arrow */}
					<button
						onClick={prevSlide}
						className="text-white hover:text-gray-300 transition-colors p-2"
						aria-label="Previous slide"
					>
						<ChevronLeft size={24} />
					</button>

					{/* Slide Indicators */}
					<div className="flex space-x-2">
						{slides.map((_, index) => (
							<button
								key={index}
								onClick={() => setCurrentSlide(index)}
								className={`w-3 h-3 rounded-full transition-all duration-300 ${
									currentSlide === index
										? "bg-white"
										: "bg-white/40 hover:bg-white/60"
								}`}
								aria-label={`Go to slide ${index + 1}`}
							/>
						))}
					</div>

					{/* Next Arrow */}
					<button
						onClick={nextSlide}
						className="text-white hover:text-gray-300 transition-colors p-2"
						aria-label="Next slide"
					>
						<ChevronRight size={24} />
					</button>
				</div>
			</div>

			{/* Side Navigation Indicators */}
			<div className="absolute right-8 top-1/2 transform -translate-y-1/2 z-20 hidden md:block">
				<div className="flex flex-col space-y-3">
					{slides.map((_, index) => (
						<button
							key={index}
							onClick={() => setCurrentSlide(index)}
							className={`w-1 h-8 transition-all duration-300 ${
								currentSlide === index
									? "bg-white"
									: "bg-white/40 hover:bg-white/60"
							}`}
							aria-label={`Slide ${index + 1}`}
						/>
					))}
				</div>
			</div>
		</div>
	);
}
