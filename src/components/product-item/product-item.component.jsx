import React from 'react';
import { useDispatch } from 'react-redux';
import { 
    CollectionItemContainer,
    BackgroundImage,
    CollectionFooterContainer,
    NameContainer,
    AddButton,
    PriceContainer } from './product-item.style';
import { addItem } from '../../redux/cart/cart.actions';

const ProductItem = ({item}) => {
    const dispatch = useDispatch();
    const addItemClickHandler = item => dispatch(addItem(item))
    const { id, name, price, imageUrl } = item;
    return(
        <CollectionItemContainer key={id}>
            <BackgroundImage 
                className='image'
                imageUrl={imageUrl}
                
            />
            <CollectionFooterContainer>
                <NameContainer>{name}</NameContainer>
                <PriceContainer>{price}</ PriceContainer>
            </CollectionFooterContainer>
            <AddButton onClick={() => addItemClickHandler(item)} inverted>
                Add to cart
            </AddButton>
        </CollectionItemContainer>
    )
}

export default ProductItem;