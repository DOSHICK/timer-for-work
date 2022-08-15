import React, { useState, useEffect } from "react"

function Timer(props) {
  // {timerCondition = 0 (таймер остановлен) / 1 (таймер работает)}
  let [timerCondition, setTimerCondition] = useState(0);


  let [hour, setHour] = useState(0);
  let [min, setMin] = useState(0);
  let [sec, setSec] = useState(0);

  let [hourNull, setHourNull] = useState(0)
  let [minNull, setMinNull] = useState(0)
  let [secNull, setSecNull] = useState(0)

  // add null for beautify timer
  function addNull(item, itemNull, setNull) {
    if (item < 10) {
      setNull(itemNull = "0")
    } else {
      setNull(itemNull = "")
    }
  }

  // thing to prevent overflow
  function addToNext(current, setCurrent, next, setNext) {
    setCurrent(current = 0);
    setNext(next + 1);
  }


  //
  function StartTimer() {
    useEffect(() => {
      switch (timerCondition) {
        case 1:
          if (sec >= 60) {
            addToNext(sec, setSec, min, setMin)
          } else {
            setTimeout(setSec, 1000, sec + 1);
          }

          if (min >= 60) {
            addToNext(min, setMin, hour, setHour)
          }

          addNull(sec, secNull, setSecNull)
          addNull(min, minNull, setMinNull)
          addNull(hour, hourNull, setHourNull)
          break;
        case 2:
          setHour(hour = 0)
          setMin(min = 0)
          setSec(sec = 0)
          break;

        default:
          break;
      }
    }, [sec, setSec, min, setMin]);
  }
  StartTimer()

  function buttonClickStart() {
    if (timerCondition !== 1) {
      setTimerCondition(timerCondition = 1)
      setSec(sec = sec + 1)
    }
  }
  function buttonClickStop() {
    setTimerCondition(timerCondition = 0)

  }
  function buttonClickClear() {
    setTimerCondition(timerCondition = 2)
  }

  return (
    <div>
      <span className="timer">{hourNull}{hour}:{minNull}{min}:{secNull}{sec}</span>

      <button className="button-start" onClick={buttonClickStart}>START</button>
      <button className="button-end" onClick={buttonClickStop}>STOP</button>
      <button className="button-end" onClick={buttonClickClear}>Clear</button>
    </div>
  )
}
export default Timer