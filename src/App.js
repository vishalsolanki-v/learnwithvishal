import { useEffect, useState } from "react";
import "./App.css";

const options = {
  weekday: "long",
  day: "numeric",
  hour: "numeric",
  minute: "numeric",
  second: "numeric",
};

function App() {
  const [date, setDate] = useState(new Date().toLocaleString("en-US", options));
  const [hardDayStart] = useState(
    new Date() || new Date(localStorage.getItem("startDate"))
  );
  useEffect(() => {
    localStorage.setItem("startDate", hardDayStart);
    const timer = setInterval(() => {
      const currentTime = new Date().toLocaleDateString("en-US", options);
      setDate(currentTime);
    }, 1000);

    return () => clearInterval(timer);
  }, [hardDayStart]);

  const findDateDifference = (end, start) => {
    const diifferenceinmili = end.getTime() - start.getTime();
    const daysDiffernce = Math.ceil(diifferenceinmili / (24 * 60 * 60 * 1000));
    return daysDiffernce;
  };
  const currentDay = findDateDifference(new Date(), hardDayStart);
  return (
    <>
      <div className="maindiv flex items-center backgroundPattern justify-center">
        
        <div className="clock-tower line-clamp-3 leading-normal text-center absolute bg-gradient-to-r from-slate-200 to-slate-700 bg-clip-text text-transparent text-8xl font-extrabold">
          {date}
          <br />
          DAY {currentDay} JAVASCRIPT
          <p className="">Work Hard Kid your life Depends on It</p>
        </div>
      </div>
    </>
  );
}

export default App;
