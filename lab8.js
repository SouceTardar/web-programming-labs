function showData() {
    let out = document.getElementById('current-data');
    let today = new Date();
    out.innerHTML = 'Дата и время для русской локали: ' + today.toLocaleString('eu-US') + '<p>' + 'Дата и время для американской локали: ' + today.toLocaleString('eu-US') + '</p>' + '<p>' + 'Дата и время для британской локали: ' + today.toLocaleString('eu-GB') + '</p>' + '<p>' + 'Дата и время для египской локали: ' + today.toLocaleString('ar-EG') + '</p>' + '<p>' + 'Дата и время для украинской локали: ' + today.toLocaleString('uk-UK') + '</p>' 

}