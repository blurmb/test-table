import React, { ButtonHTMLAttributes, PropsWithChildren } from "react";
import * as styles from "./AppButton.module.scss";

export const AppButton = ({
  children,
  ...props
}: PropsWithChildren & ButtonHTMLAttributes<HTMLButtonElement>) => {
  return (
    <button className={styles.button} {...props}>
      {children}
    </button>
  );
};
