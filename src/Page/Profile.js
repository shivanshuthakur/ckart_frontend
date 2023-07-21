const Profile =() =>{

  return(
  
      <>
      
   <section className="mydetails">
   
    <div className="container-fluid">
  
   <div className="row">
  
  <div className="col-lg-3 "> 
  
  <div className="row bg-white mt-3   ">
  
      <div className="col-3"><img src="assets/image/img29.png"></img></div>
  
      <div className="col-7">
  
      <span className="">Hello,Shivasnhu</span>
      
  
      </div>
  
  </div>
  
  
  
  <div className="row mt-3 bg-white">
  
  <div className="col-3">
      <span className=""><i class="fa-solid fa-file-import"></i></span>
  </div>
  
  <div className="col-7 ">
  
  <span className="fw-bold text-secondary">MY ORDERS</span>
  
  
  </div>
  
  </div>
  
  
  
  
  
  
  <div className="row mt-1 bg-white">
  <div className="col-3">
  <span className=""><i class="fa-solid fa-user"></i></span>
  </div>
  <div className="col-7 ">
  <div className="fw-bold text-secondary">ACCOUNT SETTING</div>
  <div>Profile informaion</div>
  <div>Manage Address</div>
  <div>Pan Card informaion</div>
  </div>
  </div>
  
  
  
  <div className="row mt-1 bg-white">
  <div className="col-3"></div>
  <div className="col-7 ">
  <div className="fw-bold text-secondary">PAYMENTS</div>
  <div>Gift Cards</div>
  <div>Saved UPI</div>
  <div>Saved Cards </div>
  </div>
  </div>
  
  
  
  <div className="row mt-1 bg-white">
  <div className="col-3"></div>
  <div className="col-7 ">
  <div className="fw-bold text-secondary">MY STUFF</div>
  <div>My Cupons</div>
  <div>My Review & Rating</div>
  <div>All Notification </div>
  <div>My Wishlist </div>
  </div>
  </div>
  
  
  
  
  
  
  
  <div className="row mt-1 bg-white">
  <div className="col-3"></div>
  <div className="col-7 ">
  <div className="fw-bold text-secondary">LOGOUT</div>
  
  </div>
  </div>
  
  
  
  <div className="row mt-3 bg-white mb-3 ps-3">
      
      <div className="col">
      
      <div className="row fw-bold">Frequently Visited:</div>
      <div className="row text-secondary ">Track  Order
  Help Center
  </div>
      
      </div>
      
       </div>
  
  
  
  
  
  
  
  
  
  
  </div>
  
  <div className="col-lg-8"> 
  
  
  
  
  
  <form className="bg-white mt-3 mb-3 pb-3">
  
  
  
  <div className="d-flex px-4 py-3" >
  
  <h5>Personal information</h5>
  <span className="text-primary mx-3  fw-bold"> Edit</span>
  
  </div>
  
  
  <div className="form-floating d-flex">
    
    <div className="dep col-9 mx-4  d-flex">
      <input
        type="name"
        className="form-control bg-light py-3 "
        id="firstname"
        placeholder="First Name"
      />
      <input
        type="name"
        className="form-control bg-light py-3 ms-3"
        id="flastname"
        placeholder="Last Name"
      />
    </div>
  </div>
  
  
  
  
  <div className="form-floating  ms-4 mt-4">
    <div className="jai  ">
      <strong htmlFor="floatingInput">Gender: </strong>
    </div>
    <div className="hup  mt-2 ">
      <input  type="radio"  name="gender" id="male" defaultValue="" /> Male
      <input className="ms-4" type="radio" name="gender" id="female" defaultValue="" /> Female
    </div>
  </div>
  
  
  
  
  
  
  <div className="form-floating ms-4 mt-4">
    <div className="jai m">
      <strong htmlFor="floatingInput">Email Address</strong>
      <span className="text-primary fw-bold ms-3">Edit</span>
    </div>
    <div className="hup col-4 mt-3 ">
      <input
        type="email"
        className="form-control bg-light py-3"
        id="femail"
        placeholder="abc@example.com"
      />
    </div>
  </div>
  
  
  
  
  
  
  <div className="form-floating  ms-4 mt-4">
    <div className="bura col-3">
      <strong htmlFor="floatingInput">Mobile No   </strong>
      <span className="text-primary fw-bold ms-3">Edit</span>
    </div>
    <div className="dep col-4">
    
      <div className=" mt-3  ">
        <input
          className="form-control bg-light py-3 "
          id="fphone"
          placeholder="10 digit number"
        />
      </div>
    </div>
  </div>
        
  </form>

  
  
  </div>
  
   </div>
  
    </div>
  
   </section>
      
      </>
  
  );
  
  }
  
  export default Profile;