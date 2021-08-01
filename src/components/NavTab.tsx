import React, {FC} from 'react';
import './../styles/NavTab.scss';
import * as dateFns from 'date-fns';
import {DateSetter} from './SelectedDateContext'
interface NavTabProps{
    number : Date;
    onChange:DateSetter 
}



const NavTab: FC<NavTabProps> = ({number, onChange}) => {
    
    return (
        <div className="tab">
            <div className="tabDay">{dateFns.format(number,"eeee")}</div>
            <div className="tabButton" onClick={() => onChange(number)}>{number.getDate()}</div>
        </div> 
    );
};

export default NavTab;
