import React from "react";
import Image from "next/image";
import blog from "../assets/images/blog.svg";
import blog2 from "../assets/images/blog2.svg";
import { GoChevronRight } from "react-icons/go";

const BlogBody = () => {
	const data = [
		"Technology",
		"Business",
		"Marketing",
		"Cyber Security",
		"Gaming",
	];

	return (
		<div className="blog_body_container">
			<div className="page_container">
				<div className="container-fluid">
					<div className="row">
						<div className="col-11 col-md-12 mx-auto">
							<div className="row">
								<div className="col-12 col-lg-9">
									<h1 className="fw-bold">
										Bring to the table win-win survival strategies to ensure
										proactive customer service.
									</h1>
									<p className="text-secondary mt-2">
										By Martin King • 20 Jun 2020 • 5 min read
									</p>
									<div className="my-4">
										<Image src={blog2} alt="" />
									</div>

									<div>
										<p className="my-4">
											The quick, brown fox jumps over a lazy dog. DJs flock by
											when MTV ax quiz prog. Junk MTV quiz graced by fox whelps.
											Bawds jog, flick quartz, vex nymphs. Waltz, bad nymph, for
											quick jigs vex! Fox nymphs grab quick-jived waltz. Brick
											quiz whangs jumpy veldt fox. Bright vixens jump; dozy fowl
											quack. Quick wafting zephyrs vex bold Jim. Quick zephyrs
											blow, vexing daft Jim. Sex-charged fop blew my junk TV
											quiz. How quickly daft jumping zebras vex. Two driven
											jocks help fax my big quiz. Quick, Baz, get my woven flax
											jodhpurs! Now fax quiz Jack! my brave ghost pled. Five
											quacking zephyrs jolt my wax bed. Flummoxed by job,
											kvetching W. zaps Iraq. Cozy sphinx waves quart jug of bad
											milk. A very bad quack might jinx zippy fowls. Few quips
											galvanized the mock jury box. Quick brown dogs jump over
											the lazy fox. The jay, pig, fox, zebra, and my wolves
											quack! Blowzy red vixens fight for a quick jump. Joaquin
											Phoenix was gazed by MTV for luck. A
										</p>

										<h4 className="fw-bold mb-2 mt-4">
											Summary of Completed Research
										</h4>
										<p className="mt-2 mb-4">
											The quick, brown fox jumps over a lazy dog. DJs flock by
											when MTV ax quiz prog. Junk MTV quiz graced by fox whelps.
											Bawds jog, flick quartz, vex nymphs. Waltz, bad nymph, for
											quick jigs vex! Fox nymphs grab quick-jived waltz. Brick
											quiz whangs jumpy veldt fox. Bright vixens jump; dozy fowl
											quack. Quick wafting zephyrs vex bold Jim. Quick zephyrs
											blow, vexing daft Jim. Sex-charged fop blew my junk TV
											quiz. How quickly daft jumping zebras vex. Two driven
											jocks help fax my big quiz. Quick, Baz, get my woven flax
											jodhpurs! Now fax quiz Jack! my brave ghost pled. Five
											quacking zephyrs jolt my wax bed. Flummoxed by job,
											kvetching W. zaps Iraq. Cozy sphinx waves quart jug of bad
											milk. A very bad quack might jinx zippy fowls. Few quips
											galvanized the mock jury box. Quick brown dogs jump over
											the lazy fox. The jay, pig, fox, zebra, and my wolves
											quack! Blowzy red vixens fight for a quick jump. Joaquin
											Phoenix was gazed by MTV for luck. A wizard’s job is to
											vex chumps quickly in fog. Watch Jeopardy!, Alex Trebeks
											fun TV quiz game. The quick, brown fox jumps over a lazy
											dog. DJs flock by when MTV ax quiz prog. Junk MTV quiz
											graced by fox whelps. Bawds jog, flick quartz, vex nymphs.
											Waltz, bad nymph, for quick jigs vex! Fox nymphs grab
											quick-jived waltz. Brick quiz whangs jumpy veldt fox.
											Bright vixens jump; dozy fowl quack. Quick wafting zephyrs
											vex bold Jim. Quick zephyrs blow
										</p>

										<h4 className="fw-bold mb-2 mt-4">
											Security and Reliability
										</h4>
										<p className="mt-2 mb-4">
											The quick, brown fox jumps over a lazy dog. DJs flock by
											when MTV ax quiz prog. Junk MTV quiz graced by fox whelps.
											Bawds jog, flick quartz, vex nymphs. Waltz, bad nymph, for
											quick jigs vex! Fox nymphs grab quick-jived waltz. Brick
											quiz whangs jumpy veldt fox. Bright vixens jump; dozy fowl
											quack. Quick wafting zephyrs vex bold Jim. Quick zephyrs
											blow, vexing daft Jim. Sex-charged fop blew my junk TV
											quiz. How quickly daft jumping zebras vex. Two driven
											jocks help fax my big quiz. Quick, Baz, get my woven flax
											jodhpurs! Now fax quiz Jack! my brave ghost pled. Five
											quacking zephyrs jolt my wax bed. Flummoxed by job,
											kvetching W. zaps Iraq. Cozy sphinx waves quart jug of bad
											milk. A very bad quack might{" "}
										</p>

										<h4 className="fw-bold mb-2 mt-4">Framework Migration</h4>
										<p className="mt-2 mb-4">
											The quick, brown fox jumps over a lazy dog. DJs flock by
											when MTV ax quiz prog. Junk MTV quiz graced by fox whelps.
											Bawds jog, flick quartz, vex nymphs. Waltz, bad nymph, for
											quick jigs vex! Fox nymphs grab quick-jived waltz. Brick
											quiz whangs jumpy veldt fox. Bright vixens jump; dozy fowl
											quack. Quick wafting zephyrs vex bold Jim. Quick zephyrs
											blow, vexing daft Jim. Sex-charged fop blew my junk TV
											quiz. How quickly daft jumping zebras vex. Two driven
											jocks help fax my big quiz. Quick, Baz, get my woven flax
											jodhpurs! Now fax quiz Jack! my brave ghost pled. Five
											quacking zephyrs jolt my wax bed. Flummoxed by job,
											kvetching W. zaps Iraq. Cozy sphinx waves quart jug of bad
											milk. A very bad quack might{" "}
										</p>
									</div>

									<div className="row mt-5">
										<div className="col-12 mb-3">
											<h2 className="fw-bold">Related Post</h2>
										</div>

										<div className="col-12">
											<div className="row gy-4">
												{[1, 1, 1].map((prev, i) => {
													return (
														<div
															className="col-6 col-sm-6 col-md-4 pointer"
															key={i}
														>
															<div className="blog_card shadow">
																<Image className="w-100" src={blog} alt="" />
																<div className="px-3 pb-3">
																	<h4 className="mt-2">Lorem ipsum</h4>
																	<p className="mb-2">
																		Lorem ipsum dolor sit amet,
																	</p>
																	<div>
																		<a
																			className="text-decoration-none color2 d-flex justify-content-between align-items-center"
																			href=""
																		>
																			Read more{" "}
																			<GoChevronRight fontSize="1.2rem" />
																		</a>
																	</div>
																</div>
															</div>
														</div>
													);
												})}
											</div>
										</div>
									</div>
								</div>
								<div className="col-12 col-lg-3 mt-5 mt-md-0">
									<h3 className="fw-bold mb-4">Latest Post</h3>
									<div className="row gy-3 align-items-center gx-3">
										{[1, 1, 1, 1, 1].map((prev, i) => {
											return (
												<div
													key={i}
													className="col-12 col-sm-6 col-lg-12 pointer"
												>
													<div className="row">
														<div className="col-4">
															<Image className="w-100" src={blog} alt="" />
														</div>
														<div className="col-8">
															<h6 className="mb-1 fw-bold">
																Efficiently unleash cross
															</h6>
															<p className="text-secondary">20 Jun 2020 </p>
														</div>
													</div>
												</div>
											);
										})}
									</div>

									<div className="mt-5">
										<h4 className="fw-bold">Categories</h4>
										<ul className="list-unstyled">
											{data.map((prev, i) => {
												return (
													<li className="mt-3 f188 pointer" key={i}>
														{prev}
													</li>
												);
											})}
										</ul>
									</div>
								</div>
							</div>
						</div>
					</div>
				</div>
			</div>
		</div>
	);
};

export default BlogBody;
