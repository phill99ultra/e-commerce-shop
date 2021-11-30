import React from 'react';
import { 
    MenuItemContainer,
    ContentContainer,
    BackgroundImageContainer,
    ContentTitle,
    ContentSubtitle } from './menu-item.style';
import {withRouter} from 'react-router-dom';

const MenuItem = ({title, imageUrl, size, history, linkUrl, match}) => {
    return(
        <MenuItemContainer 
            className={`${size}`} 
            onClick={() => history.push(`${match.url}${linkUrl}`)}
        >
            <BackgroundImageContainer 
                className="background-image"
                imageUrl={imageUrl}           
            />
            <ContentContainer>
                <ContentTitle>{title.toUpperCase()}</ContentTitle>
                <ContentSubtitle>SHOP NOW</ContentSubtitle>
            </ContentContainer>
        </MenuItemContainer>
    )
}

export default withRouter(MenuItem)