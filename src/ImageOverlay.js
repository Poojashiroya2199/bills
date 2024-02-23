const ImageOverLay = ({ baseImage, overlayImage }) => {
    return (
      <div style={{ position: "relative", width: "100%" }}>
        <img
          src={URL.createObjectURL(baseImage)}
          alt="Base"
          style={{ display: "block", width: "102%", height: "1120px" }}
        />
        <img
          src={overlayImage}
          alt="Overlay"
          style={{
            display: "block",
            position: "absolute",
            top: 0,
            left: 0,
            width: "102%",
            height: "1120px",
          }}
        />
      </div>
    );
  };
  
  export default ImageOverLay;
  