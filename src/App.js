import { useState } from "react";
import Original from "./OriginalImage";
import "./index.css";
import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";
import Download from "./Download";

export default function App() {
  const [selectedFiles, setSelectedFiles] = useState([]);

  const handleFileChange = (e) => {
    const files = e.target.files;
    setSelectedFiles([...selectedFiles, ...files]);
  };

  const handleUpload = () => {
    selectedFiles.forEach((file) => {
      console.log("Selected Files:", file);
    });
  };

  const router = createBrowserRouter([
    {
      path: "/",
      element: (
        <div>
          <h1>Hello World</h1>
          <Original
            selectedFiles={selectedFiles}
            handleFileChange={handleFileChange}
            handleUpload={handleUpload}
          />
        </div>
      ),
    },
    {
      path: "/download",
      element: <Download selectedFiles={selectedFiles} />,
    },
  ]);
  return (
    <div>
      <RouterProvider router={router} />
    </div>
  );
}
