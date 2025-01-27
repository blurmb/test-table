import React, { memo, PropsWithChildren, useCallback, useRef } from "react";
import { useDispatch } from "react-redux";
import { setCheckedById, setData } from "../model/slice";
import { useAppSelector } from "@src/store/hooks";
import { getCompanyById } from "../model/selectors";
import { ModifiableField } from "@src/widgets/ModifiableField";
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

  const handleNameChange = useCallback(
    (text: string) => {
      dispatch(
        setData({
          id: company.id,
          name: text,
        }),
      );
    },
    [company],
  );
  const handleAddressChange = useCallback(
    (text: string) => {
      dispatch(
        setData({
          id: company.id,
          address: text,
        }),
      );
    },
    [company],
  );

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
      <ModifiableField text={company.name} onChange={handleNameChange} />
      <ModifiableField text={company.address} onChange={handleAddressChange} />
    </TableRow>
  );
});

export const TableRow = ({ children }: PropsWithChildren) => {
  return <div className={styles.table_row}>{children}</div>;
};
