var model = {
		getData: function () {return this.storage; },
		addData: function (data) {this.storage.push(data); },
		delData: function (code) {},
		storage: [] // array of objects {code, rate, name}
	};
