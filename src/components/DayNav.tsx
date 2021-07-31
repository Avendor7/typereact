import React, {FC} from 'react';
import * as dateFns from 'date-fns';
import './../styles/DayNav.scss';
import { Tabs, Tab, } from 'react-bootstrap';
import NavTab from './NavTab'

interface DayNavProps{
    selectedDate: Date,
    onChange(newDate:Date):void
}

const DayNav: FC<DayNavProps> = ({selectedDate,onChange}) => {


    let start = dateFns.startOfWeek(selectedDate);
    let end = dateFns.endOfWeek(selectedDate);
  
    //loop through dates between start and end of a week
    const getDaysArray = (start: Date , end: Date) => {
      for(var arr=[],dt=new Date(start); dt<=end; dt.setDate(dt.getDate()+1)){
          arr.push(new Date(dt));
      }
      console.log(arr);
      return arr;
    };

    return (
        <div className="myTabs">
            {getDaysArray(start,end).map((item) => (
                <NavTab number={item} onChange={onChange}/>
            ))}
        </div>

    );
}

export default DayNav;
