
  document.getElementById("form").addEventListener("submit",myFun)

  function myFun(){

      event.preventDefault()

      setTimeout(function(){

          alert("Your order is accepted ")
      },2000)

      setTimeout(function(){

        alert("Your order is being Prepared ")
    },2000)

    setTimeout(function(){

        alert("Your order is being packed  ")
    },2000)

    setTimeout(function(){

        alert("Your order is out for delivery")
    },2000)

    setTimeout(function(){

        alert("Order delivered")
    },2000)
  }

  