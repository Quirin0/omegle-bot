const sleep = (milliseconds) => {
    return new Promise(resolve => setTimeout(resolve, milliseconds))
}

async function enviar() {
    var exitBtn = document.querySelector('.disconnectbtn');
    var text = document.querySelector('.chatmsg');
    var sendBtn = document.querySelector('.sendbtn');
    const array = ['coloque textos aqui', 'coloque textos aqui 2'];
    console.log(typeof(array));

    var i = 0;
    while (i < array.length) {
        text.value = array[i];
        sendBtn.click();
        i++
    }
    await sleep(2000);
    exitBtn.click();
    exitBtn.click();
    exitBtn.click();
}
setInterval(enviar, 4000);