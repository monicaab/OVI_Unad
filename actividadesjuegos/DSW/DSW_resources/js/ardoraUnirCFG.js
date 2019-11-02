//Creado con Ardora - www.webardora.net
//bajo licencia Attribution-NonCommercial-NoDerivatives 4.0 International (CC BY-NC-ND 4.0)
//para otros usos contacte con el autor
var timeAct=130; timeIni=130; timeBon=0;
var successes=0; successesMax=20; attempts=0; attemptsMax=3;
var score=0; scoreMax=1; scoreInc=1; scoreDec=1
var typeGame=0;
var tiTime=true;
var tiTimeType=1;
var tiButtonTime=true;
var textButtonTime="Comenzar";
var tiSuccesses=true;
var tiAttempts=true;
var tiScore=true;
var startTime;
var colorBack="#FFFDFD"; colorButton="#34928F"; colorText="#000000"; colorSele="#5FDD22";
var goURLNext=false; goURLRepeat=false;tiAval=false;
var scoOk=0; scoWrong=0; scoOkDo=1; scoWrongDo=0; scoMessage=""; scoPtos=5;
var fMenssage="Verdana, Geneva, sans-serif";
var fActi="Verdana, Geneva, sans-serif";
var fEnun="Verdana, Geneva, sans-serif";
var timeOnMessage=5; messageOk="LO FELICITO HA GANADO"; messageTime="LO SIENTO SE TERMINO EL TIEMPO"; messageError="INTENTA DE NUEVO"; messageErrorG="INTENTA DE NUEVO"; messageAttempts="LO SIENTO A ACCEDIDO EL LIMITE DE INTENTOS"; isShowMessage=false;
var urlOk=""; urlTime=""; urlError=""; urlAttempts="";
var goURLOk="_blank"; goURLTime="_blank"; goURLAttempts="_blank"; goURLError="_blank"; 
borderOk="#3FC7C0"; borderTime="#FF0000";borderError="#FF0000"; borderAttempts="#FF0000";
var wordsGame="RFNX"; wordsStr = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789+/=";
function giveZindex(typeElement){var valueZindex=0; capas=document.getElementsByTagName(typeElement);
for (i=0;i<capas.length;i++){if (parseInt($(capas[i]).css("z-index"),10)>valueZindex){valueZindex=parseInt($(capas[i]).css("z-index"),10);}}return valueZindex;}
var joinPar=[["U0NW", "U2lzdGVtYQ"],["U2lzdGVtYQ", "cXVl"],["cXVl", "cmVnaXN0cmE"],["cmVnaXN0cmE", "Y2FtYmlvcw"],["R2l0", "Q29taWVuem8gZGU"],["Q29taWVuem8gZGU", "ZGVzdHJ1Y2Npb24"],["ZGVzdHJ1Y2Npb24", "Y3JlYXRpdmEgeQ"],["Y3JlYXRpdmEgeQ", "Z3JhbiBwb2xlbWljYQ"],["TmF2", "Q29tYW5kbw"],["Q29tYW5kbw", "cXVlIHNl"],["cXVlIHNl", "ZXNjcmliZSBkZW50cm8gZGVs"],["ZXNjcmliZSBkZW50cm8gZGVs", "Ym9ieQ"],["SFRNTA", "RXN0cnVjdHVyYSBxdWU"],["RXN0cnVjdHVyYSBxdWU", "cHJlc2VudGEgZWw"],["cHJlc2VudGEgZWw", "Y29udGVuaWRvIHBhcmE"],["Y29udGVuaWRvIHBhcmE", "d2Vi"],["Q1NT", "RGVzY3JpYmUgbGE"],["RGVzY3JpYmUgbGE", "cHJlc2VudGFjaW9uIGRl"],["cHJlc2VudGFjaW9uIGRl", "ZG9jdW1lbnRvcw"],["ZG9jdW1lbnRvcw", "SFRNTCBvICBYTUw"]];
var c=[[3,7],[7,3],[3,8],[8,7],[3,11],[11,11],[11,10],[10,13],[3,7],[7,6],[6,18],[18,4],[4,14],[14,11],[11,14],[14,3],[3,11],[11,15],[15,10],[10,11]];
var con1=["SCV","Git","Nav","HTML","CSS"];
var con2=["Sistema","Comienzo de","Comando","Estructura que","Describe la"];
var con3=["que","destruccion","que se","presenta el","presentacion de"];
var con4=["registra","creativa y","escribe dentro del","contenido para","documentos"];
var con5=["cambios","gran polemica","boby","web","HTML o  XML"];
var sel1=""; join1=[]; join2=[];
