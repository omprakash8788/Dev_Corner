import React from 'react'
import { Link } from "react-router-dom"
import Marquee from "react-fast-marquee";
import BlogCard from '../components/BlogCard';
import ProductCard from '../components/ProductCard';
import SpecialProduct from '../components/SpecialProduct';
const Home = () => {
  return (
    <>
      <section className='home-wrapper-1 py-5'>
        <div className="container-xxl">
          <div className="row">
            {/* banner section  */}
            <div className="col-6">
              <div className="main-banner position-relative ">
                <img src="images/main-banner-1.jpg" className='img-fluid rounded-3' alt="main banner" />
                <div className="main-banner-content position-absolute">
                  <h4>SUPERCHARGED FOR PROS.</h4>
                  <h5>Special Sale</h5>
                  <p>From $999.00 or $41.62/mo.</p>
                  <Link className='button'>BUY NOW</Link>

                </div>
              </div>
            </div>


            {/* Second banner with four div  start here */}

            <div className="col-6">
              <div className="d-flex flex-wrap gap-10   justify-content-between align-items-center">
                {/*  div1 */}
                <div className="small-banner position-relative ">
                  <img src="images/catbanner-01.jpg" className='img-fluid rounded-3' alt="main banner" />
                  <div className="small-banner-content position-absolute">
                    <h4>BEST SAKE</h4>
                    <h5>Laptop Max</h5>
                    <p>From $999.00  <br /> or $41.62/mo.</p>
                  </div>
                </div>
                {/* div2 */}
                <div className="small-banner position-relative ">
                  <img src="images/catbanner-02.jpg" className='img-fluid rounded-3' alt="main banner" />
                  <div className="small-banner-content position-absolute">
                    <h4>New Arrival</h4>
                    <h5>Buy IPad </h5>
                    <p>From $549.00 <br /> or $41.62/mo.</p>
                  </div>
                </div>
                {/* div3 */}
                <div className="small-banner position-relative ">
                  <img src="images/catbanner-03.jpg" className='img-fluid rounded-3' alt="main banner" />
                  <div className="small-banner-content position-absolute">
                    <h4>Smart Watch</h4>
                    <h5>IPad Air</h5>
                    <p>From $239.00 <br /> or $41.62/mo.</p>
                  </div>
                </div>
                {/* div4 */}
                <div className="small-banner position-relative ">
                  <img src="images/catbanner-04.jpg" className='img-fluid rounded-3' alt="main banner" />
                  <div className="small-banner-content position-absolute">
                    <h4>Best Products</h4>
                    <h5>AirPods Max</h5>
                    <p>From $999.00 <br /> or $41.62/mo.</p>
                  </div>
                </div>

              </div>


              {/* Second banner with four div  end  here  */}
            </div>
          </div>
        </div>
      </section>


      {/* -------------------- section home ------------------------------------- */}
      <section className="home-wrapper-2 py-5">
        <div className="container-xxl">
          <div className="row">
            <div className="col-12">
              <div className="services d-flex align-items-center justify-content-between">
                {/* five div here */}
                {/* div-1 */}
                <div className='d-flex align-items-center gap-15'>
                  <img src="images/service.png" alt="services" />
                  <div>
                    <h6>Free Shipping</h6>
                    <p className='mb-0'>From all orders over $5</p>
                  </div>
                </div>

                {/* div-2 */}
                <div className='d-flex align-items-center gap-15'>
                  <img src="images/service-02.png" alt="services" />
                  <div>
                    <h6>Daily Surprise Offers</h6>
                    <p className='mb-0'>Save upto 30% off</p>
                  </div>
                </div>

                {/* div-3 */}

                <div className='d-flex align-items-center gap-15'>
                  <img src="images/service-03.png" alt="services" />
                  <div>
                    <h6>Support 24/7</h6>
                    < p className='mb-0'>Shop with an experts</p>
                  </div>
                </div>

                {/* div-4 */}
                <div className='d-flex align-items-center gap-15'>
                  <img src="images/service-04.png" alt="services" />
                  <div>
                    <h6>Affordable Prices</h6>
                    <p className='mb-0'>Get Factory Default Price </p>
                  </div>
                </div>

                {/* div-5 */}
                <div className='d-flex align-items-center gap-15'>
                  <img src="images/service-05.png" alt="services" />
                  <div>
                    <h6>Secure Payments</h6>
                    <p className='mb-0'>100% Protected Payments</p>
                  </div>
                </div>

                {/* five div end here */}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* --------------------- Home wrapper-2------------------------------------- */}
      <section className='home-wrapper-2 py-5'>
        <div className="container-xxl">
          <div className="row">
            <div className="col-12">
              <div className="categories d-flex align-items-center flex-wrap justify-content-between">


                {/* div1 */}
                <div className='d-flex  align-items-center'>
                  <div>
                    <h6>Cameras</h6>
                    <p>10 Items</p>
                  </div>
                  <img src="images/camera.jpg" alt="camera" />
                </div>

                {/* div2 */}
                <div className='d-flex  align-items-center'>
                  <div>
                    <h6>Smarat Tv</h6>
                    <p>12 Items</p>
                  </div>
                  <img src="images/tv.jpg" alt="camera" />
                </div>
                {/* div3 */}
                <div className='d-flex  align-items-center'>
                  <div>
                    <h6>SmartWatch</h6>
                    <p>13 Items</p>
                  </div>
                  <img src="images/headphone.jpg" alt="camera" />
                </div>
                {/* div4 */}
                <div className='d-flex  align-items-center'>
                  <div>
                    <h6>Music & Gaming</h6>
                    <p>16 Items</p>
                  </div>
                  <img src="images/camera.jpg" alt="camera" />
                </div>

                {/* ------ end ---------- */}
                {/* div1 */}
                <div className='d-flex  align-items-center'>
                  <div>
                    <h6>Cameras</h6>
                    <p>10 Items</p>
                  </div>
                  <img src="images/camera.jpg" alt="camera" />
                </div>

                {/* div2 */}
                <div className='d-flex  align-items-center'>
                  <div>
                    <h6>Smarat Tv</h6>
                    <p>12 Items</p>
                  </div>
                  <img src="images/tv.jpg" alt="camera" />
                </div>
                {/* div3 */}
                <div className='d-flex  align-items-center'>
                  <div>
                    <h6>SmartWatch</h6>
                    <p>13 Items</p>
                  </div>
                  <img src="images/headphone.jpg" alt="camera" />
                </div>
                {/* div4 */}
                <div className='d-flex align-items-center'>
                  <div>
                    <h6>Music & Gaming</h6>
                    <p>16 Items</p>
                  </div>
                  <img src="images/camera.jpg" alt="camera" />
                </div>


              </div>
            </div>
          </div>
        </div>
      </section>

      {/* --------- feature section ------------------ */}
      <section className="featured-wrapper py-5 home-wrapper-2">
        <div className="container-xxl">
          <div className="row">
            <div className='col-12'>
              <h3 className="section-heading">Featured Collection</h3>
            </div>
            <ProductCard />
            <ProductCard />
            <ProductCard />
            <ProductCard />

          </div>
        </div>
      </section>

      {/*  ------------   famous section -------------------- */}
      <section className='famous-wrapper py-5 home-wrapper-2'>
        <div className="container-xxl">
          <div className="row">

            {/* card  */}



            {/* card-1 */}
            <div className="col-3">
              <div className="famous-card position-relative">
                <img src="https://cdn.shopify.com/s/files/1/0620/5082/8457/files/subbanner-01.jpg?v=1655701528" className='img-fluid' alt="famous-1" />
                <div className="famous-content  position-absolute">
                  <h5>Big Screen</h5>
                  <h6>Smart Watch Series 7</h6>
                  <p>From $399 or $16.50/mo for 24 mo.</p>
                </div>
              </div>
            </div>
            {/* card-2 */}
            <div className="col-3">
              <div className="famous-card position-relative">
                <img src="https://cdn.shopify.com/s/files/1/0620/5082/8457/files/subbanner-02.jpg?v=1654920168" className='img-fluid' alt="famous-2" />
                <div className="famous-content  position-absolute">
                  <h5 className='text-dark' >Studio Display</h5>
                  <h6 className='text-dark' >600 nits of brightness</h6>
                  <p className='text-dark'> 27-inch %K Retina display</p>
                </div>
              </div>
            </div>

            {/* card 3 */}
            <div className="col-3">
              <div className="famous-card position-relative">
                <img src="https://cdn.shopify.com/s/files/1/0620/5082/8457/files/subbanner-03.jpg?v=1654920181" className='img-fluid' alt="famous-1" />
                <div className="famous-content  position-absolute">
                  <h5 className='text-dark' >smartphones</h5>
                  <h6 className='text-dark' >Smartphone 13 Pro.</h6>
                  <p className='text-dark'>Now in Green. From $999.00 or $41.62/mo.
                    for 24 mo. Footnote*</p>
                </div>
              </div>
            </div>


            {/* card 4 */}
            <div className="col-3">
              <div className="famous-card position-relative">
                <img src="https://cdn.shopify.com/s/files/1/0620/5082/8457/files/subbanner-04.jpg?v=1654920192" className='img-fluid' alt="famous-1" />
                <div className="famous-content  position-absolute">
                  <h5 className='text-dark' >home speakers</h5>
                  <h6 className='text-dark' >Room-filling sound.</h6>
                  <p className='text-dark'>From $699 or $116.58/mo. for 12 mo.*</p>
                </div>
              </div>
            </div>





            {/* card end here */}
          </div>
        </div>
      </section>

      {/* -----------special product collection section ---------- */}
      <section className='special-wrapper py-5 home-wrapper-2'>
        <div className="container-xxl">
          <div className="row">
            <div className='col-12'>
              <h3 className="section-heading">Specials Products</h3>
            </div>
          </div>
          {/* another row */}
          <div className="row">
            <SpecialProduct />
            <SpecialProduct />
            <SpecialProduct />
            <SpecialProduct />
          </div>
        </div>

      </section>

      {/*  -------------- Our popular product section ------------------------- */}
      <section className="popular-wrapper py-5 home-wrapper-2">
        <div className="container-xxl">
          <div className="row">
            <div className='col-12'>
              <h3 className="section-heading">Our Popular Products</h3>
            </div>

          </div>
          <div className="row">

            <ProductCard />
            <ProductCard />
            <ProductCard />
            <ProductCard />
          </div>
        </div>
      </section>

      {/*------------------ this is for marquee section ---------------------------- */}
      <section className="marque-wrapper py-5">
        <div className="container-xxl">
          <div className="row">
            <div className="col-12">
              <div className="marquee-inner-wrapper card-wrapper">
                <Marquee className='d-flex'>
                  {/* image section */}
                  <div className='mx-4 w-25 '>
                    <img src="images/brand-01.png" alt="brand" />
                  </div>

                  <div className='mx-4 w-25 '>
                    <img src="images/brand-02.png" alt="brand" />
                  </div>

                  <div className='mx-4 w-25 '>
                    <img src="images/brand-03.png" alt="brand" />
                  </div>

                  <div className='mx-4 w-25 '>
                    <img src="images/brand-04.png" alt="brand" />
                  </div>

                  <div className='mx-4 w-25 '>
                    <img src="images/brand-05.png" alt="brand" />
                  </div>

                  <div className='mx-4 w-25 '>
                    <img src="images/brand-06.png" alt="brand" />
                  </div>

                  <div className='mx-4 w-25 '>
                    <img src="images/brand-07.png" alt="brand" />
                  </div>

                  <div className='mx-4 w-25 '>
                    <img src="images/brand-08.png" alt="brand" />
                  </div>

                </Marquee>
              </div>
            </div>
          </div>
        </div>
      </section>





      {/* ------------------ blog wrapper section ---------------------------------- */}
      <section className="blog-wrapper py-5 home-wrapper-2">
        <div className="container-xxl">
          <div className="row">
            <div className='col-12'>
              <h3 className="section-heading">Our Latest News</h3>
            </div>
            {/* <BlogCard />
            <BlogCard />
            <BlogCard />
            <BlogCard /> */}
          </div>
          <div className="row">
            <div className="col-3">
            <BlogCard />
            </div>
            
            <div className="col-3">
            <BlogCard />
            </div>

            <div className="col-3">
            <BlogCard />
            </div>

            <div className="col-3">
            <BlogCard />
            </div>

          </div>
        </div>
      </section>

    </>
  )
}

export default Home