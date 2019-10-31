//Creado con Ardora - www.webardora.net
//bajo licencia Attribution-NonCommercial-NoDerivatives 4.0 International (CC BY-NC-ND 4.0)
//para otros usos contacte con el autor
var timeAct=360; timeIni=360; timeBon=1;
var score=0; scoreMax=1; scoreInc=1; scoreDec=0
var successes=0; successesMax=1; attempts=1; attemptsMax=1;
var tiTime=true;
var tiTimeType=1;
var tiButtonTime=true;
var textButtonTime="Comenzar";
var startTime; tiSuccesses=false; tiAttempts=false; tiScore=false;
typeGame=0;
var colorBack="#FFFDFD"; colorButton="#09BDBD"; colorText="#000000"; colorSele="#C111EE";
var goURLNext=false; goURLRepeat=false;tiAval=false;
var scoOk=0; scoWrong=1; scoOkDo=0; scoWrongDo=0; scoMessage="HA FALLADO"; scoPtos=10;
var fMenssage="Verdana, Geneva, sans-serif";
var fActi="Verdana, Geneva, sans-serif";
var fEnun="Verdana, Geneva, sans-serif";
var timeOnMessage=5; messageOk="A Encontrado todas las palabras "; messageTime="Lo siento el tiempo termino"; isShowMessage=false;
var urlOk=""; urlTime="";
var goURLOk="_blank"; goURLTime="_blank"; 
var borderOk="#37E81E"; borderTime="#FF0000"; borderAttempts="#FF0000";borderError="#FF0000";
var imaSel=0; texSel=0;
var board=[]; var xAnswer=5; answer=[]; rows=6; cols=10; xKey=-1; yKey=-1; animationX=[]; animationY=[]; animationPosX=[]; animationPosY=[]; animationLetter=[];
var words=["RVNUUlVDVFVSQVNFTUFOVElDQQ","Q09NQU5ET1NDU1M","TEVOR1VBSkVT","QVRSSUJVVE8","RVRJUVVFVEFT","U0VMRUNDSU9O","QVJUSUNMRQ","SEVBREVS","RElTRdFP","R0lUSFVC","Rk9PVEVS","QVNJREU","SFRNTA","V0VC","TkFW"];
var c=[19,11,9,8,9,9,7,6,6,6,6,5,4,3,3];
var answers=[]; letters=[]; indexLetters=0; xSel=-1; ySel=-1; iLetter=-1; jLetter=-1;
var wordsGame="c29wYV9kZV9sZXRyYXM"; wordsStr = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789+/=";
function giveZindex(typeElement){var valueZindex=0; capas=document.getElementsByTagName(typeElement);
for (i=0;i<capas.length;i++){if (parseInt($(capas[i]).css("z-index"),10)>valueZindex){valueZindex=parseInt($(capas[i]).css("z-index"),10);}}return valueZindex;}
var numCols=25; numRows=25; sizeCell=20;
var direction=["HD","VD","VI"];
var boardGame=[[".",".",".",".",".",".",".",".",".",".",".",".",".",".",".",".",".",".",".",".",".",".",".",".","."],[".",".",".",".",".",".",".",".",".",".",".",".",".",".",".",".",".",".",".",".",".",".",".",".","."],[".",".",".",".",".",".",".",".",".",".",".",".",".",".",".",".",".",".",".",".",".",".",".",".","."],[".",".",".",".",".",".",".",".",".",".",".",".",".",".",".",".",".",".",".",".",".",".",".",".","."],[".",".",".",".",".",".",".",".",".",".",".",".",".",".",".",".",".",".",".",".",".",".",".",".","."],[".",".",".",".",".",".",".",".",".",".",".",".",".",".",".",".",".",".",".",".",".",".",".",".","."],[".",".",".",".",".",".",".",".",".",".",".",".",".",".",".",".",".",".",".",".",".",".",".",".","."],[".",".",".",".",".",".",".",".",".",".",".",".",".",".",".",".",".",".",".",".",".",".",".",".","."],[".",".",".",".",".",".",".",".",".",".",".",".",".",".",".",".",".",".",".",".",".",".",".",".","."],[".",".",".",".",".",".",".",".",".",".",".",".",".",".",".",".",".",".",".",".",".",".",".",".","."],[".",".",".",".",".",".",".",".",".",".",".",".",".",".",".",".",".",".",".",".",".",".",".",".","."],[".",".",".",".",".",".",".",".",".",".",".",".",".",".",".",".",".",".",".",".",".",".",".",".","."],[".",".",".",".",".",".",".",".",".",".",".",".",".",".",".",".",".",".",".",".",".",".",".",".","."],[".",".",".",".",".",".",".",".",".",".",".",".",".",".",".",".",".",".",".",".",".",".",".",".","."],[".",".",".",".",".",".",".",".",".",".",".",".",".",".",".",".",".",".",".",".",".",".",".",".","."],[".",".",".",".",".",".",".",".",".",".",".",".",".",".",".",".",".",".",".",".",".",".",".",".","."],[".",".",".",".",".",".",".",".",".",".",".",".",".",".",".",".",".",".",".",".",".",".",".",".","."],[".",".",".",".",".",".",".",".",".",".",".",".",".",".",".",".",".",".",".",".",".",".",".",".","."],[".",".",".",".",".",".",".",".",".",".",".",".",".",".",".",".",".",".",".",".",".",".",".",".","."],[".",".",".",".",".",".",".",".",".",".",".",".",".",".",".",".",".",".",".",".",".",".",".",".","."],[".",".",".",".",".",".",".",".",".",".",".",".",".",".",".",".",".",".",".",".",".",".",".",".","."],[".",".",".",".",".",".",".",".",".",".",".",".",".",".",".",".",".",".",".",".",".",".",".",".","."],[".",".",".",".",".",".",".",".",".",".",".",".",".",".",".",".",".",".",".",".",".",".",".",".","."],[".",".",".",".",".",".",".",".",".",".",".",".",".",".",".",".",".",".",".",".",".",".",".",".","."],[".",".",".",".",".",".",".",".",".",".",".",".",".",".",".",".",".",".",".",".",".",".",".",".","."]];
var solved1X=[];solved1Y=[];solved2X=[];solved2Y=[];paintSolved=["N","N","N","N","N","N","N","N","N","N","N","N","N","N","N"];x1=[];y1=[];x2=[];y2=[];
var fillLetter="ABCDEFGHIJKLMNÑOPQRSTUVWXYZ";
