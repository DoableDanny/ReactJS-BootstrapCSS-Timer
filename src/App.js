import { useState, useRef, useEffect } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faPlay, faPause, faUndo } from "@fortawesome/free-solid-svg-icons";
import TimeController from "./components/TimeController";
import "./App.css";

function App() {
  const [secondsLeft, setSecondsLeft] = useState(900);
  const [timerOn, setTimerOn] = useState(false);

  // useRef allows us to carry a mutable object between renders so it doesn't get re-initialized between renders.
  let interval = useRef();

  // When paly/pause btn clicked, run useEffect callback
  useEffect(() => {
    if (timerOn) {
      startTimer();
    } else stopTimer();
    // componentUnmount
    return () => {
      if (clearInterval.current) clearInterval(interval.current);
    };
  }, [timerOn]);

  const startTimer = () => {
    interval.current = setInterval(() => {
      setSecondsLeft((secs) => {
        if (secs > 0) return secs - 1;
        else {
          clearInterval(interval.current);
          return 0;
        }
      });
    }, 1000);
  };

  const stopTimer = () => {
    clearInterval(interval.current);
  };

  const reset = () => {
    clearInterval(interval.current);
    setSecondsLeft(900);
    setTimerOn(false);
  };

  const incrementHours = () => {
    setSecondsLeft((secs) => secs + 3600);
  };

  const decrementHours = () => {
    if (secondsLeft > 3600) setSecondsLeft((secs) => secs - 3600);
  };

  const incrementMins = () => {
    setSecondsLeft((secs) => secs + 300);
  };

  const decrementMins = () => {
    if (secondsLeft > 300) setSecondsLeft((secs) => secs - 300);
  };

  const clockify = () => {
    let hours = Math.floor(secondsLeft / 60 / 60);
    let mins = Math.floor((secondsLeft / 60) % 60);
    let seconds = Math.floor(secondsLeft % 60);

    let clockifiedHours = hours < 10 ? `0${hours}` : hours;
    let clockifiedMins = mins < 10 ? `0${mins}` : mins;
    let clockifiedSeconds = seconds < 10 ? `0${seconds}` : seconds;

    return {
      clockifiedHours,
      clockifiedMins,
      clockifiedSeconds,
    };
  };

  return (
    <div className="App container">
      <div className="row d-flex justify-content-center">
        <TimeController
          id="Hours"
          increment={incrementHours}
          decrement={decrementHours}
        />
        <TimeController
          id="Mins"
          increment={incrementMins}
          decrement={decrementMins}
        />
      </div>

      <div id="clock">
        <div className="row bg-dark rounded p-3 my-5 text-light d-flex justify-content-center">
          <div className="col-xs-4 m-3">{clockify().clockifiedHours} Hours</div>
          <div className="col-xs-4 m-3">{clockify().clockifiedMins} Mins</div>
          <div className="col-xs-4 m-3">
            {clockify().clockifiedSeconds} Secs
          </div>
        </div>
      </div>

      <div className="row py-4 d-flex justify-content-center">
        <div className="col-8">
          <button
            className="btn btn-success btn-block"
            onClick={() => setTimerOn(!timerOn)}
          >
            <FontAwesomeIcon icon={faPlay} /> <FontAwesomeIcon icon={faPause} />
          </button>
        </div>
        <div className="col-4">
          <button className="btn btn-success btn-block" onClick={() => reset()}>
            <FontAwesomeIcon icon={faUndo} />
          </button>
        </div>
      </div>
    </div>
  );
}

export default App;
