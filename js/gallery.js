function loadImages() {
   

   //document.getElementById("images").innerHTML = "Paragraph changed.";




   var imageLibrary = [

    "http://t12.deviantart.net/IwDW8C6OLFdXrE0H3t_ClPSWxTw=/fit-in/700x350/filters:fixed_height(100,100):origin()/pre09/fb9f/th/pre/i/2017/161/3/9/crazy_stripes__closed__by_naughty_savage-dbca983.png",
    "http://orig02.deviantart.net/dfac/f/2017/160/4/0/404a0613bf65521900bc12ae7600f15d-dbc68h6.png",
    "http://orig01.deviantart.net/d7f1/f/2017/160/e/5/e54feacb99c9d58bb6ec41eb721f0594-dbbxxw9.png",
    "http://t09.deviantart.net/rUncde6jzVpCdyG2BI-mSkCRA4o=/fit-in/700x350/filters:fixed_height(100,100):origin()/pre02/ddcc/th/pre/f/2017/133/c/d/cdeb8595490688f39c0a5aaf8f673eeb-db942ny.png",
    "http://t12.deviantart.net/-VH_W6pPn6O0_0UcgME0zUcWygk=/fit-in/700x350/filters:fixed_height(100,100):origin()/pre14/cca8/th/pre/f/2017/128/6/f/6f6256aa66999c0152d61b3f10a642b7-db8lm4c.png",
    "http://t08.deviantart.net/K2nFFydS3HQOMVRAmMBUPop9Fwg=/fit-in/700x350/filters:fixed_height(100,100):origin()/pre08/7806/th/pre/f/2017/103/f/1/spring_pegasus_raffle__open__by_naughty_savage-db5pw3d.png",
    "http://t12.deviantart.net/GP3HnYaFZlAN_tunmUEwbYdpKtE=/fit-in/700x350/filters:fixed_height(100,100):origin()/pre04/3d1b/th/pre/f/2017/084/8/6/86d738844b85928455561d5627b33d47-db3iqmi.png",
    "http://t03.deviantart.net/fnelaCrYLl1sF0EufSWk5-KGXsA=/fit-in/700x350/filters:fixed_height(100,100):origin()/pre09/8ae4/th/pre/i/2017/099/c/3/friends_on_a_starry_night_by_naughty_savage-db58wlw.png"

   ];




   for(i = 0; i < imageLibrary.length; i++ ){

   var divElement = document.createElement("div");

   divElement.setAttribute("class", "gallery_product col-lg-2 col-md-3 col-sm-4 col-xs-6 well");


   var imgElement = document.createElement("img");

   imgElement.setAttribute("class", "img-responsive center-block");
   imgElement.setAttribute("src", imageLibrary[i]);
   imgElement.setAttribute("style", "outline-style: none");
   imgElement.setAttribute("style", "outline-color: blue");


  imgElement.style.height = '128px'
  imgElement.style.width = 'auto'
 
 
   divElement.appendChild(imgElement);

	document.getElementById("images").appendChild(divElement);
	}


}

$(document).ready(function(){
    $("p").click(function(){
        $("p").hide();
    });
});


$(document).on("mouseenter", "img", function() {
  $(this).css("outline-style", "ridge");
});

$(document).on("mouseleave", "img", function() {
   $(this).css("outline-style", "none");
});

$(document).on("click", "img", function(){

  //TO:DO   do something when the image is pressed.

});


