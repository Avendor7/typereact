import React, {FC} from 'react';
import './../styles/NavTab.scss';

interface NavTabProps{
    number ?: String;
}


const NavTab: FC<NavTabProps> = ({number}) => {
    return (
        <div className="tab">
            <div className="tabDay">Monday</div>
            <a href="#">{number}</a>
        </div> 
    );
};

export default NavTab;
