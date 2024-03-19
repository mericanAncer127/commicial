import { SwiperSlide } from "swiper/react";
import { introductionSliderData } from "../../../Data/staticData";
import SvgIcon from "../../Shared/MiniComponents/SvgIcon";
import s from "./IntroductionSlides.module.scss";

const IntroductionSlides = () => {
  return introductionSliderData.map(
    ({ productName, productImg, logoImg, discountText, id }) => (
      <SwiperSlide className={s.slide} key={id}>
        <img src={productImg} alt="product preview" />
        <div className={s.content}>
          <div className={s.nameProduct}>
            <img src={logoImg} alt="market logo" />
            <strong>{productName}</strong>
          </div>

          <h2 className={s.discount}>{discountText}</h2>

          <a href="\#" className={s.shopNow}>
            <span>Shop Now</span>
            <SvgIcon name="arrowRightLong" />
          </a>
        </div>
      </SwiperSlide>
    )
  );
};
export default IntroductionSlides;
