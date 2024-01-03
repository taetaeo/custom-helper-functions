/**
 *
 * @param {} date
 * @returns 입력했을 때 NaN이 나오면 false 날짜가 나오면 true
 */
export default function isDateChecker(date) {
  if (isNaN(date.getTime())) return false;
  return true;
}
