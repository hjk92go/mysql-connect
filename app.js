//client 파일처럼 따로 react파일설치해서 만들어줘야함...... 깃안올라가서 이렇게 올림

import "./App.css";
import axios from "axios";
import { useEffect, useState } from "react";
function App() {
  const [data, setData] = useState([]);
  const lastArr = data.data;
  console.log(data.data);
  const getData = async () => {
    try {
      //성공시
      const response = await axios.get(
        //
        "http://localhost:3001/"
      );
      setData(response);
    } catch (error) {
      //실패시
      console.log("error");
    }
  };

  useEffect(() => {
    const id = setInterval(() => {
      getData();
    }, 1000);
  }, []);

  return (
    <div className="App">
      mysql데이터가져오기
      {data.data.length > 0 && lastArr !== undefined ? (
        <div>{data.data[lastArr.length - 1].company}</div>
      ) : (
        <div>loading</div>
      )}
    </div>
  );
}

export default App;

// const data = () => {
//   axios
//     .get("http://localhost:3001")
//     .then((res) => {
//       console.log(res);
//     })
//     .catch((err) => {
//       console.log(err);
//     });
// };
