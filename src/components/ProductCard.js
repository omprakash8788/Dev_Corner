import React from 'react'
import ReactStars from "react-rating-stars-component";
import {Link,useLocation } from "react-router-dom";

const ProductCard = (props) => {
   const {grid}=props
    let location =useLocation();
    // alert(location)

    return (
        <>
           <div className={` ${location.pathname === "/store" ? `gr-${grid}`: "col-3"}`}>
            <Link to=':id' className="product-card position-relative">
                <div className="wishlist-icon position-absolute">
                    <Link>
                    {/* <img src="images/wish.svg" alt="wishlist" /> */}
                    <img src="images/wish.svg" alt="wishlist" />
                    </Link>
                </div>
                <div className="product-image">
                  <img src="images/watch.jpg" className='img-fluid' alt="product" />
                  {/* <img src="images/watch.jpg" alt="product-1" /> */}
                  <img src="https://cdn.shopify.com/s/files/1/0620/5082/8457/products/09_00_260x.jpg?v=1655095991" className='img-fluid' alt="" />
                  

                </div>
                <div className="product details">
                    <h6 className='brand '>Havels</h6>
                    <h5 className='product-title'>
                        Kids Headphones Bulk 10 Pack Multi Colored For Students</h5>
                    <ReactStars   count={5}  size={24} value={4} edit={false} activeColor="#ffd700"/>
                    <p className={`description ${grid===12 ? "d-block":"d-none"}`}>At vero eos et accusamus et iusto odio dignissimos ducimus qui blanditiis praesentium voluptatum deleniti atque corrupti quos dolores et quas molestias excepturi sint occaecati cupiditate non provident, similique sunt...</p>
                    <p className="price">$100.00</p>
                </div>
                <div className="action-bar position-absolute">
                    <div className='d-flex flex-column gap-15'>
                    <Link>
                        <img src="images/prodcompare.svg" alt="product compare" />
                        </Link>
                        <Link>
                        <img src="images/view.svg" alt="view" />
                        </Link>
                        <Link>
                        <img src="images/add-cart.svg" alt="addcardimage" />
                        </Link>
                        {/* <Link>
                        <img src="images/add-cart.svg" alt="addcardimage" />
                        </Link> */}
                    </div>
                </div>
            </Link>
        </div>
        {/* second card start here */}
        <div className={` ${location.pathname === "/store" ? `gr-${grid}`: "col-3"}`}>
            <Link className="product-card position-relative">
                <div className="wishlist-icon position-absolute">
                    <Link>
                    {/* <img src="images/wish.svg" alt="wishlist" /> */}
                    <img src="images/wish.svg" alt="wishlist" />
                    </Link>
                </div>
                <div className="product-image">
                  <img src="images/watch.jpg" className='img-fluid' alt="product" />
                  {/* <img src="images/watch.jpg" alt="product-1" /> */}
                  <img src="https://cdn.shopify.com/s/files/1/0620/5082/8457/products/09_00_260x.jpg?v=1655095991" className='img-fluid' alt="" />
                  

                </div>
                <div className="product details">
                    <h6 className='brand '>Havels</h6>
                    <h5 className='product-title'>
                        Kids Headphones Bulk 10 Pack Multi Colored For Students</h5>
                    <ReactStars   count={5}  size={24} value={4} edit={false} activeColor="#ffd700"/>
                    <p className={`description ${grid===12 ? "d-block":"d-none"}`}>At vero eos et accusamus et iusto odio dignissimos ducimus qui blanditiis praesentium voluptatum deleniti atque corrupti quos dolores et quas molestias excepturi sint occaecati cupiditate non provident, similique sunt...</p>
                    <p className="price">$100.00</p>
                </div>
                <div className="action-bar position-absolute">
                    <div className='d-flex flex-column gap-15'>
                    <Link>
                        <img src="images/prodcompare.svg" alt="product compare" />
                        </Link>
                        <Link>
                        <img src="images/view.svg" alt="view" />
                        </Link>
                        <Link>
                        <img src="images/add-cart.svg" alt="addcardimage" />
                        </Link>
                        {/* <Link>
                        <img src="images/add-cart.svg" alt="addcardimage" />
                        </Link> */}
                    </div>
                </div>
            </Link>
        </div>
         {/* second card end here */}
        </>



    )
}

export default ProductCard