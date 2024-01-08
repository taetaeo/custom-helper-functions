/**
 * 날짜 데이터에서 년/월/일로 변환해주는 포멧팅해주는 함수
 *
 * @param {*} date 2024-01-08
 * @param {*} option  yearSeparator: "년 ", monthSeparator: "월 ", daySeparator: "일 "
 * @returns 2024년  01월  08일
 */
export default function dateStringFormat(date, option = { yearSeparator: "년", monthSeparator: "월", daySeparator: "일" }) {
  const { yearSeparator, monthSeparator, daySeparator } = option;
  const newDate = new Date(date);

  // date 파라미터 값의 INPUT이 없을 시, 에러 핸들링
  if (isNaN(newDate)) {
    throw new Error("유효하지 않은 날짜 형식입니다.");
  }

  const year = newDate.getFullYear();
  const month = newDate.getMonth() + 1;
  const day = newDate.getDate();

  return `${year}${yearSeparator || "년"} ${month}${monthSeparator || "월"} ${day}${daySeparator || "일"}`;
}
