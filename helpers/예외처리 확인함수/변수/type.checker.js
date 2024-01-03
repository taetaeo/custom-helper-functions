/**
 * Props에 대해서 타입이 제대로 들어 왔는지 확인하기 위한 타입 체커 함수입니다.
 * 최종 배포 전에는 삭제할 예정입니다.
 * @param {*} checkName 타입을 확인할 Props's name
 * @param {*} checkProps 타입을 확인할 Props's value
 * @param {*} checkValues 타입을 확인할 Props
 * @returns Boolean
 */

function typeChecker(checkName, checkProps, checkValues) {
  if (!checkValues.includes(checkProps)) {
    console.warn(`${checkName}가 유효하지 않습니다.: '${checkProps}'. ${checkValues.join(", ")}중에 하나를 선택해주세요.`);
    return false;
  }
  return true;
}
export default typeChecker;
