export let showData = function () {
    let data = new Date();
    let dataDisplay = document.createElement('div');
    dataDisplay.innerHTML = `${data.getFullYear()}`;
    document.body.appendChild(dataDisplay);
}