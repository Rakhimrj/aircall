import React, { Fragment, useState } from 'react';
import { BsPerson, BsXCircle } from "react-icons/bs";
import { BiArchiveIn, BiArchiveOut } from "react-icons/bi";
import { archiveContact } from "../common/BaseRequestProvider";

const CallDetails = (props) => {
    const { data, closeContact, getData } = props;
    const [isUpdating, setIsupdating] = useState(false);
    const [callData, setCallData] = useState(data)
    const updateCall = () => e => {
        e.preventDefault();
        setIsupdating(true)
        archiveContact(callData.id, !callData.is_archived).then(res => {
            getData();
            const updatedCallData = callData;
            updatedCallData.is_archived = !updatedCallData.is_archived
            setCallData(updatedCallData);
            setIsupdating(false);
        }).catch(e=> {
            setIsupdating(false);
        })
    }
    return (
        <div className="contact-details-container">
            <div>
                <div className="contact-details-bg">
                    <div className="contact-close" role="button" onClick={closeContact()}> <BsXCircle /> </div>
                    <div className="contact-icon"> <BsPerson className="bs-icon-person" /> </div>
                    <h1 className="contact-phone">{callData.direction === 'outbound' ? callData.to : callData.from}</h1>
                </div>
                <div className="contact-details-info">
                    <h3>Type : {callData.direction} - {callData.call_type} ({callData.duration} sec)</h3>
                    <h3> {callData.direction === 'outbound' ? `From : ${callData.from}` : `To : ${callData.to}`}</h3>
                    <h3>On : {callData.date} {callData.time}</h3>
                    <h3>Via : {callData.via}</h3>

                </div>
            </div>
            <div className={`archive-contact ${isUpdating? 'disabled' :''}`} role="button" title={callData.is_archived ? 'Unarchive call' : 'Archive call'} onClick={updateCall()}>
                {callData.is_archived ? <BiArchiveOut /> : <BiArchiveIn />}
            </div>
        </div>
    )
}

export default CallDetails;