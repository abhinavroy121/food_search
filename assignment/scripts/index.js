
import navbar from "../components/navbar.js";

 import {getdata,append} from "../scripts/fetchappend.js"

 let header = document.getElementById("navbar");
 header.innerHTML = navbar()



document.getElementById("search").addEventListener("keypress",()=>{
    searchmyfood(event)
})

 
 

 let searchmyfood =async (event)=>  {


     

    try{
        if(event.code==='Enter'){
            let search = document.getElementById('search').value;
       let parent = document.getElementById("body");
     
        let response = await  getdata(`https://www.themealdb.com/api/json/v1/1/search.php?s=${search}`);
      
        // console.log(response);
        
        append(response,parent);
        }

        

        
    }
    catch(error){
        console.log(error);
    }
}
   

  

document.getElementById('button').addEventListener('click',function(){
    alert('Select Your Food')
})