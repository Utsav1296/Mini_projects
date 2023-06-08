const card = document.querySelector('[data-card]')


setTimeout(() => {
   card.innerHTML = `
        <div class="card-header" data-title>
         <img
            src="https://plus.unsplash.com/premium_photo-1676654935719-e1ba2546716a?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=387&q=80"
            alt="">
         <h3>Lorem ipsum dolor sit amet.</h3>
      </div>
      <div class="text">
         <p class="para">Lorem, ipsum dolor sit amet consectetur adipisicing elit. Id, placeat.</p>
         <p class="para">Lorem ipsum dolor sit amet consectetur adipisicing elit. Ipsa, qui?</p>
         <p class="para">Lorem, ipsum dolor sit amet consectetur adipisicing elit. Accusamus!</p>
      </div>
    `

}, 5000);