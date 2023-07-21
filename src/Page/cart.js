import { useEffect } from "react";
import { useState } from "react";
import axios from 'axios';
import countryCodes from 'country-codes-list';

const Cart = () => {

  const [products, setProducts] = useState([]);
  const [firstName, setFirstName] = useState('');
  const [lastName, setLastName] = useState('');
  const [userName, setUserName] = useState('');
  const [email, setEmail] = useState('');
  const [address, setAddress] = useState('');
  const [address2, setAddress2] = useState('');
  const [zip, setZip] = useState('');
  const [card, setCard] = useState('');
  const [CartTotal, SetCartTotal] = useState(0);
  const [codes, setCodes] = useState([]);

  

  useEffect(() => {
    Products(); 
    country(  )
      // console.log(countryCodes.all())
  }, [])
  // console.log(products);

  console.log(codes);
  const country = () => {
    setCodes(countryCodes.all())
  }

  async function Products() {
    axios.defaults.headers.common['Authorization'] = localStorage.getItem('token');
    var res = await axios.get("http://127.0.0.1:5000/cartdata");
      res = res.data;
    var total =0;
  res.forEach(item => {
     total = total+item.price; 
  });

  SetCartTotal(total);
  
  
  
    setProducts(res);
  }

  const remove = async(cart) => {
    axios.defaults.headers.common['Authorization'] = localStorage.getItem('token');
    const res = await axios.post("http://127.0.0.1:5000/deletecart",{cart});
    console.log(res);
    Products();
    
  }

  const handleSubmit = async(e) => {
    e.preventDefault();
        const res = await axios.post("http://127.0.0.1:5000/order",{
      firstName  , lastName , userName, email ,address , address2 , zip, card
  });
  console.log(res.data)
  if (res.status== true) {
    alert("success");
    return false;
  }
  }

  
  async function paynow(e) {
 
  e.preventDefault();
    var options = {
      "key": "rzp_test_WgKftFNN8F9k2z", // Enter the Key ID generated from the Dashboard
      "amount": CartTotal*100, // Amount is in currency subunits. Default currency is INR. Hence, 50000 refers to 50000 paise
      "currency": "INR",
      "name": "Acme Corp",
      "description": "Test Transaction",
      "image": "https://example.com/your_logo",
     // "order_id": "order_IluGWxBm9U8zJ8", //This is a sample Order ID. Pass the `id` obtained in the response of Step 1
      "callback_url": "http://localhost:3000/",
      "prefill": {
          "name": "Gaurav Kumar",
          "email": "gaurav.kumar@example.com",
          "contact": "9000090000"
      },
      "notes": {
          "address": "Razorpay Corporate Office"
      },
      "theme": {
          "color": "#3399cc"
      }
  };
  
  var rzp1 = new window.Razorpay(options);
    rzp1.open();

  }

  return (
    <>
      

       <div className="container">
  <main>
   
    <div className="row g-5">
      <div className="col-md-5 col-lg-4 order-md-last">
        <h4 className="d-flex justify-content-between align-items-center mb-3">
          <span className="text-primary">Your cart</span>
          <span className="badge bg-primary rounded-pill">3</span>
        </h4>
        <ul className="list-group mb-3">

        {
            products.map(data =>
        
          <li className="list-group-item d-flex justify-content-between lh-sm">
            <div className="d-flex align-items-center">
            <img width={40} height={40} src={data && data.productId.images}></img>
          
              <h6 className="my-0">{data.productId.thumbnail}</h6>
              <small className="text-body-secondary">  <div className="col-3"><button type="button" className="btn bg-danger rounded-pill mx-2 btn-sm" onClick={(e) => remove(data)}> X </button></div>
          </small>
            </div>
            <span className="text-body-secondary">{data.price}</span>
          </li>
       
            )}
       <li className="list-group-item d-flex justify-content-between">
            <span>Total (USD)</span>
            <strong>{CartTotal}</strong>
          </li>
          
       <li className="list-group-item d-flex justify-content-between">
       <button type="button" className="btn btn-primary mx-auto" onClick={paynow}>Process to Checkout</button>
       
          </li>

        </ul>
        <form className="card p-2">
          <div className="input-group">
            <input
              type="text"
              className="form-control"
              placeholder="Promo code"
            />
            <button type="submit" className="btn btn-secondary">
              Redeem
            </button>
          </div>
        </form>
      </div>
      <div className="col-md-7 col-lg-8">
        <h4 className="mb-3">Billing address</h4>
        <form 
        onSubmit={handleSubmit} method="post"
        className="needs-validation" noValidate="">
          <div className="row g-3">
            <div className="col-sm-6">
              <label htmlFor="firstName" className="form-label">
                First name
              </label>
              <input
                type="text"
                className="form-control"
                id="firstName"
                onKeyUp={(e) => setFirstName(e.target.value)}
                placeholder=""
                defaultValue=""
                required=""
              />
              <div className="invalid-feedback">
                Valid first name is required.
              </div>
            </div>
            <div className="col-sm-6">
              <label htmlFor="lastName" className="form-label">
                Last name
              </label>
              <input
                type="text"
                className="form-control"
                id="lastName"
                onKeyUp={(e) => setLastName(e.target.value)}
                placeholder=""
                defaultValue=""
                required=""
              />
              <div className="invalid-feedback">
                Valid last name is required.
              </div>
            </div>
            <div className="col-12">
              <label htmlFor="username" className="form-label">
                Username
              </label>
              <div className="input-group has-validation">
                <span className="input-group-text">@</span>
                <input
                  type="text"
                  className="form-control"
                  id="username"
                  onKeyUp={(e) => setUserName(e.target.value)}
                  placeholder="Username"
                  required=""
                />
                <div className="invalid-feedback">
                  Your username is required.
                </div>
              </div>
            </div>
            <div className="col-12">
              <label htmlFor="email" className="form-label">
                Email <span className="text-body-secondary">(Optional)</span>
              </label>
              <input
                type="email"
                className="form-control"
                id="email"
                onKeyUp={(e) => setEmail(e.target.value)}
                placeholder="you@example.com"
              />
              <div className="invalid-feedback">
                Please enter a valid email address for shipping updates.
              </div>
            </div>
            <div className="col-12">
              <label htmlFor="address" className="form-label">
                Address
              </label>
              <input
                type="text"
                className="form-control"
                id="address"
                onKeyUp={(e) => setAddress(e.target.value)}
                placeholder="1234 Main St"
                required=""
              />
              <div className="invalid-feedback">
                Please enter your shipping address.
              </div>
            </div>
            <div className="col-12">
              <label htmlFor="address2" className="form-label">
                Address 2{" "}
                <span className="text-body-secondary">(Optional)</span>
              </label>
              <input
                type="text"
                className="form-control"
                id="address2"
                onKeyUp={(e) => setAddress2(e.target.value)}
                placeholder="Apartment or suite"
              />
            </div>
            <div className="col-md-5">
              <label htmlFor="country" className="form-label">
                Country
              </label>
              <select className="form-select" id="country" required="">
                <option>Select...</option>
                {
                  codes.map(data => 
                <option value="" >{data.countryNameEn}</option>
                  )
}

              </select>
              <div className="invalid-feedback">
                Please select a valid country.
              </div>
            </div>
            <div className="col-md-4">
              <label htmlFor="state" className="form-label">
                State
              </label>
              <select className="form-select" id="state" required="">
                <option value="">Choose...</option>
                <option>California</option>
              </select>
              <div className="invalid-feedback">
                Please provide a valid state.
              </div>
            </div>
            <div className="col-md-3">
              <label htmlFor="zip" className="form-label">
                Zip
              </label>
              <input
                type="text"
                className="form-control"
                id="zip"
                onKeyUp={(e) => setZip(e.target.value)}
                placeholder=""
                required=""
              />
              <div className="invalid-feedback">Zip code required.</div>
            </div>
          </div>
          <hr className="my-4" />
          <div className="form-check">
            <input
              type="checkbox"
              className="form-check-input"
              id="same-address"
            />
            <label className="form-check-label" htmlFor="same-address">
              Shipping address is the same as my billing address
            </label>
          </div>
          <div className="form-check">
            <input
              type="checkbox"
              className="form-check-input"
              id="save-info"
            />
            <label className="form-check-label" htmlFor="save-info">
              Save this information for next time
            </label>
          </div>
          <hr className="my-4" />
          <h4 className="mb-3">Payment</h4>
          <div className="my-3">
            <div className="form-check">
              <input
                id="credit"
                name="paymentMethod"
                type="radio"
                className="form-check-input"
                defaultChecked=""
                required=""
              />
              <label className="form-check-label" htmlFor="credit">
                Credit card
              </label>
            </div>
            <div className="form-check">
              <input
                id="debit"
                name="paymentMethod"
                type="radio"
                className="form-check-input"
                required=""
              />
              <label className="form-check-label" htmlFor="debit">
                Debit card
              </label>
            </div>
            <div className="form-check">
              <input
                id="paypal"
                name="paymentMethod"
                type="radio"
                className="form-check-input"
                required=""
              />
              <label className="form-check-label" htmlFor="paypal">
                PayPal
              </label>
            </div>
          </div>
          <div className="row gy-3">
            <div className="col-md-6">
              <label htmlFor="cc-name" className="form-label">
                Name on card
              </label>
              <input
                type="text"
                className="form-control"
                id="cc-name"
                onKeyUp={(e) => setCard(e.target.value)}
                placeholder=""
                required=""
              />
              <small className="text-body-secondary">
                Full name as displayed on card
              </small>
              <div className="invalid-feedback">Name on card is required</div>
            </div>
            <div className="col-md-6">
              <label htmlFor="cc-number" className="form-label">
                Credit card number
              </label>
              <input
                type="text"
                className="form-control"
                id="cc-number"
                placeholder=""
                required=""
              />
              <div className="invalid-feedback">
                Credit card number is required
              </div>
            </div>
            <div className="col-md-3">
              <label htmlFor="cc-expiration" className="form-label">
                Expiration
              </label>
              <input
                type="text"
                className="form-control"
                id="cc-expiration"
                placeholder=""
                required=""
              />
              <div className="invalid-feedback">Expiration date required</div>
            </div>
            <div className="col-md-3">
              <label htmlFor="cc-cvv" className="form-label">
                CVV
              </label>
              <input
                type="text"
                className="form-control"
                id="cc-cvv"
                placeholder=""
                required=""
              />
              <div className="invalid-feedback">Security code required</div>
            </div>
          </div>
          <hr className="my-4" />
          <button className="w-100 btn btn-primary btn-lg" type="submit">
            Continue to checkout
          </button>
        </form>
      </div>
    </div>
  </main>
  
</div>

    </>
  )
}

export default Cart;