/**
 * Created by albert on 12.04.17.
 */

$(document).ready(function () {
    $('div').append('<table></table>');
    $('table').addClass('table table-inverse');
    $("table").load("http://localhost:8080/filelist.html");

});