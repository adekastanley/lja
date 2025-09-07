import type { Metadata } from "next";
import localFont from "next/font/local";
import FooterSection from "@/components/footer";
import "./globals.css";

import { ThemeProvider } from "@/components/theme-provider";

import { HeroHeader } from "@/components/header";
const geistSans = localFont({
	src: "./fonts/GeistVF.woff",
	variable: "--font-geist-sans",
	weight: "100 900",
});
const geistMono = localFont({
	src: "./fonts/GeistMonoVF.woff",
	variable: "--font-geist-mono",
	weight: "100 900",
});

export const metadata: Metadata = {
	title: "Lucy James Abagile - Governance & Development Consultant",
	description:
		"Empowering African communities through effective governance and sustainable development. Explore insights, projects, and collaborations driving positive change across the continent.",
};

export default function RootLayout({
	children,
}: Readonly<{
	children: React.ReactNode;
}>) {
	return (
		<html lang="en">
			<body
				className={`${geistSans.variable} ${geistMono.variable} antialiased`}
			>
				<ThemeProvider
					attribute="class"
					defaultTheme="dark"
					enableSystem
					disableTransitionOnChange
				>
					<HeroHeader />
					{children}
					<FooterSection />
				</ThemeProvider>
			</body>
		</html>
	);
}
