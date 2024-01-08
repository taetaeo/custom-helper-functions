/**
 * 시간 데이터를 받으면, 시 분 초로 표출해주는 함수
 *  ex)  00:00:00 -> 00시 00분 00초
 *
 * @param {*} tiem
 * @returns
 */
export default function timeGuideFormat(time) {
  const [hour, minute, seconds] = time.split(":");

  if (!hour && !minute && !seconds) return "올바른 시간 형식이 아닙니다. ";

  if (typeof seconds === "undefined" && typeof minute === "undefined") return `${hour}시`;

  if (typeof seconds === "undefined") return `${hour}시 ${minute}분`;

  return `${hour}시 ${minute}분 ${seconds} 초`;
}
