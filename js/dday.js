const ddayContainer = document.querySelector(".dday-container");
const ddayTeller = document.querySelector(".dday__teller");
const DAYTOMILSEC = 1000 * 60 * 60 * 24;
const HOURTOMILSEC = 1000 * 60 * 60;
const MINTOMILSEC = 1000 * 60;
const SECTOMILSEC = 1000;

const dMonth = document.querySelector(".dday__month").value;
const dday = document.querySelector(".dday__day").value;
const dYear = document.querySelector(".dday__year").value;


function getDday(event) {
  event.preventDefault();
  ddayContainer.classList.add(HIDDEN_CLASSNAME);
  const dDate = new Date(`${parseInt(dYear)}, ${parseInt(dMonth)-1}, ${parseInt(dday)}`);
  const today = new Date();
  const distance = dDate.getTime() - today.getTime();
  const daysLeft = Math.floor(distance / DAYTOMILSEC);
  const hoursLeft = Math.floor(distance % DAYTOMILSEC / HOURTOMILSEC);
  const minutesLeft = Math.floor(distance % HOURTOMILSEC / MINTOMILSEC);
  const secondsLeft = Math.floor(distance % MINTOMILSEC / SECTOMILSEC);

  ddayTeller.textContent = `IT'S JUST ${daysLeft}d ${hoursLeft}h LEFT!`;
}



ddayContainer.addEventListener("submit", getDday);
setInterval(getDday, 1000);


