const onlyPhone = /[^0-9]/g;

/**
 *
 * 숫자 입력시 단위수 별로 대시케이스(-)를 붙여주는 함수
 *
 * ex) input : 01012345678 / output 010-1234-5678
 *
 * @param {*} phoneNumber
 * @returns XXX-XXX-XXXX or XXX-XXXX-XXXX
 *
 */

export default function telNumberFormat(phoneNumber) {
  if (!phoneNumber) return "연락처 정보가 없습니다."; // 에러 핸들링
  return phoneNumber.replace(onlyPhone, `$1-$2-$3`);
}
