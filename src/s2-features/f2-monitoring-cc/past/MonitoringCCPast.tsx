import React, {ReactComponentElement, useEffect, useState} from 'react';
import s from './MonitoringCCPast.module.scss'
import Histogram from "../../../common/components/Histogram/Histogram";
import {useNavigate} from "react-router-dom";
import {Sidebar} from "../../../common/components/Sidebar/Sidebar";
import {PATH} from "../../../common/routes/routes";
import ArrowLeftIcon from "../../../common/components/ArrowLeftIcon/ArrowLeftIcon";
import OptionIcon from "../../../common/components/OptionIcon/OptionIcon";
import HomeIcon from "../../../common/components/HomeIcon/HomeIcon";
import {monitoringPastData} from "../../../data/histogram-data/monitoringPastData";
import CallPastPie from "./p1-call-past-pie/CallPastPie";
import Table from "../../../common/components/Table/Table";
import useIsAuth from "../../../common/hooks/useIsAuth";
import {useDispatch} from "react-redux";
import {useScale} from "../../../common/hooks/useScale";
import {findMaxAcceptAndNotAcceptSum} from "../../../common/utils/findMaxAcceptAndNotAcceptSum";
import moment from "moment/moment";
import Form from "react-bootstrap/Form";
import TabButton from "../../../common/components/TabButton/TabButton";
import {fetchPastTableData} from "../../../s1-main/m2-bll/b2-monitoring-past-reducer/pastTable-reducer";
import {fetchPastHistogramData} from "../../../s1-main/m2-bll/b2-monitoring-past-reducer/pastHistogram-reducer";
import {fetchPastPieData} from "../../../s1-main/m2-bll/b2-monitoring-past-reducer/pastPie-reducer";
import {useAppSelector} from "../../../s1-main/m2-bll/store";
import {StatusType} from "../../../s1-main/m2-bll/b1-monitoring-real-time-reducer/realTimeTodayPie-reducer";
import Loader from "../../../common/components/Loader/Loader";
import ErrorWindow from "../../../common/components/ErrorWindow/ErrorWindow";


