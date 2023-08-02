console.log('script added...')

const letterArray = ["a", "b", "c", "d", "e", "f", "g", "h", "i", "j", "k", "l", "m", "n", "o", "p", "q", "r", "s", "t", "u", "v", "w", "x", "y", "z", " ", " ", " ", " ",];

const random = Math.floor(Math.random() * 26)

document.querySelector("h1").onmouseover = event => {
   console.log("🚀 ~ file: index.js:10 ~ document.querySelector ~ innerText:", event.target.innerText)
   let iterations = 0;
   const interval = setInterval(() => {
      event.target.innerText = event.target.innerText.split("").map((letter, index) => {
         if (index < iterations && event.target.innerText.length) {
            return event.target.dataset.value[index]
         }

         return letterArray[Math.floor(Math.random() * 26)]
      }).join("");

      if (iterations > event.target.innerText.length) clearInterval(interval);

      // three iterations per letter
      iterations += 1 / 3;
   }, 50);
}