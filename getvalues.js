const obs = new OBSWebSocket();

obs.connect('ws://192.168.0.166:4455');

function callWS(){
           
            //console.log(`Success! We're connected & authenticated.`),
            obs.call('GetInputSettings', {
                inputName: "Inning"
                })
            .then(inn => {
                    var currentInning = inn.inputSettings.text; 
                    //console.log ( currentInning); 
                    document.getElementById("InningNr").innerHTML= currentInning; 
                })

            .then(() => obs.call('GetInputSettings', {inputName: "Score AWAY"})
                )
            .then(guest => {
                    var guestScore = guest.inputSettings.text; 
                    //console.log ( guestScore); 
                    document.getElementById("guestScore").innerHTML= guestScore;
                })

            .then(() => obs.call('GetInputSettings', {inputName: "Score HOME"})
                )
            .then(home => {
                    var homeScore = home.inputSettings.text; 
                    //console.log ( homeScore); 
                    document.getElementById("homeScore").innerHTML= homeScore;
                })
            } 
        
            setInterval(callWS, 1000)
    
        
        //.then(() => {obs.disconnect(), console.log('Bye Bye, Mr. Websocket!')})
        //.catch(error => console.error(error));

    obs.on('error', err => {
        console.error('socket error:', err);
    });


    const box = document.querySelector('.firstout');
const toggleButton = document.querySelector('.toggle-first');

toggleButton.addEventListener('click', function() {
  box.classList.toggle('active');

});

const boxx = document.querySelector('.secondout');
const toggleButtonx = document.querySelector('.toggle-second');

toggleButtonx.addEventListener('click', function() {
  boxx.classList.toggle('active');

});