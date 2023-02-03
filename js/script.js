



function OpenOrClosed() {
  const msg = document.getElementById("openOrClosed")
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