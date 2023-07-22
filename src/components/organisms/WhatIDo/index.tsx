import React, { useEffect, useRef, useState } from "react";
import Slider, { Settings } from "react-slick";
import classNames from "classnames";
import style from "./style.module.scss";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import { slideContents } from "./data";
import { FadeInContainer } from "../../atoms/FadeInContainer";

const images = [
  {
    src: "../../../../public/images/whatIDo/risograph.png",
  },
  {
    src: "../../../../public/images/whatIDo/risograph.png",
  },
  {
    src: "../../../../public/images/whatIDo/risograph.png",
  },
  {
    src: "../../../../public/images/whatIDo/risograph.png",
  },
  {
    src: "../../../../public/images/whatIDo/risograph.png",
  },
  {
    src: "../../../../public/images/whatIDo/risograph.png",
  },
  {
    src: "../../../../public/images/whatIDo/risograph.png",
  },
];

type WhatIDoProps = {
  className?: string;
};

const WhatIDo: React.FC<WhatIDoProps> = ({ className = "" }) => {
  const AUTO_SLIDE_INTERVAL = 8000; // 8000msで自動スライド
  const SET_INTERVAL_SECOND = 10; // 10ms毎にプログレスバーの幅を再計算

  const [currentSlideNumber, setCurrentSlideNumber] = useState(0);
  const [progressBarWidth, setProgressBarWidth] = useState(0);
  const sliderRef = useRef<Slider | null>(null);

  const settings: Settings = {
    initialSlide: 0,
    dots: false,
    autoplay: false,
    focusOnSelect: false,
    speed: 500,
    waitForAnimate: true,
    slidesToShow: 3,
    centerMode: true,
    centerPadding: "0px", // 追加：センターモード時のスライド間の余白を0に設定
    beforeChange: (current, next) => {
      setCurrentSlideNumber(next);
      setProgressBarWidth(0); // スライド切り替え時にプログレスバーをリセット
    },
  };

  useEffect(() => {
    let intervalId: number | null = null;
    let progressBarInterval: number | null = null;

    const startAutoSlide = () => {
      intervalId = window.setInterval(() => {
        const nextSlide = (currentSlideNumber + 1) % images.length;
        sliderRef.current?.slickGoTo(nextSlide);
      }, AUTO_SLIDE_INTERVAL);

      // プログレスバーのアニメーションをセット
      progressBarInterval = window.setInterval(() => {
        setProgressBarWidth((prevWidth) => {
          const remainingWidth = AUTO_SLIDE_INTERVAL - SET_INTERVAL_SECOND;
          return Math.min(prevWidth + SET_INTERVAL_SECOND, remainingWidth);
        });
      }, SET_INTERVAL_SECOND);
    };

    const stopAutoSlide = () => {
      if (intervalId) {
        clearInterval(intervalId);
      }
      if (progressBarInterval) {
        clearInterval(progressBarInterval);
      }
    };

    startAutoSlide();

    return () => {
      stopAutoSlide();
    };
  }, [currentSlideNumber]);

  return (
    <div id="WhatIDo" className={classNames(style.WhatIDo, className)}>
      <FadeInContainer>
        <p className={style.WhatIDo__title}>
          <span className={style.WhatIDo__titleRow}>+ Hello</span>
          <span className={style.WhatIDo__titleRow}>2023</span>
          <span className={style.WhatIDo__titleRow}>What I do?</span>
        </p>
        <div className={style.WhatIDo__sliderWrapper}>
          <Slider ref={sliderRef} {...settings}>
            {images.map((img, index) => (
              <div
                key={index}
                className={classNames(
                  style.WhatIDo__sliderContent,
                  currentSlideNumber === index
                    ? style["WhatIDo__sliderContent--current"]
                    : ""
                )}
              >
                <img src={img.src} alt="picture" />
              </div>
            ))}
          </Slider>
        </div>
        <p className={style.WhatIDo__currentSlideIndicator}>
          <span className={style.WhatIDo__progressBars}>
            <span className={style.WhatIDo__progressBarBase} />
            <span
              className={style.WhatIDo__progressBarCurrent}
              style={{
                width: `${(progressBarWidth / AUTO_SLIDE_INTERVAL) * 100}%`,
              }}
            />
          </span>
          <span className={style.WhatIDo__numbers}>{`0${
            currentSlideNumber + 1
          } / 06`}</span>
        </p>
      </FadeInContainer>
      <FadeInContainer>
        <div className={style.WhatIDo__slideText}>
          <p className={style.WhatIDo__slideTitle}>
            {slideContents[currentSlideNumber].title}
          </p>
          <p className={style.WhatIDo__slideContent}>
            {slideContents[currentSlideNumber].text}
          </p>
        </div>
      </FadeInContainer>
    </div>
  );
};

export default WhatIDo;
