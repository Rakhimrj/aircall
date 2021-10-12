import React, { Fragment, useState } from 'react';
import { ArchiveBtn } from './ArchiveBtn.jsx';
import { BsTelephoneInbound, BsTelephoneOutbound } from "react-icons/bs";
import CallDetails from './CallDetails.jsx';


export const History = (props) => {
    const { currentTab, setCurrentTab, callHistory, getData } = props;
    const [showDetail, setShowDetail] = useState(false);
    const [callData, setCallData] = useState({});

    const onContactSelect = (data) => e => {
        e.preventDefault();
        setCallData(data);
        setShowDetail(true);
    }

    const closeContact = () => e => {
        e.preventDefault();
        setCallData({});
        setShowDetail(false);
    }
    return (
        <Fragment>
            {!showDetail ? <div className="histoy">
                <ArchiveBtn tab={currentTab} changeTab={setCurrentTab} />

                {Object.keys(callHistory).map((date, i) => {
                    return (
                        <div className="contact-list" key={i}>
                            <h3 className="group-date">{date}</h3>
                            {callHistory[date].map((data, j) =>
                                <div className="call-list" role="button" onClick={onContactSelect(data)} key={j}>
                                    <div className="call-info">
                                        {data.direction === 'outbound' ? <BsTelephoneOutbound /> : <BsTelephoneInbound />}
                                        <div className="contact-detail">
                                            <h1 className="contact-phone">{data.direction === 'outbound' ? data.to : data.from}</h1>
                                            <h3 className="contact-name"> {data.direction === 'outbound' ? `from ${data.from}` : `to ${data.to}`}</h3>
                                        </div>
                                    </div>
                                    <h3 className="call-time">{data.time}</h3>
                                </div>)}
                        </div>
                    )
                })}
            </div> :
                <CallDetails data={callData} closeContact={closeContact} getData={getData} />
            }
        </Fragment>
    )
}