// @flow
import React, { cloneElement, createRef, useEffect, useState } from 'react';
import '../../Css/Table.css';
import { TableColumnType } from './TableColumn';
import { tableContext } from '../../Context';

type Props = {
    uniqueName: string;
    messageConditional?: (
        data: Array<any> | null | string
    ) => string | JSX.Element;
    data: Array<any> | null | string;
    children: Array<React.ReactElement<TableColumnType>>;
};

const Table = ({ uniqueName, data, children, messageConditional }: Props) => {
    const table = createRef<HTMLDivElement>();
    const [hoveredRow, setHoveredRow] = useState<number | null>(null);

    useEffect(() => {
        if (!Array.isArray(data)) return;
        if (!data || data.length === 0) return;
        const columns = table.current?.children;
        if (!columns) return;
        const childrenIds = Array.from(columns)
            .map((col) => col.id)
            .sort();
        const dataKeys = Object.keys(data[0]).sort();
        const arraysSame = dataKeys.every(
            (key, index) => key === childrenIds[index]
        );
        if (!arraysSame)
            throw new Error("Column Attributes don't match the data keys");
    }, [data]);

    const fixData = (child: React.ReactElement<TableColumnType>) => {
        return data && Array.isArray(data)
            ? data.map((row) => row[child.props.attribute])
            : null;
    };

    return (
        <tableContext.Provider value={{ hoveredRow, setHoveredRow }}>
            <>
                <div ref={table} className={'table'}>
                    {children.map((child, index) => {
                        return cloneElement(child, {
                            key: `${uniqueName}-${index}`,
                            data: fixData(child),
                            index,
                        });
                    })}
                </div>
                <div className={'table-no-data'}>
                    {messageConditional ? messageConditional(data) : null}
                </div>
            </>
        </tableContext.Provider>
    );
};

Table.defaultProps = {
    messageConditional: () => null,
};

export default Table;
