import React from 'react'
import BreadCrumb from '../components/BreadCrumb'
import Meta from '../components/Meta';
import {AiOutlineHome,AiOutlineMail} from 'react-icons/ai';
import {BiPhoneCall,BiInfoCircle} from 'react-icons/bi';

const Contact = () => {
  return (
    <>
      <Meta title={"Contact Us"} />
            <BreadCrumb title="Contact Us" />
       <div className="contact-wrapper py-5 home-wrapper-2">
         <div className="container-xxl">
          <div className="row">
            <div className="col-12">
            <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d15023.791743235768!2d73.61735111288617!3d19.71484063761503!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3bdd8519315db52d%3A0xbdb2b4b6df4993fe!2sGhoti%2C%20Ghoti%20Budruk%2C%20Maharashtra%20422402!5e0!3m2!1sen!2sin!4v1679732224590!5m2!1sen!2sin" 
            width="600" 
            height="450"
            className="border-0 w-100"
             allowFullScreen=""
               loading="lazy"
               referrerPolicy="no-referrer-when-downgrade"></iframe>
            </div>
            {/* contact form  */}
            <div className="col-12 mt-5">
              <div className="contact-inner-wrapper d-flex justify-content-between ">
                <div>
                  <h3 className="contact-title mb-4">Contact</h3>
                  <form action="" className='d-flex flex-column gap-15'>
                    <div>
                      <input type="text" className="form-control" placeholder='Name' />
                    </div>
                    <div>
                      <input type="email" className="form-control" placeholder='Email' />
                    </div>
                    <div>
                      <input type="tel" className="form-control"  placeholder='Mobile Number'/>
                    </div>
                    <div>
                      <textarea name="" id="" className='w-100 form-control' cols="30" rows="4" placeholder='Comments'></textarea>
                    </div>
                    <div>
                      <button className='button border-0'>Submit</button>
                    </div>
                  </form>
                </div>


                <div>
                  <h3 className="contact-title mb-4">Get in touch with us</h3>
                  <div>
                    <ul className='ps-0'>
                      <li className='mb-3 d-flex gap-15 align-items-center'> 
                      <AiOutlineHome className='fs-5'/>
                      <address className='mb-0'>House No-343, Near village Ghothi, Nashik ,Maharastra</address>
                        </li>
                      <li className='mb-3 d-flex gap-15 align-items-center'> 
                        <BiPhoneCall className='fs-5'/>
                        <a href="tel:+91 87883644767">+91 8788364476</a>
                        </li>
                      <li className='mb-3 d-flex gap-15 align-items-center'> 
                        <AiOutlineMail className='fs-5'/>
                        <a href="mailto:ompra552@gmail.com">ompra552@gmail.com</a>
                        </li>
                        <li className='mb-3 d-flex gap-15 align-items-center'>
                          <BiInfoCircle className='fs-5'/>
                          <p className='mb-0'>Monday – Friday 10 AM – 8 PM</p>
                        </li>
                    </ul>
                  </div>
                </div>



              </div>
            </div>


          </div>
         </div>
         </div>     
    </>
  )
}

export default Contact