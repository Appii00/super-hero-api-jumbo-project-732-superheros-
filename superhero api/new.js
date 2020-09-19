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