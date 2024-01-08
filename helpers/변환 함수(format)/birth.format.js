import isDateChecker from "../예외처리 확인함수(checker)/시간/isDate.checker";

const error1Text = "날짜가 입력되지 않았습니다.";
const error2Text = "날짜가 유효하지 않습니다.";

/**
 * 생년월일 데이터를 넣으면, xxxx . xx . xx 로 출력이 된다.
 * ex) 1999 . 09 . 09
 * 날짜가 유효한지 아닌지 체크하는 함수를 사용한다.
 * @param {*} birthDate
 * @returns
 */

export default function birthFormat(birthDate = "", figure = ".") {
  if (birthDate.includes("-")) return birthDate; // 이미 0000-00-00의 날짜 형식이면

  if (!birthDate) return error1Text;
  const year = birthDate?.substring(0, 4);
  const month = birthDate?.substring(4, 6);
  const day = birthDate?.substring(6, 8);

  // 유효한 날짜인지 확인
  const dateCheck = new Date(`${year}-${month}-${day}`);
  if (!isDateChecker(dateCheck)) return error2Text;

  return `${year}${figure}${month}${figure}${day}`;
}
