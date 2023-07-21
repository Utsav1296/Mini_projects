const btn = document.querySelector('button')
const div = document.querySelector('div')

const OPEN_CAGEDATA_API_KEY = `yourProjectApiKey`

const options = {
   enableHighAccuracy: true,
   timeout: 5000,
   maximumAge: 0,
};

btn.addEventListener('click', () => {
   if (navigator.geolocation) {
      btn.innerText = "Allow to access location..."
      navigator.geolocation.getCurrentPosition(onSuccess, onError, options)
   } else {
      btn.innerText = "Your browser doesn't support this feature"
   }
})

const onSuccess = (position) => {
   const { latitude, longitude } = position.coords;

   try {
      fetch(`https://api.opencagedata.com/geocode/v1/json?q=${latitude}+${longitude}&key=${OPEN_CAGEDATA_API_KEY}`)
         .then(res => res.json())
         .then(response => {
            const data = response.results[0]
            const { formatted, annotations, components } = data
            const { OSM, DMS } = annotations
            btn.innerText = `${formatted},${components?.continent}`;
            div.innerHTML = `<p>latitude : ${DMS.lat}</p>
            <p>longitude : ${DMS.lng}</P>
            <br>
            <br>
              <a href=${OSM.url} target="_blank" rel="noopener noreferrer">Click to view in map</a>
            `
         })
   } catch (error) {
      console.log(error)
      button.innerText = "Something went wrong";
   }
}
function onError(error) {
   if (error.code == 1) { //if user denied the request
      btn.innerText = "You denied the request";
   } else if (error.code == 2) { //if location in not available
      btn.innerText = "Location is unavailable";
   } else { //if other error occured
      console.log(error)
      btn.innerText = "Something went wrong";
   }
   btn.setAttribute("disabled", "true"); //disbaled the button if error occured

}