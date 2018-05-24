    function ticker2() {
  $('.feed-item:first-child').appendTo(".news-feed-inner"); 
	$(".news-feed-inner").css("top","0");
	$(".news-feed-inner").animate({top:"-150px"},2000);
	setTimeout("ticker2()",2002); 
};

ticker2(); 