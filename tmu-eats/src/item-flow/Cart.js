import './Cart.css'
import TMU from '../images/TMU.png'
import React, { useState, useEffect} from "react";
import { useSearchParams} from "react-router-dom";


const Cart = () => {
    const [totalPrice, setTotalPrice] = useState(0);
    const [totalItems, setTotalItems] = useState(0);
    const [searchParams] = useSearchParams();


    useEffect(() => {
        let sum=0;
        searchParams.getAll("prices").forEach(item =>
            sum+=Number(item),
        );
        setTotalPrice(sum);
        setTotalItems(searchParams.getAll("items").length);

    });



    return (
        <div class="card">
            <div>
                <div class="col-md-8 cart">
                    <div class="title">
                        <div>
                            <div><h4><b>Shopping Cart</b></h4></div>
                        </div>
                    </div>
                {searchParams.getAll("items").map((item,index) => (
                        <div class="cart-row">
                            <div id="item">{item}</div>
                            <div id="item-price">{searchParams.getAll("prices")[index]}</div>
                        </div>

                ))}

                </div>
                <div class="col-md-4 summary">
                    <div><h5><b>Summary</b></h5></div>

                    <div class="row">

                        <div class="col">Total Items: {totalItems}</div>
                        <div class="col text-right">
                            Total Price: {totalPrice}
                        </div>
                    </div>
                    <form>
                        <p>SHIPPING</p>
                        <select><option class="text-muted">Standard-Delivery- $5.00</option></select>
                        <p>Tip Amount</p>
                        <input id="code" placeholder="Enter the tipping amount" />
                    </form>
                    <div class="row">
                        <div class="col">TOTAL PRICE</div>
                        <div class="col text-right">$137.00</div>
                    </div>
                    <button class="btn">CHECKOUT</button>
                </div>
            </div>

        </div >
    );

};


export default Cart