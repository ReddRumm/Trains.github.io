var database = firebase.database();
function trainSchedule(trainId, destination, firstTrTime, frequency) {
    // A post entry.
    var postData = {
        trainId: trainId,
        destination: destination,
        firstTrTime: firstTrTime,
        frequency: frequency,
    };
    console.log(postData);
}

// I can not get this is produce the currect time.
// I will come back to this. 
function addMinutes(date, minutes) {
    return new Date(date.getTime() + minutes*60000);
}

// Saves message on form submit.
$('.btn').on('click', function (e) {
    e.preventDefault();

    var trainName = $('#trainName').val().trim();
    var destination = $('#destination').val().trim();
    var firstTrainTime = $('#firstTrTime').val().trim();
    var frequency = $('#frequency').val().trim();

    var nxtTrain=addMinutes(firstTrainTime, frequency);

    var allTableData = $('<tr id="tableRow">');
    var tableDataTrainID = $('<td id="trainID">');
    var tableDataDestination = $('<td id="dest">');
    var tableDatafirstTrainTime = $('<td id="firstTrainTime">');
    var tableDataFrequency = $('<td id="frequ">');
    var tableDataNxtTrain=$('<td id="nxtTrain">');

    tableDataTrainID.append(trainName);
    tableDataDestination.append(destination);
    tableDatafirstTrainTime.append(firstTrainTime);
    tableDataFrequency.append(frequency);
    tableDataNxtTrain.append(nxtTrain);

    allTableData.append(tableDataTrainID);
    allTableData.append(tableDataDestination);
    allTableData.append(tableDatafirstTrainTime);
    allTableData.append(tableDataFrequency);
    allTableData.append(tableDataNxtTrain);

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

