var config = {
    apiKey: "AIzaSyCeuHNkIttZaGFaPhRiA6aNqeeZaIwyrfk",
    authDomain: "trains-26e34.firebaseapp.com",
    databaseURL: "https://trains-26e34.firebaseio.com",
    projectId: "trains-26e34",
    storageBucket: "trains-26e34.appspot.com",
    messagingSenderId: "514624912530"
};
firebase.initializeApp(config);
var database = firebase.database();


/**
 * Saves a new post to the Firebase DB.
 */

function trainSchedule(trainId, destination, frequency, firstTrTime) {
    // A post entry.
    var postData = {
        trainId: trainId,
        destination: destination,
        frequency: frequency,
        firstTrTime: firstTrTime,
    };
    console.log(postData);
}
trainSchedule();

// Saves message on form submit.
$('.btn').on('click', function(e) {
    e.preventDefault();
    var trainName = $('trainName').val().trim();
    var destination = $('destination').val().trim();
    var firstTrainTime = $('firstTrTime').val().trim();
    var frequency = $('frequency').val().trim();

    var tableDataTrainID = $('<td id="trainID">');
    var tableDataDestination = $('<td id="dest">');
    var tableDataFrequency = $('<td id="frequ">');
    var tableDatafirstTrainTime = $('<td id="firstTrainTime">');

    tableDataTrainID.append(trainName);
    tableDataDestination.append(destination);
    tableDataFrequency.append(frequency);
    tableDatafirstTrainTime.append(firstTrainTime);

    console.log('clicked');
});