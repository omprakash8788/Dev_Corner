import React from 'react'
import { Link } from 'react-router-dom'

const BlogCard = () => {
  return (
    // <div className='col-3'>
        <div className="blog-card">
            <div className="card-image">
                <img src="images/blog-1.jpg" className='img-fluid w-100'  alt="blog" />
            </div>
            <div className="blog-content">
                <p className='date'>11 Jun, 2022</p>
                <h5 className="title">A Beautiful Sunday Morning Renaissance</h5>
                <p className="desc">You’re only as good as your last collection, which is an enormous pressure. I think there is something about luxury – it’s not something people need.</p>
                <Link to='/blog/:id' className='button'>Read More</Link>
            </div>
        </div>
    // </div>
  )
}

export default BlogCard