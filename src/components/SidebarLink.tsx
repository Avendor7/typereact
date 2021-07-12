import React, {FC} from 'react';
import './../styles/SidebarLink.scss';

interface SidebarLinkProps{
    linktext ?: String;
}

const SidebarLink: FC<SidebarLinkProps> = ({linktext}) => {
    return (
        <li><a href="#" className="sidebarlink">{linktext}</a></li>
    );
};

export default SidebarLink;
