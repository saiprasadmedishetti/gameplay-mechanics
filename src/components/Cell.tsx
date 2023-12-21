import { useState } from "react";

type CellProps = {
  id: number;
  letter: number;
  hide: boolean;
  onFlipSelect: (_: number) => void;
};

export default function Cell({ id, letter, hide, onFlipSelect }: CellProps) {
  const [flip, setFlip] = useState(false);

  const onCellClick = () => {
    setFlip((prev) => !prev);
    onFlipSelect(letter);
  };
  return (
    <div className="cell" key={id} onClick={onCellClick}>
      {hide ? "" : flip ? letter : "*"}
    </div>
  );
}