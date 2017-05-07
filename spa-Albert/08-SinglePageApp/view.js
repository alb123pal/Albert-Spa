var view = {
    display: function (data) {
        // create new data view to be displayed
        this.clear();

        var tbl = document.createElement("table");
        var tblHead = document.createElement("thead");
        var tblBody = document.createElement("tbody");

        var tr = document.createElement("tr");
        tblHead.appendChild(tr);

        var codeText = document.createTextNode("Code");
        var nameText = document.createTextNode("Name");
        var rateText = document.createTextNode("Rate");

        var code = document.createElement("td");
        code.appendChild(codeText);

        var name = document.createElement("td");
        name.appendChild(nameText);

        var text = document.createElement("td");
        text.appendChild(rateText);

        tblHead.appendChild(code);
        tblHead.appendChild(name);
        tblHead.appendChild(text);

        document.getElementById('dataview').appendChild(tblHead);
        console.log(data);

        for (var i = 0; i < data.length; i++) {
            var row = document.createElement("tr");
            tblBody.appendChild(row);

            var cell1 = document.createElement("td");
            var cell2 = document.createElement("td");
            var cell3 = document.createElement("td");

            var cell1Text = document.createTextNode(data[i].code);

            $.getJSON("http://api.nbp.pl/api/exchangerates/rates/a/usd/?format=json", function (data) {
                rate = data.rates[0].mid;
                document.getElementById('rate').value = rate;

            });

            var waluta = ($('#code').find(":selected").text());
            console.log("waluta:" + waluta);
            switch (waluta.toLocaleLowerCase()) {
                case "eur":
                    $.getJSON("http://api.nbp.pl/api/exchangerates/rates/a/eur/?format=json", function (data) {
                        rate = data.rates[0].mid;
                        document.getElementById('rate').value = rate;
                    });
                    break;

                case "usd":
                    $.getJSON("http://api.nbp.pl/api/exchangerates/rates/a/usd/?format=json", function (data) {
                        rate = data.rates[0].mid;
                        document.getElementById('rate').value = rate;
                    });
                    break;
                case "gbp":
                    $.getJSON("http://api.nbp.pl/api/exchangerates/rates/a/gbp/?format=json", function (data) {
                        rate = data.rates[0].mid;
                        document.getElementById('rate').value = rate;
                    });
                    break;
                case "chf":
                    $.getJSON("http://api.nbp.pl/api/exchangerates/rates/a/chf/?format=json", function (data) {
                        rate = data.rates[0].mid;
                        document.getElementById('rate').value = rate;
                    });
                    break;
                case "czk":
                    $.getJSON("http://api.nbp.pl/api/exchangerates/rates/a/czk/?format=json", function (data) {
                        rate = data.rates[0].mid;
                        document.getElementById('rate').value = rate;
                    });
                    break;
                case "hrk":
                    $.getJSON("http://api.nbp.pl/api/exchangerates/rates/a/hrk/?format=json", function (data) {
                        rate = data.rates[0].mid;
                        document.getElementById('rate').value = rate;
                    });
                    break;
                case "huf":
                    $.getJSON("http://api.nbp.pl/api/exchangerates/rates/a/huf/?format=json", function (data) {
                        rate = data.rates[0].mid;
                        document.getElementById('rate').value = rate;
                    });
                    break;

            }

            var cell2Text = document.createTextNode(data[i].name);
            var cell3Text = document.createTextNode(data[i].rate);

            cell1.appendChild(cell1Text);
            cell2.appendChild(cell2Text);
            cell3.appendChild(cell3Text);

            row.appendChild(cell1);
            row.appendChild(cell2);
            row.appendChild(cell3);

            tblBody.appendChild(row);


        }
        // append the <tbody> inside the <table>
        tbl.appendChild(tblHead);
        tbl.appendChild(tblBody);
        // put <table> in the <body>
        document.getElementById('dataview').appendChild(tbl);
        tbl.setAttribute("border", "4px");
        tbl.setAttribute("border", "solid");


    },
    clear: function () {
        // remove old data
        var dataView = document.getElementById('dataview');
        while (dataView.firstChild) {
            dataView.removeChild(dataView.firstChild);
        }
    },
    addCurrency: function () {
        var currency = {

            code: document.getElementById('code').value,
            rate: document.getElementById('rate').value,
            name: document.getElementById('name').value
        };
        controller.storeCurrency(currency);

    }
};
