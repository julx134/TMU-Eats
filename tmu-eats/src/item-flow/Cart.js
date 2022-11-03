import '../App.css'
import TMU from '../images/TMU.png'

const Cart = () => {

    return (
        <div class="card">
            <div class="row">
                <div class="col-md-8 cart">
                    <div class="title">
                        <div class="row">
                            <div class="col"><h4><b>Shopping Cart</b></h4></div>
                            <div class="col align-self-center text-right text-muted">3 items</div>
                        </div>
                    </div>
                    <div class="row border-top border-bottom">
                        <div class="row main align-items-center">
                            <div class="col-2"><img class="img-fluid" src="data:image/jpeg;base64,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" /></div>
                            <div class="col">
                                <div class="row text-muted">Item 1</div>
                                <div class="row">Big Mac</div>
                            </div>
                            <div class="col">
                                <a href="#">-</a><a href="#" class="border">1</a><a href="#">+</a>
                            </div>
                            <div class="col">$ 44.00 <span class="close">&#10005;</span></div>
                        </div>
                    </div>
                    <div class="row">
                        <div class="row main align-items-center">
                            <div class="col-2"><img class="img-fluid" src="https://www.mcdonalds.com/is/image/content/dam/usa/nfl/assets/meal/desktop/h-mcdonalds-Big-Mac-Extra-Value-Meals.jpg" alt="s" /></div>
                            <div class="col">
                                <div class="row text-muted">Item 2</div>
                                <div class="row">Big Mac Combo</div>
                            </div>
                            <div class="col">
                                <a href="#">-</a><a href="#" class="border">1</a><a href="#">+</a>
                            </div>
                            <div class="col">$ 44.00 <span class="close">&#10005;</span></div>
                        </div>
                    </div>
                    <div class="row border-top border-bottom">
                        <div class="row main align-items-center">
                            <div class="col-2"><img class="img-fluid" src="https://upload.wikimedia.org/wikipedia/commons/thumb/0/07/McD-Egg-McMuffin.jpg/640px-McD-Egg-McMuffin.jpg" alt="s" /></div>
                            <div class="col">
                                <div class="row text-muted">Item 3</div>
                                <div class="row">Egg McMuffin</div>
                            </div>
                            <div class="col">
                                <a href="#">-</a><a href="#" class="border">1</a><a href="#">+</a>
                            </div>
                            <div class="col">$ 44.00 <span class="close">&#10005;</span></div>
                        </div>
                    </div>
                    <div class="back-to-shop"><a href="#">&leftarrow;</a><span class="text-muted">Back to shop</span></div>
                </div>
                <div class="col-md-4 summary">
                    <div><h5><b>Summary</b></h5></div>

                    <div class="row">


                        <div class="col">Total Items: 3</div>
                        <div class="col text-right">$132.00</div>
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