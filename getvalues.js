const obs = new OBSWebSocket();

obs.connect({ 
        address: '192.168.0.166:4444'
    });

function callWS(){
         
            //console.log(data.streaming),  
            //console.log(`Success! We're connected & authenticated.`),
            obs.send('GetTextGDIPlusProperties', {
                    source: "Inning"
                })
            .then(inn => {
                    var currentInning = inn.text; 
                    //console.log ( currentInning); 
                    document.getElementById("InningNr").innerHTML= currentInning; 
                })

            .then(() => obs.send('GetTextGDIPlusProperties', {source: "Score AWAY"})
                )
            .then(guest => {
                    var guestScore = guest.text; 
                    //console.log ( guestScore); 
                    document.getElementById("guestScore").innerHTML= guestScore;
                })

            .then(() => obs.send('GetTextGDIPlusProperties', {source: "Score HOME"})
                )
            .then(home => {
                    var homeScore = home.text; 
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