import React, { useState } from 'react'
import ReactStars from 'react-rating-stars-component';
import BreadCrumb from '../components/BreadCrumb'
//import { Link } from 'react-router-dom';
import Meta from '../components/Meta';
import ProductCard from '../components/ProductCard';
import ReactImageZoom from 'react-image-zoom';
import watch from '../'
import Color from '../components/Color';
import { Link } from 'react-router-dom';
import { TbGitCompare } from 'react-icons/tb'
import { AiOutlineHeart } from 'react-icons/ai'

const SingleProduct = () => {
    const props = { width: 400, height: 600, zoomWidth: 600, img: "https://images.pexels.com/photos/190819/pexels-photo-190819.jpeg?cs=srgb&dl=pexels-fernando-arcos-190819.jpg&fm=jpg", };
    const [orderProduct, setorderProduct] = useState(true);
    const copyToClipboard = (text) => {
        console.log('text', text)
        var textField = document.createElement('textarea')
        textField.innerText = text
        document.body.appendChild(textField)
        textField.select()
        document.execCommand('copy');
        textField.remove()
      }
      
    return (
        <>
            <Meta title={"Product Name"} />
            <BreadCrumb title="Product Name" />
            <div className="main-product-wrapper py-5 home-wrapper-2">
                <div className="container-xxl">
                    <div className="row">
                        {/* product sect */}
                        <div className="col-6">
                            <div className="main-product-image">
                                <div>
                                    <ReactImageZoom {...props} />
                                </div>
                            </div>
                            <div className="other-product-images d-flex flex-wrap gap-15">
                                <div> <img src="https://images.pexels.com/photos/190819/pexels-photo-190819.jpeg?cs=srgb&dl=pexels-fernando-arcos-190819.jpg&fm=jpg" className='img-fluid' alt="" /></div>
                                <div> <img src="https://images.pexels.com/photos/190819/pexels-photo-190819.jpeg?cs=srgb&dl=pexels-fernando-arcos-190819.jpg&fm=jpg" className='img-fluid' alt="" /></div>
                                <div> <img src="https://images.pexels.com/photos/190819/pexels-photo-190819.jpeg?cs=srgb&dl=pexels-fernando-arcos-190819.jpg&fm=jpg" className='img-fluid' alt="" /></div>
                                <div> <img src="https://images.pexels.com/photos/190819/pexels-photo-190819.jpeg?cs=srgb&dl=pexels-fernando-arcos-190819.jpg&fm=jpg" className='img-fluid' alt="" /></div>
                            </div>
                        </div>
                        <div className="col-6">
                            <div className='main-product-details'>
                                <div className='border-bottom'>
                                    <h3 className='title'>
                                        Kids Headphones Bulk 10 Pack Multi Colored For Students
                                    </h3>
                                </div>
                                <div className="border-bottom py-3">
                                    <p className="price">$ 100</p>
                                    <div className="d-flex align-items-center gap-10">
                                        <ReactStars count={5} size={24} value={4} edit={false} activeColor="#ffd700" />
                                        <p className='mb-0 t-review'>(2 reviews)</p>
                                    </div>
                                    <a className='review-btn' href="#review">Write a Review</a>
                                </div>
                                <div className=" py-3">
                                    <div className='d-flex gap-10 align-items-center my-2'>
                                        <h3 className='product-heading'>Type :</h3>
                                        <p className='product-data'>Hand Watch</p>
                                    </div>
                                    <div className='d-flex gap-10 align-items-center my-2'>
                                        <h3 className='product-heading'>Brand :</h3>
                                        <p className='product-data'>Titan</p>
                                    </div>
                                    <div className='d-flex gap-10 align-items-center my-2'>
                                        <h3 className='product-heading'>Category :</h3>
                                        <p className='product-data'>Watch</p>
                                    </div>
                                    <div className='d-flex gap-10 align-items-center my-2'>
                                        <h3 className='product-heading'>Tags :</h3>
                                        <p className='product-data'>Watch</p>
                                    </div>
                                    <div className='d-flex gap-10 align-items-center my-2'>
                                        <h3 className='product-heading'>Availablity :</h3>
                                        <p className='product-data'>In Stock</p>
                                    </div>
                                    <div className='d-flex gap-10 flex-column mt-2 mb-3'>
                                        <h3 className='product-heading'>Size :</h3>
                                        <div className='d-flex flex-wrap gap-15'>
                                            <span className='badge border border-1 bg-white text-dark border-secondary'>S</span>
                                            <span className='badge border border-1 bg-white text-dark border-secondary'>M</span>
                                            <span className='badge border border-1 bg-white text-dark border-secondary'>XL</span>
                                            <span className='badge border border-1 bg-white text-dark border-secondary'>XXL</span>
                                        </div>
                                    </div>
                                    <div className='d-flex gap-10 flex-column  mt-2 mb-3'>
                                        <h3 className='product-heading'>Color :</h3>
                                        <Color />
                                    </div>
                                    <div className='d-flex align-items-center gap-15 flex-row  mt-2 mb-3'>
                                        <h3 className='product-heading'>Quantity :</h3>
                                        <div className=''>
                                            <input type="number" name="" min={1} max={10} className='form-control' style={{ "width": "70px" }} id="" />
                                        </div>
                                        {/* add two button here */}
                                        <div className='d-flex align-items-center gap-30 ms-5'>
                                            <button className='button border-0' type='submit'>ADD TO CART</button>
                                            <button className='button signup'>Buy  It Now</button>
                                        </div>
                                    </div>
                                    <div className='d-flex align-items-center gap-15'>
                                        <div>
                                            <a href=""> <TbGitCompare className='fs-5 me-2' /> Add to Compare</a>
                                        </div>
                                        <div>
                                            <a href=""> <AiOutlineHeart className='fs-5 me-2' />Add to Wishlist</a>
                                        </div>
                                    </div>
                                    <div className='d-flex gap-10 flex-column my-3'>
                                        <h3 className='product-heading'>Shipping & Returns :</h3>
                                        <p className='product-data'>Free shipping and returns available on all  orders! <br />
                                            We ship all US domestic orders within <br /> 5-10 business days!</p>
                                    </div>
                                    {/* ----- */}
                                    <div className='d-flex gap-10 align-items-center my-3'>
                                        <h3 className='product-heading'>Product Link :</h3>
                                        <a 
                                        href="javascript:void(0);"
                                         onClick={()=>{
                                            copyToClipboard("https://images.pexels.com/photos/190819/pexels-photo-190819.jpeg?cs=srgb&dl=pexels-fernando-arcos-190819.jpg&fm=jpg");
                                        }}
                                         >
                                        Copy Product Link
                                        </a>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            {/* description section */}
            <div className="description-wrapper py-5 home-wrapper-2">
                <div className="container-xxl">
                    <div className="row">
                        <div className="col-12">
                            <h4>Description</h4>
                            <div className='bg-white p-3'>
                                <p>
                                    Lorem ipsum dolor sit amet consectetur adipisicing elit. Repellendus ipsam dolore labore distinctio, rem possimus repellat blanditiis ab explicabo asperiores?
                                </p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            {/* reviews section  */}
            <section className="reviews-wrapper home-wrapper-2">
                <div className="container-xxl">
                    <div className="row">
                        <div className="col-12">
                            <h3 id='review' >Reviews</h3>
                            <div className="review-inner-wrapper">
                                <div className="review-head d-flex justify-content-between align-items-end">
                                    <div>
                                        <h4 className='mb-2'>Customer reviews</h4>
                                        <div className='d-flex align-items-center gap-10'>
                                            <ReactStars count={5} size={24} value={4} edit={false} activeColor="#ffd700" />
                                            <p className='mb-0'>Base on 2 reviews</p>
                                        </div>
                                    </div>
                                    {orderProduct && (
                                        <div>
                                            <a className='text-dark text-decoration-underline' href="">Write a Reviews</a>
                                        </div>
                                    )}
                                </div>
                                {/* review form */}
                                <div className="review-form py-4">
                                    <h4>Write a Reviews</h4>
                                    <form action="" className='d-flex flex-column gap-15'>
                                        <div>
                                            <ReactStars count={5} size={24} value={4} edit={true} activeColor="#ffd700" />
                                        </div>
                                        <div>
                                            <textarea name="" id="" className='w-100 form-control' cols="30" rows="4" placeholder='Comments'></textarea>
                                        </div>
                                        <div className='d-flex  justify-content-end'>
                                            <button className='button border-0'>Submit Review</button>
                                        </div>
                                    </form>
                                </div>
                                {/* review form end here */}
                                <div className="reviews mt-4">
                                    <div className="review">
                                        <div className='d-flex gap-10 align-items-center'>
                                            <h6 className='mb-0'>Omprakash</h6>
                                            <ReactStars count={5} size={24} value={4} edit={false} activeColor="#ffd700" />
                                        </div>
                                        <p className='mt-3'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Eum, animi.</p>
                                    </div>
                                </div>
                                {/* this is also parts of reviews */}
                            </div>
                        </div>
                    </div>
                </div>
            </section>
            {/* section  */}
            <section className="popular-wrapper py-5 home-wrapper-2">
                <div className="container-xxl">
                    <div className="row">
                        <div className='col-12'>
                            <h3 className="section-heading">Our Popular Products</h3>
                        </div>

                    </div>
                    <div className="row">
                        <ProductCard />
                        {/* <ProductCard/>
          <ProductCard/>
          <ProductCard/> */}

                    </div>
                </div>
            </section>
        </>
    )
}

export default SingleProduct