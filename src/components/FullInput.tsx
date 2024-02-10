import { useState, type ChangeEvent } from "react";
import { Button } from "./Button";

type FullInputPropsType = {
  nameButton: string
  addMessage: (text: string) => void
}

export const FullInput = (props: FullInputPropsType) => {
  let [text, setText] = useState("");

  const onChangeInputHandler = (event: ChangeEvent<HTMLInputElement>) => {
    setText(event.currentTarget.value);
  }

  const onClickButtonHandler = () => {
    props.addMessage(text);
    setText("");
  }

  return (
    <div>
      <input value={text} onChange={onChangeInputHandler} />
      <Button name={props.nameButton} callback={onClickButtonHandler} />
    </div>
  );
}
