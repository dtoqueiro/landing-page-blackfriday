"use strict";
/**
 * BUTTON PREVENT DEFAULT
 */
// let btn = document.getElementById("btn-hero");
function timeUntilBlackFriday() {
    const currentDate = new Date();
    const blackFriday = new Date(`Nov 26 2021`);
    const diffInTime = blackFriday.getTime() - currentDate.getTime();
    let totalSeconds = Math.floor(diffInTime / 1000);
    let totalMinutes = Math.floor(diffInTime / (1000 * 60));
    let totalHours = Math.floor(diffInTime / (1000 * 60 * 60));
    let totalDays = Math.floor(diffInTime / (1000 * 60 * 60 * 24));
    return {
        days: totalDays,
        hours: totalHours % totalDays,
        minutes: totalMinutes % totalHours,
        seconds: totalSeconds % totalMinutes,
    };
}
function formatTimeDifference(timeDifference) {
    return {
        days: timeDifference.days.toString(),
        hours: timeDifference.hours.toString().padStart(2, "0"),
        minutes: timeDifference.minutes.toString().padStart(2, "0"),
        seconds: timeDifference.seconds.toString().padStart(2, "0"),
    };
}
function addInfo(nodeHtml, span, info) {
    var _a;
    //days[0]?.removeChild(span);
    span.innerHTML = info;
    (_a = nodeHtml[0]) === null || _a === void 0 ? void 0 : _a.prepend(span);
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
const nameForm = document.getElementById("name");
const emailForm = document.getElementById("email");
const nameError = document.getElementById("name-error");
const emailError = document.getElementById("email-error");
const modal = document.getElementById("modal-success");
form === null || form === void 0 ? void 0 : form.addEventListener("submit", (e) => {
    e.preventDefault();
    nameError.innerText = "";
    emailError.innerText = "";
    let nome = nameForm === null || nameForm === void 0 ? void 0 : nameForm.value;
    let email = emailForm === null || emailForm === void 0 ? void 0 : emailForm.value;
    if (nome === "") {
        nameError.innerText = "O Nome é obrigatório";
    }
    else if (email === "") {
        emailError.innerText = "O Email é obrigatório";
    }
    else {
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
const modalBtn = document.getElementById("btn-modal");
modalBtn.addEventListener("click", () => {
    modal.style.display = "none";
});
