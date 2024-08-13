 import { useEffect,useState } from "react";
 
 export default function useResturentMenu(resId){
    //fetxh data using the id
    const [Resinfo,setResinfo]=useState(null);

const fetchData=async ()=>{
try{
    const response= await fetch(`https://www.swiggy.com/dapi/menu/pl?page-type=REGULAR_MENU&complete-menu=true&lat=12.9715987&lng=77.5945627&restaurantId=${resId}`);
    const data= await response.json();
    setResinfo(data);
}catch(err){
    console.log(`there is an error in fetching resturent data api ${err}`)
}
   
}


useEffect(()=>{
    fetchData();
},[resId]);

return Resinfo;
}