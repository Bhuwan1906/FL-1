AFRAME.registerComponent("markerhandler",{
 init: async function(){

    this.el.addEventListener("markerFound",()=>{
       console.log("marker is found;-;")
       this.handleMarkerFound();
    });

    this.el.addEventListener("markerLost",()=>{
        console.log("marker is Lost;-;")
        this.handleMarkerLost();
     });
 },
 handleMarkerFound: function(){
    var buttonDiv = document.getElementById("button-div");
    buttonDiv.style.display = "flex";

    var ratingButton = document.getElementById("rating")
 }
});

// sn = var (s)
{super.AFRAME.AFRAME.addEventListener()}
