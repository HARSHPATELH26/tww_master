import React, { useState } from "react";
import '../../../App.css'
import { Link, useLocation } from "react-router-dom";
import { useSelector } from "react-redux";



const Product_Details = () => {
	const data = useLocation();
	// console.log(data)
	const [qty, setqty] = useState("1")
	// console.log(qty)
	const increase = () => {
		setqty((elem) => {
			return ++elem;
		})
	}
	const decrease = () => {
		setqty((elem) => {
			return elem--;
		})
	}


	const productDetails = useSelector(state => state.lg.renderProduct)
	const relatedProducts = productDetails.filter((product, key) => {
		return product.productCat === data.state.productCat
	})
	console.log(productDetails)
	console.log(relatedProducts)
	return (
		<>
			<div id="site-main" className="site-main">
				<div id="main-content" className="main-content">
					<div id="primary" className="content-area">
						<div id="title" className="page-title">
							<div className="section-container">

								<div className="content-title-heading">
									<h1 className="text-title-heading">
										{data.state.productCat} {data.state.pname}
									</h1>
								</div>


								<div className="breadcrumbs">
									<Link to="/">Home</Link><span className="delimiter"></span><Link to="/shop-grid">Shop</Link><span className="delimiter"></span>Product
								</div>
							</div>
						</div>

						<div id="content" className="site-content" role="main">
							<div className="shop-details zoom" data-product_layout_thumb="scroll" data-zoom_scroll="true" data-zoom_contain_lens="true" data-zoomtype="inner" data-lenssize="200" data-lensshape="square" data-lensborder="" data-bordersize="2" data-bordercolour="#f9b61e" data-popup="false">

								<div className="product-top-info">
									<div className="section-padding">
										<div className="section-container p-l-r">
											<div className="row">
												<div className="product-images col-lg-7 col-md-12 col-12">
													<div className="row">
														<div className="col-md-2">
															<div className="content-thumbnail-scroll">
																<div className="image-thumbnail slick-carousel slick-vertical" data-asnavfor=".image-additional" data-centermode="true" data-focusonselect="true" data-columns4="5" data-columns3="4" data-columns2="4" data-columns1="4" data-columns="4" data-nav="true" data-vertical="&quot;true&quot;" data-verticalswiping="&quot;true&quot;">
																	<div className="img-item slick-slide">
																		<span className="img-thumbnail-scroll">
																			{data.state.imgOne && <img width="600" height="600" src={require("../../../asset/media/tww/products/" + data.state.imgOne)} alt="" />}
																		</span>
																	</div>
																	<div className="img-item slick-slide">
																		<span className="img-thumbnail-scroll">
																			{data.state.imgTwo && <img width="600" height="600" src={require("../../../asset/media/tww/products/" + data.state.imgTwo)} alt="" />}
																		</span>
																	</div>
																	<div className="img-item slick-slide">
																		<span className="img-thumbnail-scroll">
																			{data.state.imgThree && <img width="600" height="600" src={require("../../../asset/media/tww/products/" + data.state.imgThree)} alt="" />}
																		</span>
																	</div>
																	<div className="img-item slick-slide">
																		<span className="img-thumbnail-scroll">
																			{data.state.imgFour && <img width="600" height="600" src={require("../../../asset/media/tww/products/" + data.state.imgFour)} alt="" />}
																		</span>
																	</div>
																	<div className="img-item slick-slide">
																		<span className="img-thumbnail-scroll">
																			{data.state.imgFive && <img width="600" height="600" src={require("../../../asset/media/tww/products/" + data.state.imgFive)} alt="" />}
																		</span>
																	</div>
																	<div className="img-item slick-slide">
																		<span className="img-thumbnail-scroll">
																			{data.state.imgSix && <img width="600" height="600" src={require("../../../asset/media/tww/products/" + data.state.imgSix)} alt="" />}
																		</span>
																	</div>
																</div>
															</div>
														</div>
														<div className="col-md-10">
															<div className="scroll-image main-image">
																<div className="image-additional slick-carousel" data-fade="true" data-columns4="1" data-columns3="1" data-columns2="1" data-columns1="1" data-columns="1" data-nav="true">
																	<div className="img-item slick-slide">
																		{data.state.imgOne && <img width="900" height="900" src={require("../../../asset/media/tww/products/" + data.state.imgOne)} alt="" title="" />}
																	</div>
																	{/* <div className="img-item slick-slide">
																						<img width="900" height="900" src={require("../../../asset/media/tww/products/" + data.state.imgTwo)} alt="" title="" />
																					</div>
																					<div className="img-item slick-slide">
																						<img width="900" height="900" src={require("../../../asset/media/tww/products/" + data.state.imgThree)} alt="" title="" />
																					</div>
																					<div className="img-item slick-slide">
																						<img width="900" height="900" src={require("../../../asset/media/tww/products/" + data.state.imgFour)} alt="" title="" />
																					</div>
																					<div className="img-item slick-slide">
																						<img width="900" height="900" src={require("../../../asset/media/tww/products/" + data.state.imgFive)} alt="" title="" />
																					</div>
																					<div className="img-item slick-slide">
																						<img width="900" height="900" src={require("../../../asset/media/tww/products/" + data.state.imgSix)} alt="" title="" />
																					</div> */}
																</div>
															</div>
														</div>
													</div>
												</div>

												<div className="product-info col-lg-5 col-md-12 col-12 ">
													<h1 className="title"> {data.state.pname} </h1>
													<span className="price">
														<del aria-hidden="true"><span>$ {data.state.delPrice}</span></del>
														<ins><span>$ {data.state.price}</span></ins>
													</span>
													<div className="description">
														<p>{data.state.pdescription}</p>
													</div>
													<div className="buttons">
														<div className="add-to-cart-wrap">
															<div className="quantity">
																<button type="button" className="plus" onClick={increase}>+</button>
																<input type="number" className="qty" step="1" min="0" max={data.state.stock} name="quantity" value={qty} title="Qty" size="4" placeholder="" inputmode="numeric" autocomplete="off" />
																<button type="button" className="minus" onClick={decrease}>-</button>
															</div>
															<div className="btn-add-to-cart">
																<a href="#" tabindex="0">Add to cart</a>
															</div>
														</div>
														<div className="btn-quick-buy" data-title="Wishlist">
															<button className="product-btn">Buy It Now</button>
														</div>
														<div className="btn-wishlist" data-title="Wishlist">
															<button className="product-btn">Add to wishlist</button>
														</div>
													</div>
													<div className="product-meta">
														<span className="posted-in">Category: <a href="shop-grid-left.html" rel="tag">{data.state.productCat}</a></span>
														<span className="tagged-as">Tags: <a href="shop-grid-left.html" rel="tag">{data.state.tag1}</a>, <a href="shop-grid-left.html" rel="tag">{data.state.tag2}</a></span>
													</div>
													<div className="social-share">
														<a href="#" title="Facebook" className="share-facebook" target="_blank"><i className="fa fa-instagram"></i>Instagram</a>
													</div>
												</div>
											</div>
										</div>
									</div>
								</div>
								<div className="product-tabs">
									<div className="section-padding">
										<div className="section-container p-l-r">
											<div className="product-tabs-wrap">
												<ul className="nav nav-tabs" role="tablist">
													<li className="nav-item">
														<a className="nav-link active" data-toggle="tab" href="#description" role="tab">Description</a>
													</li>
													<li className="nav-item">
														<a className="nav-link" data-toggle="tab" href="#additional-information" role="tab">Additional information</a>
													</li>
												</ul>
												<div className="tab-content">
													<div className="tab-pane fade show active" id="description" role="tabpanel">
														<p>{data.state.detailDescriptionfirst}</p>
														<p>{data.state.detailDescriptionsecond}</p>
													</div>
													<div className="tab-pane fade" id="additional-information" role="tabpanel">
														<table className="product-attributes">
															<tbody>
																<tr className="attribute-item">
																	<th className="attribute-label">{data.state.additionalInfotitle}</th>
																	<td className="attribute-value">{data.state.additionalInfo}</td>
																</tr>
															</tbody>
														</table>
													</div>
												</div>
											</div>
										</div>
									</div>
								</div>


								<div className="product-related">
									<div className="section-padding">
										<div className="section-container p-l-r">
											<div className="block block-products slider">
												<div className="block-title"><h2>Related Products</h2></div>
												<div className="block-content">
													<div className="content-product-list slick-wrap">
														<div className="slick-sliders products-list grid" data-slidestoscroll="true" data-dots="false" data-nav="1" data-columns4="1" data-columns3="2" data-columns2="3" data-columns1="3" data-columns1440="4" data-columns="4">
															<div className="item-product">
																<div className="items flexBox" >
																	<div className="products-entry clearfix product-wapper">
																		{
																			relatedProducts.map((prodDetails,key) => {
																				return (
																					<>
																					
																						<div className="products-thumb">
																							<div className="product-lable">
																								<div className="hot">{prodDetails.tag1}</div>
																							</div>
																							<div className="product-thumb-hover">
																								<a href="shop-details.html">
																									<img width="300px" height="300px" src={require("../../../asset/media/tww/products/" + prodDetails.pImg)} className="post-image" alt="" />
																									<img width="300px" height="300px" src={require("../../../asset/media/tww/products/" + prodDetails.hImg)} className="hover-image back" alt="" />
																								</a>
																							</div>
																							<div className="product-button">
																								<div className="btn-add-to-cart" data-title="Add to cart">
																									<a rel="nofollow" href="#" className="product-btn button">Add to cart</a>
																								</div>
																								<div className="btn-wishlist" data-title="Wishlist">
																									<button className="product-btn">Add to wishlist</button>
																								</div>
																								<span className="product-quickview" data-title="Quick View">
																									<a href="#" className="quickview quickview-button">Quick View <i className="icon-search"></i></a>
																								</span>
																							</div>
																						</div>
																						<div className="products-content">
																							<div className="contents text-center">
																								<h3 className="product-title"><a href="shop-details.html">{prodDetails.displayName}</a></h3>
																								<span className="price">${prodDetails.price}</span>
																							</div>
																						</div>
																	
																					</>
																				)
																			})
																		}
																</div>
																</div>
															</div>
															
														</div>
													</div>
												</div>
											</div>
										</div>
									</div>
								</div>
							</div>
						</div>
						{/* <!-- #content --> */}
					</div>
					{/* <!-- #primary --> */}
				</div>
				{/* <!-- #main-content --> */}
			</div>
		</>
	)
}
export default Product_Details;