/**
 * 후치사와 같은 한국어 조사를 붙여주는 포멧팅 함수
 *
 * 받침이 있을 경우 -을 ex) Input 수박 / Output = 수박을
 * 받침이 없을 경우 -를 ex) Input 사과 / Output = 사과를
 * @param {*} string
 * @returns string + -을/를
 */

export default function postPositionFormat(string) {
  //string의 마지막 음절의 유니코드(UTF-16)
  const charCode = string.charCodeAt(string.length - 1);

  //유니코드의 한글 범위 내에서 해당 코드의 받침 확인
  const consonantCode = (charCode - 44032) % 28;

  if (consonantCode === 0) {
    //0이면 받침 없음 -> 를
    return `${string}가`;
  }
  //1이상이면 받침 있음 -> 을
  return `${string}이`;
}
