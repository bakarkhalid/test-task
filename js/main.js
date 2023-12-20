function updateClock() {
    const now = new Date;
    const hours = now.getHours() % 12;
    const minute = now.getMinutes();
    const getHourHand = document.getElementById('hour-hand');
    const getminuteHand =  document.getElementById('minute-hand');
    const hourdeg = parseFloat((hours * 30) + (0.5 * minute));
    const minutdeg = parseFloat((minute * 6) + (0.1 * now.getSeconds()));
    console.log(minutdeg);
    
    getHourHand.style.transform = `rotate(${hourdeg}deg)`;
    getminuteHand.style.transform = `rotate(${minutdeg}deg)`;
}

function startClock() {
    updateClock();
    setInterval(updateClock, 1000);
}

startClock();