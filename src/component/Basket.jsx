import React from 'react';

export default function Basket(props) {
  const { cartItems, onAdd, onRemove } = props;
  const itemsPrice = cartItems.reduce((a, c) => a + c.qty * c.price, 0);
  const taxPrice = itemsPrice * 0.14;
  const shippingPrice = itemsPrice > 2000 ? 0 : 20;
  const totalPrice = itemsPrice + taxPrice + shippingPrice;
  return (
    // Cart starts here
    <div className="container cart-sec my-pdp">
      <h2>Basket</h2>
      <hr />
      <div className="row">
        <div className="col-md-8">
          {cartItems.length === 0 && <h1 className='emptybasket'>Basket is empty <i className='tear-icon fas fa-sad-tear'></i></h1>}
          {cartItems.map((item) => (
            <div key={item.id} className="row btm-border">
              <div className="col-md-2">
                <div className="flex-container" style={{ display: "flex" }}>
                  <span>
                    <img src={item.image} height="70px" width="70px" className='mr-10' />
                  </span>

                </div>
              </div>
              <div className="col-md-5 col-xs-12">
                <span className='ms-end'>
                  <p> <span><b>{item.title}</b></span>
                  </p>
                  <p>${item.price}</p>
                </span>
              </div>
              <div className="col-md-3 col-xs-12 text-right">
                <span><b>Qty:</b></span> {item.qty} * ${item.price.toFixed(2)}
              </div>
              <div className="col-md-2 col-xs-12">
                <button onClick={() => onRemove(item)} className="btn btn-outline-info">
                  -
                </button>{' '}
                <button onClick={() => onAdd(item)} className="btn btn-outline-info">
                  +
                </button>
              </div>
            </div>
          ))}
        </div>
        <div className="col-md-4 col-xs-12">
          {cartItems.length !== 0 && (
            <>
              <div className="row pad" style={{ displsay: "flex" }}>
                <div className="col-md-2">Price</div>
                <div className="col-md-1 text-right">${itemsPrice.toFixed(2)}</div>
              </div>
              <div className="row pad">
                <div className="col-md-2">Tax</div>
                <div className="col-md-1 text-right">${taxPrice.toFixed(2)}</div>
              </div>
              <div className="row pad">
                <div className="col-md-2">Shipping</div>
                <div className="col-md-1 text-right">
                  ${shippingPrice.toFixed(2)}
                </div>
              </div>

              <div className="row pad">
                <div className="col-md-2">
                  <strong>Total</strong>
                </div>
                <div className="col-md-1 text-right">
                  <strong>${totalPrice.toFixed(2)}</strong>
                </div>
              </div>
              <hr />
              <div className="row check-btn">
                <button onClick={() => alert('Under maintanance')} className="btn btn-primary">
                  Proceed to Checkout <i className="fa fa-angle-double-right"></i>
                </button>
              </div>
            </>
          )}
        </div>
      </div>
    </div>
    // Cart ends here
  );
}
