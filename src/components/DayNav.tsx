import React, {FC} from 'react';
import * as dateFns from 'date-fns';
import './../styles/DayNav.scss';
import NavTab from './NavTab'
import {useSelectedDate} from './SelectedDateContext';


const DayNav: FC = () => {
    
    const [selectedDate, setDate] = useSelectedDate();


    let start = dateFns.startOfWeek(selectedDate);
    let end = dateFns.endOfWeek(selectedDate);
  
    //loop through dates between start and end of a week
    const getDaysArray = (start: Date , end: Date) => {
      for(var arr=[],dt=new Date(start); dt<=end; dt.setDate(dt.getDate()+1)){
          arr.push(new Date(dt));
      }
      return arr;
    };

    return (
        <div className="myTabs">
            {getDaysArray(start,end).map((item) => (
                <NavTab number={item} onChange={setDate}/>
            ))}
        </div>

    );
}

export default DayNav;
