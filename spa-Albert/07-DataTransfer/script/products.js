/**
 * Created by albert on 14.04.17.
 */



$(document).ready(function() {

    $("#przycisk").click(function(event){
        $.get(
            "result.php",
            { name: "Zara" },
            function(data) {
                $('#info').html(data);
            }
        );
    });

});

