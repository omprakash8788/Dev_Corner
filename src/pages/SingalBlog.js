import React from 'react'
import { Link } from 'react-router-dom';
import BreadCrumb from '../components/BreadCrumb'
import Meta from '../components/Meta';
import {HiOutlineArrowNarrowLeft} from 'react-icons/hi'

const SingalBlog = () => {
    return (
        <>
            <Meta title={"Dynamic Blog Name"} />
            <BreadCrumb title="Dynamic Blog Name" />
            <div className="blog-wrapper home-wrapper-2 py-5">
                <div className="container-xxl">
                    <div className="row">
                        <div className="col-12">
                            <div className="single-blog-card">
                                <Link to='/blog' className='d-flex align-items-center gap-10'><HiOutlineArrowNarrowLeft className='fs-4'/> Go back to Blogs</Link>
                                <h3 className='title'>A Beautiful Sunday Morning Renaissance</h3>
                                <img width="100%" height="300px" src="https://cdn.shopify.com/s/files/1/0620/5082/8457/articles/blog-5_910x.jpg?v=1654929043" className='img-fluid w-100 my-4' alt="blog" />
                                {/* <img src="//cdn.shopify.com/s/files/1/0620/5082/8457/articles/blog-5_910x.jpg?v=1654929043" loading="lazy" width="100%" height="730" alt="A beautiful sunday morning renaissance"></img> */}
                                <p>You’re only as good as your last collection, which is an enormous pressure. I think there is something about luxury – it’s not something people need, but it’s what they want. It really pulls at their heart. I have a fantastic relationship with money.Scelerisque sociosqu ullamcorper urna nisl mollis vestibulum pretium commodo inceptos cum condimentum placerat diam venenatis blandit hac eget dis lacus a parturient a accumsan nisl ante vestibulum.</p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}

export default SingalBlog