/**
 * 두 개의 파라미터 값이 같은지 아닌지 확인하는 함수, 같으면 TRUE 아니면 FALSE
 * @param {*} value1
 * @param {*} value2
 * @returns
 */

export default function isEqualValueChecker(value1, value2) {
  return Array.isArray(value2) ? value2.includes(value1) : value1 === value2;
}
