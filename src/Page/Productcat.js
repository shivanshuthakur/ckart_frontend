import axios from 'axios';
import { useEffect, useState } from 'react';

const Productcat = ()  => {

    const params = window.location.pathname.split('/productcat/');
    const [products, setProducts] = useState([]);
    // console.log(params[1]);
    useEffect(() => {
      Products ();

    },[])
          
    

    async function Products(){
        const res = await axios.post("http://127.0.0.1:5000/all_Products",{
            id:params [1]
        });
        setProducts(res.data);
        console.log(res);
    }
    const handleAddCart = async (item) =>{
      axios.defaults.headers.common['Authorization'] = localStorage.getItem('token');
      const res = await axios.post("http://127.0.01:5000/addCart",{
        item
      });
      console.log(res);
    
    }


return(
<>



<div className="album py-5 bg-body-tertiary">
  <div className="container">
    <div className="row d-flex">
      <div className="col-lg-12 d-flex gap-5 ">
            {products.map((item)  => {
               return (
                        
                
                <div className="card w-25" >
  <img src={item.images} className="card-img-top" alt="..." />
  <div className="card-body">
    <h5 className="card-title">{item.title}</h5>
    <p className="card-text">
    {item.description}
    </p>
    <button type = "button" onClick={(e) => handleAddCart(item)} className="btn btn-secondary px-4">
      Add to Cart
      </button>
  </div>
</div>

               )
            } )}
          
      </div>
    </div>
  </div>
</div>









</>

)



}


export default Productcat;