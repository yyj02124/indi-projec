import React from "react";

const JSAPIprac = () => {
  const promiseGet = (url) => {
    return new Promise((resolve, reject) => {
      const xhr = new XMLHttpRequest();
      xhr.open("GET", url);
      xhr.send();

      xhr.onload = () => {
        if (xhr.status === 200) {
          // 성공적으로 응답을 전달받으면 resolve 함수를 호출한다.
          resolve(JSON.parse(xhr.response));
        } else {
          // 에러 처리를 위해 reject 함수를 호출한다.
          reject(new Error(xhr.status));
        }
      };
    });
  };

  // promiseGet 함수는 프로미스를 반환한다.
  promiseGet("https://jsonplaceholder.typicode.com/posts/1")
    .then((res) => console.log(res))
    .catch((err) => console.error(err))
    .finally(() => console.log("Bye!"));

  const wrongUrl = "https://jsonplaceholder.typicode.com/XXX/1";

  // 부적절한 URL이 지정되었기 때문에 에러가 발생한다.
  promiseGet(wrongUrl)
    .then((res) => console.log(res))
    .catch((err) => console.error(err)); // Error: 404

  const requestData1 = () => new Promise((resolve) => setTimeout(() => resolve(1), 3000));
  const requestData2 = () => new Promise((resolve) => setTimeout(() => resolve(2), 2000));
  const requestData3 = () => new Promise((resolve) => setTimeout(() => resolve(3), 1000));

  // 세 개의 비동기 처리를 순차적으로 처리
  const res = [];
  requestData1()
    .then((data) => {
      res.push(data);
      return requestData2();
    })
    .then((data) => {
      res.push(data);
      return requestData3();
    })
    .then((data) => {
      res.push(data);
      console.log(res); // [1, 2, 3] ⇒ 약 6초 소요
    })
    .catch(console.error);

  return (
    <>
      <Box>JSAPIprac</Box>
    </>
  );
};

export default JSAPIprac;
