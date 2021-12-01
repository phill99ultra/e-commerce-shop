import React from 'react';
import { useSelector } from 'react-redux';
import { selectDirectorySection } from '../../redux/directory/directory.selectors';
import { DirectoryMenuContainer } from './directory.style';

import MenuItem from '../menu-item/menu-item.component';

const Directory = () => {  
    const sections = useSelector(selectDirectorySection);
    return(
        <DirectoryMenuContainer>
            {
                sections.map(({id, ...otherSectionProps}) => <MenuItem key={id} {...otherSectionProps}/>)
            }               
        </DirectoryMenuContainer>
    )    
}

export default Directory;