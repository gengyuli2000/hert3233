$(function () {
    
    //set parameters
    var img_slide_time = 4000;
    var transition_speed = 700;
    
    //select the individual pics within the gallery html list
    var listItems =  $("#image_slider").children('li'); //.children select sub element of an ID
    var listLength = listItems.length;
    i = 0;
    
    //slide function, slide by fadeOut and fadeIn list items
    changeList = function(){
      
      listItems.eq(i).fadeOut(transition_speed, function(){ //eq(i) select the current image, i index element,fade it out
        i=i+1; //increase i once per run
        if (i===listLength) {
          i=0; //if i reaches listLength, reset i to 0
        }
      listItems.eq(i).fadeIn(transition_speed); //fade in new image (i+1)
      })
      
    }
    
    listItems.not(':first').hide(); //.not() select all element apart from in the (), e.g ':first' => hide all apart from first 
    setInterval(changeList,img_slide_time); //rerun changeList = pic slide interval
    
});



