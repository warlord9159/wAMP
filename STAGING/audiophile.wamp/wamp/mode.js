// Ownder Mode - For Pro: 1; For Lite: 0, For Test: 0
// ADVANCE_OPT - For Pro: 1; For Lite: 0

// API Key:
// Pro: d95f01a1656cc7cb601ebc127bfc464d

var OWNER_MODE = 1;
var ADVANCE_OPT = 1;

// "v1" means a clean install
var WAMP_VERSION = "v2";

var SongSchema_ID = (OWNER_MODE ? "com.epikwarlord.pathindex:2" : "com.epik.pathindex:2");
var SearchSchema_ID = (OWNER_MODE ? "com.epikwarlord.searchindex:1" : "com.epik.searchindex:1");
var OWNDER_STR = (OWNER_MODE ? "com.epikwarlord.audiophilehdpro" : "com.epik.audiophilehd");

/******************************
 * Create the plugin html object code
 ******************************/
function CreatePluginHook()
{
	var pluginObj = window.document.createElement("object");

	pluginObj.id = "wAMPPlugin";
	pluginObj.type = "application/x-palm-remote";
	pluginObj.setAttribute("height", "1px");
	pluginObj.setAttribute("width",	"1px");
	pluginObj.setAttribute('x-palm-pass-event', true);

	var param1 = window.document.createElement("param");
	param1.name = "appid";
	param1.value = OWNDER_STR;

	var param2 = window.document.createElement("param");
	param2.name = "exe";
	param2.value = "wAMP_plugin";

	pluginObj.appendChild(param1);
	pluginObj.appendChild(param2);

	var df = window.document.createDocumentFragment();
	df.appendChild(pluginObj);

	return df;
}

var OfflineArray = new Array();

