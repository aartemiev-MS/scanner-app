import React, { useState } from "react";
import QrReader from 'react-qr-reader'

export default function ConfiguredQrReader() {
    const [report, setReport] = useState("reading hasn't been performed yet")
    const [counter, setCounter] = useState(0)

    const onScan = (data) => {
        let newReport = data ?? 'nothing is read'

        if (newReport === report) {
            setCounter(currentCount => currentCount + 1)
        } else {
            setCounter(0)
        }

        setReport(newReport)
    }

    return (<>
        <div style={{ textAlign: "center" }}>{report} - {counter}</div>
        <QrReader
            delay={1000}
            onError={(error) => { console.log(error) }}
            onScan={onScan}
            style={{ width: '100%' }}
        />
    </>)
}
