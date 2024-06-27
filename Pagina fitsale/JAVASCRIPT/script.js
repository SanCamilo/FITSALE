function iniciarMap(){
    var coord = {lat:4.755858874323279 ,lng: -74.07995914906043};
    var map = new google.maps.Map(document.getElementById('map'),{
      zoom: 10,
      center: coord
    });
    var marker = new google.maps.Marker({
      position: coord,
      map: map
    });
}