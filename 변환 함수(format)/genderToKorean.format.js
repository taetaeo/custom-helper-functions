/**
 * 성별을 바꿔주는 남성 또는 여성으로 변환해주는 함수
 *
 * ex) input = M / output = 남자
 * @param {*} gender
 * @returns
 */
export default function genderFormat(gender) {
  return gender === "M" ? "남자" : gender === "W" ? "여자" : gender;
}
