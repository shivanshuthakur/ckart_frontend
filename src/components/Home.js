// import headernav from '../data/headernav';
// import Electronics from '../data/Electronics';
import { useEffect, useState } from "react";
import axios from 'axios';


const Home = () =>{
   const [headerNav, setheaderNav] = useState([]);
   const [product, setProducts] = useState([]);
    useEffect(() => {
      getcategories();
      getProducts();
    },[]);

    async function getcategories(){
      const res =await axios.get("http://127.0.0.1:5000/getcategories");
      setheaderNav(res.data);
      console.log(res);
    };

    
    async function getProducts(){
      const res =await axios.post("http://127.0.0.1:5000/all_products");
      
      console.log(res.data)
      setProducts(res.data);
    }


// async function paynow(e) {
//   const amount =5;
// e.preventDefault();
//   var options = {
//     "key": "rzp_test_149zKWSzLIwvls", // Enter the Key ID generated from the Dashboard
//     "amount": amount*100, // Amount is in currency subunits. Default currency is INR. Hence, 50000 refers to 50000 paise
//     "currency": "INR",
//     "name": "Acme Corp",
//     "description": "Test Transaction",
//     "image": "https://example.com/your_logo",
//    // "order_id": "order_IluGWxBm9U8zJ8", //This is a sample Order ID. Pass the `id` obtained in the response of Step 1
//     "callback_url": "http://localhost:3000/",
//     "prefill": {
//         "name": "Gaurav Kumar",
//         "email": "gaurav.kumar@example.com",
//         "contact": "9000090000"
//     },
//     "notes": {
//         "address": "Razorpay Corporate Office"
//     },
//     "theme": {
  
//         "color": "#3399cc"
//     }
// };

// var rzp1 = new window.Razorpay(options);
// rzp1.open();

// }

    return(
        <>
  <div className="container-fluid">
    {/* <button type="button" onClick={paynow}>Paynow</button> */}
    <div className="card w-100">
      <div className="row">
        <div className="col">
          <ul className="nav justify-content-between text-center ps-3 pe-3">
            {headerNav.map((item)  => {
               return (
                <li className="nav-item"> <a className="text-decoration-none" href={"/productcat/"+item._id}> 
                <img src={"/assets/image/"+item.image} className="w-50" />
                <h6>{item.name}</h6></a>
               
              </li>
               )
            } )}
            
            
          
          </ul>
        </div>
      </div>
    </div>
  </div>
  <div className="container-fluid">
    <div className="row">
      <div className="col">
        <div className="card w-100 mt-2">
          <div
            id="carouselExampleFade"
            className="carousel slide carousel-fade"
          >
            <div className="carousel-inner">
              <div className="carousel-item active">
                <img
                  src="/assets/image/img13 (1).png"
                  className="d-block w-100 object-fit-cover"
                />
              </div>
              <div className="carousel-item">
                <img
                  src="/assets/image/img13 (2).png"
                  className="d-block w-100 object-fit-cover"
                />
              </div>
              <div className="carousel-item">
                <img
                  src="/assets/image/img13 (3).png"
                  className="d-block w-100 object-fit-cover"
                />
              </div>
            </div>
            <button
              className="carousel-control-prev"
              type="button"
              data-bs-target="#carouselExampleFade"
              data-bs-slide="prev"
            >
              <span className="carousel-control-prev-icon" aria-hidden="true" />
              <span className="visually-hidden">Previous</span>
            </button>
            <button
              className="carousel-control-next"
              type="button"
              data-bs-target="#carouselExampleFade"
              data-bs-slide="next"
            >
              <span className="carousel-control-next-icon" aria-hidden="true" />
              <span className="visually-hidden">Next</span>
            </button>
          </div>
        </div>
      </div>
    </div>
  </div>
  <div className="container-fluid">
    <div className="row">
      <div className="goes mt-2 " style={{ backgroundColor: "white" }}>
        <div className="go mt-2 d-flex">
          <div className="col-2">
            
              <div className="card text-center">
                <h2 className="card-title">Best of Electronics</h2>
                <div className="dsfsa p-4">
                  <button type="button" className="btn btn-primary">
                    View All
                  </button>
                </div>
                <img src="/assets/image/img14.png" className="w-100 object-fit-cover" />
              </div>
            
          </div>
          
          <div className="col-10">
          <ul className="nav justify-content-between text-center mt-5 px-3">
            {product.map((item)  => {
               return (
                <li className="nav-item">
                <img src={"/assets/image/"+item.image} className="w-100" />
                <h6>{item.name}</h6>
                <span className="text-success">{item.price}</span>
                <p>{item.Disc}</p>
              </li>
               )
            } )}
            
          
          </ul>
        </div>
        


        </div>
      </div>
    </div>
  </div>

</>

    )
}

export default Home;

