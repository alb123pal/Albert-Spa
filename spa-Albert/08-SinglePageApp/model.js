var model = {
		getData: function () {return this.storage; },
		addData: function (data) {
			this.storage.push(data);
			localStorage.clear();
			localStorage.setItem('waluty', JSON.stringify(this.storage));

			//add to web sql database
            var db = openDatabase('waluty', '2.0,', 'Test', 3*1024*1024);
            var msg;

            db.transaction(function (tx) {
                tx.executeSql('CREATE TABLE IF NOT EXISTS WALUTY (storage)');
                tx.executeSql('INSERT INTO WALUTY (storage) VALUES (?'), [this.storage];
                msg = 'Log message created and row inserted.';
                console.log(msg);
            });


			},
		delData: function (code) {},
		storage: [] // array of objects {code, rate, name}
	};
