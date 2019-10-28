//================= CONTADOR DE VISITANTES DO SESI/SENAI  =================
var cont1 = 0;

for(var i =0; i < localStorage.length; i++){
    var chave1 = localStorage.key(i); //pega a Key de cada Value do LocalStorage
    var dados_Recuperados1 = JSON.parse(localStorage.getItem(chave1)); //armazena variavel "dados_Recuperados" os dados de "Value" do LocalStorage
    if(dados_Recuperados1.cont1 != false){
        cont1 += 1;
    }else{
    }
    $("#cont1").empty();
    $("#cont1").append(cont1);
};

//----COMANDO AO CLICAR O BOTÃO DE SUBMIT ---------------------------
$("#btn1").on("click",function(evt){
    if($("#nome1").val() == '' || $('#turmas').val() == ''){
    }else{
        cont1 += 1;
        
        var id1 = Date.now(); 
        var nome1 = $("#nome1").val();
        var turma1 = $("#turmas").val();
        
        var dadosPessoa1 = {"cont1" : cont1, "nome1": nome1, "turma1": turma1, "cont2" : false, "nome2": false, "formação2": false, "trabalho2": false};
        localStorage.setItem("VISITANTES -" + id1, JSON.stringify(dadosPessoa1)); //adiona ao localStorage o novo valor
    }
});



//================= CONTADOR DE VISITANTES DE FORA  =================
var cont2 = 0;

for(var i =0; i < localStorage.length; i++){
    var chave2 = localStorage.key(i); //pega a Key de cada Value do LocalStorage
    var dados_Recuperados2 = JSON.parse(localStorage.getItem(chave2)); //armazena variavel "dados_Recuperados2" os dados de "Value" do LocalStorage
    if(dados_Recuperados2.cont2 != false){
        cont2 += 1;
    }else{
    }

    $("#cont2").empty();
    $("#cont2").append(cont2);
};

//----COMANDO AO CLICAR O BOTÃO DE SUBMIT ---------------------------
$("#btn2").on("click",function(evt){
    if($("#nome2").val() == '' || $("#formação").val() == '' || $("#trabalho").val() == ''){
    }else{
        cont2 += 1;
        
        var id2 = Date.now(); 
        var nome2 = $("#nome2").val();
        var formação2 = $("#formação").val();
        var trabalho2 = $("#trabalho").val();
        
        var dadosPessoa2 = {"cont1" : false, "nome1": false, "turma1": false, "cont2" : cont2, "nome2": nome2, "formação2": formação2, "trabalho2": trabalho2};
        localStorage.setItem("VISITANTES -" + id2, JSON.stringify(dadosPessoa2)); //adiona ao localStorage o novo valor
    }
});
