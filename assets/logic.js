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
console.log(database);

// Saves message on form submit.
$('.btn').on('click', function (e) {
    e.preventDefault();

    trainName = $('#trainName').val().trim();
    destination = $('#destination').val().trim();
    firstTrainTime = $('#firstTrTime').val().trim();
    frequency = $('#frequency').val().trim();

    var allTableData = $('<tr id="tableRow">');
    var tableDataTrainID = $('<td id="trainID">');
    var tableDataDestination = $('<td id="dest">');
    var tableDatafirstTrainTime = $('<td id="firstTrainTime">');
    var tableDataFrequency = $('<td id="frequ">');

    tableDataTrainID.append(trainName);
    tableDataDestination.append(destination);
    tableDataFrequency.append(frequency);
    tableDatafirstTrainTime.append(firstTrainTime);

    allTableData.append(tableDataTrainID);
    allTableData.append(tableDataDestination);
    allTableData.append(tableDatafirstTrainTime);
    allTableData.append(tableDataFrequency);

    $('.tableBody').append(allTableData);

    console.log('clicked');
    console.log(trainName);
    console.log(destination);
    console.log(firstTrainTime);
    console.log(frequency);

    trainName = $('#trainName').val('');
    destination = $('#destination').val('');
    firstTrainTime = $('#firstTrTime').val('');
    frequency = $('#frequency').val('');
});

// $('.btn').on('click', function(e) {
//     e.preventDefault();

// });

// let now=moment();
// console.log(now);