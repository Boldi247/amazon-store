import React from "react";
import css from "./ProductBanner.module.css";

const ProductBanner = (props) => {
  return (
    <>
      <div className={css["left-s"]}>
        <div className={css.name}>
          <span>{props.name}</span>
          <span>{props.detail}</span>
        </div>
        <span>{props.price}$</span>
        <div>Shop Now</div>
      </div>
      <img src={props.img} alt="product" className={css["img-p"]} />
    </>
  );
};

export default ProductBanner;
