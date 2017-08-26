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
		
		var sv = snapshot.val();

		var id = snapshot.key;		

		var newRow = $("<tr>");
		newRow.attr("value", id);
		var monthsWorked = 10;
		var earnedSoFar = monthsWorked * sv.rate;

		var nameData = $("<td>");
		nameData.html(sv.name);
		newRow.append(nameData);

		var roleData = $("<td>");
		roleData.html(sv.role);
		newRow.append(roleData);

		var startData = $("<td>");
		startData.html(sv.start);
		newRow.append(startData);

		var monthsWorkedData = $("<td>");
		monthsWorkedData.html(monthsWorked);
		newRow.append(monthsWorkedData);

		var rateData = $("<td>");
		rateData.html(sv.rate);
		newRow.append(rateData);

		var earnedSoFarData = $("<td>");
		earnedSoFarData.html(earnedSoFar);
		newRow.append(earnedSoFarData);

		var deleteButton = $("<button>");
		deleteButton.attr("class", "deleteButton");
		deleteButton.html("X");
		deleteButton.attr("value", id);

		$("#table-body").append(newRow);
	})

	$(document).on("click", ".deleteButton", function(){
		
	})
})