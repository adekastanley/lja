import AboutSection from "@/components/aboutSection";
import CollaborationSection from "@/components/collaboration";
import CallToAction from "@/components/cta";
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
			<CollaborationSection />
			<CallToAction />
		</main>
	);
}
