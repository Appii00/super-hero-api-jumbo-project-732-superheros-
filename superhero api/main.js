const body = document.body
const full = document.createElement("div")
full.classList.add("full")
body.appendChild(full)
const fullDiv = document.createElement("div")
fullDiv.classList.add("fullDiv")
full.appendChild(fullDiv)

const prevArrow = document.createElement("i")
prevArrow.classList.add("fas")
prevArrow.classList.add('fa-chevron-left')
prevArrow.classList.add("fa-3x")
prevArrow.setAttribute('id', 'prev')
full.appendChild(prevArrow)
const nextArrow = document.createElement("i")
nextArrow.classList.add("fas")
nextArrow.classList.add('fa-chevron-right')
nextArrow.classList.add("fa-3x")
nextArrow.setAttribute('id', 'next')
full.appendChild(nextArrow)
const prev = document.getElementById("prev")
const next = document.getElementById("next")

const closeBtn = document.createElement("i")
closeBtn.classList.add("fas")
closeBtn.classList.add('fa-times')
closeBtn.classList.add('fa-2x')
closeBtn.classList.add('yo')
full.appendChild(closeBtn)
let imageCounter = 0



const close = document.querySelector(".yo")
close.addEventListener("click", () => {
  body.classList.remove("overflow")
  full.classList.remove('open')
  // imageCounter = 0
  fullDiv.classList.remove('open')
  location.reload()
})





function getPhoton() {
  fetch("super.json")
    .then((res) => res.json())
    .then((data) => {
      // Array.push(data)
      //   console.log(Array)
      data.forEach((item) => {
        const container = document.querySelector(".container")
        const DivImg = document.createElement("li")
        DivImg.classList.add("DivImg")
        container.appendChild(DivImg)
        // console.log(item.name)
        const Img = document.createElement("img")
        Img.classList.add("img")
        DivImg.appendChild(Img)
        const H1 = document.createElement("h2")

        Img.src = `${item.image.url}`
        Img.setAttribute("alt", "img not found")

        H1.innerText = `${item.name}`
        DivImg.appendChild(H1)



        DivImg.addEventListener("click", () => {
          body.classList.add("overflow")
          full.classList.add('open')
          fullDiv.classList.add('open')
          innerData(item)


          imageCounter = data.indexOf(item)

          //prevecus counter
          prev.addEventListener("click", () => {

            imageCounter--


            newData(data)
            newFunction2(data)



          })
          //next profile add 
          next.addEventListener("click", () => {

            imageCounter++
            dataNew(data)
            newFunction2(data)

          })







          ///geting dc image 
          newFunction(item)
          newFunction2(data)

        })

      })

    })


  function newFunction(item) {
    const getDc = document.querySelector(".logo")
    if (item.biography.publisher == "DC Comics") {
      // console.log('yes')
      getDc.setAttribute("src", "d.png")
      getDc.classList.add("appi")
    }
    if (item.biography.publisher == "DC Comics" ||
      item.biography.publisher == "Marvel Comics") {
      console.log("yes")
    } else {
      // console.log('no')
      getDc.setAttribute("src", "other.png")
    }
  }
}

function newFunction2(data) {
  const getDc = document.querySelector(".logo")
  if (data[imageCounter].biography.publisher == "DC Comics") {
    // console.log('yes')
    getDc.setAttribute("src", "d.png")
    getDc.classList.add("appi")
  } else {
    getDc.setAttribute("src", "marvel.png")

  }
  if (data[imageCounter].biography.publisher == "DC Comics" ||
    data[imageCounter].biography.publisher == "Marvel Comics") {
    console.log("yes")
  } else {
    // console.log('no')
    getDc.setAttribute("src", "other.png")
  }
}

// console.log(data[0].image.url)

getPhoton()




function innerData(item) {
  fullDiv.innerHTML = `
                    
<header><div><h2>#${item.id}<h2></div><div><img class="logo" src="marvel.png"></div><div><i class="fas fa-facebook"></i></div></header>
<div class="two-grid">
<div class="photo"><img src="${item.image.url}"></div>
<div class="info">
<h3>Name: ${item.name}</h3>
<div class="info2">
<div>
<h2 class="power">PowerSters:</h2>
<h4><i class="fas fa-brain "> </i> intelligence: ${item.powerstats.intelligence}</h4>
<h4> <i class = "fas fa-child" > </i> strength: ${item.powerstats.strength}</h4>
<h4> <i class = "fas fa-skiing " > </i> speed: ${item.powerstats.speed}</h4 >
<h4> <i class = "fas fa-drum-steelpan" > </i> durability: ${item.powerstats.durability}</h4 >
<h4> <i class = "fas fa-skiing-nordic " > </i> combat: ${item.powerstats.combat}</h4></div><div>
<h2 class="power"> bio: </h2>  
<h4> ${item.biography.fullname}</h4>
<h2 class="power" > aliases:</h2><h4>${item.biography.aliases}</h4>

<h2 class="power" > place-Of-Birth: </h2><h4>${item.biography.place}</h4 >
</div></div>
<div>
<h2 class = "power"> connections: </h2><h4>work: ${item.connections.group}</h4>
        
 <h4> relatives: ${item.connections.relatives}</h4>
<h2 class="power" > work: </h2><h4>occupation: ${item.work.occupation}</h4>
<h4> base: ${item.work.base} </h4>
<h2 class="power" > publisher: </h2><h4> ${item.biography.publisher}</h4>
<h2 class="power" > first-appearance: </h2><h4> ${item.biography.first}</h4>



`
}

