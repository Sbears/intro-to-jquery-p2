$(document).on('ready', function() {
	$("p ").hover(function( ) {
		$("p").css("background-color", "pink");
		
	}, function() {

		$("p").css("background-color", "white");
	} );
	$("h1, h2").append("!!!");
	$("a").on('click', function(e){
		if(confirm("Would you like to navigate to scottbears.com")) {

		} else {
		e.preventDefault();
		$("#removeIt").remove();
		}
	});

 });



