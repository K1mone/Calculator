import clsx from "clsx";
import { useState } from "react";
import Buttons from "../components/Buttons";


type Operator = "+" | "-" | "x" | "÷" | null;

const main = clsx(
  "bg-slate-900 w-full max-w-90 aspect-9/16 ",
  "flex flex-col items-center justify-start",
  "rounded-3xl shadow-xl p-6 mx-auto mt-8"
)

export default function Home() {
  
  const [display, setDisplay] = useState("0");
// eslint-disable-next-line @typescript-eslint/no-unused-vars
  const [firstValue, setFirstValue] = useState<string | null>(null);
// eslint-disable-next-line @typescript-eslint/no-unused-vars
  const [operator, setOperator] = useState<Operator>(null);
// eslint-disable-next-line @typescript-eslint/no-unused-vars
  const [waitingForSecond, setWaitingForSecond] = useState(false);
  const [isResult, setIsResult] = useState(false);


  const handleNumber = (num: string) => {
    if (display === "0" || isResult) {
      // если только что был результат или дисплей "0" → начинаем новое число
      setDisplay(num);
      setIsResult(false);
    } else {
      setDisplay(display + num);
    }
  };


  const handleOperator = (op: Operator) => {
    if (isResult) {
      // если был результат, используем его как первый операнд
      setDisplay(display + op);
      setIsResult(false);
    } else {
      // обычная логика: добавляем оператор
      const lastChar = display.slice(-1);
      if (["+", "-", "x", "÷"].includes(lastChar)) {
        setDisplay(display.slice(0, -1) + op);
      } else {
        setDisplay(display + op);
      }
    }
  };



  const handleEquals = () => {
    try {
      let currentOperator: Operator | null = null;
      let currentNumber = "";
      let total = 0;

      for (const char of display) {
        if (["+", "-", "x", "÷"].includes(char)) {
          if (currentOperator) {
            total = compute(total, Number(currentNumber), currentOperator);
          } else {
            total = Number(currentNumber);
          }
          currentOperator = char as Operator;
          currentNumber = "";
        } else {
          currentNumber += char;
        }
      }
      if (currentOperator) {
        total = compute(total, Number(currentNumber), currentOperator);
      }

      setDisplay(String(total));
      setIsResult(true); // отмечаем, что display это результат
    } catch {
      setDisplay("Error");
      setIsResult(true);
    }
  };


  function compute(a: number, b: number, op: Operator) {
    switch(op) {
      case "+": return a + b;
      case "-": return a - b;
      case "x": return a * b;
      case "÷": return b !== 0 ? a / b : 0;
      default: return b;
    }
  }


  const handleClear = () => {
    setDisplay("0");
    setFirstValue(null);
    setOperator(null);
    setWaitingForSecond(false);
  }

  const handlePlusMinus = () => {
    setDisplay(String(Number(display) * -1));
  };

  const handlePercent = () => {
    setDisplay(String(Number(display) / 100));
  };

  const handleDot = () => {
    if (!display.includes(".")) setDisplay(display + ".");
  };

  const handleDelete = () => {
    if (display.length === 1) {
      setDisplay("0");
    } else {
      setDisplay(display.slice(0, -1));
    }
  };

  return (
    <div className={main}>
      <div className="w-full flex items-center justify-end mb-4">
        <button>
          <img src="./history.png" alt="history" draggable="false" className="history w-5 cursor-pointer select-none invert"/>
        </button>
      </div>

      <div className="result w-full text-white text-4xl flex items-end justify-end mb-6 pt-18 select-none">
        {display}
      </div>

      <Buttons
        onNumber={handleNumber}
        onOperator={handleOperator}
        onEquals={handleEquals}
        onClear={handleClear}
        onPlusMinus={handlePlusMinus}
        onPercent={handlePercent}
        onDot={handleDot}
        onDelete={handleDelete}
      />
    </div>
  )
}