$(document).ready(function () {

	var config = {
	    apiKey: "AIzaSyCY-RzCsTkU7pWGnr4Qb0srjgbNv5wcXmo",
	    authDomain: "timesheet-teamawesome.firebaseapp.com",
	    databaseURL: "https://timesheet-teamawesome.firebaseio.com",
	    projectId: "timesheet-teamawesome",
	    storageBucket: "",
	    messagingSenderId: "241434365240"
	};
	firebase.initializeApp(config);

	var database = firebase.database()

	$("#submit-button").on("click",function(){
		var name = $("#name").val().trim();
		var role = $("#role").val().trim();
		var start = $("#start-date").val().trim();
		var rate = $("#monthly-rate").val().trim();

		database.ref().push({
			name: name,
			role: role,
			start: start,
			rate: rate
		});

		newEntry();
	});

	function newEntry() {

		var newRow = $("<tr>");
		newRow.attr("class","row");

		var nameData = $("<td>");
		nameData.html(name);
		var roleData = $("<td>");
		roleData.html(role);
		var startData = $("<td>");
		startData.html(start);
		var rateData = $("<td>");
		rateData.html(rate);


	}
})