const MonitoringCCPast = () => {

    const monitoringCCPastTableData = useAppSelector(state => state.pastTableData.data)
    const monitoringCCPastTableStatus = useAppSelector( state => state.pastTableData.status)
    const monitoringCCPastTableError = useAppSelector( state => state.pastTableData.errorMessage)
    const monitoringCCPastHistogramData = useAppSelector(state => state.pastHistogramData.data)
    const monitoringCCPastHistogramStatus = useAppSelector( state => state.pastHistogramData.status)
    const monitoringCCPastHistogramError = useAppSelector( state => state.pastHistogramData.errorMessage)
    const monitoringCCPastPieData = useAppSelector(state => state.pastPieData.data)
    const monitoringCCPastPieTotalData = useAppSelector(state => state.pastPieData.totalData)
    const monitoringCCPastPieStatus = useAppSelector( state => state.pastPieData.status)
    const monitoringCCPastPieError = useAppSelector( state => state.pastPieData.errorMessage)
    const scale = useScale()
    const [isActive, setIsActive] = useState<boolean>(false)
    const navigate = useNavigate()
    const isAuth = useIsAuth()
    const [dateStart, setDateStart] = useState(moment().format("YYYY-MM-DD"))
    const [timeStart, setTimeStart] = useState("00:00")
    const [dateEnd, setDateEnd] = useState(moment().format("YYYY-MM-DD"))
    const [timeEnd, setTimeEnd] = useState("23:59")

    const dispatch = useDispatch<any>()

    useEffect(() => {
        if (!isAuth) navigate('/')
    }, [])
    useEffect(() => {
        dispatch(fetchPastTableData(dateStart, timeStart, dateEnd, timeEnd))
        dispatch(fetchPastPieData(dateStart, timeStart, dateEnd, timeEnd))
        dispatch(fetchPastHistogramData(dateStart, timeStart, dateEnd, timeEnd))
    }, [])
    const onHomeHandler = () => {
        navigate(`${PATH.HOME}`)
    }
    const onOpenSidebar = () => {
        setIsActive(true)
    }
    const onCloseSidebar = () => {
        setIsActive(false)
    }

    const onDateStartChangeHandler = (e: any) => {
        setDateStart(e.currentTarget.value)
    }
    const onTimeStartChangeHandler = (e: any) => {
        setTimeStart(e.currentTarget.value)
    }
    const onDateEndChangeHandler = (e: any) => {
        setDateEnd(e.currentTarget.value)
    }
    const onTimeEndChangeHandler = (e: any) => {
        setTimeEnd(e.currentTarget.value)
    }

    const onLoadDataHandler = () => {
        dispatch(fetchPastTableData(dateStart, timeStart, dateEnd, timeEnd))
        dispatch(fetchPastPieData(dateStart, timeStart, dateEnd, timeEnd))
        dispatch(fetchPastHistogramData(dateStart, timeStart, dateEnd, timeEnd))
    }

    const columns = [
        {
            Header: '№',
            accessor: 'ratingToday',
            width: 70 / scale
        },
        {
            Header: 'Оператор',
            accessor: 'operatorName',
            width: 350 / scale
        },
        {
            Header: 'Принял',
            accessor: 'accept',
            width: 80 / scale
        },
        {
            Header: 'Пропустил',
            accessor: 'skip',
            width: 90 / scale
        },
        {
            Header: 'Уровень обслуживания',
            accessor: 'serviceLevel',
            width: 120 / scale
        },
        {
            Header: 'Среднее время разговора',
            accessor: 'avgServiceTime',
            width: 110 / scale
        },
        {
            Header: 'Загруженность',
            accessor: 'workload',
            width: 120 / scale
        }
    ]

    const domainYAxisCalls = findMaxAcceptAndNotAcceptSum(monitoringPastData)

    const renderComponent = (component: ReactComponentElement<any>, status: StatusType, error: string) => {
        if (status === "loaded") {
            return component
        } else if (status === "loading") {
            return <div className={s.centringLoader}>
                <Loader width={280} height={18}/>
            </div>
        } else if (status === "error") {
            return <div className={s.centringLoader}>
                <ErrorWindow errorMessage={error}/>
            </div>
        }
    }
    return (
        <div className={s.monitoringCCWrapper}>
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
                                <Form.Control type="date" defaultValue={dateStart} style={{width: "95%"}}
                                              onChange={onDateStartChangeHandler}/>
                                <Form.Control type="time" defaultValue={timeStart} style={{width: "95%"}}
                                              onChange={onTimeStartChangeHandler}/>
                            </div>
                        </Form.Group>
                        <Form.Group
                            style={{
                                display: "flex",
                                justifyContent: "flex-end",
                                flexDirection: "column",
                                marginBottom: "15px"
                            }}>
                            <div>
                                <Form.Label style={{color: "white", marginRight: "10px"}}>По:</Form.Label>
                            </div>
                            <div>
                                <Form.Control type="date" defaultValue={dateEnd} style={{width: "95%"}}
                                              onChange={onDateEndChangeHandler}/>
                                <Form.Control type="time" defaultValue={timeEnd} style={{width: "95%"}}
                                              onChange={onTimeEndChangeHandler}/>
                            </div>
                        </Form.Group>
                        <TabButton style={{marginTop: "0px"}} name={'Обновить'} onClick={onLoadDataHandler}/>
                    </div>
                </div>
            </Sidebar>
            <div className={s.monitoringCCContainer}>
                <div className={s.monitoringCCHeader}>
                    <HomeIcon onClick={onHomeHandler}/>
                    <OptionIcon onClick={onOpenSidebar}/>
                    <span>Мониторинг Контакт-центра (Past)</span>
                </div>
                <div className={s.callAndOperatorRating}>
                    <div className={s.callPastPieContainer}>
                        <span>Звонков</span>
                        {renderComponent(
                            <CallPastPie data={monitoringCCPastPieData} totalData={monitoringCCPastPieTotalData}/>,
                            monitoringCCPastPieStatus,
                            monitoringCCPastPieError
                        )}
                    </div>
                    <div className={s.ratingContainer}>
                        <span>Рейтинг операторов</span>
                            {renderComponent(
                                <Table data={monitoringCCPastTableData} columns={columns} height={"40vh"}/>,
                                monitoringCCPastTableStatus,
                                monitoringCCPastTableError,
                            )}
                    </div>
                </div>
                <div className={s.histogram}>
                    {renderComponent(
                        <Histogram data={monitoringCCPastHistogramData} callYAxisDomain={domainYAxisCalls}/>,
                        monitoringCCPastHistogramStatus,
                        monitoringCCPastHistogramError
                    )}
                </div>
            </div>
        </div>
    );
};

export default MonitoringCCPast;