function newData(data) {
  fullDiv.innerHTML = `
                    
<header><div><h2>#${data[imageCounter].id}<h2></div><div><img class="logo" src="marvel.png"></div><div><i class="fas fa-facebook"></i></div></header>
<div class="two-grid">
<div class="photo"><img src="${data[imageCounter].image.url}"></div>
<div class="info">
<h3>Name: ${data[imageCounter].name}</h3>
<div class="info2">
<div>
<h2 class="power">PowerSters:</h2>
<h4><i class="fas fa-brain "> </i> intelligence: ${data[imageCounter].powerstats.intelligence}</h4>
<h4> <i class = "fas fa-child" > </i> strength: ${data[imageCounter].powerstats.strength}</h4>
<h4> <i class = "fas fa-skiing " > </i> speed: ${data[imageCounter].powerstats.speed}</h4 >
<h4> <i class = "fas fa-drum-steelpan" > </i> durability: ${data[imageCounter].powerstats.durability}</h4 >
<h4> <i class = "fas fa-skiing-nordic " > </i> combat: ${data[imageCounter].powerstats.combat}</h4></div><div>
<h2 class="power"> bio: </h2>  
<h4> ${data[imageCounter].biography.fullname}</h4>
<h2 class="power" > aliases:</h2><h4>${data[imageCounter].biography.aliases}</h4>

<h2 class="power" > place-Of-Birth: </h2><h4>${data[imageCounter].biography.place}</h4 >
</div></div>
<div>
<h2 class = "power"> connections: </h2><h4>work: ${data[imageCounter].connections.group}</h4>
        
 <h4> relatives: ${data[imageCounter].connections.relatives}</h4>
<h2 class="power" > work: </h2><h4>occupation: ${data[imageCounter].work.occupation}</h4>
<h4> base: ${data[imageCounter].work.base} </h4>
<h2 class="power" > publisher: </h2><h4> ${data[imageCounter].biography.publisher}</h4>
<h2 class="power" > first-appearance: </h2><h4> ${data[imageCounter].biography.first}</h4 >



`
}

function dataNew(data) {
  fullDiv.innerHTML = `
                    
<header><div><h2>#${data[imageCounter].id}<h2></div><div><img class="logo" src="marvel.png"></div><div><i class="fas fa-facebook"></i></div></header>
<div class="two-grid">
<div class="photo"><img src="${data[imageCounter].image.url}"></div>
<div class="info">
<h3>Name: ${data[imageCounter].name}</h3>
<div class="info2">
<div>
<h2 class="power">PowerSters:</h2>
<h4><i class="fas fa-brain "> </i> intelligence: ${data[imageCounter].powerstats.intelligence}</h4>
<h4> <i class = "fas fa-child" > </i> strength: ${data[imageCounter].powerstats.strength}</h4>
<h4> <i class = "fas fa-skiing " > </i> speed: ${data[imageCounter].powerstats.speed}</h4 >
<h4> <i class = "fas fa-drum-steelpan" > </i> durability: ${data[imageCounter].powerstats.durability}</h4 >
<h4> <i class = "fas fa-skiing-nordic " > </i> combat: ${data[imageCounter].powerstats.combat}</h4></div><div>
<h2 class="power"> bio: </h2>  
<h4> ${data[imageCounter].biography.fullname}</h4>
<h2 class="power" > aliases:</h2><h4>${data[imageCounter].biography.aliases}</h4>

<h2 class="power" > place-Of-Birth: </h2><h4>${data[imageCounter].biography.place}</h4 >
</div></div>
<div>
<h2 class = "power"> connections: </h2><h4>work: ${data[imageCounter].connections.group}</h4>
        
 <h4> relatives: ${data[imageCounter].connections.relatives}</h4>
<h2 class="power" > work: </h2><h4>occupation: ${data[imageCounter].work.occupation}</h4>
<h4> base: ${data[imageCounter].work.base} </h4>
<h2 class="power" > publisher: </h2><h4> ${data[imageCounter].biography.publisher}</h4>
<h2 class="power" > first-appearance: </h2><h4> ${data[imageCounter].biography.first}</h4 >



`
}


function myFunction() {
  // Declare variables
  var input, filter, ul, li, h2, i, txtValue
  input = document.querySelector(".kill")
  filter = input.value.toUpperCase()
  ul = document.querySelector('.container')
  li = ul.getElementsByTagName("li")

  // Loop through all list items, and hide those who don't match the search query
  for (i = 0; i < li.length; i++) {
    a = li[i].getElementsByTagName("h2")[0]
    txtValue = a.textContent || a.innerText
    if (txtValue.toUpperCase().indexOf(filter) > -1) {
      li[i].style.display = ""
    } else {
      li[i].style.display = "none"
    }
  }
}