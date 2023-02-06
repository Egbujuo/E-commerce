import React from "react";
import "../Style/Cart.css";

const Cart = ({ cartItems, increaseCount, decreaseCount, totalAmount }) => {
  return (
      <div>
      {cartItems.map((eachItem) => {
    //      const { id, title, image, price, descriptive } = eachItem;
          return (
      

          <div className="eachItem" key={eachItem.id}>
            <img src={eachItem.image} alt="" />
            <div>
              <p>{eachItem.title}</p>
              <p>{eachItem.price}</p>
              <div className="eachItem-quantity">
                <button
                  onClick={() => {
                    decreaseCount(eachItem);
                  }}
                >
                  -
                </button>
                <p>{eachItem.quantity}</p>
                <button
                  onClick={() => {
                    increaseCount(eachItem);
                  }}
                >
                  +
                </button>
              </div>
            </div>
          </div>
        );
      })}

      {/* {cartItems.length < 1 ? <p>0</p>:}  */}
    </div>
  );
};

export default Cart;
