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
    addItem: (
      state,
      action: PayloadAction<Omit<Company, "id" | "checked">>,
    ) => {
      state.items.push({
        ...action.payload,
        id: Date.now().toString(),
        checked: false,
      });
    },
    removeItem: (state, action: PayloadAction<string>) => {
      state.items = state.items.filter((item) => item.id !== action.payload);
    },
    toggleChecked: (state, action: PayloadAction<string>) => {
      state.items = state.items.map((item) =>
        item.id === action.payload ? { ...item, checked: !item.checked } : item,
      );
    },
    setCheckedById: (
      state,
      action: PayloadAction<{ id: string; checked: boolean }>,
    ) => {
      state.items = state.items.map((item) =>
        item.id === action.payload.id
          ? { ...item, checked: action.payload.checked }
          : item,
      );
    },
    selectAll: (state) => {
      state.items = state.items.map((item) => ({ ...item, checked: true }));
    },
    unselectAll: (state) => {
      state.items = state.items.map((item) => ({ ...item, checked: false }));
    },
    removeSelected: (state) => {
      state.items = state.items.filter((item) => !item.checked);
    },
  },
});

export const {
  addItem,
  toggleChecked,
  removeItem,
  selectAll,
  unselectAll,
  removeSelected,
  setCheckedById,
} = tableSlice.actions;
