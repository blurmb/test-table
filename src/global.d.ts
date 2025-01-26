declare module "*.scss" {
  type ClassNames = Record<string, string>;
  const classNames: ClassNames;
  export = classNames;
}
