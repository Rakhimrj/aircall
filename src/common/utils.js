import moment from 'moment';

export const getParsedActivity = (data) => {
    let result = {'0':{},'1':{}};
    for(let i=0; i<data.length;i++) {
        const date = moment(data[i].created_at).format('MMMM, DD YYYY');
        const currData = data[i];
        const set =  currData.is_archived ? '1' : '0';
        currData['time'] = moment(data[i].created_at).format('hh:mm A');
        currData['date'] = date;
        if(!result[set][date]) {
            result[set][date] = [];
        }
        result[set][date].push(currData);
    }
    console.log(result)
    return result;
}