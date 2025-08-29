import AboutSection from "@/components/aboutSection";
import HeroSection from "@/components/hero-section";
import ImpactSection from "@/components/impactSection";
import RecSection from "@/components/recognition";
import SpeakingSection from "@/components/speaking";

export default function Home() {
	return (
		<main>
			<HeroSection />
			<AboutSection />
			<ImpactSection />
			<RecSection />
			<SpeakingSection />
		</main>
	);
}
