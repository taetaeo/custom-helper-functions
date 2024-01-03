/**
 * 배열이 비어있는지 확인하기 위한 함수
 * @param {*} obj
 * @returns boolean
 */
export default function isEmptyObjectChecker(obj) {
  return Object.entries(obj).length === 0;
}
