import { Link, useNavigate } from "react-router-dom";
import { checkDateBeforeMonthToPresent } from "../../../Functions/helper";
import RateStars from "../MidComponents/RateStars";
import SvgIcon from "../MiniComponents/SvgIcon";
import s from "./ProductCard.module.scss";

const ProductCard = ({
  product,
  customization = {
    stopHover: false,
    showDiscount: true,
    showFavIcon: true,
    showDetailsIcon: true,
    showRemoveIcon: false,
    showNewText: false,
  },
}) => {
  const {
    shortName,
    name,
    price,
    discount,
    afterDiscount,
    img,
    rate,
    votes,
    id,
    addedDate,
  } = product;
  const {
    stopHover,
    showDiscount,
    showFavIcon,
    showDetailsIcon,
    showRemoveIcon,
    showNewText,
  } = customization;
  const noHoverClass = stopHover ? s.noHover : "";
  const hideDiscountClass = discount <= 0 || !showDiscount ? s.hide : "";
  const hideNewClass = shouldHideNewWord();
  const navigateTo = useNavigate();

  function shouldHideNewWord() {
    return checkDateBeforeMonthToPresent(addedDate) || !showNewText
      ? s.hide
      : "";
  }

  function navigateToProductDetails() {
    navigateTo(`/details/?product=${name.toLowerCase()}`);
  }

  return (
    <div className={`${s.card} ${noHoverClass}`}>
      <div className={s.productImg}>
        <img src={img} alt={name} title={name} />

        <div className={s.layerContent}>
          {hideNewClass && (
            <div className={`${s.discount} ${hideDiscountClass}`}>
              -{discount}%
            </div>
          )}

          <div className={`${s.new} ${hideNewClass}`}>New</div>

          <div className={s.icons}>
            {showFavIcon && (
              <a href="#" className={s.iconHolder} title="Favorite">
                <SvgIcon name="heart" />
              </a>
            )}

            {showDetailsIcon && (
              <a href="#" className={s.iconHolder} title="Details">
                <SvgIcon name="eye" />
              </a>
            )}

            {showRemoveIcon && (
              <button type="button" className={s.iconHolder} title="Remove">
                <SvgIcon name="trashCan" />
              </button>
            )}
          </div>

          <button type="button" className={s.addToCartBtn}>
            <SvgIcon name="cart3" />
            <span>Add to cart</span>
          </button>
        </div>
      </div>

      <section className={s.productInfo}>
        <strong className={s.productName}>
          <Link onClick={() => navigateToProductDetails()}>{name}</Link>
        </strong>
        <div className={s.price}>
          ${afterDiscount}
          <del className={s.afterDiscount}>${price}</del>
        </div>

        <div className={s.rateContainer}>
          <RateStars rate={rate} />

          <span className={s.numOfVotes}>({votes})</span>
        </div>
      </section>
    </div>
  );
};
export default ProductCard;
