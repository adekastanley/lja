import AboutSection from "@/components/aboutSection";
import CollaborationSection from "@/components/collaboration";
import CallToAction from "@/components/cta";
import HeroSection from "@/components/heroSection2";
import ImpactSection from "@/components/impactSection";
import RecSection from "@/components/recognition";
import SpeakingSection from "@/components/speaking";
import SmoothScrollHero from "@/components/ui/smoot-scroll-hero";

export default function Home() {
	return (
		<main>
			<HeroSection />
			<AboutSection />
			<ImpactSection />
			<RecSection />
			<SpeakingSection />
			<CollaborationSection />
			{/* <CallToAction /> */}
			<SmoothScrollHero
				scrollHeight={2500}
				desktopImage=""
				// desktopImage={hf1.src}
				mobileImage=""
				// mobileImage="/images/runners-motion-blur.png"
				initialClipPercentage={30}
				finalClipPercentage={70}
			/>
		</main>
	);
}
