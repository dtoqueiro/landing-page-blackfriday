/**
 * BUTTON PREVENT DEFAULT
 */
// let btn = document.getElementById("btn-hero");

// btn?.addEventListener("click", (e) => {
//   e.preventDefault();
// });

/**
 * LÓGICA DO COUNTDOWN
 */
interface TimeDifference {
  days: number;
  hours: number;
  minutes: number;
  seconds: number;
}

function timeUntilBlackFriday(): TimeDifference {
  const currentDate = new Date();
  const blackFriday = new Date(`Nov 26 2021`);

  const diffInTime: number = blackFriday.getTime() - currentDate.getTime();

  let totalSeconds: number = Math.floor(diffInTime / 1000);
  let totalMinutes: number = Math.floor(diffInTime / (1000 * 60));
  let totalHours: number = Math.floor(diffInTime / (1000 * 60 * 60));
  let totalDays: number = Math.floor(diffInTime / (1000 * 60 * 60 * 24));

  return {
    days: totalDays,
    hours: totalHours % totalDays,
    minutes: totalMinutes % totalHours,
    seconds: totalSeconds % totalMinutes,
  };
}

function formatTimeDifference(timeDifference: TimeDifference) {
  return {
    days: timeDifference.days.toString(),
    hours: timeDifference.hours.toString().padStart(2, "0"),
    minutes: timeDifference.minutes.toString().padStart(2, "0"),
    seconds: timeDifference.seconds.toString().padStart(2, "0"),
  };
}

function addInfo(
  nodeHtml: HTMLCollectionOf<Element>,
  span: HTMLSpanElement,
  info: string
) {
  //days[0]?.removeChild(span);
  span.innerHTML = info;
  nodeHtml[0]?.prepend(span);
}

function refreshCount() {
  let diff = formatTimeDifference(timeUntilBlackFriday());
  addInfo(days, spanD, diff.days);
  addInfo(hours, spanH, diff.hours);
  addInfo(minutes, spanM, diff.minutes);
  addInfo(seconds, spanS, diff.seconds);
  setInterval(refreshCount, 1000);
}

const days = document.getElementsByClassName("day");
const hours = document.getElementsByClassName("hour");
const minutes = document.getElementsByClassName("minute");
const seconds = document.getElementsByClassName("second");

const spanD = document.createElement("span");
const spanH = document.createElement("span");
const spanM = document.createElement("span");
const spanS = document.createElement("span");

refreshCount();
/**
 * COUNTDOWN FIM
 */

/**
 * FORMULÁRIO DE EMAIL
 */
const form = document.getElementById("email-form");
const nameForm = document.getElementById("name") as HTMLInputElement | null;
const emailForm = document.getElementById("email") as HTMLInputElement | null;

const nameError = document.getElementById("name-error") as HTMLInputElement;

const emailError = document.getElementById("email-error") as HTMLInputElement;

const modal = document.getElementById("modal-success") as HTMLInputElement;

form?.addEventListener("submit", (e) => {
  e.preventDefault();
  nameError.innerText = "";
  emailError.innerText = "";
  let nome = nameForm?.value;
  let email = emailForm?.value;
  if (nome === "") {
    nameError.innerText = "O Nome é obrigatório";
  } else if (email === "") {
    emailError.innerText = "O Email é obrigatório";
  } else {
    let data = {
      nome,
      email,
    };
    let convertData = JSON.stringify(data);
    localStorage.setItem("lead", convertData);
    modal.style.display = "block";
  }
});

/**
 * Botão OK do MODAL
 */
const modalBtn = document.getElementById("btn-modal") as HTMLInputElement;

modalBtn.addEventListener("click", () => {
  modal.style.display = "none";
});
