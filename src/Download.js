import ImageOverLay from "./ImageOverlay";
import Image2 from "./Images/b.png";
import "./index.css";

const Download = ({ selectedFiles }) => {
  return (
    <div className="download">
      {selectedFiles &&
        selectedFiles.map((imgItem) => (
          <ImageOverLay baseImage={imgItem} overlayImage={Image2} />
        ))}
    </div>
  );
};

export default Download;
