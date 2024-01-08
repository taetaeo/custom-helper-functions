import isDateChecker from "../예외처리 확인함수(checker)/시간/isDate.checker";

/**
 * isDateChecker 함수
 * 
    function isDateChecker(date) {
      if (isNaN(date.getTime())) return false;
      return true;
    }
  *
 */

const error1Text = "날짜가 입력되지 않았습니다.";
const error2Text = "날짜가 유효하지 않습니다.";

/**
 * 년월일 데이터를 대시케이스 또는 .을 통해서 분리를 해주는 포멧팅 함수
 * ex) 1999 . 09 . 09 ( xxxx . xx . xx 로 출력이 된다.)
 * 날짜가 유효한지 아닌지 체크하는 함수를 사용한다.
 * @param {*} dateType
 * @returns
 */

export default function yearMonthDayTypeFormat(dateType = "", figure = ".") {
  if (dateType.includes("-")) return dateType; // 이미 0000-00-00의 날짜 형식이면

  if (!dateType) return error1Text;
  const year = dateType?.substring(0, 4);
  const month = dateType?.substring(4, 6);
  const day = dateType?.substring(6, 8);

  // 유효한 날짜인지 확인
  // 데이터가 없거나 잘못된 형식일 경우, 오류 메세지를 통한, 예외처리
  const dateCheck = new Date(`${year}-${month}-${day}`);
  if (!isDateChecker(dateCheck)) return error2Text;

  return `${year}${figure}${month}${figure}${day}`;
}
