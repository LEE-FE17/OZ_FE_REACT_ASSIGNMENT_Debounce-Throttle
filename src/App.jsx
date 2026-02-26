import { useState, useRef } from "react";
import "./App.css";

function App() {
  const [debounceValue, setDebounceValue] = useState("");
  const [throttleValue, setThrottleValue] = useState("");

  const debounceTimer = useRef(null);
  const throttleTimer = useRef(null);

  // 🟢 Debounce
  const handleDebounce = (event) => {
    const value = event.target.value;

    if (debounceTimer.current) {
      clearTimeout(debounceTimer.current);
    }

    debounceTimer.current = setTimeout(() => {
      console.log("🟢 Debounce 실행:", value);
      setDebounceValue(value);
    }, 1000); // 1초 뒤 실행
  };

  // 🔵 Throttle
  const handleThrottle = (event) => {
    const value = event.target.value;

    if (throttleTimer.current) return;

    throttleTimer.current = setTimeout(() => {
      console.log("🔵 Throttle 실행:", value);
      setThrottleValue(value);
      throttleTimer.current = null;
    }, 1000); // 1초마다 실행
  };

  return (
    <div className="container">
      <h1>
        debounce와 throttle을
        <br />
        이용한 검색
      </h1>

      <div>
        <h2>Debounce</h2>
        <input
          type="text"
          placeholder="Debounce를 이용한 검색..."
          onChange={handleDebounce}
        />
        <p>결과: {debounceValue}</p>
      </div>

      <div>
        <h2>Throttle</h2>
        <input
          type="text"
          placeholder="Throttle를 이용한 검색..."
          onChange={handleThrottle}
        />
        <p>결과: {throttleValue}</p>
      </div>
    </div>
  );
}

export default App;