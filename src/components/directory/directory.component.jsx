import React from 'react';
import { connect } from 'react-redux';
import { createStructuredSelector } from 'reselect';
import { selectDirectorySection } from '../../redux/directory/directory.selectors';
import { DirectoryMenuContainer } from './directory.style';

import MenuItem from '../menu-item/menu-item.component';

const Directory = ({ sections }) => {  
    return(
        <DirectoryMenuContainer>
            {
                sections.map(({id, ...otherSectionProps}) => <MenuItem key={id} {...otherSectionProps}/>)
            }               
        </DirectoryMenuContainer>
    )    
}

const mapStateToProps = createStructuredSelector({
    sections: selectDirectorySection
})

export default connect(mapStateToProps)(Directory);