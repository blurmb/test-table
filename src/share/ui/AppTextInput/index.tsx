import React, { InputHTMLAttributes, PropsWithChildren } from "react";
import * as styles from "./AppTextInput.module.scss";

export const AppTextInput = ({
  children,
  className,
  ...props
}: PropsWithChildren & Omit<InputHTMLAttributes<HTMLInputElement>, "type">) => {
  return (
    <input type="text" className={styles.input + " " + className} {...props}>
      {children}
    </input>
  );
};
