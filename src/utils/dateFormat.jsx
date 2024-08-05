export const dateToString = (date) => {
    const currDate = new Date(date);
    const year = currDate.getFullYear();
    const month = currDate.getMonth() + 1;
    const day = currDate.getDate();
    const hour = currDate.getHours();
    const min = currDate.getMinutes();
    return `${year}년 ${month}월 ${day}일 ${hour}:${min}`
}