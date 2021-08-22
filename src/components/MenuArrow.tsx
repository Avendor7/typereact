import React, {FC} from 'react';
import './../styles/MenuArrow.scss';
import * as dateFns from 'date-fns';
import {DateSetter, useSelectedDate} from './SelectedDateContext'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faChevronLeft, faChevronRight } from '@fortawesome/free-solid-svg-icons'

interface MenuArrowProps{
    direction : string
    onChange: DateSetter 
}
const MenuArrow: FC<MenuArrowProps> = ({direction, onChange}) => {

    const [selectedDate, setDate] = useSelectedDate();

    const getLastWeekDate = dateFns.subDays(selectedDate, 7);
    const getNextWeekDate = dateFns.addDays(selectedDate, 7);

    let dateFunction = new Date;

    let faIcon = faChevronLeft;
    if (direction == "left"){
        dateFunction = dateFns.subDays(selectedDate, 7);
        
    }else{
        dateFunction = dateFns.addDays(selectedDate, 7);
        faIcon = faChevronRight;
    }

    return (
        <div className="menuArrow">
            <div className="arrowTab" onClick={() => setDate(dateFunction)}>
                <FontAwesomeIcon icon={faIcon} size="2x" />
            </div>
        </div>
    );
}

export default MenuArrow;