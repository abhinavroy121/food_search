
const getdata = async (url)=> {
  
   try{
      let response = await fetch(url);
      let data = await response.json();
      return data;

   }
   catch(error){
      console.log("error", error);
   }
}
 
const append = (data,parent)=> {
   console.log(data)
   parent.innerHTML = null;
     data.meals.map((item)=>{
        let div = document.createElement('div');
       div.setAttribute("id","div");
       let innerdiv = document.createElement('div');
       innerdiv.setAttribute("id","innerdiv");

        let name = document.createElement('h2');
        name.innerText=item.strMeal;
        
        let img = document.createElement('img');
        img.src= item.strMealThumb;
        img.width ="600"
        
        let h4 = document.createElement('h4');
        h4.innerText=item.strCategory;
        let des = document.createElement('p');
        des.innerHTML=item.strInstructions;

     innerdiv.append(name,h4,des);
        div.append(img,innerdiv);
        parent.append(div);

     })
}

export {getdata,append}