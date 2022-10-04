import { Box, Button, Typography } from "@mui/material";
import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";

const JspracOne = () => {
  // 객체나 배열 같은 자료구조를 사용하면 여러 개의 값을 하나로 그룹화해서 하나의 값처럼 사용할 수 있다.
  let user = { id: 1, name: "Lee" };

  let users = [
    { id: 1, name: "Lee" },
    { id: 2, name: "Kim" },
  ];
  console.log(user, users);
  console.log(`1 + 2 = ${1 + 2}`); // 큰따옴표
  console.log("1 + 2 = ${1 + 2}"); // 백틱 (ES6)

  // typeof ""; // -> "string"
  // typeof 1; // -> "number"
  // typeof NaN; // -> "number"
  // typeof true; // -> "boolean"
  // typeof undefined; // -> "undefined"
  // typeof Symbol(); // -> "symbol"
  // typeof null; // -> "object"
  // typeof []; // -> "object"
  // typeof {}; // -> "object"
  // typeof new Date(); // -> "object"
  // typeof /test/gi; // -> "object"
  // typeof function () {}; // -> "function"

  let x;

  // 할당 연산자는 변수 값이 변하는 부수 효과가 있다.
  // 이는 x 변수를 사용하는 다른 코드에 영향을 준다.
  x = 1;
  console.log(x); // 1

  // 증가/감소 연산자(++/--)는 피연산자의 값을 변경하는 부수 효과가 있다.
  // 피연산자 x의 값이 재할당되어 변경된다. 이는 x 변수를 사용하는 다른 코드에 영향을 준다.
  x++;
  console.log(x); // 2

  const y = 2;

  function foo(a) {
    let x = 3;
    const y = 4;

    function bar(b) {
      const z = 5;
      console.log(a + b + x + y + z);
    }
    bar(10); // ← 호출 직전
  }

  foo(20);

  let o = { a: 1 };

  // delete 연산자는 객체의 프로퍼티를 삭제하는 부수 효과가 있다.
  // 이는 o 객체를 사용하는 다른 코드에 영향을 준다.
  delete o.a;
  console.log(o); // {}

  let navigate = useNavigate();

  const onClickBackToMain = () => {
    navigate(`/`);
  };

  const [data, setData] = useState();

  const get = (url) => {
    const xhr = new XMLHttpRequest();
    xhr.open("GET", url);
    xhr.send();

    xhr.onload = () => {
      if (xhr.status === 200) {
        // 서버의 응답을 콘솔에 출력한다.
        console.log(JSON.parse(xhr.response));
        setData(JSON.parse(xhr.response));
      } else {
        console.error(`${xhr.status} ${xhr.statusText}`);
      }
    };
  };

  useEffect(() => {
    get(`https://jsonplaceholder.typicode.com/posts`);
  }, []);

  return (
    <Box>
      <div>Js practice in clg</div>
      <Button onClick={onClickBackToMain}>back to main</Button>
      <ul>
        {data &&
          data.map((contents, idx) => (
            <Box key={idx}>
              {contents.title}
              {contents.body}
              <Typography>
                ------------------------------------------------------------------------------------
              </Typography>
            </Box>
          ))}
      </ul>
    </Box>
  );
};

export default JspracOne;
