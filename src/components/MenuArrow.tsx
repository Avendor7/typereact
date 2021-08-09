import React, {FC} from 'react';
import './../styles/MenuArrow.scss';
interface MenuArrowProps{
    direction : string
}
const MenuArrow: FC<MenuArrowProps> = ({direction}) => {
    return (
        <div className="menuArrow">
            <span>Arrow {direction}</span>
        </div>
    );
}

export default MenuArrow;