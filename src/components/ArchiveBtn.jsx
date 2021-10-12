import React from 'react';
import { BsArchive, BsTelephone} from "react-icons/bs";


export const ArchiveBtn = (props) => {
    const { tab, changeTab } = props;
    const onBtnClick = () => e => {
        e.preventDefault();
        changeTab(tab==='0'?'1':'0');
    }
    return(
        <div className="archive-btn" role="button" onClick={onBtnClick()}>
            {tab==='0' ? <BsArchive/>: <BsTelephone/>}
            <h1>{tab==='0' ? 'Show archived' : 'Show call history'}</h1>
        </div>
    )
}