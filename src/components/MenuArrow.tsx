import React, {FC} from 'react';
import './../styles/MenuArrow.scss';
import * as dateFns from 'date-fns';
import {DateSetter, useSelectedDate} from './SelectedDateContext'

interface MenuArrowProps{
    direction : string
    onChange: DateSetter 
}
const MenuArrow: FC<MenuArrowProps> = ({direction, onChange}) => {

    const [selectedDate, setDate] = useSelectedDate();

    const getLastWeekDate = dateFns.subDays(selectedDate, 7);
    const getNextWeekDate = dateFns.addDays(selectedDate, 7);

    let dateFunction = new Date;
    if (direction == "left"){
        dateFunction = dateFns.subDays(selectedDate, 7);
    }else{
        dateFunction = dateFns.addDays(selectedDate, 7);
    }

    return (
        <div className="menuArrow">
            <span>Arrow {direction}</span>
            <div className="tab" onClick={() => setDate(dateFunction)}><h2>{direction}</h2></div>
        </div>
    );
}

export default MenuArrow;