function loadImages() {
   

   //document.getElementById("images").innerHTML = "Paragraph changed.";


   for(i = 0; i < 5; i++ ){

   var divElement = document.createElement("div");

   divElement.setAttribute("class", "gallery_product col-lg-4 col-md-4 col-sm-4 col-xs-6 filter 2");


   var imgElement = document.createElement("img");

   imgElement.setAttribute("class", "img-responsive");
   imgElement.setAttribute("src", "http://fakeimg.pl/365x365/");

   divElement.appendChild(imgElement);

	document.getElementById("images").appendChild(divElement);
}


}