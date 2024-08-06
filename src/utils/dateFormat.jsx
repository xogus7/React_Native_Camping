export const dateToString = (date) => {
    const currDate = new Date(date);
    const year = currDate.getFullYear();
    const month = currDate.getMonth() + 1;
    const day = currDate.getDate();
    const hour = currDate.getHours().toString().length == 1 ? '0'+ currDate.getHours() : currDate.getHours();
    const min = currDate.getMinutes().toString().length == 1 ? '0' + currDate.getMinutes() : currDate.getMinutes();
    return `${year}년 ${month}월 ${day}일 ${hour}:${min}`
}

export const timeToDiffString = (date) => {
    const diff = new Date().getTime() - new Date(date).getTime();
    const milliSecond = 1000;
    const minute = 60 * milliSecond;
    const hour = 60 * minute;
    if (diff <= 59 * milliSecond) // 59초
      return `${Math.floor(diff/milliSecond)}초 전`;
    else if (diff <= 59 * minute + 59 * milliSecond) // 59분59초
      return  `${Math.floor(diff/minute)}분 전`;
    else if (diff <= 23 * hour ) // 23시간59분59초
      return  `${Math.floor(diff/hour)}시간 전`;
    else return dateToString(date);
  }