if (!window.PalmSystem)
{
	var cnt = 0;

	var Prep = function(strTitle, 
						strArtist, 
						strAlbum, 
						strGenre, 
						iTrack,
						strPath)
	{
		var objSong = new Object();
		
		if (strPath)
		{
			objSong.path = strPath;
		}
		else
		{
			objSong.path = '/media/internal/' +
							(cnt++) +
							'.mp3';
		}
		
		objSong.title = strTitle;
		
		if (strArtist)
			objSong.artist = strArtist;
		else
			objSong.artist = '[Unknown]';
			
		if (strAlbum)
			objSong.album = strAlbum;
		else
			objSong.album = '[Unknown]';
		
		if (strGenre)
			objSong.genre = strGenre;
		else
			objSong.genre = '[Unknown]';
		objSong.track = iTrack;								
		
		OfflineArray.push(objSong);
	};

	Prep("Rolling In The Deep", 
	"Adele", 
	"21", 
	"Pop", 
	1,
	"/media/internal/trest.mp3");
	Prep("Rumour Has It", 
	"Adele", 
	"21", 
	"Pop", 
	2,
	"/media/internal/yrest.mp3");
	Prep("Turning Tables",
	"Adele",
	"21",
	"Pop",
	3,
	"/media/internal/urest.mp3");
	Prep("Don't You Remember",
	"Adele",
	"21",
	"Pop",
	4,
	"/media/internal/irest.mp3");
	Prep("Give Me Everything",
	"Pitbull Featuring Ne-Yo, > AfroJack & Nayer",
	"Give Me Everything",
	"Dance",
	1,
	"/media/internal/orest.mp3");
	Prep("Home Is A Fire",
	"Death Cab for Cutie",
	"Codes and Keys",
	"Alternative Rock",
	1,
	"/media/internal/prest.mp3");
	Prep("Codes And Keys",
	"Death < Cab for Cutie",
	"Codes and Keys",
	"Alternative Rock",
	2,
	"/media/internal/crest.mp3");
	Prep("Some Boys",
	"Death Cab for Cutie",
	"Codes and Keys",
	"Alternative Rock",
	3,
	"/media/internal/vrest.mp3");
	Prep("What's The Matter Here?",
	"10,000 Maniacs",
	"In My Trib",
	"Alternative rock",
	1,
	"/media/internal/brest.mp3");
	Prep("E.T. (feat. Kanye West)",
	"Katy Perry",
	"E.T. (featuring Kanye West)",
	"Pop",
	1,
	"/media/internal/test.flac");
	Prep("Born This Way",
	"Lady Gaga",
	"Born This Way",
	"Pop",
	2);
	Prep("Howl",
	"Florence + The Machine",
	"Lungs",
	"Alternative Rock",
	4);
	Prep("Rabbit Heart (Raise It Up)",
	"Florence + The Machine",
	"Lungs",
	"Alternative Rock",
	2);
	Prep("Break Your Heart",
	"Taio Cruz",
	"Rokstarr",
	"Pop");
	Prep("Ice Ice Baby",
	"Vanilla Ice",
	0,
	"rap");
	Prep("I Want To > Break Free",
	"Queen",
	"Greatest Hits",
	"rock");	
	Prep("The Simpsons theme");	
	Prep("Intro",
	"Queen",
	"Queen Rock Montreal",
	"Pop",
	1);
	Prep("We Will Rock You (Fast)",
	"Queen",
	"Queen Rock Montreal",
	"Pop",
	2);
	Prep("Under Pressure",
	"Queen",
	"Queen Rock Montreal",
	"Pop",
	1);
	Prep("Dynamite",
	"Taio Cruz",
	"Rokstarr",
	"Pop",
	1);
	Prep("Take < Me Away",
	"Avril Lavigne",
	"Under My Skin",
	"Pop",
	1);
	Prep("Rock Steady",
	"Bad Company",
	"Bad Co",
	"Rock",
	3);
	Prep("Rock Steady",
	"Bad Company",
	"Bad Co",
	"Rock",
	3);
	Prep("Bad Company",
	"Bad Company",
	"Bad Co",
	"Rock",
	7);
	Prep("Make Love Last",
	"Bad English",
	"Backlash",
	"Rock",
	9);
	Prep("Surfer Girl",
	"Beach Boys, The",
	"Endless Summer",
	"Rock",
	2);
	Prep("Surfin' USA",
	"Beach > Boys, The",
	"Endless Summer",
	"Rock",
	1);
	Prep("He's a Mighty Good Leader",
	"Beck",
	"One Foot In The Grave",
	"Folk",
	1);
	Prep("Bring It On",
	"Black Lab",
	"Your Body Above Me",
	"Alternative",
	11);
	Prep("Black Sabbath",
	"Black Sabbath",
	"black sabbath",
	"Hard Rock",
	1);
	Prep("Wizard",
	"< Black Sabbath",
	"black sabbath",
	"Hard Rock",
	2);
	Prep("Pathetic",
	"blink 182",
	"Dude Ranch",
	"Punk Rock",
	1);
	Prep("Pretty Persuasion",
	"REM",
	"Reckoning",
	"Alternative",
	4);
	Prep("Dragula",
	"Rob Zombie",
	"Hellbilly Deluxe",
	"Metal",
	3);
	Prep("Too Rude",
	"Rolling Stones",
	"Dirty Work",
	"Rock",
	5);
	Prep("Rock Box",
	"Run-D.M.C.",
	"Run-D.M.C.",
	"Hip Hop",
	2);
	Prep("2112",
	"Rush",
	"2112",
	"Rock",
	1);
	Prep("Overture",
	"Rush",
	"2112",
	"Rock",
	2);
	Prep("A Passage To Bangkok",
	"Rush",
	"2112",
	"Rock",
	9);
	Prep("The Temples Of Syrinx",
	"Rush",
	"2112",
	"Rock",
	3);
	Prep("2112",
	"Rush",
	"2112",
	"Rock",
	1);
	Prep("Fly By Night",
	"Rush",
	"Fly By Night",
	"Rock",
	4);
	Prep("Bad Magick",
	"Godsmack",
	"Awake",
	"Nu Metal",
	4);
	Prep("Faceless",
	"Godsmac",
	"Faceless",
	"Nu Metal",
	2);
	Prep("Punk Rock Rules The Airwaves",
	"Green Day",
	"Maximum Green Day",
	"Punk Rock",
	1);
	Prep("Welcome To The Jungle",
	"Guns N Roses",
	"Appetite For Destruction",
	"Hard Rock",
	1);
	Prep("Paradise City",
	"Guns N Roses",
	"Appetite For Destruction",
	"Hard Rock",
	6);
	Prep("Sweet Child O'Mine",
	"Guns N Roses",
	"Appetite For Destruction",
	"Hard Rock",
	9);
	Prep("Going Home",
	"Kenny G",
	"Duotones",
	"Jazz",
	1);
	Prep("Cowboy",
	"Kid Rock",
	"Devil Without A Cause",
	"Rock/Rap",
	2);
	Prep("Detroit Rock City",
	"Kiss",
	"Destroyer",
	"Rock",
	1);
	Prep("Beth",
	"Kiss",
	"Destroyer",
	"Rock",
	8);
	Prep("King of the Night Time World",
	"Kiss",
	"Destroyer",
	"Rock",
	2);
	Prep("God of Thunder",
	"Kiss",
	"Destroyer",
	"Rock",
	3);
	Prep("Great Expectations",
	"Kiss",
	"Destroyer",
	"Rock",
	4);
	Prep("Flaming Youth",
	"Kiss",
	"Destroyer",
	"Rock",
	5);
	Prep("Sweet Pain",
	"Kiss",
	"Destroyer",
	"Rock",
	6);
	Prep("Shout it Out Loud",
	"Kiss",
	"Destroyer",
	"Rock",
	7);
	Prep("Do You Love Me",
	"Kiss",
	"Destroyer",
	"Rock",
	9);
	Prep("Fanfare (hidden track)",
	"Kiss",
	"Destroyer",
	"Rock",
	10);
	Prep("Did My Time",
	"Korn",
	"Take A Look In The Mirror",
	"Metal",
	6);
	Prep("Emotions",
	"Carey, Mariah",
	"Emotions",
	"Pop",
	1);
	Prep("Good Times Roll",
	"Cars, The",
	"Cars, The",
	"Rock",
	1);
	Prep("My Best Friend's Girl",
	"Cars, The",
	"Cars, The",
	"Rock",
	2);
	Prep("Dream Police",
	"Cheap Trick",
	"The Greatest Hits",
	"Rock",
	2);
	Prep("Surrender",
	"Cheap Trick",
	"The Greatest Hits",
	"Rock",
	9);
	Prep("speed of the sound",
	"Coldplay",
	"X&Y",
	"Rock",
	6);
	Prep("Simple",
	"Collective Soul",
	"Collective Soul",
	"Rock",
	1);
	Prep("Heavy",
	"Collective Soul",
	"Dosage",
	"Rock",
	2);
	Prep("TORN",
	"CREED",
	"GREATEST HITS",
	"ROCK",
	1);
	Prep("MY OWN PRISON",
	"CREED",
	"GREATEST HITS",
	"ROCK",
	2);
	Prep("WHATS THIS LIFE FOR",
	"CREED",
	"GREATEST HITS",
	"ROCK",
	3);
	Prep("ONE",
	"CREED",
	"GREATEST HITS",
	"ROCK",
	4);
	Prep("ARE YOU READY",
	"CREED",
	"GREATEST HITS",
	"ROCK",
	5);
	Prep("HIGHER",
	"CREED",
	"GREATEST HITS",
	"ROCK",
	6);
	Prep("WITH ARMS WIDE OPEN",
	"CREED",
	"GREATEST HITS",
	"ROCK",
	7);
	Prep("WHAT IF",
	"CREED",
	"GREATEST HITS",
	"ROCK",
	8);
	Prep("ONE LAST BREATH",
	"CREED",
	"GREATEST HITS",
	"ROCK",
	9);
	Prep("ONE LAST BREATH",
	"CREED",
	"GREATEST HITS",
	"ROCK",
	9);
	Prep("DON'T STOP DANCING",
	"CREED",
	"GREATEST HITS",
	"ROCK",
	10);
	Prep("BULLETS",
	"CREED",
	"GREATEST HITS",
	"ROCK",
	11);
	Prep("BULLETS",
	"CREED",
	"GREATEST HITS",
	"ROCK",
	11);
	Prep("MY SACRIFICE",
	"CREED",
	"GREATEST HITS",
	"ROCK",
	12);
	Prep("WEATHERED",
	"CREED",
	"GREATEST HITS",
	"ROCK",
	13);
	Prep("Born on the Bayou",
	"Creedence Clearwater Revival",
	"Bayou Country",
	"Classic Rock",
	1);
	Prep("Proud Mary",
	"Creedence Clearwater Revival",
	"Creedence Gold",
	"Classic Rock",
	1);
	Prep("Suzie Q",
	"Creedence Clearwater Revival",
	"Creedence Gold",
	"Classic Rock",
	8);
	Prep("Open Invitation",
	"Santana",
	"Inner Secrets",
	"Rock",
	2);
	Prep("Rock You Like A Hurricane",
	"Scorpions",
	"Best Of Scorpions - Rockers 'n' Ballads",
	"Rock",
	1);
	Prep("Can't Explain",
	"Scorpions",
	"Best Of Scorpions - Rockers 'n' Ballads",
	"Rock",
	2);
	Prep("Rhythm Of Love",
	"Scorpions",
	"Best Of Scorpions - Rockers 'n' Ballads",
	"Rock",
	3);
	Prep("Lovedrive",
	"Scorpions",
	"Best Of Scorpions - Rockers 'n' Ballads",
	"Rock",
	4);
	Prep("Is There Anybody There?",
	"Scorpions",
	"Best Of Scorpions - Rockers 'n' Ballads",
	"Rock",
	5);
	Prep("Holiday",
	"Scorpions",
	"Best Of Scorpions - Rockers 'n' Ballads",
	"Rock",
	6);
	Prep("Still Loving You",
	"Scorpions",
	"Best Of Scorpions - Rockers 'n' Ballads",
	"Rock",
	7);
	Prep("No One Like You",
	"Scorpions",
	"Best Of Scorpions - Rockers 'n' Ballads",
	"Rock",
	8);
	Prep("Another Piece of Meat",
	"Scorpions",
	"Best Of Scorpions - Rockers 'n' Ballads",
	"Rock",
	9);
	Prep("You Give Me All I Need",
	"Scorpions",
	"Best Of Scorpions - Rockers 'n' Ballads",
	"Rock",
	10);
	Prep("Hey You",
	"Scorpions",
	"Best Of Scorpions - Rockers 'n' Ballads",
	"Rock",
	11);
	Prep("The Zoo",
	"Scorpions",
	"Best Of Scorpions - Rockers 'n' Ballads",
	"Rock",
	12);
	Prep("Prison Song",
	"System Of A Down",
	"Toxicity",
	"Metal",
	1);
	Prep("Needles",
	"System Of A Down",
	"Toxicity",
	"Metal",
	2);
	Prep("Deer Dance",
	"System Of A Down",
	"Toxicity",
	"Metal",
	3);
	Prep("Jet Pilot",
	"System Of A Down",
	"Toxicity",
	"Metal",
	4);
	Prep("X",
	"System Of A Down",
	"Toxicity",
	"Metal",
	5);
	Prep("Chop Suey!",
	"System Of A Down",
	"Toxicity",
	"Metal",
	6);
	Prep("Bounce",
	"System Of A Down",
	"Toxicity",
	"Metal",
	7);
	Prep("Forest",
	"System Of A Down",
	"Toxicity",
	"Metal",
	8);
	Prep("ATWA",
	"System Of A Down",
	"Toxicity",
	"Metal",
	9);
	Prep("Science",
	"System Of A Down",
	"Toxicity",
	"Metal",
	10);
	Prep("Shimmy",
	"System Of A Down",
	"Toxicity",
	"Metal",
	11);
	Prep("Toxicity",
	"System Of A Down",
	"Toxicity",
	"Metal",
	12);
	Prep("Psycho",
	"System Of A Down",
	"Toxicity",
	"Metal",
	13);
	Prep("Aerials",
	"System Of A Down",
	"Toxicity",
	"Metal",
	14);
	Prep("Animals",
	"Nickelback",
	"All The Right Reasons",
	"Alternative Metal",
	1);
	Prep("Fight for All The Wrong Reasons",
	"Nickelback",
	"All The Right Reasons",
	"Alternative Metal",
	2);
	Prep("Photograph",
	"Nickelback",
	"All The Right Reasons",
	"Alternative Metal",
	3);
	Prep("Next Contestant",
	"Nickelback",
	"All The Right Reasons",
	"Alternative Metal",
	4);
	Prep("Savin' Me",
	"Nickelback",
	"All The Right Reasons",
	"Alternative Metal",
	5);
	Prep("Far Away",
	"Nickelback",
	"All The Right Reasons",
	"Alternative Metal",
	6);
	Prep("Someone That You're With",
	"Nickelback",
	"All The Right Reasons",
	"Alternative Metal",
	7);
	Prep("Follow You Home",
	"Nickelback",
	"All The Right Reasons",
	"Alternative Metal",
	8);
	Prep("Side Of A Bullet",
	"Nickelback",
	"All The Right Reasons",
	"Alternative Metal",
	9);
	Prep("If Everyone Cared",
	"Nickelback",
	"All The Right Reasons",
	"Alternative Metal",
	10);
	Prep("Rock Star",
	"Nickelback",
	"All The Right Reasons",
	"Alternative Metal",
	11);
}