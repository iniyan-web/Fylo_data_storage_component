import React, { useState } from "react";
import logo from "../images/logo.svg";
import doc from "../images/icon-document.svg";
import folder from "../images/icon-folder.svg";
import upload from "../images/icon-upload.svg";

const Fylo = () => {
  const [storageConsumed, setStorageConsumed] = useState(815);
  const [storageLeft, setStorageLeft] = useState(185);
  const sliderWidth = {
    "--slider-width": `${storageConsumed / 10 + 0.5}%`,
  };

  return (
    <>
      <div className="fylo">
        <div className="main">
          <img className="logo" src={logo} alt="Home." />
          <div className="options">
            <img className="doc" src={doc} alt="Add a document." />
            <img className="folder" src={folder} alt="Add a folder." />
            <img className="upload" src={upload} alt="Upload files direclty." />
          </div>
        </div>
        <div className="storage">
          <h1>
            You’ve used{" "}
            <span>
              {storageConsumed}
              GB
            </span>{" "}
            of your storage
          </h1>
          <div className="storage-left">
            <h1>{storageLeft}</h1>
            <p>GB LEFT</p>
          </div>
          <div className="storage-consumed">
            <label>
              <input
                value={storageConsumed}
                className="range"
                type="range"
                min="0"
                max="1000"
                onInput={(e) => {
                  setStorageConsumed(e.target.value);
                  setStorageLeft(1000 - e.target.value);
                }}
                style={sliderWidth}
              ></input>
            </label>
            <div className="min-max">
              <p>0 GB</p>
              <p>1000 GB</p>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Fylo;
