window.addEventListener('load', function() {
  // Henter link i linkcontainer. Dette gøres ud fra ClassName
  var linkContainer = document.getElementsByClassName('primaryNavigation')[0];

  // henter alle links i link containeren.
  var links = linkContainer.getElementsByTagName('a');

  // Looper links
  for (var i = 0; i < links.length; i++) {
    // Tager det eksisterende link
    var link = links[i];

    // Tilføjer søgeparameter
    link.href = link.href + '?t=' + Date.now();
  }
});

/*Hvad er søgeparametre (Search Parameters) Og hvorfor bruger vi det? 

Du kan bruge søgeparametre i en URL for at forhindre forud indlæsning af ressourcer af browseren. 
Ved at tilføje en unik parameter til URL'en bliver det en ny URL, 
som browseren ikke har set før, og derfor vil den ikke forud indlæse. 
Denne teknik kan være nyttig i situationer, hvor du vil forhindre browseren i at gemme en ressource, 
som du vil have skal genereres dynamisk hver gang, det anmodes om. */