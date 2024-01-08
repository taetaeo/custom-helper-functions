/**
 * 이미지 사이즈 크기 제한하는 예외처리 함수
 * @param {*} file
 * @param {*} param1
 * @returns
 */
export default function imageSizeChecker(file, { maxWidth = 728, maxHeight = 453 }) {
  return new Promise((resolve, reject) => {
    const image = new Image();
    image.src = URL.createObjectURL(file);

    image.onload = function () {
      const { width, height } = image;
      if (width > maxWidth || height > maxHeight) {
        alert("이미지 크기가 제한을 초과했습니다. 다른 이미지를 선택하세요");
        reject(false); // 이미지 크기가 제한을 초과하면 Promise를 reject
      } else {
        resolve(true); // 이미지 크기가 제한 내에 있으면 Promise를 resolve
      }
    };

    image.onerror = function () {
      // 이미지 로딩 중에 에러가 발생할 경우 Promise를 reject
      reject(false);
    };
  });
}
