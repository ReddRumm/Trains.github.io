// *Initialize Firebase
// *Make sure that you also have purmissions set to 'true' in firebase
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

function trainSchedule(trainId, dest, firstTrTime, freq, comingTrain) {
    // *A post entry.
    var postData = {
        trainId: trainId,
        destination: dest,
        firstTrTime: firstTrTime,
        frequency: freq,
        nextTrain: comingTrain
    };

    // *Get a key for a new Post.
    var newPostKey = firebase.database().ref().child('posts').push().key;

    // *Write the new post's data simultaneously in the posts list and the user's post list.
    var updates = {};
    updates['/posts/' + newPostKey] = postData;
    updates['/user-posts/' + trainId + '/' + newPostKey] = postData;

    console.log(postData);
    return firebase.database().ref().update(updates);
}


// *Saves infomation on form submit.
$('.btn').on('click', function (e) {
    e.preventDefault();

    var trainName = $('#trainName').val().trim();
    var destination = $('#destination').val().trim();
    var firstTrainTime = $('#firstTrTime').val().trim();
    var frequency = $('#frequency').val().trim();
    var f = moment({
        minute: parseInt($('#frequency').val().trim())
    });
    var nxtTrain = f._i.minute;

    function startTimer(duration, display) {
        var timer = duration,
            minutes, seconds;
        setInterval(function () {
            minutes = parseInt(timer / 60, 10);
            seconds = parseInt(timer % 60, 10);

            minutes = minutes < 10 ? "0" + minutes : minutes;
            seconds = seconds < 10 ? "0" + seconds : seconds;

            display.text(minutes + ":" + seconds);

            if (--timer < 0) {
                timer = duration;
            }
        }, 1000);
    }

    jQuery(function ($) {
        frequency = 60 * nxtTrain,
            display = $('#nextTrain');
        startTimer(frequency, display);
    });

    startTimer(frequency, nxtTrain);

    trainSchedule(trainName, destination, firstTrainTime, frequency, nxtTrain);

    var allTableData = $('<tr id="tableRow">');
    var tableDataTrainID = $('<td id="trainID">');
    var tableDataDestination = $('<td id="dest">');
    var tableDatafirstTrainTime = $('<td id="firstTrainTime">');
    var tableDataFrequency = $('<td id="frequ">');
    var tableDataNextTrain = $('<td id="nextTrain">');

    tableDataTrainID.append(trainName);
    tableDataDestination.append(destination);
    tableDatafirstTrainTime.append(firstTrainTime);
    tableDataFrequency.append(frequency);
    tableDataNextTrain.append(nxtTrain);

    allTableData.append(tableDataTrainID);
    allTableData.append(tableDataDestination);
    allTableData.append(tableDatafirstTrainTime);
    allTableData.append(tableDataFrequency);
    allTableData.append(tableDataNextTrain);

    $('.tableBody').append(allTableData);

    trainName = $('#trainName').val('');
    destination = $('#destination').val('');
    firstTrainTime = $('#firstTrTime').val('');
    frequency = $('#frequency').val('');


    console.log('clicked');
    console.log(trainName);
    console.log(destination);
    console.log(firstTrainTime);
    console.log(frequency);
    console.log(nxtTrain);
});