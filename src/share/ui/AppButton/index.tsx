import React, { ButtonHTMLAttributes, PropsWithChildren } from "react";
import * as styles from "./AppButton.module.scss";

export const AppButton = ({
  children,
  className,
  ...props
}: PropsWithChildren & ButtonHTMLAttributes<HTMLButtonElement>) => {
  return (
    <button className={styles.button + " " + className} {...props}>
      {children}
    </button>
  );
};
