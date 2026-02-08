import clsx from "clsx";

interface ButtonsProps {
  onNumber: (num: string) => void;
  onOperator: (op: '+' | '-' | 'x' | '÷') => void;
  onEquals: () => void;
  onClear: () => void;
  onPlusMinus: () => void;
  onPercent: () => void;
  onDot: () => void;
  onDelete: () => void;
}

const buttonClasses = clsx(
  "flex items-center justify-center",
  "rounded-full text-white text-3xl w-18 h-18",
  "select-none cursor-pointer"
);

const buttonGray = clsx(
  buttonClasses,
  "bg-gray-500 active:scale-110 active:bg-gray-400 transition duration-100"
);

const buttonZinc = clsx(
  buttonClasses,
  "bg-zinc-700 active:scale-110 active:bg-zinc-600 transition duration-100"
);

const buttonOrange = clsx(
  buttonClasses,
  "bg-orange-400 active:scale-110 active:bg-orange-300 transition duration-100"
);

export default function Buttons({
  onNumber,
  onOperator,
  onEquals,
  onClear,
  onPlusMinus,
  onPercent,
  onDot,
  onDelete
}: ButtonsProps) {
  return (
    <div className="grid grid-cols-4 gap-4 w-full">

      {/* Row 1 */}
      <button className={`delete ${buttonGray}`} onClick={onDelete}>
        <img src="/delete.png" alt="delete" draggable="false" className="delete w-10 h-10 invert pr-0.5"/>
      </button>
      <button className={`reset ${buttonGray}`} onClick={onClear}>AC</button>
      <button className={`percent ${buttonGray}`} onClick={onPercent}>%</button>
      <button className={`division ${buttonOrange}`} onClick={() => onOperator("÷")}>÷</button>

      {/* Row 2 */}
      <button className={`but7 ${buttonZinc}`} onClick={() => onNumber("7")}>7</button>
      <button className={`but8 ${buttonZinc}`} onClick={() => onNumber("8")}>8</button>
      <button className={`but9 ${buttonZinc}`} onClick={() => onNumber("9")}>9</button>
      <button className={`multiply ${buttonOrange}`} onClick={() => onOperator("x")}>x</button>

      {/* Row 3 */}
      <button className={`but4 ${buttonZinc}`} onClick={() => onNumber("4")}>4</button>
      <button className={`but5 ${buttonZinc}`} onClick={() => onNumber("5")}>5</button>
      <button className={`but6 ${buttonZinc}`} onClick={() => onNumber("6")}>6</button>
      <button className={`minus ${buttonOrange}`} onClick={() => onOperator("-")}>-</button>

      {/* Row 4 */}
      <button className={`but1 ${buttonZinc}`} onClick={() => onNumber("1")}>1</button>
      <button className={`but2 ${buttonZinc}`} onClick={() => onNumber("2")}>2</button>
      <button className={`but3 ${buttonZinc}`} onClick={() => onNumber("3")}>3</button>
      <button className={`plus ${buttonOrange}`} onClick={() => onOperator("+")}>+</button>

      {/* Row 5 */}
      <button className={`plus-minus ${buttonZinc}`} onClick={onPlusMinus}>±</button>
      <button className={`but0 ${buttonZinc}`} onClick={() => onNumber("0")}>0</button>
      <button className={`comma ${buttonZinc}`} onClick={onDot}>.</button>
      <button className={`equals ${buttonOrange}`} onClick={onEquals}>=</button>

    </div>
  )
}
