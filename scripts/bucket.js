// On clicking remove button the item should be removed from DOM as well as localstorage.


let takeData= JSON.parse(localStorage.getItem("coffee"))

console.log(takeData)

let x= takeData.reduce(function(sum,el,index,arr){

      return sum+(el.price)
},0)
        
document.getElementById("total_amount").innerHTML=x;


takeData.map(function(el,index){

    let div=document.createElement("div")
       div.setAttribute("id","box")

    let image=document.createElement("img")
     image.src=el.image;

     let title=document.createElement("h3")
     title.innerText=el.title;

     let price=document.createElement("p")
     price.innerText=el.price;

     let addItem=document.createElement("button")

     addItem.innerText="Remove"

     addItem.setAttribute("id","remove_coffee")

     addItem.addEventListener("click",function(){

         RemoveProduct(el,index)
     })

     div.append(image,title,price,addItem)

     document.getElementById("bucket").append(div)
})





function  RemoveProduct(el,index){

   takeData.splice(index,1)

localStorage.setItem("coffee",JSON.stringify(takeData))
window.location.reload()
}