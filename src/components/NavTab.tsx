import React, {FC} from 'react';
import './../styles/NavTab.scss';
import * as dateFns from 'date-fns';
import {DateSetter, useSelectedDate} from './SelectedDateContext'

interface NavTabProps{
    number : Date;
    onChange:DateSetter 
}

const NavTab: FC<NavTabProps> = ({number, onChange}) => {
    
    const [selectedDate, setDate] = useSelectedDate();

    let buttonClassName = dateFns.isSameDay(selectedDate,number)  ? "tabButtonActive" : "tabButton";

    return (
        <div className="tab">
            <div className="tabDay">{dateFns.format(number,"eeee")}</div>
            <div className={buttonClassName} onClick={() => onChange(number)}>{number.getDate()}</div>
        </div> 
    );
};

export default NavTab;
