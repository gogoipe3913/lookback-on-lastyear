import React, { useState } from "react";
import style from "./style.module.scss";
import ScrollIndicator from "../../atoms/ScrollIndicator";
import classNames from "classnames";

const Top: React.FC = () => {
  const [isLoading, setIsLoading] = useState(true);

  // 動画がロードされたときに呼ばれる関数
  const handleVideoLoad = () => {
    setIsLoading(false);
  };

  return (
    <>
      {isLoading && (
        <div className={style.Loading}>
          <p className={style.Loading__title}>LOOKBACK ON LASTYEAR</p>
        </div>
      )}
      <div id="Top" className={style.Top}>
        <div
          className={classNames(
            style.Top__videoWrapper,
            style["Top__videoWrapper--displayed"]
          )}
        >
          <p className={style.Top__titleBox}>
            <span className={style.Top__title}>LOOKBACK ON LASTYEAR</span>
          </p>
          <div className={style.Top__videoFrame}>
            <video
              playsInline
              muted={true}
              autoPlay={true}
              loop={true}
              src="/video/topVisualVideo.mp4"
              onLoadedData={handleVideoLoad}
              className={style.Top__video}
            />
            <div className={style.Top__titleBoxOnImage}>
              <span className={style.Top__titleOnImage}>
                LOOKBACK ON LASTYEAR
              </span>
              <span className={style.Top__titleOnImageSubTitle}>
                + hello 2023, what i do?
              </span>
            </div>
          </div>
        </div>
        <ScrollIndicator className={style.Top__scrollIndicator} />
      </div>
    </>
  );
};

export default Top;
