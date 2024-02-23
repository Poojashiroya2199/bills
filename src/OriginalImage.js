/* eslint-disable jsx-a11y/img-redundant-alt */
import { Fragment } from "react";
import { useNavigate } from "react-router-dom";

const Original = ({ selectedFiles, handleFileChange, handleUpload }) => {
  const navigate = useNavigate();

  const handleFileUpload = () => {
    handleUpload();
    // selectedFiles.forEach((file) => {
    //   console.log("Selected Files:", file);
    // });
    navigate("/download");
  };

  return (
    <div>
      <input type="file" multiple onChange={handleFileChange} />
      <button onClick={handleFileUpload}>Upload</button>

      {selectedFiles.length > 0 && (
        <div>
          <h3>Selected Files:</h3>
          <ul>
            {selectedFiles.map((file, index) => (
              <Fragment key={index}>
                <li >{file.name}</li>
                <img
                  src={URL.createObjectURL(file)}
                  alt={`Image-${index}`}
                  style={{
                    maxWidth: "100px",
                    maxHeight: "100px",
                    marginLeft: "10px",
                  }}
                />
              </Fragment>
            ))}
          </ul>
        </div>
      )}
    </div>
  );
};

export default Original;
