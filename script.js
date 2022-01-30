const result = document.getElementById('result');

function getNumber() {
    const iptod = document.getElementById('ipt__od');
    const iptdo = document.getElementById('ipt__do');
    let odvalue = iptod.value;
    let dovalue = iptdo.value;
    function getRandomNumber(min, max) {
        min = Math.ceil(min);
        max = Math.floor(max);
        return Math.floor(Math.random() * (max - min + 1)) + min;
    }
    let number = getRandomNumber(odvalue,dovalue);
    result.innerHTML = number;
}