import { RootState } from "@src/store";

export const getCompanies = (state: RootState) => state.table.items;

export const getCompanyById = (id: string) => (state: RootState) =>
  state.table.items.find((item) => item.id === id);

export const getCompanyByIndex = (index: number) => (state: RootState) =>
  state.table.items[index];

export const isAllChecked = (state: RootState) =>
  state.table.items.length && state.table.items.every((item) => item.checked);
