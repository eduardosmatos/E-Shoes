$(document).ready(function(){
   
    var cont = 0;
    numCarros = $(".thumb").length-1;
    
    function mostraCarro(idx) {
        el = $(".thumb:eq(" + idx + ")");
        img = el.attr("src");
        tit = el.attr("title");
        
        //joga na imagem grande
        $("#imgGrande img").hide();
        $("#imgGrande img").attr("src",img);
        $("#legenda").html(tit);
        $("#imgGrande img").fadeIn();
    }
    
    $(".thumb").click(function() {
        var id = $(this).index(".thumb");
        mostraCarro(id);
    });
    
    $("#flechaDir").click(function(ev) {
        ev.preventDefault();
        cont++;
        if(cont > numCarros) cont = 0;
        mostraCarro(cont);
    });
    
    $("#flechaEsq").click(function(ev) {
        ev.preventDefault();
        cont--;
        if(cont < 0) cont = numCarros;
        mostraCarro(cont);
    });
    
    $("#lupa").click(function(ev) {
        ev.preventDefault();
        img = $("#imgGrande img").attr("src");
        tit = $("#legenda").html();
        //joga no modal
        $("#detImagem").attr("src",img);
        $("#detLegenda").html(tit);
        $("#mdViewImg").modal("show");
    });
    
    $(".trocaFundo").click(function() {
        var fundo = $(this).data("fundo");
        $("body").css({
            "background-image":"url(" + fundo + ")"
        });
    });   
    
    
    $("#play").click(function(ev) {
        ev.preventDefault();
        x = setInterval(function() {
            $("#flechaDir").trigger("click");
        }, 3000);
    });
    $("#pausa").click(function(ev) {
        ev.preventDefault();
        clearInterval(x);
    });
    
    $("#play").trigger("click");
    
    $("#botao01").click(function() {
            $(".detalhe").slideUp();
        });
        $("#botao02").click(function() {
            $(".detalhe").slideDown();
        });
        /*
        $(".btEsconde").click(function() {
            idx = $(this).index(".btEsconde");
            $(".detalhe:eq(" + idx + ")").slideToggle();
        });
        */
        $(".btEsconde").click(function() {
            $(this).parent().next().slideToggle(); 
        });
      
        $(document).ready(function() {
    $("#btAdd").click(function() {
        //pegar os dados do formulário
        nome = $("#cpNome").val();
        mail = $("#cpMail").val();
        fone = $("#cpFone").val();

        //monta a linha da tabela
        bloco  = "<tr>";
        bloco += "<td>" + nome + "</td>";
        bloco += "<td>" + mail + "</td>";
        bloco += "<td>" + fone + "</td>";
        bloco += "<td><button class='btn btn-danger btn-sm btDel'><i class='fa fa-times'></i></button></td>";
        bloco += "</tr>";

        //adiciona a linha na tabela
        $("#tabNomes tbody").append(bloco);

        //limpa o formulário
        $("#form")[0].reset();
        $("#cpNome").focus();

        //contaReg();
        contaReg();
       
    });

    $(document).on("click",".btDel",function() {
        elem = $(this);
        if(confirm("Deseja realmente apagar a linha?")) {
            elem.closest("tr").remove();
            contaReg();
        }
    });


function contaReg() {
    num = $("#tabNomes tbody tr").length;
     $("#numReg").html(num);
    
}  $("#numReg").html(num);
        }
                          
});