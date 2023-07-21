import axios from "axios";
import { useEffect, useState } from "react";

const Header =() => {
    
 const [user, setUser] = useState({});
    useEffect(()=> {
      getUser();
    },[]);


 const getUser = async() => {
   
  axios.defaults.headers.common['Authorization'] = localStorage.getItem('token');
  const res =await axios.get("http://165.232.177.108:5000/getUser");
  // console.log(res);
  setUser(res.data);
}



    const handleLogout = () => {
      localStorage.removeItem("token");
      window.location.href="/login"
    }

    return(
      <>
      <nav className="navbar navbar-expand-lg bg-body-tertiary">
      <div className="container-fluid" style={{ backgroundColor: "#2874f0" }}>
        <div className="header">


        <a href="/" > <img src="/assets/image/img1.png" className="w-50" /> </a>



          <a href="" className="text-white text-decoration-none">Explore
          <span className="head2" style={{ color: "#ffe500" }}>Plus</span> </a>  
         
          <img src="/assets/image/img2.png" className="" />
        </div>
        <button
          className="navbar-toggler"
          type="button"
          data-bs-toggle="collapse"
          data-ybs-target="#navbarSupportedContent"
          aria-controls="navbarSupportedContent"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <span className="navbar-toggler-icon" />
        </button>
        <div className="collapse navbar-collapse " id="navbarSupportedContent">
          <form className="d-flex w-50" role="search">
            <input
              className="form-control me-2"
              type="search"
              placeholder="Search For more products, brands and more"
              aria-label="Search"
            />

            {!user &&  <a href="/log"
              className="btn btn-outline-success"
              type="submit"
              style={{ background: "white", color: "#2874f0" }}
            >
              Login
            </a>}

            <a href="/Register"
              className="btn btn-outline-success"
              type="submit"
              style={{ background: "white", color: "#2874f0" }}
            >
              Register
            </a>
         
          </form>
          <ul className="navbar-nav mb-2 mb-lg-0">
            <li className="nav-item ">
              <a
                className="nav-link active"
                aria-current="page"
                style={{ color: "white" }}
                href="#"
              >
                Become a seller
              </a>
            </li>
            {user &&   <li className="nav-item dropdown">
              <a
                className="nav-link dropdown-toggle"
                href="#"
                role="button"
                data-bs-toggle="dropdown"
                aria-expanded="false"
                style={{ color: "white" }}
              >
                {user.email}
              </a>
              <ul className="dropdown-menu">
              
              
                <li>
                <a className="dropdown-item" href="Profile"></a>
                  <a className="dropdown-item" onClick={handleLogout} href="#">
                    Logout
                  </a>
                </li>
              </ul>
            </li>}
           
            <li className="nav-item">
              <a
                className="nav-link active"
                aria-current="page"
                style={{ color: "white" }}
                href="/cart"
              >
                Cart
              </a>
              </li>
              <li className="nav-item">
              <a
                className="btn btn-primary"
                aria-current="page"
                
                href="profile"
              >
                Profile
              </a>
            </li>
          </ul>
        </div>
      </div>
    </nav>
    </>
    )

}
export default Header;