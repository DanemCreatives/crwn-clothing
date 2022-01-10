import React from "react";
import { connect } from "react-redux";
import { createStructuredSelector } from "reselect";
import { useNavigate } from "react-router-dom";
import { selectCartItems } from "../../redux/cart/cart.selectors";
import { toggleCartHidden } from "../../redux/cart/cart.actions";
import CustomButton from "../CustomButton/custom-button.component";
import CartItem from "../CartItem/cart-item.component";
import "./cart-dropdown.styles.scss";

const CartDropdown = ({ cartItems, dispatch }) => {
  const navigate = useNavigate();
  return (
    <div className="cart-dropdown">
      {cartItems.length ? (
        <div className="cart-items">
          {cartItems.map((cartItem) => (
            <CartItem key={cartItem.id} item={cartItem} />
          ))}
        </div>
      ) : (
        <span className="empty-message">Your cart is empty</span>
      )}
      <CustomButton
        onClick={() => {
          navigate("/checkout");
          dispatch(toggleCartHidden());
        }}
      >
        GO TO CHECKOUT
      </CustomButton>
    </div>
  );
};

const mapStateToProps = createStructuredSelector({
  cartItems: selectCartItems,
});

export default connect(mapStateToProps)(CartDropdown);
