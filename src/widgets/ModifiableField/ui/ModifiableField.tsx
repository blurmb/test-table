import { AppButton } from "@src/share/ui/AppButton";
import { AppTextInput } from "@src/share/ui/AppTextInput";
import React, { useEffect, useRef } from "react";
import { useState } from "react";
import * as styles from "./ModifiableField.module.scss";

interface ModifiableFieldProps {
  text: string;
  onChange: (text: string) => void;
}

export const ModifiableField = ({ text, onChange }: ModifiableFieldProps) => {
  const [isChanging, setIsChanging] = useState(false);
  const [newText, setNewText] = useState(text);
  const inputRef = useRef<HTMLInputElement>(null);

  useEffect(() => {
    if (isChanging && inputRef.current) {
      inputRef.current.focus();
    }
  }, [isChanging]);
  useEffect(() => {
    setIsChanging(false);
    setNewText(text);
  }, [text]);
  const handleTextClick = () => {
    setIsChanging(true);
  };
  const handleTextChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setNewText(e.target.value);
  };
  const handleSave = () => {
    onChange(newText);
    setIsChanging(false);
  };
  const handleCancel = () => {
    setIsChanging(false);
    setNewText(text);
  };
  if (isChanging) {
    return (
      <div className={styles.wrapper}>
        <AppTextInput
          className={styles.child}
          ref={inputRef}
          size="small"
          value={newText}
          onChange={handleTextChange}
        />
        <AppButton size="small" className={styles.child} onClick={handleSave}>
          Сохранить
        </AppButton>
        <AppButton
          size="small"
          variant="danger"
          className={styles.child}
          onClick={handleCancel}
        >
          Отменить
        </AppButton>
      </div>
    );
  }
  return <div onClick={handleTextClick}>{text}</div>;
};
