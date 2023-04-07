import React, {useEffect} from 'react'
import {
    TableInstance,
    useBlockLayout,
    usePagination,
    UsePaginationInstanceProps,
    useResizeColumns,
    UseResizeColumnsColumnOptions,
    UseResizeColumnsColumnProps,
    UseResizeColumnsOptions,
    UseResizeColumnsState,
    useTable,
    UseTableHeaderGroupProps
} from "react-table";
import {callReportData, CallReportDataType} from "../../../data/callReportData";
import s from './CallReportTable.module.scss'

type TableProps = TableInstance<CallReportDataType>
    & UsePaginationInstanceProps<{}>
    & UseResizeColumnsColumnProps<{}>
    & UseResizeColumnsColumnOptions<{}>
    & UseResizeColumnsOptions<{}>
    & UseResizeColumnsState<{}>
& UseTableHeaderGroupProps<{}>


const CallReportTable = () => {

    const defaultColumn = React.useMemo(
        () => ({
            minWidth: 20,
            width: 120,
            maxWidth: 300,
        }),
        []
    )

    const data: CallReportDataType[] = React.useMemo(
        () => callReportData,
        []
    )

    const columns = React.useMemo(
        () => [
            {
                Header: 'Даты',
                columns: [
                    {
                        Header: 'Начало',
                        accessor: 'dateStart'
                    },
                    {
                        Header: 'Завершение',
                        accessor: 'dateEnd',
                    },
                ]
            },
            {
                Header: 'Контактные номера',
                columns: [
                    {
                        Header: 'Инициатор',
                        accessor: 'initiator',
                    },
                    {
                        Header: 'Получатель',
                        accessor: 'recipient',
                    },
                ]
            },
            {
                Header: 'Основная информация',
                columns: [
                    {
                        Header: 'Направление',
                        accessor: 'direction',
                    },
                    {
                        Header: 'Статус',
                        accessor: 'status',
                    },
                    {
                        Header: 'Тип',
                        accessor: 'type',
                    },
                    {
                        Header: 'Очередь',
                        accessor: 'queue',
                    }
                ]
            },
            {
                Header: 'Время',
                columns: [
                    {
                        Header: 'Общее время',
                        accessor: 'totalTime',
                    },
                    {
                        Header: 'Время разговора',
                        accessor: 'talkTime',
                    },
                    {
                        Header: 'Время соединения',
                        accessor: 'connectionTime',
                    },
                    {
                        Header: 'Время на удержании',
                        accessor: 'holdTime',
                    },
                    {
                        Header: 'Время в очереди',
                        accessor: 'queueTime',
                    },
                ]
            },
            {
                Header: 'Контакты в',
                columns: [
                    {
                        Header: 'Контакт инициатора',
                        accessor: 'initiatorContact',
                    },
                    {
                        Header: 'контакт получателя',
                        accessor: 'recipientContact',
                    },
                    {
                        Header: 'Оператор',
                        accessor: 'operator',
                    }
                ]
            },
        ],
        []
    )

    const {
        getTableProps,
        getTableBodyProps,
        headerGroups,
        prepareRow,
        setPageSize,
        page,
        canPreviousPage,
        canNextPage,
        pageOptions,
        pageCount,
        gotoPage,
        nextPage,
        previousPage,
        state,
    } = useTable(
        {
            columns,
            data,
            defaultColumn,
            initialState: {pageIndex: 0, pageSize: 20} as any,
        }, usePagination, useBlockLayout, useResizeColumns) as TableProps

    useEffect(() => {
        setPageSize(30)
    }, [])
    const fillCell = (value: string) => {
        switch (value) {
            case 'Отвечен':
                return s.green
            case 'Не отвечен':
                return s.red
            case 'Входящий':
                return s.green
            case 'Исходящий':
                return s.red
            default:
                return s.black
        }

    }

    const {pageIndex, pageSize = 20} = state as any

    return (
        <div className={s.callReportTableWrapper}>
            <div className={s.callReportTableContainer}
                 style={{color: "#368536", maxHeight: "90vh"}}>
                <table {...getTableProps()} className={s.tableContainer}>
                    <thead>
                    {headerGroups.map(headerGroup => (
                        <tr {...headerGroup.getHeaderGroupProps()} className={s.columnTr}>
                            {headerGroup.headers.map(column => (
                                <th className={s.columnTh}
                                    {...column.getHeaderProps()}
                                >
                                    {column.render('Header')}
                                    <div

                                        {...column.getResizerProps()}
                                        className={`${s.resizer} ${
                                            column.isResizing ? s.isResizing : ''
                                        }`}
                                    />
                                </th>
                            ))}
                        </tr>
                    ))}
                    </thead>
                    <tbody {...getTableBodyProps()} className={s.rowsContainer}>
                    {page.map((row: any) => {
                        prepareRow(row)
                        return (
                            <tr className={s.rowContainer} {...row.getRowProps()}>
                                {row.cells.map((cell: any) => {
                                    return (
                                        <td className={`${s.cellContainer} ${fillCell(cell.value)}`}
                                            {...cell.getCellProps()}
                                        >
                                            {cell.render('Cell')}
                                        </td>
                                    )
                                })}
                            </tr>
                        )
                    })}
                    </tbody>
                </table>
            </div>
            <div className={s.pagination}>
                <button style={{background: "none", border: "none", fontSize: "18px", marginRight: "10px"}}
                        onClick={() => gotoPage(0)}
                        disabled={!canPreviousPage}>
                    {'<<'}
                </button>
                {' '}
                <button style={{background: "none", border: "none", fontSize: "18px", marginRight: "10px"}}
                        onClick={() => previousPage()}
                        disabled={!canPreviousPage}>
                    {'<'}
                </button>
                {' '}
                <span style={{color: "black"}}>| Страница:{' '}</span>
                <input
                    type="number"
                    defaultValue={pageIndex + 1}
                    onChange={e => {
                        const page = e.target.value ? Number(e.target.value) - 1 : 0
                        gotoPage(page)
                    }}
                    value={pageIndex + 1}
                    style={{width: '100px', marginRight: "10px", marginLeft: "5px", padding: "2px 3px"}}
                />
                <span style={{marginRight: "10px"}}>из</span>
                {pageOptions.length + ' | '}
                <button style={{background: "none", border: "none", fontSize: "18px", marginLeft: "10px"}}
                        onClick={() => nextPage()}
                        disabled={!canNextPage}>
                    {'>'}
                </button>
                {' '}
                <button style={{background: "none", border: "none", fontSize: "18px", marginLeft: "10px"}}
                        onClick={() => gotoPage(pageCount - 1)}
                        disabled={!canNextPage}>
                    {'>>'}
                </button>
            </div>
        </div>
    )
}


