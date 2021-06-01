// @flow
import * as React from 'react';
import { useContext } from 'react';
import '../../Css/Table.css';
import { tableContext } from '../../Context';

export type TableColumnType = {
    align?: 'center' | 'start' | 'end';
    size?: 'grow' | number;
    title: string;
    attribute: string;
    data?: Array<any> | null;
    index?: number | null;
    icon?(title: string, data: string): JSX.Element | null;
    hovered?: number | null;
    key?: string;
};

const TableColumn = ({
    index,
    align,
    size,
    title,
    attribute,
    data,
    icon,
    key,
}: TableColumnType) => {
    const { hoveredRow, setHoveredRow } = useContext(tableContext);

    return (
        <div
            key={key}
            id={attribute}
            style={{
                width: size !== 'grow' ? `${size}%` : 'unset',
                flexGrow: size === 'grow' ? 1 : 0,
                flexShrink: size === 'grow' ? 2 : 0,
                textAlign: align,
                minWidth: 'max-content',
                maxWidth: size !== 'grow' ? `${size}%` : 'unset',
            }}
        >
            <div
                className={'table-header'}
                style={{
                    paddingLeft: index === 0 ? '20px' : '0',
                }}
            >
                {title}
            </div>
            {data?.map((row, rowIndex) => (
                <div
                    key={`${key}-row-${rowIndex}`}
                    className={'table-row'}
                    onMouseEnter={() => setHoveredRow(rowIndex)}
                    onMouseLeave={() => setHoveredRow(null)}
                >
                    <div
                        className={'table-cell'}
                        style={{
                            paddingLeft: index === 0 ? '20px' : '0',
                            justifyContent: align,
                            backgroundColor:
                                hoveredRow === rowIndex ? '#F5F5F5' : 'white',
                        }}
                    >
                        <div style={{ height: '20px', marginRight: '3px' }}>
                            {icon ? icon(title, row) : null}
                        </div>
                        {row}
                    </div>
                </div>
            ))}
        </div>
    );
};

TableColumn.defaultProps = {
    index: null,
    align: 'center',
    size: 'grow',
    data: [],
    icon: null,
};

export default TableColumn;
