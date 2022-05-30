// Add the coffee to local storage with key "coffee"

async function TakingData()
{
    const url="https://masai-mock-api.herokuapp.com/coffee/menu"

    try{
          let res= await fetch(url)

          let Mydata= await res.json()
            //  console.log(Mydata)
             let finalData= Mydata.menu.data
             appendData(finalData)
          console.log(finalData)
    }
    catch(err)
    {
        console.log(err)
    }
}

TakingData()

  function appendData(data)
  {
       data.map(function(el,index){

           let div=document.createElement("div")
              div.setAttribute("id","box")

           let image=document.createElement("img")
            image.src=el.image;

            let title=document.createElement("h3")
            title.innerText=el.title;

            let price=document.createElement("p")
            price.innerText=el.price;

            let addItem=document.createElement("button")

            addItem.innerText="Add to Bucket"

            addItem.setAttribute("id","add_to_bucket")

            addItem.addEventListener("click",function(){

                AddProduct(el,index)
            })

            div.append(image,title,price,addItem)

            document.getElementById("menu").append(div)
       })
  }

  let arr= JSON.parse(localStorage.getItem("coffee"))||[]

  let x= arr.length;

  document.getElementById("coffee_count").innerHTML=x;
function  AddProduct(el,index){

    arr.push(el)

    console.log(arr)

    localStorage.setItem("coffee",JSON.stringify(arr))
    window.location.reload()
}