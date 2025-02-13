import { memo } from 'react';
import './imageCard.css'

function ImageCard({ image }) {
  return (
    <div className="image-container">
      <div className="zoom-image">
        <img src={image} alt="" className="img-fluid" />
      </div>
    </div>
  );
}
export default memo(ImageCard);
