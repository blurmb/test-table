import React, { memo, PropsWithChildren, useCallback, useRef } from "react";
import { useDispatch } from "react-redux";
import { setCheckedById, toggleChecked } from "../model/slice";
import { useAppSelector } from "@src/store/hooks";
import { getCompanyById } from "../model/selectors";

import * as styles from "./CompanyRow.module.scss";

interface CompanyRowProps {
  companyId: string;
}

export const CompanyRow = memo(({ companyId }: CompanyRowProps) => {
  const dispatch = useDispatch();

  const company = useAppSelector(getCompanyById(companyId));
  if (!company) {
    throw new Error(`Company with id ${companyId} not found`);
  }

  const handleCheckboxChange = useCallback(() => {
    dispatch(
      setCheckedById({
        id: company.id,
        checked: !company.checked,
      }),
    );
  }, [company]);

  const checkboxRef = useRef<HTMLInputElement>(null);

  return (
    <TableRow>
      <div onClick={() => checkboxRef.current?.click()}>
        <input
          ref={checkboxRef}
          type="checkbox"
          checked={company.checked}
          onChange={handleCheckboxChange}
        />
      </div>
      <div>{company.name}</div>
      <div>{company.address}</div>
    </TableRow>
  );
});

export const TableRow = ({ children }: PropsWithChildren) => {
  return <div className={styles.table_row}>{children}</div>;
};
