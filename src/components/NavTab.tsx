import React, {FC} from 'react';
import './../styles/NavTab.scss';
import * as dateFns from 'date-fns';
import {DateSetter, useSelectedDate} from './SelectedDateContext'

interface NavTabProps{
    number : Date;
    onChange:DateSetter 
}
//selectedDate is initialized with the current full date. 
///Need to strip the time so the dateFns.isEqual function will be true
function stripTime(date:Date){
    date = dateFns.setHours(date,0); 
    date = dateFns.setMilliseconds(date,0);
    date = dateFns.setMinutes(date,0);
    date = dateFns.setSeconds(date,0);
    return(date);
}

const NavTab: FC<NavTabProps> = ({number, onChange}) => {
    
    const [selectedDate, setDate] = useSelectedDate();

    let buttonClassName = dateFns.isEqual(stripTime(selectedDate),number)  ? "tabButtonActive" : "tabButton";

    return (
        <div className="tab">
            <div className="tabDay">{dateFns.format(number,"eeee")}</div>
            <div className={buttonClassName} onClick={() => onChange(number)}>{number.getDate()}</div>
        </div> 
    );
};

export default NavTab;
