import "./Department.css";
import department1 from "../asset/image/departments-1.jpg";
import department2 from "../asset/image/departments-2.jpg";
import department3 from "../asset/image/departments-3.jpg";
import department4 from "../asset/image/departments-4.jpg";
import department5 from "../asset/image/departments-5.jpg";
import { useState } from "react";
import { memo } from "react";

function Department() {
  const [activeTab, setActiveTab] = useState("department-tab-1");
  const handleTabClick = (tabId) => {
    setActiveTab(tabId);
  };
  return (
    <>
      <section className="py-5">
        <div className="container-department">
          <h2>بخش ها </h2>
          <p>
            لورم ایپسوم متن ساختگی با تولید سادگی نامفهوم از صنعت چاپ و با
            استفاده از طراحان گرافیک است.
          </p>
        </div>
        <div className="con-dep-inf">
          <div className="row">
            <div className="col-lg-3 position-relative">
              <div className="blue-line"></div>
              <ul className="depart-ul">
                <li className="nav-item" role="presentation">
                  <a
                    href="#department-tab-1"
                    className={`nav-link-dep ${
                      activeTab === "department-tab-1" ? "active" : ""
                    }`}
                    onClick={() => handleTabClick("department-tab-1")}
                  >
                    قلب و عروق
                  </a>
                </li>
                <li className="nav-item" role="presentation">
                  <a
                    href="#department-tab-2"
                    className={`nav-link-dep ${
                      activeTab === "department-tab-2" ? "active" : ""
                    }`}
                    onClick={() => handleTabClick("department-tab-2")}
                  >
                    قلب و عروق
                  </a>
                </li>
                <li className="nav-item" role="presentation">
                  <a
                    href="#department-tab-3"
                    className={`nav-link-dep ${
                      activeTab === "department-tab-3" ? "active" : ""
                    }`}
                    onClick={() => handleTabClick("department-tab-3")}
                  >
                    کبد شناسی{" "}
                  </a>
                </li>
                <li className="nav-item" role="presentation">
                  <a
                    href="#department-tab-4"
                    className={`nav-link-dep ${
                      activeTab === "department-tab-4" ? "active" : ""
                    }`}
                    onClick={() => handleTabClick("department-tab-4")}
                  >
                    {" "}
                    اطفال{" "}
                  </a>
                </li>
                <li className="nav-item" role="presentation">
                  <a
                    href="#department-tab-5"
                    className={`nav-link-dep ${
                      activeTab === "department-tab-5" ? "active" : ""
                    }`}
                    onClick={() => handleTabClick("department-tab-5")}
                  >
                    {" "}
                    مراقیت از چشم{" "}
                  </a>
                </li>
              </ul>
            </div>
            <div className="col-lg-9 mt-4 mt-lg-0">
              <div className="tab-content">
                {activeTab === "department-tab-1" && (
                  <div className="tab-pain active show" id="department-tab-1">
                    <div className="row">
                      <div className="col-lg-8 details order-2 order-lg-1 div-dep-hp">
                        <h3 className="fw-bold pb-3">قلب و عروق</h3>
                        <p className="fst-italic">
                          لورم ایپسوم متن ساختگی با تولید سادگی نامفهوم از صنعت
                          چاپ و با استفاده از طراحان گرافیک است. چاپگرها و{" "}
                        </p>
                        <p>
                          لورم ایپسوم متن ساختگی با تولید سادگی نامفهوم از صنعت
                          چاپ و با استفاده از طراحان گرافیک است. چاپگرها و متون
                          بلکه روزنامه و مجله در ستون و سطرآنچنان که لازم است و
                          برای شرایط فعلی تکنولوژی مورد نیاز و کاربردهای متنوع
                          با هدف بهبود ابزارهای کاربردی می باشد. کتابهای زیادی
                          در شصت و سه درصد گذشته، حال و آینده شناخت فراوان جامعه
                          و متخصصان
                        </p>
                      </div>
                      <div className="col-lg-4 order-1 order-lg-2">
                        <img src={department1} alt="" className="img-fluid" />
                      </div>
                    </div>
                  </div>
                )}
                {activeTab === "department-tab-2" && (
                  <div className="tab-pain active show" id="department-tab-2">
                    <div className="row">
                      <div className="col-lg-8 details order-2 order-lg-1 div-dep-hp">
                        <h3 className="fw-bold pb-3"> مغز واعصاب </h3>
                        <p className="fst-italic">
                          لورم ایپسوم متن ساختگی با تولید سادگی نامفهوم از صنعت
                          چاپ و با استفاده از طراحان گرافیک است. چاپگرها و{" "}
                        </p>
                        <p>
                          لورم ایپسوم متن ساختگی با تولید سادگی نامفهوم از صنعت
                          چاپ و با استفاده از طراحان گرافیک است. چاپگرها و متون
                          بلکه روزنامه و مجله در ستون و سطرآنچنان که لازم است و
                          برای شرایط فعلی تکنولوژی مورد نیاز و کاربردهای متنوع
                          با هدف بهبود ابزارهای کاربردی می باشد. کتابهای زیادی
                          در شصت و سه درصد گذشته، حال و آینده شناخت فراوان جامعه
                          و متخصصان
                        </p>
                      </div>
                      <div className="col-lg-4 order-1 order-lg-2">
                        <img src={department2} alt="" className="img-fluid" />
                      </div>
                    </div>
                  </div>
                )}
                {activeTab === "department-tab-3" && (
                  <div className="tab-pain active show" id="department-tab-3">
                    <div className="row">
                      <div className="col-lg-8 details order-2 order-lg-1 div-dep-hp">
                        <h3 className="fw-bold pb-3"> کبد شناسی </h3>
                        <p className="fst-italic">
                          لورم ایپسوم متن ساختگی با تولید سادگی نامفهوم از صنعت
                          چاپ و با استفاده از طراحان گرافیک است. چاپگرها و{" "}
                        </p>
                        <p>
                          لورم ایپسوم متن ساختگی با تولید سادگی نامفهوم از صنعت
                          چاپ و با استفاده از طراحان گرافیک است. چاپگرها و متون
                          بلکه روزنامه و مجله در ستون و سطرآنچنان که لازم است و
                          برای شرایط فعلی تکنولوژی مورد نیاز و کاربردهای متنوع
                          با هدف بهبود ابزارهای کاربردی می باشد. کتابهای زیادی
                          در شصت و سه درصد گذشته، حال و آینده شناخت فراوان جامعه
                          و متخصصان
                        </p>
                      </div>
                      <div className="col-lg-4 order-1 order-lg-2">
                        <img src={department3} alt="" className="img-fluid" />
                      </div>
                    </div>
                  </div>
                )}
                {activeTab === "department-tab-4" && (
                  <div className="tab-pain active show" id="department-tab-4">
                    <div className="row">
                      <div className="col-lg-8 details order-2 order-lg-1 div-dep-hp">
                        <h3 className="fw-bold pb-3"> اطفال </h3>
                        <p className="fst-italic">
                          لورم ایپسوم متن ساختگی با تولید سادگی نامفهوم از صنعت
                          چاپ و با استفاده از طراحان گرافیک است. چاپگرها و{" "}
                        </p>
                        <p>
                          لورم ایپسوم متن ساختگی با تولید سادگی نامفهوم از صنعت
                          چاپ و با استفاده از طراحان گرافیک است. چاپگرها و متون
                          بلکه روزنامه و مجله در ستون و سطرآنچنان که لازم است و
                          برای شرایط فعلی تکنولوژی مورد نیاز و کاربردهای متنوع
                          با هدف بهبود ابزارهای کاربردی می باشد. کتابهای زیادی
                          در شصت و سه درصد گذشته، حال و آینده شناخت فراوان جامعه
                          و متخصصان
                        </p>
                      </div>
                      <div className="col-lg-4 order-1 order-lg-2">
                        <img src={department4} alt="" className="img-fluid" />
                      </div>
                    </div>
                  </div>
                )}
                {activeTab === "department-tab-5" && (
                  <div className="tab-pain active show" id="department-tab-5">
                    <div className="row">
                      <div className="col-lg-8 details order-2 order-lg-1 div-dep-hp">
                        <h3 className="fw-bold pb-3"> مراقیت از چشم </h3>
                        <p className="fst-italic">
                          لورم ایپسوم متن ساختگی با تولید سادگی نامفهوم از صنعت
                          چاپ و با استفاده از طراحان گرافیک است. چاپگرها و{" "}
                        </p>
                        <p>
                          لورم ایپسوم متن ساختگی با تولید سادگی نامفهوم از صنعت
                          چاپ و با استفاده از طراحان گرافیک است. چاپگرها و متون
                          بلکه روزنامه و مجله در ستون و سطرآنچنان که لازم است و
                          برای شرایط فعلی تکنولوژی مورد نیاز و کاربردهای متنوع
                          با هدف بهبود ابزارهای کاربردی می باشد. کتابهای زیادی
                          در شصت و سه درصد گذشته، حال و آینده شناخت فراوان جامعه
                          و متخصصان
                        </p>
                      </div>
                      <div className="col-lg-4 order-1 order-lg-2">
                        <img src={department5} alt="" className="img-fluid" />
                      </div>
                    </div>
                  </div>
                )}
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
export default memo(Department);
