"use strict";
/**
 * BUTTON PREVENT DEFAULT
 */
let btn = document.getElementById("btn-hero");
btn === null || btn === void 0 ? void 0 : btn.addEventListener("click", (e) => {
    e.preventDefault();
});
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
