import React, { useEffect, useState } from "react";
import * as styles from "./CompaniesTable.module.scss";
import { useAppDispatch, useAppSelector } from "@src/store/hooks";
import {
  addItem,
  removeSelected,
  selectAll,
  unselectAll,
} from "../model/slice";
import { TableRow } from "./CompanyRow";
import { VirtualizedTable } from "./VirtualizedTable";
import { isAllChecked } from "../model/selectors";

export const CompaniesTable = () => {
  return (
    <div className={styles.table_container}>
      <div className={styles.controls_container}>
        <SelectionButtons />
        <NewCompanyForm />
      </div>
      <div className={styles.table}>
        <div className={styles.table_header}>
          <TableRow>
            <div></div>
            <div>Название</div>
            <div>Адрес</div>
          </TableRow>
        </div>
        <VirtualizedTable rowHeight={50} />
      </div>
    </div>
  );
};

const SelectionButtons = () => {
  const dispatch = useAppDispatch();
  const isAllSelected = useAppSelector(isAllChecked);
  const [text, setText] = useState("Выделить все");

  useEffect(() => {
    setText(isAllSelected ? "Отменить выделение" : "Выделить все");
  }, [isAllSelected]);

  const handleToggle = () => {
    if (isAllSelected) {
      dispatch(unselectAll());
    } else {
      dispatch(selectAll());
    }
  };

  const handleDeleteSelected = () => {
    dispatch(removeSelected());
  };

  return (
    <div className={styles.buttons_container}>
      <button onClick={handleToggle}>{text}</button>
      <button onClick={handleDeleteSelected}>Удалить выбранные</button>
    </div>
  );
};

const NewCompanyForm = () => {
  const [newCompanyName, setNewCompanyName] = useState("");
  const [newCompanyAddress, setNewCompanyAddress] = useState("");
  const dispatch = useAppDispatch();
  const handleAddCompany = () => {
    if (newCompanyName && newCompanyAddress) {
      dispatch(addItem({ name: newCompanyName, address: newCompanyAddress }));
      setNewCompanyName("");
      setNewCompanyAddress("");
    }
  };
  return (
    <div className={styles.new_company_form}>
      <input
        type="text"
        placeholder="Название компании"
        value={newCompanyName}
        onChange={(e) => setNewCompanyName(e.target.value)}
      />
      <input
        type="text"
        placeholder="Адрес компании"
        value={newCompanyAddress}
        onChange={(e) => setNewCompanyAddress(e.target.value)}
      />
      <button onClick={handleAddCompany}>Добавить</button>
    </div>
  );
};
