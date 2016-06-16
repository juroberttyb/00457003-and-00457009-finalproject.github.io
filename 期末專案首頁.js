
var vedioid = [ "鏡.mp4", "宮崎駿.mp4", "精靈之歌.mp4", "Departures (Soundtrack) - 09 Kizuna 1.mp4", "Gundam Unicorn - PIANO UC-NO.3 Piano Cover TUTORIAL.mp4" ];
var vedioidtwo = [ "Christina Perri - A Thousand Years Piano_Cello Cover - ThePianoGuys.mp4", "Coldplay - Paradise Peponi African Style ft. guest artist, Alex Boye - ThePianoGuys.mp4", "bbb.mp4", "Adele - Rolling in the Deep Piano_Cello Cover - ThePianoGuys.mp4" ];

var vedioidcount = 0;

var pianosounds1 = document.getElementById("piano1");
var pianosounds2 = document.getElementById("piano2");
var pianosounds3 = document.getElementById("piano3");
var pianosounds4 = document.getElementById("piano4");
var pianosounds5 = document.getElementById("piano5");
var pianosounds6 = document.getElementById("piano6");
var pianosounds7 = document.getElementById("piano7");
var pianosounds8 = document.getElementById("piano8");
var mydrum;
var timeclock = setInterval(function(){ myTimer() }, 1000);
var intervalset;

function changevedio( )
{
	if( vedioidcount < 5 )
	{
		alert( "You have now change to " + vedioid[vedioidcount] + " !");
		document.getElementById( "swichvedio1" ).innerHTML = "<embed id = 'embedvedio1' src='" + vedioid[vedioidcount] + "'  width='800' height='600' type='audio/mp4' autostart = 'true' loop = 'true' ></embed>";
		vedioidcount++;
	}
	else
	{
		alert( "You have now change to " + vedioid[vedioidcount] + " !");
		vedioidcount = 0;
		document.getElementById( "swichvedio1" ).innerHTML = "<embed id = 'embedvedio1' src='" + vedioid[vedioidcount] + "'  width='800' height='600' type='audio/mp4' autostart = 'true' loop = 'true' ></embed>";
		vedioidcount++;
	}
	
}

function doClick( vedioidcounttwo )
{
	vedioidcounttwo = parseInt(vedioidcounttwo);
	document.getElementById( "changevediotwo" ).innerHTML = "<embed src='" + vedioidtwo[vedioidcounttwo] + "'  width='800' height='600' type='audio/mp4' autostart = 'false' loop = 'false' ></embed>";
}

function Key()
{
	var keycode = event.keyCode
	var realkey = String.fromCharCode(event.keyCode)
	/*window.alert(realkey);*/
	if(realkey=="X")
	{
		document.getElementById("piano1").play();
	}
	if(realkey=="D")
	{
		document.getElementById("piano2").play();
	}
	if(realkey=="F")
	{
		document.getElementById("piano3").play();
	}
	if(realkey=="G")
	{
		document.getElementById("piano4").play();
	}
	if(realkey=="H")
	{
		document.getElementById("piano5").play();
	}
	if(realkey=="J")
	{
		document.getElementById("piano6").play();
	}
	if(realkey=="K")
	{
		document.getElementById("piano7").play();
	}
	if(realkey=="L")
	{
		document.getElementById("piano8").play();
	}
	document.getElementById("text1").value=" ";
}

function drum()
{
	intervalset = document.getElementById("intervaltimeset").value;
	if(intervalset<1)
	{
		window.alert("小於1秒!");
	}
	else
	{
		intervalset = intervalset * 1000;
		mydrum = setInterval(function(){ document.getElementById("drum").play(); }, intervalset);
	}
}

function clear()
{
	clearInterval(mydrum);
}

function myTimer() {
    var d = new Date();
    var t = d.toLocaleTimeString();
    document.getElementById("clock").innerHTML = t;
}

function gowebsite()
{
	window.location.assign('https://www.youtube.com/watch?v=D2RNr6rw7ZE');
}

function start()
{
	var musicstart = document.getElementById( "music1" );
	var button1 = document.getElementById( "changevedio" );
	button1.addEventListener( "click", changevedio, false );
	document.getElementById("intervalstart").addEventListener( "click", drum, false );
	document.getElementById("intervalclear").addEventListener( "click", clear, false );
	/*musicstart.play();*/
}



window.addEventListener( "load", start, false );
