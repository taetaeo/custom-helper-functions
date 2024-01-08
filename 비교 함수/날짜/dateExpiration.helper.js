/**
 * 시간을 비교하기 위한, 헬퍼 함수
 * - 비교할 시간보다 크다면 true
 * - 비교할 시간보다 작다면 false
 *
 * @param {*} compareToDate
 * @returns
 */
export default function dateExpirationHelper(compareToDate) {
  try {
    let compareDate = new Date(compareToDate);
    let currentDate = new Date();

    if (isNaN(compareDate)) throw new Error("올바른 날짜 형식이 아닙니다.");

    return currentDate > compareDate;
  } catch (error) {
    console.error("날짜를 처리하는 동안 오류가 발생했습니다:", error.message);
    return false;
  }
}
