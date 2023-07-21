
import { useEffect, useState } from "react";
import { json } from "react-router-dom";
import axios from 'axios';



const Log =() => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [error, setError] = useState('');

  useEffect(() => {
       
    checkLogin()
      
  },[]);
  
  
  const checkLogin =  () =>  {
    
    if(localStorage.getItem('token')){
            window.location.href="/";
    }
  }


  async function handleLogin(e) {
    e.preventDefault();

    const res =await axios.post("http://165.232.177.108:5000/login", {
      email,password
    });

   //console.log(res.data);

   if(res.data.status==true){

    localStorage.setItem("token", res.data.token);
    window.location.reload();
   }else{
    
    setError(res.data.msg);
    console.log(res.data);

   }




  }
   

    return(

        <main className="form-signin w-25 m-auto text-center">
        {error && <div className="alert alert-danger">
          {error}</div>}
        <form method="post" onSubmit={handleLogin}>
          <img
            className="mb-4"
            src="/assets/image/img2.png"
            alt=""
            width={72}
            height={57}
          />
          <h1 className="h3 mb-3 fw-normal">Please sign in</h1>
       
          <div className="form-floating">
            <input
              type="email"
              className="form-control"
              id="floatingInput"
              placeholder="name@example.com"
              onKeyUp={(e) => setEmail(e.target.value)}
            />
            <label htmlFor="floatingInput">Email address</label>
          </div>
          <div className="form-floating">
            <input
              type="password"
              className="form-control"
              id="floatingPassword"
              placeholder="Password"
              onKeyUp={(e) => setPassword(e.target.value)}
          
            />
            <label htmlFor="floatingPassword">Password</label>
          </div>
          <div className="checkbox mb-3">
            <label>
              <input type="checkbox" defaultValue="remember-me" /> Remember me
            </label>
          </div>
          <button className="w-100 btn btn-lg btn-primary" type="submit">
            Sign in
          </button>
          <p className="mt-5 mb-3 text-body-secondary">© 2017–2023</p>
        </form>
      </main>
      

    );
}

export default Log;

