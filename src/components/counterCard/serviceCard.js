import './serviceCard.css'
import { memo } from 'react';

function ServiceCard({iconS, title, textS}) {
  return (
    <div  data-aos="fade-up">
      <div className="bg-white rounded service-bgwhite">
        <div className="icon">
          {iconS}
        </div>
        <button className="a-link">
          <h3 className="mb-4">{title} </h3>
        </button>
        <p className="matn text-center">{textS}
        </p>
      </div>
    </div>
  );
}
export default memo(ServiceCard)
