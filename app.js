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

	});

	database.ref().on("child_added", function(snapshot){
		$("#table-body").empty();
		var sv = snapshot.val();

		var table = $("#table-body");
		var newRow = table.insertRow(0)

		var nameData = $("<td>");
		nameData.html(sv.name);
		var roleData = $("<td>");
		roleData.html(sv.role);
		var startData = $("<td>");
		startData.html(sv.start);
		var rateData = $("<td>");
		rateData.html(sv.rate);

		$("#table-body").append(newRow);
	})
})