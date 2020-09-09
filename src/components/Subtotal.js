import React from 'react';
import '../css/Subtotal.css';
import CurrencyFormat from 'react-currency-format';
import { useStateValue } from './StateProvider';

function Subtotal() {

    const [{ basket }, dispatch] = useStateValue();

    const calculateTotal = (basket) => {
        return basket.reduce((price, item) => item.price + price, 0)
    }

    return (
        <div className="subtotal">
            <CurrencyFormat
                renderText={(value) => (
                    <>
                        <p>
                            {/* part of homework */}
                            Subtotal ({basket?.length} items): <strong>{calculateTotal(basket)}</strong>
                        </p>
                        <small className="subtotal__gift">
                            <input type="checkbox" />
                            This order contains a gift
                </small>
                    </>
                )}
                decimalScale={.2}
                value={0} // Part of the homework
                displayType={"text"}
                thousandSeparator={true}
                prefix={"$"}
            />
            <button>Proceed to Checkout</button>
        </div>
    )
}

export default Subtotal;
