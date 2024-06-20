import React from "react";


const Layout_Six = () => {
	return (
		<>
			<section className="section section-padding background-img bg-img-2 p-t-60 p-b-80">
				{/* <!-- Block Posts --> */}
				<div className="block block-posts slider">
					<div className="block-widget-wrap">
						<div className="block-title">
							<div className="sub-title">News & Inspired</div>
							<h2>The TWW Archive</h2>
						</div>
						<div className="block-content">
							<div className="posts-wrap slick-wrap">
								<div className="slick-sliders" data-slidestoscroll="true" data-dots="0" data-nav="1" data-columns4="1" data-columns3="1" data-columns2="2" data-columns1="3" data-columns="3">
									<div className="post-grid post">
										<div className="post-inner">
											<div className="post-image">
												<div className="post-date-wrap">
													<div className="post-date">
														<span>08</span><span>Aug</span>
													</div>
												</div>
												<a className="post-thumbnail" href="blog-details-right.html">
													<img width="720" height="484" src={require("../../../asset/media/tww/blogImg/twwBlogImg-1.png")} alt="Bridial Fair Collections 2023" />
												</a>
											</div>
											<div className="post-content">
												<div className="post-categories">
													<a href="blog-grid-right.html">Admin</a>
												</div>
												<h2 className="post-title">
													<a href="blog-details-right.html">National Handloom Day : British Women in Sarees Organise 'Saree Walkathon 2023' in London</a>
												</h2>
												<div className="btn-read-more">
													<a className="read-more btn-underline" href="blog-details-right.html">Read more</a>
												</div>
											</div>
										</div>
									</div>
									<div className="post-grid post">
										<div className="post-inner">
											<div className="post-image">
												<div className="post-date-wrap">
													<div className="post-date">
														<span>06</span><span>Jun</span>
													</div>
												</div>
												<a className="post-thumbnail" href="blog-details-right.html">
													<img width="720" height="484" src={require("../../../asset/media/tww/blogImg/twwBlogImg-2.png")} alt="Our Sterling Silver" />
												</a>
											</div>
											<div className="post-content">
												<div className="post-categories">
													<a href="blog-grid-right.html">Admin</a>
												</div>
												<h2 className="post-title"> Steal the Spotlight with these Fashion Jewelry Trends
												</h2>
												<div className="btn-read-more">
													<a className="read-more btn-underline" href="blog-details-right.html">Read more</a>
												</div>
											</div>
										</div>
									</div>
									<div className="post-grid post">
										<div className="post-inner">
											<div className="post-image">
												<div className="post-date-wrap">
													<div className="post-date">
														<span>14</span><span>Aug</span>
													</div>
												</div>
												<a className="post-thumbnail" href="blog-details-right.html">
													<img width="720" height="484" src={require("../../../asset/media/tww/blogImg/twwBlogImg-3.jpg")} alt="New Season Modern Gold Earrings" />
												</a>
											</div>
											<div className="post-content">
												<div className="post-categories">
													<a href="blog-grid-right.html">Admin</a>
												</div>
												<h2 className="post-title">
													<a href="blog-details-right.html">Drape Yourself in the Gracce of a Hand Woven Tussar Silk Saree</a>
												</h2>
												<div className="btn-read-more">
													<a className="read-more btn-underline" href="blog-details-right.html">Read more</a>
												</div>
											</div>
										</div>
									</div>
									<div className="post-grid post">
										<div className="post-inner">
											<div className="post-image">
												<div className="post-date-wrap">
													<div className="post-date">
														<span>10</span><span>Sep</span>
													</div>
												</div>
												<a className="post-thumbnail" href="blog-details-right.html">
													<img width="720" height="484" src={require("../../../asset/media/blog/4.jpg")} alt="Glossary of Jewelry Terms" />
												</a>
											</div>
											<div className="post-content">
												<div className="post-categories">
													<a href="blog-grid-right.html">Admin</a>
												</div>
												<h2 className="post-title">
													<a href="blog-details-right.html">Glossary of Jewelry Terms</a>
												</h2>
												<div className="btn-read-more">
													<a className="read-more btn-underline" href="blog-details-right.html">Read more</a>
												</div>
											</div>
										</div>
									</div>
								</div>
							</div>
						</div>
					</div>
				</div>
			</section>
		</>
	)
}
export default Layout_Six;