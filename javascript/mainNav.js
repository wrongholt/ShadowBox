$(document).ready(function() {
	$('.medals').hide();
	
	// on hover - look up more about .hover() on api.jquery.com
	$('ul#nav li').hover(function() {
	
		$('.medals').hide();
		var activePic = $(this).find("img").attr("id") + "Medals";
		
		// show the correct image
		$('#' + activePic).fadeIn("slow");
	
	}, function() {
	
		// code to handle onmouseout
		$('.medals').hide();  // hide all visible 
		
	
	});

});

function links(){
    var thumbs = document.querySelectorAll('#nav img');
    for(var i = 0; i < thumbs.length; i++){
        thumbs[i].addEventListener('mouseover', hoverOver);
        thumbs[i].addEventListener('mouseout', hoverOff);
        //thumbs[i].addEventListener('click', transitionTo);
        
    }
    

function hoverOver(){
    
    var swing = document.getElementById("bgswing");
    var tl = new TimelineLite();

    
    tl.to(swing, 2.0, {
         
        rotationX:90,
        transformOrigin:"left top 10",
        zIndex:10
     }).to(this, 2.0, {scale: 2.0, 
                      zIndex: 10,
                    delay:2            
                     });
    
    
    
    
  
}

function hoverOff(){
    var tl = new TimelineLite();
    tl.to(this, 0.1, {scale: 1.0, clearProps:"zIndex"
                     }).to(swing, 2.0, {
         
        rotationX:-90,
        transformOrigin:"left top 10",
        clearProps:"zIndex"
     });

    
}
function transitionTo(){
    var swing = document.getElementById("bgswing");
     TweenMax.to(this, 3, {rotationY:360, transformOrigin:"left 50% -200"});

  

}


}
    