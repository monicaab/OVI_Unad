//Creado con Ardora - www.webardora.net
//bajo licencia Attribution-NonCommercial-NoDerivatives 4.0 International (CC BY-NC-ND 4.0)
//para otros usos contacte con el autor
var timeAct=190; timeIni=190; timeBon=0;
var successes=0; successesMax=4; attempts=0; attemptsMax=2;
var score=0; scoreMax=4; scoreInc=1; scoreDec=1
var typeGame=0;
var tiTime=true;
var tiTimeType=1;
var tiButtonTime=true;
var textButtonTime="Comenzar";
var tiSuccesses=true;
var tiAttempts=true;
var tiScore=true;
var startTime;
var colorBack="#FFFDFD"; colorButton="#91962F"; colorText="#000000"; colorSele="#FF8000";
var goURLNext=false; goURLRepeat=false;tiAval=false;
var scoOk=0; scoWrong=0; scoOkDo=0; scoWrongDo=0; scoMessage=""; scoPtos=10;
var fMenssage="Verdana, Geneva, sans-serif";
var fActi="Verdana, Geneva, sans-serif";
var fEnun="Verdana, Geneva, sans-serif";
var timeOnMessage=5; messageOk="A unido Correctamente "; messageTime="El tiempo finalizo"; messageError="Se a equivocado"; messageErrorG="Se a equivocado"; messageAttempts=""; isShowMessage=false;
var urlOk=""; urlTime=""; urlError=""; urlAttempts="";
var goURLOk="_blank"; goURLTime="_blank"; goURLAttempts="_blank"; goURLError="_blank"; 
borderOk="#008000"; borderTime="#FF0000";borderError="#FF0000"; borderAttempts="#FF0000";
var wordsGame="cmVsYWNpb25hcg"; wordsStr = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789+/=";
function giveZindex(typeElement){var valueZindex=0; capas=document.getElementsByTagName(typeElement);
for (i=0;i<capas.length;i++){if (parseInt($(capas[i]).css("z-index"),10)>valueZindex){valueZindex=parseInt($(capas[i]).css("z-index"),10);}}return valueZindex;}
var cL=["<p>Sistema que registra los cambios realizados en un archivo o conjunto de archivos a lo largo del tiempo</p>","<p>Plataforma de desarrollo colaborativo de software para alojar proyectos utilizando el sistema de control de versiones Git</p>","<p>Lenguaje que se utiliza para el desarrollo de páginas de Internet</p>","<p>Hojas en cascada</p>"];
var iL=["","","",""];
var order=["","","",""]; orderR=["","","",""];indexR=0; indexL=0;
var cR=["","","",""]; ansRL=["MA","MQ","Mg","Mw"];
var iR=["<div  align='center'><img src='relacionar_resources/media/up_git.jpg'></div>","<div  align='center'><img src='relacionar_resources/media/github-avenger2.png'></div>","<div  align='center'><img src='relacionar_resources/media/html5_logo.png'></div>","<div  align='center'><img src='relacionar_resources/media/css3_logo.png'></div>"];
var auR=[1,2,3,4];
