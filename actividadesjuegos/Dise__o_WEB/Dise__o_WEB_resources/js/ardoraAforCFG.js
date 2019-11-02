//Creado con Ardora - www.webardora.net
//bajo licencia Attribution-NonCommercial-NoDerivatives 4.0 International (CC BY-NC-ND 4.0)
//para otros usos contacte con el autor
var timeAct=360; timeIni=360; timeBon=0;
var successes=0; successesMax=8; attempts=0; attemptsMax=1;
var score=0; scoreMax=8; scoreInc=1; scoreDec=0
var typeGame=0;
var tiTime=false;
var tiTimeType=1;
var tiButtonTime=true;
var textButtonTime="Comenzar";
var tiSuccesses=false;
var tiAttempts=false;
var tiScore=false;
var startTime;
var colorBack="#C5CAFC"; colorButton="#91962F"; colorText="#000000"; colorSele="#FFBA75";
var goURLNext=false; goURLRepeat=false;tiAval=false;
var scoOk=0; scoWrong=0; scoOkDo=0; scoWrongDo=0; scoMessage=""; scoPtos=10;
var fMenssage="Verdana, Geneva, sans-serif";
var fActi="Verdana, Geneva, sans-serif";
var fEnun="Verdana, Geneva, sans-serif";
var timeOnMessage=5; messageOk="Tienes buenos conocimientos"; messageTime=""; messageError="Lo siento intente de nuevo"; messageErrorG="Lo siento intente de nuevo"; messageAttempts=""; isShowMessage=false;
var urlOk=""; urlTime=""; urlError=""; urlAttempts="";
var goURLOk="_blank"; goURLTime="_blank"; goURLAttempts="_blank"; goURLError="_blank"; 
borderOk="#008000"; borderTime="#FF0000";borderError="#FF0000"; borderAttempts="#FF0000";
var wordsGame="RGlzZV9fb19XRUI"; wordsStr = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789+/=";
function giveZindex(typeElement){var valueZindex=0; capas=document.getElementsByTagName(typeElement);
for (i=0;i<capas.length;i++){if (parseInt($(capas[i]).css("z-index"),10)>valueZindex){valueZindex=parseInt($(capas[i]).css("z-index"),10);}}return valueZindex;}
var words=["RElTRdFPIFdFQg","Q09OVFJPTCBERSBWRVJTSU9ORVM","R0lUSFVC","UkVQT1NJVE9SSU8","QVRSSUJVVE9T","RVRJUVVFVEFT","Q09NQU5ET1MgQ1NT","RU5HVUFKRSBERSBNQVJDQVMgREUgSElQRVJURVhUTw","",""];imaW=["","","","","","","","","",""];queW=["Curso de la Unad","Gestión de los diversos cambios","Plataforma de desarrollo colaborativo de software","Almacenar, organizar, mantiener información digital,","Definir una propiedad de un objeto, elemento o archivo.","Marcas que se dejan en un texto ","Dotar de cualidades visuales y estéticas a una página web","Estándar que sirve de referencia del software","",""];
var auW=["","","","","","","","","",""];
var fillLetter="ABCDEFGHIJKLMNÑOPQRSTUVWXYZÁÉÍÓÚÜ "; wordsG=[]; indexG=0; actMaxWidth=550; indexWord=0; totalWord=0;
var imageW=[];questionW=[];audioW=[];profG=0; dirMedia="Dise__o_WEB_resources/media/"; textBNext="";
