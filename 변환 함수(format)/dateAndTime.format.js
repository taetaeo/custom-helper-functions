/**
 * 년일월과 시간의 파라미터가 입력 시, 배열의 형태로 반환해주는 포멧팅 함수
 *
 * ex) 2023-01-01 00:00:00 에서 [0]은 년도 [1]은 시간
 * @param {*} dateAndTime 시간 데이터 ex) 2023-01-01 00:00:00
 * @returns [0]는 년도 [1]은 시간
 *
 */
export default function dateAndTimeFormat(dateAndTime) {
  /** Input이 없을 때, 예외처리 */
  if (!dateAndTime) return "-";

  if (!dateAndTime.split(" ")) return dateAndTime;

  const [date, time] = dateAndTime.split(" ");
  return [date, time];
}
