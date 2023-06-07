function showData() {
    let out = document.getElementById('current-data');
    let today = new Date();
    out.innerHTML = 'Дата и время для русской локали: ' + today.toLocaleString('eu-US') + '<p>' + 'Дата и время для американской локали: ' + today.toLocaleString('eu-US') + '</p>' + '<p>' + 'Дата и время для британской локали: ' + today.toLocaleString('eu-GB') + '</p>' + '<p>' + 'Дата и время для египской локали: ' + today.toLocaleString('ar-EG') + '</p>' + '<p>' + 'Дата и время для украинской локали: ' + today.toLocaleString('uk-UK') + '</p>' 
}

function showDataCount(data) {
    let birthdaycount = document.getElementById('birthdaycount')
    let today = new Date();
    let inputDate = document.querySelector('input[type=date]');
    let birthday = new Date(inputDate.value);
    let daysCount = (today - birthday)/1000/60/60/24;
    daysCount = Math.floor(daysCount)
    birthdaycount.innerHTML = ' Количество дней с даты рождния: ' + daysCount
}
function reset(data) {
    let inputDate = document.querySelector('input[type=date]').value = ' '
    birthdaycount.innerHTML = ''
}