import { useMemo, useState } from "react";
import "./board.css";
import Cell from "./Cell";

const LETTERS = [1, 2, 3, 4, 5, 6, 7, 8, 1, 2, 3, 4, 5, 6, 7, 8];

export default function Board() {
  const [prevSelectedItem, setPrevSelectedItem] = useState<number | null>(null);
  const [removeItems, setRemoveItems] = useState<number[]>([]);

  const onFlipSelect = (letter: number) => {
    if (!prevSelectedItem) {
      setPrevSelectedItem(letter);
    } else {
      if (letter === prevSelectedItem) {
        console.log("matched");
        setRemoveItems((prev) => [...prev, letter]);
        setPrevSelectedItem(null);
      } else {
        setTimeout(() => {
          setPrevSelectedItem(null);
        }, 500);
      }
    }
  };

  const shuffledLetters = useMemo(
    () => LETTERS.sort(() => Math.random() - Math.random()),
    []
  );

  console.log(shuffledLetters);

  return (
    <div className="board">
      {shuffledLetters.map((letter, idx) => (
        <Cell
          key={idx}
          id={idx}
          letter={letter}
          hide={removeItems?.includes(letter)}
          onFlipSelect={onFlipSelect}
        />
      ))}
    </div>
  );
}
