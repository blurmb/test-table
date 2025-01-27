import { Company } from "@src/entities/Company";
import { createSlice, PayloadAction } from "@reduxjs/toolkit";

import data from "@src/data/database.json";

export interface TableState {
  items: Company[];
}

const initialState: TableState = {
  items: data.map((item) => ({ ...item, checked: false })),
};

export const tableSlice = createSlice({
  name: "table",
  initialState,
  reducers: {
    addItem: (state, action: PayloadAction<Omit<Company, "id">>) => {
      state.items.push({ ...action.payload, id: Date.now().toString() });
    },
    removeItem: (state, action: PayloadAction<string>) => {
      state.items = state.items.filter((item) => item.id !== action.payload);
    },
    toggleChecked: (state, action: PayloadAction<string>) => {
      state.items = state.items.map((item) =>
        item.id === action.payload ? { ...item, checked: !item.checked } : item,
      );
    },
    selectAll: (state) => {
      state.items = state.items.map((item) => ({ ...item, checked: true }));
    },
    unselectAll: (state) => {
      state.items = state.items.map((item) => ({ ...item, checked: false }));
    },
  },
});

export const { addItem, toggleChecked, removeItem, selectAll, unselectAll } =
  tableSlice.actions;
