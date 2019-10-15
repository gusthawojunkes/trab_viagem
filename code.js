//-----------   CONTADOR DE VISITANTES DO SESI/SENAI  ------------------
var string1 = localStorage.getItem("Contador_1");                        //capta o conteudo do localStorage
var int1 = Number(string1);                                               //converte para numeral
$("#cont1").append(int1);                                                //atualiza a tag h2(contador na tela)
var cont1 = 0 + int1;                                                     //adiciona ao contador

$("#btn1").on("click",function(evt){
    if($("#nome1").val() == '' || $('#turmas').val() == ''){
    }else{
        cont1 += 1;
        $("#cont1").empty();                                                //limpa a tag h2
        $("#cont1").append(cont1);                                           //adiona à tag h2
        localStorage.setItem("Contador_1", cont1);                           //adiona ao localStorage o novo valor
    }
});

//-----------   CONTADOR  DE VISITANTES DE FORA  -----------------------
var string2 = localStorage.getItem("Contador_2");
var int2 = Number(string2);
$("#cont2").append(int2);
var cont2 = 0 + int2;

$("#btn2").on("click",function(evt){
    if($("#nome2").val() == '' || $("#formação").val() == '' || $("#trabalho").val() == ''){
    }else{
        cont2 += 1;
        $("#cont2").empty();
        $("#cont2").append(cont2);
        localStorage.setItem("Contador_2", cont2);
    }
});

