function UpdateClock(){

    const current = new Date();
    let hours = current.getHours();
    const meridean = hours >= 12 ? "PM" :"AM";
    hours = hours % 12 || 12;
    hours = hours.toString().padStart(2, 0)
    const mins = current.getMinutes().toString().padStart(2, 0);
    const sec = current.getSeconds().toString().padStart(2, 0);
    const timeString = `${hours}:${mins}:${sec} ${meridean}`;

    document.getElementById("clock").textContent = timeString;

}

UpdateClock();

setInterval(UpdateClock, 1000);