export default CallReportTable;


/*<div className={s.callReportTableContainer}>
            <div className={s.callReportTableHeaderContainer}>
                <div className={s.date}>
                    Дата
                </div>
                <div className={s.contactNumbers}>
                    Контактные номера
                </div>
                <div className={s.basicInformation}>Основная информация</div>
                <div className={s.time}>Время</div>
                <div className={s.contactTD}>Контакты в тд</div>
                <div className={s.dateItem}>
                    <div className={s.start}>Начало</div>
                    <div className={s.end}>Завершение</div>
                </div>
                <div className={s.contactNumbersItems}>
                    <div className={s.iniciator}>Инициатор</div>
                    <div className={s.resipient}>Получатель</div>
                </div>
                <div className={s.basicInformationItems}>
                    <div className={s.direction}>Направление</div>
                    <div className={s.status}>Статус</div>
                    <div className={s.type}>Тип</div>
                    <div className={s.queue}>Очередь</div>
                </div>
                <div className={s.timeItems}>
                    <div className={s.totalTime}>Общее время</div>
                    <div className={s.talkTime}>Время разговора</div>
                    <div className={s.timeConnection}>Время соединения</div>
                    <div className={s.holdTime}>Время на удержании</div>
                    <div className={s.queueTime}>Время в очереди</div>
                </div>
                <div className={s.contactTDItems}>
                    <div className={s.initiatorContact}>Контакт инициатора</div>
                    <div className={s.recipientContact}>Контакт получателя</div>
                    <div className={s.operator}>Оператор</div>
                </div>
            </div>
            <div className={s.callReportTableContent}>
                {callReportData.map((d: CallReportDataType) => <div className={s.callReportItem}>
                    <div className={s.startItem}>{d.dateStart}</div>
                    <div className={s.endItem}>{d.dateEnd}</div>
                    <div className={s.iniciatorItem}>{d.initiator}</div>
                    <div className={s.resipientItem}>{d.recipient}</div>
                    <div className={s.directionItem}>{d.direction}</div>
                    <div className={s.statusItem}>{d.status}</div>
                    <div className={s.tipeItem}>{d.type}</div>
                    <div className={s.queueItem}>{d.queue}</div>
                    <div className={s.totalTimeItem}>{d.totalTime}</div>
                    <div className={s.talkTimeItem}>{d.talkTime}</div>
                    <div className={s.timeConnectionItem}>{d.connectionTime}</div>
                    <div className={s.holdTimeItem}>{d.holdTime}</div>
                    <div className={s.queueTimeItem}>{d.queueTime}</div>
                    <div className={s.initiatorContactItem}>{d.initiatorContact}</div>
                    <div className={s.recipientContactItem}>{d.recipientContact}</div>
                    <div className={s.operatorItem}>{d.operator}</div>
                </div>)}
            </div>
            <div className={s.callReportTableFooter}>

            </div>
        </div>*/