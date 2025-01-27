import { AppButton } from "@src/share/ui/AppButton";
import { AppTextInput } from "@src/share/ui/AppTextInput";
import React, { useEffect } from "react";
import { useState } from "react";
import * as styles from "./ModifiableField.module.scss";

interface ModifiableFieldProps {
  text: string;
  onChange: (text: string) => void;
}

export const ModifiableField = ({ text, onChange }: ModifiableFieldProps) => {
  const [isChanging, setIsChanging] = useState(false);
  const [newText, setNewText] = useState(text);

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
          size="small"
          value={newText}
          onChange={handleTextChange}
        />
        <AppButton size="small" className={styles.child} onClick={handleSave}>
          Save
        </AppButton>
        <AppButton
          size="small"
          variant="danger"
          className={styles.child}
          onClick={handleCancel}
        >
          Cancel
        </AppButton>
      </div>
    );
  }
  return <div onClick={handleTextClick}>{text}</div>;
};
