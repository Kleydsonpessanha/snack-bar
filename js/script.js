



function OpenOrClosed() {
  const msg = document.getElementById("openOrClosed")
  const date = new Date()
  const days = date.getDay()
  const hours = date.getHours()

  if (hours >= 19 && hours <= 23 && days >= 1 && days <= 4) {
     msg.innerHTML = 'Aberto'
     msg.style.color = '#035500'
  } else if(days >= 5 && days <= 6 && hours >= 19 && hours <= 00) {
    msg.innerHTML = 'Aberto'
    msg.style.color = '#035500'
  } else {
      msg.innerHTML = 'Fechado'
      msg.style.color = '#c42b17'
  }
  
}

OpenOrClosed()