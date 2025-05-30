import { useEffect, memo } from "react";
import "./Counter.css";
import CountUp from "react-countup";
import AOS from "aos";
import "aos/dist/aos.css";
import { useTranslation } from "react-i18next";

function Counter() {
  const { t } = useTranslation();

  useEffect(() => {
    AOS.init({
      duration: 1000,
      once: true,
      offset: 100,
    });
  }, []);

  const counterData = [
    {
      icon: "fas fa-user-md",
      end: 85,
      text: t("counter.doctors"),
      delay: "100",
    },
    {
      icon: "fas fa-hospital",
      end: 18,
      text: t("counter.departments"),
      delay: "200",
    },
    {
      icon: "fas fa-flask",
      end: 12,
      text: t("counter.researchLabs"),
      delay: "300",
    },
    {
      icon: "fas fa-award",
      end: 150,
      text: t("counter.awards"),
      delay: "400",
    },
  ];

  return (
    <section className="counter-section">
      <div className="container">
        <div className="row">
          {counterData.map((item, index) => (
            <div
              key={index}
              className="col-lg-3 col-md-6"
              data-aos="fade-up"
              data-aos-delay={item.delay}
            >
              <div className="counter-box">
                <i className={item.icon}></i>
                <span>
                  <CountUp
                    end={item.end}
                    duration={2.5}
                    enableScrollSpy
                    scrollSpyOnce
                    scrollSpyDelay={200}
                  />
                  +
                </span>
                <p>{item.text}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

export default memo(Counter);
