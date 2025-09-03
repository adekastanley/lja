import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Textarea } from "@/components/ui/textarea";
import {
	Select,
	SelectContent,
	SelectItem,
	SelectTrigger,
	SelectValue,
} from "@/components/ui/select";
import { Card } from "@/components/ui/card";

export default function ContactPage() {
	return (
		<section className="py-32">
			<div className="mx-auto max-w-3xl px-8 lg:px-0">
				<h1 className="text-center text-4xl font-semibold lg:text-5xl">
					Get In Touch
				</h1>
				{/* <p className="mt-4 text-center">
					Schedule a call or request for information by filling this form
				</p> */}

				<Card className="mx-auto mt-12 max-w-lg p-8 shadow-md sm:p-16">
					<div>
						{/* <h2 className="text-xl font-semibold">
							Let's get you to the right place
						</h2> */}
						<p className="mt-4 text-sm">
							Have a project, idea, or partnership in mind? I’d love to hear
							from you. Fill out the form below and I’ll get back to you as soon
							as possible.
						</p>
					</div>

					<form
						action=""
						className="**:[&>label]:block mt-12 space-y-6 *:space-y-3"
					>
						<div>
							<Label htmlFor="name">Full name</Label>
							<Input type="text" id="name" required />
						</div>

						<div>
							<Label htmlFor="email">Work Email</Label>
							<Input type="email" id="email" required />
						</div>

						<div>
							<Label htmlFor="country">Country/Region</Label>
							<Select>
								<SelectTrigger>
									<SelectValue placeholder="Select Country/Region" />
								</SelectTrigger>
								<SelectContent>
									<SelectItem value="0">Nigeria</SelectItem>
									<SelectItem value="1">DR Congo</SelectItem>
									<SelectItem value="2">United States</SelectItem>
									<SelectItem value="3">France</SelectItem>
								</SelectContent>
							</Select>
						</div>

						<div>
							<Label htmlFor="job">Job function</Label>
							<Select>
								<SelectTrigger>
									<SelectValue placeholder="Select Function" />
								</SelectTrigger>
								<SelectContent>
									<SelectItem value="1">Speaking</SelectItem>
									<SelectItem value="2">Education</SelectItem>
									<SelectItem value="3">Inquiry</SelectItem>
									<SelectItem value="4">More</SelectItem>
								</SelectContent>
							</Select>
						</div>

						<div>
							<Label htmlFor="msg">Message</Label>
							<Textarea id="msg" rows={3} />
						</div>

						<Button>Submit</Button>
					</form>
				</Card>
			</div>
		</section>
	);
}
