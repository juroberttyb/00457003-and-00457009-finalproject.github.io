
var username;
var musicinstrument;

$(document).ready(
	function()
	{
		$("#text").toggle();
	}
)

function go()
{
	window.location.assign('期末專案第首頁.html');
}

$(document).ready(
	function()
	{
		var musicstart = document.getElementById( "music1" );
		musicstart.play();
		
		window.alert("Hello! welcome to the world of Music!");
		window.alert("This is a page where we,ll lead you to some music instruments you may like: )");
		username = window.prompt("Please tell us your name.");
		musicinstrument = window.prompt("Choose the things you are interested in, 1: piano, 2: opera, 3, violin, answer the number, thx!");
		
		if( musicinstrument == 1 )
		{
			window.alert("Great! We have a piano ready for u : )");
		}
		else if( musicinstrument == 2 )
		{
			window.alert("Things about Opera are contain in our page, you can go and check it : )");
		}
		else if( musicinstrument == 3 )
		{
			window.alert("To learn a violin, we strongly suggest you should learn some simple stuff first : )");
		}
		else
		{
			window.alert("What is " + musicinstrument + " @@ ? We,ll just take you to our website: )");
		}
		
		$("#text").hide();
		document.getElementById("text").innerHTML = username + "! WellCome to the World of Music!<br>" + "We are gonna to intruduced you some intersting stuff: )<br><label><input id = 'gogo' type = 'button' value = 'ready!'></label>";
		$("#text").show(1000);
				
		$("#gogo").click(function(){
		  $("#text").animate({ 
			width: "90%",
			opacity: 0.2,
			marginLeft: "0.6in",
			fontSize: "10em", 
			borderWidth: "10px"
		  }, 2000 ).css("color","blue"),$("#text").hide(500),$("#text2").show(1000).css("color","yellow");
		}); 

		
		$("#text2").hide();
		
		document.getElementById("text2").innerHTML = "<p class = 'enlarge'>Click the image to Go!<p><img src = 'istock_000000599064medium.jpg' onclick='go()' width = '70%' height = '70%'>"
		
	}
)