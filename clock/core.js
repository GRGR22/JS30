
  const secondHand = document.querySelectorAll('.second-hand');
  const minsHand = document.querySelectorAll('.min-hand');
  const hourHandLocal = document.querySelector('.hour-hand-Local');
  const hourHandMoscow = document.querySelector('.hour-hand-Moscow');
  const hourHandMinsk = document.querySelector('.hour-hand-Minsk');
  const hourHandVladivostok = document.querySelector('.hour-hand-Vladivostok');
  const hourHandAstana = document.querySelector('.hour-hand-Astana');
  const extClock = document.querySelector('.inner__clock_block__wrapp__extended-clock');
  
  function setDate() {
    const now = new Date();

    const seconds = now.getSeconds();
    
    let secondsDegrees = (seconds * 6) + 90;
    
    for (let elem of secondHand) {
        elem.style.transform = `rotate(${secondsDegrees}deg)`;
      }
      
    const mins = now.getMinutes();
    const minsDegrees = (mins *6) + (seconds*.1) + 90;
    for (let elem of minsHand) {
        elem.style.transform = `rotate(${minsDegrees}deg)`;
      }   
    let optionsWeekday = { weekday: 'long'};
    let optionsMonth = { month: 'long'};
    const UTChour = now.getUTCHours();
    const Localhour = now.getHours();
    const date = now.getDate();
    const weekday = new Intl.DateTimeFormat('ru-RU', optionsWeekday).format(now);
    const month = new Intl.DateTimeFormat('ru-RU', optionsMonth).format(now);;
    const year = now.getFullYear();
    const localHourDegrees = (Localhour * 30) + (mins*.5) + 90;
    const hourDegrees = (UTChour * 30) + (mins*.5) + 90;
    
    extClock.textContent = `${Localhour}:${mins}:${seconds} ${weekday}, ${date} ${month} ${year}`;
    hourHandLocal.style.transform = `rotate(${localHourDegrees}deg)`;
    hourHandMoscow.style.transform = `rotate(${hourDegrees+90}deg)`;
    hourHandMinsk.style.transform = `rotate(${hourDegrees+90}deg)`;
    hourHandVladivostok.style.transform = `rotate(${hourDegrees+300}deg)`;
    hourHandAstana.style.transform = `rotate(${hourDegrees+180}deg)`;
  }

  setInterval(setDate, 1000);

  setDate();