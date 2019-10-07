//-----------   CONTADOR DE VISITANTES DO SESI/SENAI  ------------------

var string = localStorage.getItem("Contador_1");    //capta o conteudo do localStorage
var int = Number(string);   //converte para numeral
$("#cont1").append(int);    //atualiza a tag h2(contador na tela)
var cont = 0 + int; //adiciona ao contador


$("#btn1").on("click",function(evt){
    cont += 1
    $("#cont1").empty();    //limpa a tag h2
    $("#cont1").append(cont);    //adiona à tag h2
    localStorage.setItem("Contador_1", cont);    //adiona ao localStorage o novo valor
});

//-----------   CONTADOR  DE VISITANTES DE FORA  -----------------------
var string1 = localStorage.getItem("Contador_2");
var int1 = Number(string1);
$("#cont2").append(int1);
var cont1 = 0 + int1;

$("#btn2").on("click",function(evt){
    cont1 += 1
    $("#cont2").empty();
    $("#cont2").append(cont1);
    localStorage.setItem("Contador_2", cont1);
});
