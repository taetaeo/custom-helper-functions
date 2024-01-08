/**
 * 핸드폰 번호 유효성 확인하는 함수
 *
 * 숫자이외의 문자가 입력시 공백처리를 하는 함수
 * @param {*} input
 * @returns Typeof Number
 */
export default function onlyNumberValidate(input) {
  return input.replace(/[^0-9]/g, "");
}
