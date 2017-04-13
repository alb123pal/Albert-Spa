/**
 * Created by albert on 13.04.17.
 */


function klikEuro() {
    $.getJSON("http://api.nbp.pl/api/exchangerates/rates/a/eur/?format=json",
        function (data) {
            var wartosc = data.rates[0].mid;
            $("#euro").append(wartosc);

    });
}

function klikUsd() {
    $.getJSON("http://api.nbp.pl/api/exchangerates/rates/a/usd/?format=json",
        function (data) {
            var wartosc = data.rates[0].mid;
            $("#usd").append(wartosc);

        });
}

function klikGbp() {
    $.getJSON("http://api.nbp.pl/api/exchangerates/rates/a/gbp/?format=json",
        function (data) {
            var wartosc = data.rates[0].mid;
            $("#gbp").append(wartosc);

        });
}

function klikChf() {
    $.getJSON("http://api.nbp.pl/api/exchangerates/rates/a/chf/?format=json",
        function (data) {
            var wartosc = data.rates[0].mid;
            $("#chf").append(wartosc);

        });
}

