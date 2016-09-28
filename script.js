

function update() {
box = prompt("enter the number of boxes in a row,choose from 1 to 20");

}



$(document).ready(function() {
	
	
	function grid() {
		for(var i=0;i<=box*box;i++) {
			width = ($(".container").width())/box;
			$(".square").css({"width":width,"height":width});
			$("#main").append("<div class = 'square'></div>");
		}
			$(".square").mouseenter(function() {
				$(this).addClass("black");
		

	});
		
		
	};	
	
	update();
	grid();

});

			

			

	



	
