import React, { useEffect, useState, Fragment} from 'react';
import { History } from './components/History.jsx';
import { getActivity } from './common/BaseRequestProvider.js';
import { getParsedActivity } from './common/utils.js';

const Activity = (props) => {

    const [currentTab, setCurrentTab] = useState('0');
    const [callHistory, setCallHistory] = useState({'0':{},'1':{}});
    const [loading, isLoading] = useState(true);
    const getData = () => {
        getActivity().then((res)=> {
            setCallHistory(getParsedActivity(res.data));
            isLoading(false)
        }).catch(
            isLoading(false)
        );
    }

    useEffect(() => {
        getData();
    },[])
    

    return(
        <Fragment>
            {!loading && <History currentTab={currentTab} setCurrentTab={setCurrentTab} callHistory={callHistory[currentTab]} getData={getData}/>}
            {loading && <div className="loader"></div>}
        </Fragment>
    )

}

export default Activity;