import { memo } from "react";
import { useTranslation } from "react-i18next";

function CounterCard({ icon, number, place }) {
  const { t } = useTranslation();

  return (
    <div>
      <div className="bg-white rounded shadow " data-aos="flip-right">
        {icon}
        <h2
          data-purecounter-start="0"
          data-purecounter-end={number}
          className="purecounter"
        >
          {number}
        </h2>
        <p>{t(place)}</p>
      </div>
    </div>
  );
}

export default memo(CounterCard);
