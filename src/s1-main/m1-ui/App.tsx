import React from 'react';
import './App.scss';
import MonitoringCc from "../../s2-features/f2-monitoring-cc/MonitoringCC";
import {Route, Routes} from 'react-router-dom';
import {PATH} from "../../common/routes/routes";
import Home from "../../s2-features/f1-home/Home";
import CallReport from "../../s2-features/f3-call-report/CallReport";
import 'bootstrap/dist/css/bootstrap.min.css';
import OperatorReport from "../../s2-features/f4-operator-report/OperatorReport";
import QueueReport from "../../s2-features/f5-queue-report/QueueReport";

function App() {

    return (
        <div className="App">
            <Routes>
                <Route path={PATH.HOME} element={<Home/>}/>
                <Route path={PATH.MONITORING} element={<MonitoringCc/>}/>
                <Route path={PATH.CALL_REPORT} element={<CallReport/>}/>
                <Route path={PATH.OPERATOR_REPORT} element={<OperatorReport/>}/>
                <Route path={PATH.QUEUE_REPORT} element={<QueueReport/>}/>
            </Routes>
        </div>
    );
}

export default App;