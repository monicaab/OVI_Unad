//Creado con Ardora - www.webardora.net
//bajo licencia Attribution-NonCommercial-NoDerivatives 4.0 International (CC BY-NC-ND 4.0)
//para otros usos contacte con el autor
var timeAct=360; timeIni=360; timeBon=0;
var successes=0; successesMax=7; attempts=0; attemptsMax=2;
var score=0; scoreMax=7; scoreInc=1; scoreDec=1
var typeGame=0;
var tiTime=false;
var tiTimeType=1;
var tiButtonTime=true;
var textButtonTime="Comenzar";
var tiSuccesses=false;
var tiAttempts=true;
var tiScore=false;
var startTime;
var colorBack="#FFFDFD"; colorButton="#91962F"; colorText="#000000"; colorSele="#FF8000";
var goURLNext=false; goURLRepeat=false;tiAval=false;
var scoOk=0; scoWrong=0; scoOkDo=0; scoWrongDo=0; scoMessage=""; scoPtos=10;
var fMenssage="Verdana, Geneva, sans-serif";
var fActi="Verdana, Geneva, sans-serif";
var fResp="Verdana, Geneva, sans-serif";
var fEnun="Verdana, Geneva, sans-serif";
var timeOnMessage=5; messageOk="Muy bienn"; messageTime=""; messageError="sigue estudianto"; messageErrorG="sigue estudianto"; messageAttempts="Que mal"; isShowMessage=false;
var urlOk=""; urlTime=""; urlError=""; urlAttempts="";
var goURLOk="_blank"; goURLTime="_blank"; goURLAttempts="_blank"; goURLError="_blank"; 
borderOk="#008000"; borderTime="#FF0000";borderError="#FF0000"; borderAttempts="#FF0000";
var wordsGame="VGV0cw"; wordsStr = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789+/=";
function giveZindex(typeElement){var valueZindex=0; capas=document.getElementsByTagName(typeElement);
for (i=0;i<capas.length;i++){if (parseInt($(capas[i]).css("z-index"),10)>valueZindex){valueZindex=parseInt($(capas[i]).css("z-index"),10);}}return valueZindex;}
var tags=["¿Cual es la etiqueta para colocar un hipervinculo?","¿Cual es la etiqueta para colocar imagenes en una página web?<br>","¿Que es un repositorio?","¿Que es un header?","¿Palabra para identificar un estilo?","para que sirve la etiqueta Nav","¿Porque es un honte?"];
var answers1=["MWE","MGM","MHM","MHQ"];
var answers2=["MUlNRw","MWltZw","MGgx","MHN0eWxl"];
var answers3=["MWRlcPNzaXRvIG8gYXJjaGl2byAgcGFyYSBpbmZvcm1hY2lvbiBkaWdpdGFs","ME1hcXVpbmEgcGFyYSBhbG1hY2VuYXIgaW5mb3JtYWNpb24","MHBsYXRhZm9ybWEgZGUgZGVzYXJyb2xsbyBjb2xhYm9yYXRpdm8gZGUgc29mdHdhcmU","MEVsIHRpcG8gZXMgY29udGVuaWRvIGVuIGVsIHRpdHVsbw"];
var answers4=["MUVuY2FiZXphZG8","MGF0cnVidXRv","MGNvbnRlbmVkb3I","MGZvb3Rlcg"];
var answers5=["MUF0cmlidXRv","MEV0aXF1ZXRh","MGNvbnRyb2xhZG9yIGRlIFZlcnNpb25lcw","MGxlbmd1YWpl"];
var answers6=["MW5hZ3VldmFjaW9u","MHBpZSBkZSBwYWd1YW5v","MGNvbnRlbmVkb3I","MGVzdGlsbyBjYXNjYWRvc2lndWUgZXRyaWVuZG8"];
var answers7=["MWxlbmd1YWplIHF1ZSBkZXNjcmlhIGJhc3Rhcm50bw","MGVzdHJ1Y3R1cmEgcGFyYSB3ZWI","MGNvbWFuZG8gcXVlIGVzY3J1YW5l","MGRvY21lbnRv"];
var ans=[answers1,answers2,answers3,answers4,answers5,answers6,answers7];
var err=["Sigue estudiando","Sigue estudiando","Sique estudiando","Sigue intentando","Sique estudindo","C y eso es elaliza",""];
var ima=["","","","","","",""];
var mp4=["","","","","","",""];
var ogv=["","","","","","",""];
var indexTag=0; actualAnswers=[]; dirMedia="Tets_resources/media/";
var tiRandOrder=false;
var iT=0;var r_order=[];
