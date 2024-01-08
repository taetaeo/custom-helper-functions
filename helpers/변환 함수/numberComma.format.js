/**
 * 숫자 천 단위마다 콤마(,)찍는 포멧팅해주는 함수
 *
 * 숫자타입 값이 입력시, 천 단위마다 콤마를 통해 분리를 해준다.
 * ex) Input : 10000 / output : 10,000
 * @param {*} number
 *
 */

const onlyNumber = /\B(?<!\.\d*)(?=(\d{3})+(?!\d))/g; // 1000단위를 체크하는 유효성 검사

export default function numberCommaFormat(number) {
  return number.toString().replace(onlyNumber, ",");
}
