import React from "react";
import { AutoSizer, WindowScroller } from "react-virtualized";
import List, { ListRowRenderer } from "react-virtualized/dist/es/List";
import { CompanyRow } from "./CompanyRow";
import { useAppSelector } from "@src/store/hooks";
import { getCompanies } from "../model/selectors";

interface VirtualizedTableProps {
  rowHeight: number;
}
export const VirtualizedTable = ({ rowHeight }: VirtualizedTableProps) => {
  const companies = useAppSelector(getCompanies);
  const rowCount = companies.length;
  const rowRenderer: ListRowRenderer = ({ index, key, style }) => {
    const company = companies[index];

    return (
      <div key={key} style={style}>
        <CompanyRow companyId={company.id} />
      </div>
    );
  };

  return (
    <div>
      <WindowScroller>
        {({ height, isScrolling, onChildScroll, scrollTop }) => (
          <AutoSizer disableHeight>
            {({ width }) => (
              <List
                autoHeight
                isScrolling={isScrolling}
                onScroll={onChildScroll}
                scrollTop={scrollTop}
                rowRenderer={rowRenderer}
                height={height}
                rowCount={rowCount}
                rowHeight={rowHeight}
                width={width}
              ></List>
            )}
          </AutoSizer>
        )}
      </WindowScroller>
    </div>
  );
};
