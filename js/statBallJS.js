$(document).ready(function(){
    
    //先整个content display的toggle
    
  $("section h3").click(function(){
    $(this).next("section p").toggle(300);
    console.log(1)
  });
  
  
  
  //第一版tag filter,找到this的class，因为有俩。。。得split成两个string然后选择第二个
  //然后在加个class selector "."
  //toggle对于一个class toggle没问题，多了就跪了，最简单办法就是让click tag以后user只能再点原来的那个
  
  
    $(".tags").click(function(){
      var thisClass = ($(this).attr("class").split(/\s+/)[1]);
      console.log(thisClass);
      $("section").not("."+thisClass).toggle();
      $(".tags").not("."+thisClass).toggle();
    });
    
 

   
   
});