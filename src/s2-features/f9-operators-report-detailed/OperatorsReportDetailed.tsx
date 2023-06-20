import React, {useEffect, useState} from 'react';
import {useNavigate} from "react-router-dom";
import {PATH} from "../../common/routes/routes";
import s from "./OperatorsReportDetailed.module.scss";
import {Sidebar} from "../../common/components/Sidebar/Sidebar";
import ArrowLeftIcon from "../../common/components/ArrowLeftIcon/ArrowLeftIcon";
import Form from "react-bootstrap/Form";
import {dateNow} from "../../data/dateNow";
import Accordion from "../../common/components/Accordion/Accordion";
import TabButton from "../../common/components/TabButton/TabButton";
import HomeIcon from "../../common/components/HomeIcon/HomeIcon";
import OptionIcon from "../../common/components/OptionIcon/OptionIcon";
import Table from "../../common/components/Table/Table";
import useIsAuth from "../../common/hooks/useIsAuth";
import {useCalcTimeTotal} from "../../common/hooks/useCalcTimeTotal";
import {useCalcNumTotal} from "../../common/hooks/useCalcNumTotal";
import {useScale} from "../../common/hooks/useScale";
import {useAppSelector} from "../../s1-main/m2-bll/store";


const OperatorsReportDetailed = () => {
    const scale = useScale()
    const operatorReportDetailedData = useAppSelector(state => state.operatorReportDetailedData.data)
    const [isActive, setIsActive] = useState<boolean>(false)
    const [selectedDepartment, setSelectedDepartment] = useState('');
    const navigate = useNavigate()
    const isAuth = useIsAuth()
    const columns = [
        {
            Header: 'Период',
            Footer: <></>,
            columns: [
                {
                    Header: 'Начало периода',
                    accessor: 'startPeriod',
                    Footer: <>Total:</>,
                    width: 162.5 / scale
                },
                {
                    Header: 'Конец периода',
                    accessor: 'endPeriod',
                    Footer: <></>,
                    width: 162.5 / scale
                },
            ]
        },
        {
            Header: 'Общая информация',
            Footer: <></>,
            columns: [
                {
                    Header: 'Оператор',
                    accessor: 'operator',
                    Footer: <></>,
                    width: 162.5 / scale
                },
                {
                    Header: 'Номер',
                    accessor: 'number',
                    Footer: <></>,
                    width: 162.5 / scale
                },
                {
                    Header: 'Отдел',
                    accessor: 'department',
                    Footer: <></>,
                    width: 162.5 / scale
                },
            ]
        },
        {
            Header: 'Показатели',
            Footer: <></>,
            columns: [
                {
                    Header: '% не отвеченных',
                    accessor: 'percentUnanswered',
                    Footer: <></>,
                    width: 125 / scale
                },
                {
                    Header: '% отвеченных',
                    accessor: 'percentAnswered',
                    Footer: <></>,
                    width: 125 / scale
                },
                {
                    Header: 'Уровень обслуживания до 5 сек',
                    accessor: 'serviceLevelUpTo5Sec',
                    Footer: (info: any) => useCalcNumTotal(info, 'serviceLevelUpTo5Sec'),
                    width: 125 / scale
                },
                {
                    Header: 'Уровень обслуживания до 10 сек',
                    accessor: 'serviceLevelUpTo10Sec',
                    Footer: (info: any) => useCalcNumTotal(info, 'serviceLevelUpTo10Sec'),
                    width: 125 / scale
                },
            ]
        },
        {
            Header: 'Обработка входящих вызовов',
            Footer: <></>,
            columns: [
                {
                    Header: 'Принято',
                    accessor: 'accept',
                    Footer: (info: any) => useCalcNumTotal(info, 'accept'),
                    width: 112.5 / scale
                },
                {
                    Header: 'Принято <5',
                    accessor: 'acceptLess5',
                    Footer: (info: any) => useCalcNumTotal(info, 'acceptLess5'),
                    width: 112.5 / scale
                },
                {
                    Header: 'Принято <10',
                    accessor: 'acceptLess10',
                    Footer: (info: any) => useCalcNumTotal(info, 'acceptLess10'),
                    width: 112.5 / scale
                },
                {
                    Header: 'Принято <15',
                    accessor: 'acceptLess15',
                    Footer: (info: any) => useCalcNumTotal(info, 'acceptLess15'),
                    width: 112.5 / scale
                },
                {
                    Header: 'Принято >15',
                    accessor: 'acceptMore15',
                    Footer: (info: any) => useCalcNumTotal(info, 'acceptMore15'),
                    width: 112.5 / scale
                },
                {
                    Header: 'Отменено',
                    accessor: 'canceled',
                    Footer: (info: any) => useCalcNumTotal(info, 'canceled'),
                    width: 112.5 / scale
                },
                {
                    Header: 'Пропущено',
                    accessor: 'skipped',
                    Footer: (info: any) => useCalcNumTotal(info, 'skipped'),
                    width: 112.5 / scale
                },
                {
                    Header: 'Поступило',
                    accessor: 'received',
                    Footer: (info: any) => useCalcNumTotal(info, 'received'),
                    width: 112.5 / scale
                },
            ]
        },
        {
            Header: 'Обработка исходящих вызовов',
            Footer: <></>,
            columns: [
                {
                    Header: 'Всего',
                    accessor: 'outgoingCallHandlingTotal',
                    Footer: (info: any) => useCalcNumTotal(info, 'outgoingCallHandlingTotal'),
                    width: 112.5 / scale
                },
                {
                    Header: 'Отвечено',
                    accessor: 'outgoingCallHandlingAnswered',
                    Footer: (info: any) => useCalcNumTotal(info, 'outgoingCallHandlingAnswered'),
                    width: 112.5 / scale
                },
                {
                    Header: 'Неотвечен',
                    accessor: 'outgoingCallHandlingNotAnswered',
                    Footer: (info: any) => useCalcNumTotal(info, 'outgoingCallHandlingNotAnswered'),
                    width: 112.5 / scale
                },
                {
                    Header: 'Отменен',
                    accessor: 'outgoingCallHandlingCanceled',
                    Footer: (info: any) => useCalcNumTotal(info, 'outgoingCallHandlingCanceled'),
                    width: 112.5 / scale
                },
                {
                    Header: 'Занято',
                    accessor: 'outgoingCallHandlingBusy',
                    Footer: (info: any) => useCalcNumTotal(info, 'outgoingCallHandlingBusy'),
                    width: 112.5 / scale
                },
                {
                    Header: 'Недоступно',
                    accessor: 'outgoingCallHandlingNotAvailable',
                    Footer: (info: any) => useCalcNumTotal(info, 'outgoingCallHandlingNotAvailable'),
                    width: 112.5 / scale
                },
            ]
        },
        {
            Header: 'Обработка внутренних звонков',
            Footer: <></>,
            columns: [
                {
                    Header: 'Всего',
                    accessor: 'handlingInternalCallsTotal',
                    Footer: (info: any) => useCalcNumTotal(info, 'handlingInternalCallsTotal'),
                    width: 90
                },
                {
                    Header: 'Отвечено',
                    accessor: 'handlingInternalCallsAnswered',
                    Footer: (info: any) => useCalcNumTotal(info, 'handlingInternalCallsAnswered'),
                    width: 90
                },
                {
                    Header: 'Неотвечен',
                    accessor: 'handlingInternalCallsNotAnswered',
                    Footer: (info: any) => useCalcNumTotal(info, 'handlingInternalCallsNotAnswered'),
                    width: 90
                },
                {
                    Header: 'Отменен',
                    accessor: 'handlingInternalCallsCanceled',
                    Footer: (info: any) => useCalcNumTotal(info, 'handlingInternalCallsCanceled'),
                    width: 90
                },
                {
                    Header: 'Занято',
                    accessor: 'handlingInternalCallsBusy',
                    Footer: (info: any) => useCalcNumTotal(info, 'handlingInternalCallsBusy'),
                    width: 90
                },
                {
                    Header: 'Недоступно',
                    accessor: 'handlingInternalCallsNotAvailable',
                    Footer: (info: any) => useCalcNumTotal(info, 'handlingInternalCallsNotAvailable'),
                    width: 90
                },
            ]
        },
        {
            Header: 'Входящие звонки',
            Footer: <></>,
            columns: [
                {
                    Header: 'Сред Разговор',
                    accessor: 'incomingCallsAvgTalkTime',
                    Footer: (info: any) => useCalcTimeTotal(info, 'incomingCallsAvgTalkTime'),
                    width: 90
                },
                {
                    Header: 'Сред Удержание',
                    accessor: 'incomingCallsAvgHoldTime',
                    Footer: (info: any) => useCalcTimeTotal(info, 'incomingCallsAvgHoldTime'),
                    width: 90
                },
                {
                    Header: 'Сред Дозвон',
                    accessor: 'incomingCallsAvgCallingTime',
                    Footer: (info: any) => useCalcTimeTotal(info, 'incomingCallsAvgCallingTime'),
                    width: 90
                },
            ]
        },
        {
            Header: 'Исходящие звонки',
            Footer: <></>,
            columns: [
                {
                    Header: 'Сред Разговор',
                    accessor: 'outgoingCallsAvgTalkTime',
                    Footer: (info: any) => useCalcTimeTotal(info, 'outgoingCallsAvgTalkTime'),
                    width: 90
                },
                {
                    Header: 'Сред Удержание',
                    accessor: 'outgoingCallsAvgHoldTime',
                    Footer: (info: any) => useCalcTimeTotal(info, 'outgoingCallsAvgHoldTime'),
                    width: 90
                },
                {
                    Header: 'Сред Дозвон',
                    accessor: 'outgoingCallsAvgCallingTime',
                    Footer: (info: any) => useCalcTimeTotal(info, 'outgoingCallsAvgCallingTime'),
                    width: 90
                },
            ]
        },
        {
            Header: 'Внутренние звонки',
            Footer: <></>,
            columns: [
                {
                    Header: 'Сред Разговор',
                    accessor: 'internalCallsAvgTalkTime',
                    Footer: (info: any) => useCalcTimeTotal(info, 'internalCallsAvgTalkTime'),
                    width: 90
                },
                {
                    Header: 'Сред Удержание',
                    accessor: 'internalCallsAvgHoldTime',
                    Footer: (info: any) => useCalcTimeTotal(info, 'internalCallsAvgHoldTime'),
                    width: 90
                },
                {
                    Header: 'Сред Дозвон',
                    accessor: 'internalCallsAvgCallingTime',
                    Footer: (info: any) => useCalcTimeTotal(info, 'internalCallsAvgCallingTime'),
                    width: 90
                },
            ]
        },
    ]
    useEffect(() => {
        if (!isAuth) navigate('/')
    },[])

    const onHomeHandler = () => {
        navigate(`${PATH.HOME}`)
    }
    const onOpenSidebar = () => {
        setIsActive(true)
    }
    const onCloseSidebar = () => {
        setIsActive(false)
    }
    /*const handleRefreshClick = () => {
        const filteredData = operatorsReportDetailedData.filter(item => item.department === selectedDepartment);
        if (selectedDepartment === '') {
            setData(operatorsReportDetailedData);
        }else {
            setData(filteredData)
        }
    };*/


    return (
        <div className={s.operatorsReportDetailedWrapper}>
            <Sidebar isActive={isActive}>
                <div className={s.optionContainer}>
                    <div className={s.optionHeader}>
                        <ArrowLeftIcon onClick={onCloseSidebar}/>
                        <span>Параметры отбора</span>
                    </div>
                    <div className={s.optionContent}>
                        <Form.Group
                            style={{display: "flex", justifyContent: "flex-end", flexDirection: "column"}}>
                            <div>
                                <Form.Label style={{color: "white", marginRight: "10px"}}>С:</Form.Label>
                            </div>
                            <div>
                                <Form.Control type="date" defaultValue={dateNow} style={{width: "95%"}}/>
                                <Form.Control type="time" defaultValue={"00:00"} style={{width: "95%"}}/>
                            </div>
                        </Form.Group>
                        <Form.Group
                            style={{display: "flex", justifyContent: "flex-end", flexDirection: "column"}}>
                            <div>
                                <Form.Label style={{color: "white", marginRight: "10px"}}>По:</Form.Label>
                            </div>
                            <div>
                                <Form.Control type="date" defaultValue={dateNow} style={{width: "95%"}}/>
                                <Form.Control type="time" defaultValue={"23:59"} style={{width: "95%"}}/>
                            </div>
                        </Form.Group>
                        <Accordion title={"Параметры"}>
                            <Form.Group
                                style={{
                                    display: "flex",
                                    justifyContent: "flex-end",
                                    flexDirection: "column",
                                    marginBottom: "10px"
                                }}>
                                <Form.Label style={{color: "white", marginRight: "10px"}}>Тип:</Form.Label>
                                <Form.Select defaultValue={"День"} style={{width: "95%", borderRadius: "0px"}}>
                                    <option value="День">День</option>
                                    <option value="Весь период">Весь период</option>
                                    <option value="Неделя">Неделя</option>
                                    <option value="Час">Час</option>
                                    <option value="Минута">Минута</option>
                                </Form.Select>
                            </Form.Group>
                            <Form.Group style={{display: "flex", justifyContent: "flex-end", flexDirection: "column"}}>
                                <Form.Label style={{color: "white", marginRight: "10px"}}>Шаг:</Form.Label>
                                <Form.Control type="text" defaultValue={"1"}
                                              style={{width: "95%", borderRadius: "0px"}}/>

                            </Form.Group>
                        </Accordion>
                        <TabButton style={{marginTop: "0px"}} name={'Обновить'} onClick={() => {
                        }}/>
                    </div>
                </div>
            </Sidebar>
            <div className={s.operatorsReportDetailedContainer}>
                <div className={s.operatorsReportDetailedHeader}>
                    <HomeIcon onClick={onHomeHandler}/>
                    <OptionIcon onClick={onOpenSidebar}/>
                    <span>Отчёт по операторам (Детальный)</span>
                </div>
                <Table data={operatorReportDetailedData} columns={columns} pagination={true} width={"100vw"} footer/>
            </div>
        </div>
    );
};

export default OperatorsReportDetailed;