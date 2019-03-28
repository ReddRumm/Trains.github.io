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
moment().format();

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
    var nestedData=$('<tr id="nxtTrain">');
    var nestedDataMin=$('<td id="min">');
    var nestedDatatime=$('<td id="time">');

    tableDataTrainID.append(trainName);
    tableDataDestination.append(destination);
    tableDataFrequency.append(frequency);
    tableDatafirstTrainTime.append(firstTrainTime);

    allTableData.append(tableDataTrainID);
    allTableData.append(tableDataDestination);
    allTableData.append(tableDatafirstTrainTime);
    allTableData.append(tableDataFrequency);

    nextTrain=()=>{
        min=frequency.getMinutes();
        total=min+firstTrTime;
        console.log();
        return total;
    };
    nextTrain();


    nestedData.append(nestedDataMin);
    nestedData.append(nestedDatatime);
    allTableData.append(nestedData);

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
});

