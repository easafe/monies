export let logo_small = require("../../static/image/logo_small.png");

let localDateFormat = new Intl.DateTimeFormat([], { dateStyle: 'short', hourCycle: "h23" }),
    localWeekDayFormat = new Intl.DateTimeFormat([], { weekday: 'short', hourCycle: "h23" }),
    localTimeFormat = new Intl.DateTimeFormat([], { timeStyle: 'short', hourCycle: "h23" });

export function formatTime(ms) {
    return localTimeFormat.format(new Date(ms));
}

export function formatDayOfTheWeek(ms) {
    return localWeekDayFormat.format(new Date(ms));
}

export function formatFullDate(ms) {
    return localDateFormat.format(new Date(ms));
}