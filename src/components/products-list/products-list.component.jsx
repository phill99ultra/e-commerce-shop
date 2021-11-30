import React from 'react';
import { withRouter } from 'react-router-dom';
import { 
    CollectionPreview, 
    CollectionPreviewTitle, 
    PreviewContainer } from './products-list.style';
import ProductItem from '../../components/product-item/product-item.component.jsx';

const ProductsList = ({title, items, history, match, routName}) => {
    return (
        <CollectionPreview>
            <CollectionPreviewTitle onClick={() => history.push(`${match.path}/${routName}`)}>
                {title.toUpperCase()}
            </CollectionPreviewTitle>
            <PreviewContainer>
                {
                    items
                        .filter((item, idx) => idx < 4)
                        .map((item) => (
                        <ProductItem key={item.id} item={item}/>
                    ))
                }
            </PreviewContainer>
        </CollectionPreview>
    )
}

export default withRouter(ProductsList);
