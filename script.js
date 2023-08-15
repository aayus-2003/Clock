let a = document.getElementById("time")


setInterval(()=>{
      let time = new Date().toLocaleTimeString()
      a.innerHTML = time
      
},1000)

setInterval(()=>{
      t.classList.toggle("toogle")
},1000)


