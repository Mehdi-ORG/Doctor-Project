import { memo } from "react";

function CounterCard({ icon, number, place }) {
  return (
    <div>
      <div className="bg-white rounded shadow " data-aos="flip-right">
        {icon}
        <h2
          data-purecounter-start="0"
          data-purecounter-end={number}
          className="purecounter"
        >
          12
        </h2>
        <p>{place} </p>
      </div>
    </div>
  );
}
export default memo(CounterCard);
