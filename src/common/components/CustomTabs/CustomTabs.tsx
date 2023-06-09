import React, {ChangeEvent, useState} from 'react';
import Tab from "react-bootstrap/Tab";
import Form from "react-bootstrap/Form";
import {dateNow} from "../../../data/dateNow";
import Tabs from "react-bootstrap/Tabs";
import './CustomTabs.css'
import TabButton from "../TabButton/TabButton";


interface CustomTabsPropsType {
    fromDate?: string
    fromTime?: string
    toDate?: string
    toTime?: string
    onFromDateChange?: (date: ChangeEvent<HTMLInputElement>) => void;
    onToDateChange?: (time: ChangeEvent<HTMLInputElement>) => void;
    onFromTimeChange?: (date: ChangeEvent<HTMLInputElement>) => void;
    onToTimeChange?: (time: ChangeEvent<HTMLInputElement>) => void;
    param?: boolean
    disabledPeriod?: boolean
    children?: React.ReactNode
}


const CustomTabs = ({
                        fromDate,
                        fromTime,
                        toDate,
                        toTime,
                        onFromDateChange,
                        onFromTimeChange,
                        onToDateChange,
                        onToTimeChange,
                        param,
                        children,
                        disabledPeriod
                    }: CustomTabsPropsType) => {
    const [key, setKey] = useState('period');
    const onSelectSetKey = (key: string | null) => {
        if (key !== null)
            setKey(key)
    }


    return (

        <Tabs className={"tabsContainer"}

              activeKey={disabledPeriod ? "param":key}
              onSelect={(k) => onSelectSetKey(k)}
              style={{paddingTop: "10px", paddingRight: "10px", paddingLeft: "10px",}}>

            {!disabledPeriod && <Tab tabClassName={"tab"}
                  className={"tab"}
                  eventKey="period"
                  title="Период"
                  color="#000"
                  style={{padding: "10px"}}
            >
                <Form.Group style={{display: "flex", justifyContent: "flex-start", flexDirection: "column"}}>
                    <Form.Label style={{color: "white", marginRight: "10px"}}>С:</Form.Label>
                    <Form.Control value={fromDate} onChange={onFromDateChange} type="date" defaultValue={dateNow}
                                  style={{width: "95%"}}/>
                    <Form.Control value={fromTime} onChange={onFromTimeChange} type="time" defaultValue={"00:00"}
                                  style={{width: "95%"}}/>

                </Form.Group>
                <Form.Group style={{display: "flex", justifyContent: "flex-start", flexDirection: "column"}}>
                    <Form.Label style={{color: "white", marginRight: "10px"}}>По:</Form.Label>
                    <Form.Control value={toDate} onChange={onToDateChange} type="date" defaultValue={dateNow}
                                  style={{width: "95%"}}/>
                    <Form.Control value={toTime} onChange={onToTimeChange} type="time" defaultValue={"23:59"}
                                  style={{width: "95%"}}/>
                </Form.Group>
                <TabButton name={'Обновить'} onClick={() => {
                }}/>
            </Tab>}
            {param && <Tab eventKey="param" title="Параметры" style={{padding: "10px"}}>
                {children}
            </Tab>}
        </Tabs>
    );
};

export default CustomTabs;