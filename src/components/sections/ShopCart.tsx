import { useState } from 'react';
import Link from 'next/link';

type ItemKey = 'item1' | 'item2' | 'item3';

interface Quantities {
  item1: number;
  item2: number;
  item3: number;
}

const ShopCart = () => {
  const [quantities, setQuantities] = useState<Quantities>({
    item1: 1,
    item2: 1,
    item3: 1,
  });

  const handleQuantityChange = (item: ItemKey, change: number) => {
    setQuantities((prevQuantities) => {
      const newQuantity = prevQuantities[item] + change;
      return {
        ...prevQuantities,
        [item]: newQuantity > 0 ? newQuantity : 1,
      };
    });
  };

  const subtotal =
    36 * quantities.item1 + 115 * quantities.item2 + 68 * quantities.item3;
  const shipping = 70;
  const total = subtotal + shipping;

  return (
    <section>
      <div className="container-lg pt-100 pb-100">
        <div className="team-five__wrp">
          <div className="section-content">
            <div className="row">
              <div className="col-md-12">
                <div className="table-responsive">
                  <table className="table table-striped table-bordered tbl-shopping-cart">
                    <thead>
                      <tr>
                        <th></th>
                        <th>Photo</th>
                        <th>Product Name</th>
                        <th>Price</th>
                        <th>Quantity</th>
                        <th>Total</th>
                      </tr>
                    </thead>
                    <tbody>
                      
                      <tr className="cart_item">
                        <td className="product-remove">
                          <Link title="Remove this item" className="remove" href="/">×</Link>
                        </td>
                        <td className="product-thumbnail">
                          <Link href="/"><img alt="product" src="assets/images/resource/products/1.jpg" /></Link>
                        </td>
                        <td className="product-name">
                          <Link href="/shop-product-details">Winter Black Jacket</Link>
                          <ul className="variation">
                            <li className="variation-size">Size: <span>Medium</span></li>
                          </ul>
                        </td>
                        <td className="product-price"><span className="amount">$36.00</span></td>
                        <td className="product-quantity">
                          <div className="product-details__quantity">
                            <div className="quantity-box">
                              <button type="button" className="sub" onClick={() => handleQuantityChange('item1', -1)}>
                                <i className="fa fa-minus" />
                              </button>
                              <input type="number" id="1" value={quantities.item1} readOnly />
                              <button type="button" className="add" onClick={() => handleQuantityChange('item1', 1)}>
                                <i className="fa fa-plus" />
                              </button>
                            </div>
                          </div>
                        </td>
                        <td className="product-subtotal"><span className="amount">${36 * quantities.item1}</span></td>
                      </tr>

                      <tr className="cart_item">
                        <td className="product-remove">
                          <Link title="Remove this item" className="remove" href="/">×</Link>
                        </td>
                        <td className="product-thumbnail">
                          <Link href="/"><img alt="product" src="assets/images/resource/products/2.jpg" /></Link>
                        </td>
                        <td className="product-name">
                          <Link href="/shop-product-details">Swan Crop V-Neck Tee</Link>
                          <ul className="variation">
                            <li className="variation-size">Size: <span>Small</span></li>
                          </ul>
                        </td>
                        <td className="product-price"><span className="amount">$115.00</span></td>
                        <td className="product-quantity">
                          <div className="product-details__quantity">
                            <div className="quantity-box">
                              <button type="button" className="sub" onClick={() => handleQuantityChange('item2', -1)}>
                                <i className="fa fa-minus" />
                              </button>
                              <input type="number" id="2" value={quantities.item2} readOnly />
                              <button type="button" className="add" onClick={() => handleQuantityChange('item2', 1)}>
                                <i className="fa fa-plus" />
                              </button>
                            </div>
                          </div>
                        </td>
                        <td className="product-subtotal"><span className="amount">${115 * quantities.item2}</span></td>
                      </tr>

                      <tr className="cart_item">
                        <td className="product-remove">
                          <Link title="Remove this item" className="remove" href="/">×</Link>
                        </td>
                        <td className="product-thumbnail">
                          <Link href="/"><img alt="product" src="assets/images/resource/products/3.jpg" /></Link>
                        </td>
                        <td className="product-name">
                          <Link href="/shop-product-details">Blue Solid Casual Shirt</Link>
                          <ul className="variation">
                            <li className="variation-size">Size: <span>Large</span></li>
                          </ul>
                        </td>
                        <td className="product-price"><span className="amount">$68.00</span></td>
                        <td className="product-quantity">
                          <div className="product-details__quantity">
                            <div className="quantity-box">
                              <button type="button" className="sub" onClick={() => handleQuantityChange('item3', -1)}>
                                <i className="fa fa-minus" />
                              </button>
                              <input type="number" id="3" value={quantities.item3} readOnly />
                              <button type="button" className="add" onClick={() => handleQuantityChange('item3', 1)}>
                                <i className="fa fa-plus" />
                              </button>
                            </div>
                          </div>
                        </td>
                        <td className="product-subtotal"><span className="amount">${68 * quantities.item3}</span></td>
                      </tr>
                    </tbody>
                  </table>
                </div>
              </div>
              <div className="col-md-12 mt-30">
                <div className="row">
                  <div className="col-md-5"></div>
                  <div className="col-md-2"></div>
                  <div className="col-md-5">
                    <h4>Cart Totals</h4>
                    <table className="table table-bordered cart-total">
                      <tbody>
                        <tr>
                          <td>Cart Subtotal</td>
                          <td>${subtotal}</td>
                        </tr>
                        <tr>
                          <td>Shipping and Handling</td>
                          <td>${shipping}</td>
                        </tr>
                        <tr>
                          <td>Order Total</td>
                          <td>${total}</td>
                        </tr>
                      </tbody>
                    </table>
                    <Link className="theme-btn btn-style-one" href="/shop-checkout">Proceed to Checkout</Link>
                  </div>
                </div>
              </div>

            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ShopCart;