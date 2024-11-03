import './Doctors.css'
import Navbar from '../navbar/Navbar'
import doctor1 from '../asset/image/doctors/doctors-1.jpg'
import doctor2 from '../asset/image/doctors/doctors-2.jpg'
import doctor3 from '../asset/image/doctors/doctors-3.jpg'
import doctor4 from '../asset/image/doctors/doctors-4.jpg'

function Doctors(){
  return(
    <>
    <Navbar/>
    <section className='doctor-section'>
      <div className='doctor-header'>
        <h3>دکتر ها</h3>
        <p>لورم ایپسوم متن ساختگی با تولید سادگی نامفهوم از صنعت چاپ و با استفاده از طراحان گرافیک است. </p>
      </div>
      <div className='doctor-main'>
        <div className='row gy-3 px-md-5'>
          <div className='col-lg-6'>
            <div className='doctor-div'>
              <div><img src={doctor1} alt="" className='img-fluid doctor-img' /></div>
              <div className='doctor-text1'>
                <h4>دکتر خشایار احمدی</h4>
                <p>جراح مغز و اعصاب</p>
                <hr />
                <p> لورم ایپسوم متن ساختگی با تولید سادگی نامفهوم از صنعت چاپ </p>
                <div className='doctor-icon'>
                <i className="fa-brands fa-x-twitter"></i>
                <i className="fa-brands fa-facebook"></i>
                <i className="fa-brands fa-instagram"></i>
                <i className="fa-brands fa-linkedin"></i>
                </div>
              </div>
            </div>
          </div>
          <div className='col-lg-6'>
          <div className='doctor-div'>
              <div><img src={doctor2} alt="" className='img-fluid doctor-img' /></div>
              <div className='doctor-text1'>
                <h4>دکتر نیلوفر پاکزاد</h4>
                <p>جراح مغز و اعصاب</p>
                <hr />
                <p>لورم ایپسوم متن ساختگی با تولید سادگی نامفهوم از صنعت چاپ </p>
                <div className='doctor-icon'>
                <i className="fa-brands fa-x-twitter"></i>
                <i className="fa-brands fa-facebook"></i>
                <i className="fa-brands fa-instagram"></i>
                <i className="fa-brands fa-linkedin"></i>
                </div>
              </div>
            </div>
          </div>
          <div className='col-lg-6'>
          <div className='doctor-div'>
              <div><img src={doctor3} alt="" className='img-fluid doctor-img' /></div>
              <div className='doctor-text1'>
                <h4>دکتر داریوش بزرگمهر</h4>
                <p>جراح مغز و اعصاب</p>
                <hr />
                <p>لورم ایپسوم متن ساختگی با تولید سادگی نامفهوم از صنعت چاپ </p>
                <div className='doctor-icon'>
                <i className="fa-brands fa-x-twitter"></i>
                <i className="fa-brands fa-facebook"></i>
                <i className="fa-brands fa-instagram"></i>
                <i className="fa-brands fa-linkedin"></i>
                </div>
              </div>
            </div>
          </div>
          <div className='col-lg-6'>
          <div className='doctor-div'>
              <div><img src={doctor4} alt="" className='img-fluid doctor-img' /></div>
              <div className='doctor-text1'>
                <h4>دکتر پرستو حقیقی</h4>
                <p>جراح مغز و اعصاب</p>
                <hr />
                <p>لورم ایپسوم متن ساختگی با تولید سادگی نامفهوم از صنعت چاپ </p>
                <div className='doctor-icon'>
                <i className="fa-brands fa-x-twitter"></i>
                <i className="fa-brands fa-facebook"></i>
                <i className="fa-brands fa-instagram"></i>
                <i className="fa-brands fa-linkedin"></i>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
    </>
  )
}export default Doctors;