  
function enviarFormDetalles(){  
    var params = $('#msform').serialize();
//        params.push({name:"ajax", value:'1'});
    $.ajax({
        type: 'POST',
        url: 'process.php',
        data: 'action=register&'+params,
        dataType: 'json',
        beforeSend: function(data) {},
        success: function(data) {
            if(data.rpta == "ok"){
//                    $("#form").fadeOut("slow");
//                    $(".hidefix").fadeOut("slow");
//                    $("#overlay").fadeIn("slow");
//                    $("#popup").fadeIn("slow");
                $("#msform").fadeOut();
                $('.terms').fadeOut();
                $(".gracias").fadeIn("slow");
                
            }else{
                alert("Email ya registrado.")
            }
        },
        error: function(data) {}
    });

};

$(document).ready(function(){
	$('input, textarea').placeholder();
    $(".submit").click(function(e){
        
            $(this).parents("form").validate({
                    rules: {
                            empresa: "required",
                            ruc: {
                                digits: true
                            },
                            nombres: "required",
                            telefono: {
                               digits: true,
                                required: true,
                            },
                            email: {
                                    required: true,
                                    email: true
                            },
                            acepto: "required"
                            // mensaje: "required",
//                            area: "required"
                    },
                    messages: {
                            nombre: "Por favor, ingrese su nombre.",
                            telefono: "Por favor, ingrese su número.",
                            
//                            area: "Por favor, seleccione el área.",
                            email: {
                                    required: "Por favor, ingrese un email v&aacute;lido.",
                                    minlength: ""
                            },
                            // mensaje: "Por favor, ingrese su mensaje.",
                    },
                    submitHandler: function() { 
                        enviarFormDetalles();
                        return false;
                     }
            })
    });

})