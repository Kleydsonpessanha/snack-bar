function falaoi() {
  console.log("oi")
}


function searchSnack() {
  const inputSearch = document.getElementById("input-search").value
  const Itens = document.getElementsByClassName("cards")
   

  for (let i = 0; i < Itens.length; i++) {
    if(!Itens[i].innerHTML.toLowerCase().includes(inputSearch)) {
        Itens[i].style.display = 'none'
    } else {
      Itens[i].style.display = "flex"
    }
    
  }
}


function OpenOrClosed() {
  const msg = document.getElementById("btn-open-or-closed")
  const date = new Date()
  const days = date.getDay()
  const hours = date.getHours()

  if (hours >= 19 && hours <= 23 && days >= 1 && days <= 6) {
     msg.innerHTML = 'Aberto'
     msg.style.color = '#035500'
  } else {
      msg.innerHTML = 'Fechada'
      msg.style.color = '#c42b17'
  } 
}

OpenOrClosed()


function BtnBuySnacks() {
  const btnBuys = document.querySelectorAll("#btn-buy");

  btnBuys.forEach(function(btnBuy) {
    btnBuy.addEventListener("click", function() {
      const itemName = this.getAttribute("data-item-name");
      window.open(`https://api.whatsapp.com/send?phone=552299842312&text=Eu%20gostaria%20de%20comprar%20um%20${itemName}`);
    });
  });
}
buy();


function BtnBuyDrinks() {
  const btnBuys = document.querySelectorAll("#btn-buy");

  btnBuys.forEach(function(btnBuyDrinks) {
    btnBuyDrinks.addEventListener("click", function() {
      const itemNameDrinks = this.getAttribute("data-item-name")
      window.open(`https://api.whatsapp.com/send?phone=552299842312&text=Eu%20gostaria%20de%20comprar%20um%20${itemNameDrinks}`)
  })
})
}
buyDrinks()