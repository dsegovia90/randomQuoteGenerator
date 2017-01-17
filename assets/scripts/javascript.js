
$(document).ready(function() {
	
	$("#askData").click(function() {
		console.log("clicked!");
		
		
		
		$.ajax({
		    url: 'https://andruxnet-random-famous-quotes.p.mashape.com/', // The URL to the API. You can get this in the API page of the API you intend to consume
		    type: 'POST', // The HTTP Method, can be GET POST PUT DELETE etc
		    data: {cat: "famous"}, // Additional parameters here
		    dataType: 'json',
		    success: function(data) { 
		    	console.log(data);
		    	$("#quote").html(data.quote);
		    	$("#author").html(data.author);
		    	$("#tweet").attr("href", "https://twitter.com/intent/tweet?text=" + data.quote.replace(/\s/g, "+") + " by " + data.author.replace(/\s/g, "+"));
		    },
		    error: function(err) { alert(err); },
		    beforeSend: function(xhr) {
		    xhr.setRequestHeader("X-Mashape-Authorization", "xCJw6lGSYzmshXQA0ZEumWFl99Skp1hALigjsnbz3llV5PVbdK"); // Enter here your Mashape key
		    }
		});
		
		
	
	});

});







