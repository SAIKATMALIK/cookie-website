import {Link} from "react-router-dom"

const Grocerycard = ({ name, price, image }) => {
  // Dynamically require the image based on the img prop


  return (
    <>
      <div className="grocery-card p-2 bg-[#1e293b] gap-2 border border-white500 ">
        <div className="img-div" >
      <img src={image} className="h-[200px] object-cover mx-auto"/>
        </div>
        <div className="text-div text-white ">
          <h2>Fresh {name || "Item"}</h2>
          <h3>Price: {price ? `₹${parseInt(price, 10)}` : "N/A"}</h3>
        <Link to="/orderpage"><button
            type="button"
            className="p-2 border border-white rounded-md bg-green-600"
          >
            Order
          </button></Link>
          <button
            type="button"
            className="p-2 border border-yellow-500 rounded-md ml-2 mt-2"
          >
            Add to cart
          </button>
        </div>
      </div>
    </>
  );
};

export default Grocerycard;
