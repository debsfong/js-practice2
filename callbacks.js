class Clock {
  constructor() {
    const date = new Date();
    this.hours = date.getHours();
    this.minutes = date.getMinutes();
    this.seconds = date.getSeconds();
    this.printTime();
    // 1. Create a Date object.
    // 2. Store the hours, minutes, and seconds.
    // 3. Call printTime.
    // 4. Schedule the tick at 1 second intervals.
  }

  printTime() {
    function appendZero(time) {
      if (time >= 10) return `${time}`;
      else return `0${time}`;
    }
    var hh = appendZero(this.hours);
    var mm = appendZero(this.minutes);
    var ss = appendZero(this.seconds);


    console.log(`${hh}:${mm}:${ss}`);
    // Format the time in HH:MM:SS
    // Use console.log to print it.
  }

  _tick() {

      this.seconds++;
      if (this.seconds >= 60){
        this.seconds = this.seconds%60;
        this.minutes++;
      }

      if (this.minutes >= 60){
        this.minutes = this.minutes%60;
        this.hours++;
      }

      if (this.hours >= 24){
        this.minutes = this.minutes%24;
      }

      this.printTime();
      // 1. Increment the time by one second.
      // 2. Call printTime.
  }

}

// const clock = new Clock();
// setInterval(function() { clock._tick() }, 1000);
