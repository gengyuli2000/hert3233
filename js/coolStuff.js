$(document).ready(function(){
	
	//create an array of the dots
	var dotItems=$(".dot");
	
	//create an array of the corresponding nav text
	var listItems=$(".navText");
	
	//create an array of the corresponding section
	var sectionItems=$("article").children("section");
	var sectionScrolls = [];
	
	//store the scroll position for each section tops
	for (var i=0; i<sectionItems.length; i++){
		sectionScrolls[i] = $(sectionItems[i]).offset().top-60;
	}
	
		$(".dot").click(function(){
			//get the index of the dot clicked
			var scroll_index=dotItems.index(this);
			//scroll to the section of this index
			$('html').animate({
				scrollTop: ($(sectionItems[scroll_index]).offset().top-40)
				}, 500);
				console.log(scroll_index);
		});
	
	
	//呵呵，下面的function不scroll不走。。。只能这么ugly的来了。。
	$(window).scrollTop(1);
	
	//get the scroll position of browser
	$(window).scroll(function(){
	
		if ($("body").scrollTop()<300) {
			$(".dot").addClass("nav_li_span_white");
			$(".navText").addClass("white_text");
		}else{
			$(".dot").removeClass("nav_li_span_white");
			$(".navText").removeClass("white_text");	
		}

		
		//用[var]搞失败。。。从之前保存的section position，到了add class
		if ($("body").scrollTop() > sectionScrolls[0] &&
		    $("body").scrollTop() < sectionScrolls[1]){
			$(dotItems[0]).addClass("active_white");
			$(dotItems).not($(dotItems[0])).removeClass("active");
			$(listItems[0]).addClass("reveal");
			$(listItems).not($(listItems[0])).removeClass("reveal");
		}
		
				if ($("body").scrollTop() > sectionScrolls[1] &&
		    $("body").scrollTop() < sectionScrolls[2]){
			$(dotItems[1]).addClass("active");
			$(dotItems).not($(dotItems[1])).removeClass("active");
			$(listItems[1]).addClass("reveal");
			$(listItems).not($(listItems[1])).removeClass("reveal");
		}
				if ($("body").scrollTop() > sectionScrolls[2] &&
		    $("body").scrollTop() < sectionScrolls[3]){
			$(dotItems[2]).addClass("active");
			$(dotItems).not($(dotItems[2])).removeClass("active");
			$(listItems[2]).addClass("reveal");
			$(listItems).not($(listItems[2])).removeClass("reveal");
		}
				if ($("body").scrollTop() > sectionScrolls[3] &&
		    $("body").scrollTop() < sectionScrolls[4]){
			$(dotItems[3]).addClass("active");
			$(dotItems).not($(dotItems[3])).removeClass("active");
			$(listItems[3]).addClass("reveal");
			$(listItems).not($(listItems[3])).removeClass("reveal");
		}
		if ($("body").scrollTop() > sectionScrolls[4]){
			$(dotItems[4]).addClass("active");
			$(dotItems).not($(dotItems[4])).removeClass("active");
			$(listItems[4]).addClass("reveal");
			$(listItems).not($(listItems[4])).removeClass("reveal");
		}
		
		
		//scroll listens to scroll position, if s<300 use the white set of class
	

		
		$(".dot").mouseover(function(){
				if ($("body").scrollTop()<360) {
					$(this).addClass("active_white");
					var index = dotItems.index(this);
					$(listItems[index]).addClass("reveal");
					
					$(".dot").mouseout(function(){
					$(this).removeClass("active_white");
					var index = dotItems.index(this);
					$(listItems[index]).removeClass("reveal");
					});
				}else{ //if s>300 use the blue set of class
						$(".dot").mouseover(function(){
				$(this).removeClass("active_white");		
				$(this).addClass("active");
				var index = dotItems.index(this);
				$(listItems[index]).addClass("reveal");	
			});
	
			$(".dot").mouseout(function(){
				$(this).removeClass("active");
				var index = dotItems.index(this);
				$(listItems[index]).removeClass("reveal");
			});
			}
				
	
			
			});
		
		
		
		
		
	});
		
	
});

