import { memo, useState } from "react";
import { useTranslation } from "react-i18next";
import { Helmet } from "react-helmet-async";
import "./Department.css";
import department1 from "../asset/image/departments-1.jpg";
import department2 from "../asset/image/departments-2.jpg";
import department3 from "../asset/image/departments-3.jpg";
import department4 from "../asset/image/departments-4.jpg";
import department5 from "../asset/image/departments-5.jpg";

function Department() {
  const { t } = useTranslation();
  const [activeTab, setActiveTab] = useState("tab1");

  const departments = [
    {
      id: "tab1",
      key: "cardiology",
      image: department1,
    },
    {
      id: "tab2",
      key: "neurology",
      image: department2,
    },
    {
      id: "tab3",
      key: "hepatology",
      image: department3,
    },
    {
      id: "tab4",
      key: "pediatrics",
      image: department4,
    },
    {
      id: "tab5",
      key: "eyeCare",
      image: department5,
    },
  ];

  const handleTabClick = (tabId) => {
    setActiveTab(tabId);
  };

  return (
    <section className="departments py-5" aria-label="Medical Departments">
      <Helmet>
        <title>{t("department.title")} | MediCare Plus</title>
        <meta name="description" content={t("department.description")} />
        <meta
          name="keywords"
          content="medical departments, cardiology, neurology, hepatology, pediatrics, eye care"
        />
        <meta property="og:title" content={t("department.title")} />
        <meta property="og:description" content={t("department.description")} />
        <meta property="og:type" content="website" />
        <link rel="canonical" href={window.location.href} />
      </Helmet>

      <div className="container-department">
        <header className="text-center mb-5">
          <h1>{t("department.title")}</h1>
          <p>{t("department.description")}</p>
        </header>
      </div>
      <div className="con-dep-inf">
        <div className="row">
          <nav
            className="col-lg-3 position-relative"
            aria-label="Department Navigation"
          >
            <div className="blue-line"></div>
            <ul className="depart-ul">
              {departments.map((dept) => (
                <li className="nav-item" role="presentation" key={dept.id}>
                  <button
                    className={`nav-link-dep ${
                      activeTab === dept.id ? "active" : ""
                    }`}
                    onClick={() => handleTabClick(dept.id)}
                    aria-selected={activeTab === dept.id}
                    aria-controls={`${dept.id}-panel`}
                    id={`${dept.id}-tab`}
                  >
                    {t(`department.departments.${dept.key}.title`)}
                  </button>
                </li>
              ))}
            </ul>
          </nav>

          <div className="col-lg-9">
            <div className="tab-content">
              {departments.map((dept) => (
                <article
                  className={`tab-pain ${
                    activeTab === dept.id ? "active show" : ""
                  }`}
                  id={`${dept.id}-panel`}
                  role="tabpanel"
                  aria-labelledby={`${dept.id}-tab`}
                  key={dept.id}
                  hidden={activeTab !== dept.id}
                >
                  <div className="row">
                    <div className="col-lg-8 details order-2 order-lg-1 div-dep-hp">
                      <h2 className="fw-bold pb-3">
                        {t(`department.departments.${dept.key}.title`)}
                      </h2>
                      <p className="fst-italic">
                        {t(`department.departments.${dept.key}.description`)}
                      </p>
                    </div>
                    <div className="col-lg-4 order-1 order-lg-2">
                      <img
                        src={dept.image}
                        alt={t(`department.departments.${dept.key}.title`)}
                        className="img-fluid"
                        loading="lazy"
                      />
                    </div>
                  </div>
                </article>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default memo(Department);
