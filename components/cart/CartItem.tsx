import { NextPage } from "next";
import Image from "next/image";
import React from "react";

interface Props {
  image: string;
  title: string;
  subtitle: string;
}

const CartItem: NextPage<Props> = (props) => {
  return (
    <div>
      <div className="card cart_list_card p-3">
        <div className="d-flex gap-3">
          <div className="w_40">
            <Image src={props.image} className="w-100" alt="..." />
          </div>
          <div className="w_60">
            <h5 className="cart_list_card_title">{props.title}</h5>
            <p className="cart_list_card_text">{props.subtitle}</p>
            <button className="btn cart_list_card_remove_btn">
              Remove from cart
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CartItem;
