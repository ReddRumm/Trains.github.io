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

function trainSchedule(trainId, destination, firstTrTime, frequency) {
    // *A post entry.
    var postData = {
        trainId: trainId,
        destination: destination,
        firstTrTime: firstTrTime,
        frequency: frequency,
        // *nextTrain: nxtTrain,
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

// !I can not get this is produce the currect time.
// !I will come back to this. 
// !function addMinutes(date, minutes) {
//     !return new Date(date.getTime() + minutes * 60000);
// !};

// *Saves infomation on form submit.
$('.btn').on('click', function (e) {
    e.preventDefault();

    var trainName = $('#trainName').val().trim();
    var destination = $('#destination').val().trim();
    var firstTrainTime = $('#firstTrTime').val().trim();
    var frequency = $('#frequency').val().trim();

    trainSchedule(trainName, destination, firstTrainTime, frequency);

    // ?var nxtTrain = addMinutes(firstTrainTime, frequency);

    var allTableData = $('<tr id="tableRow">');
    var tableDataTrainID = $('<td id="trainID">');
    var tableDataDestination = $('<td id="dest">');
    var tableDatafirstTrainTime = $('<td id="firstTrainTime">');
    var tableDataFrequency = $('<td id="frequ">');
    // ?var tableDataNxtTrain = $('<td id="nxtTrain">');

    tableDataTrainID.append(trainName);
    tableDataDestination.append(destination);
    tableDatafirstTrainTime.append(firstTrainTime);
    tableDataFrequency.append(frequency);
    // ?tableDataNxtTrain.append(nxtTrain);

    allTableData.append(tableDataTrainID);
    allTableData.append(tableDataDestination);
    allTableData.append(tableDatafirstTrainTime);
    allTableData.append(tableDataFrequency);
    // ?allTableData.append(tableDataNxtTrain);

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
    // ?console.log(nxtTrain);
});