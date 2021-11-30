import React from 'react';
import { connect } from 'react-redux';
import { 
    CollectionItemContainer,
    BackgroundImage,
    CollectionFooterContainer,
    NameContainer,
    AddButton,
    PriceContainer } from './product-item.style';
import { addItem } from '../../redux/cart/cart.actions';

const ProductItem = ({item, addItem}) => {
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
            <AddButton onClick={() => addItem(item)} inverted>
                Add to cart
            </AddButton>
        </CollectionItemContainer>
    )
}

const mapDispatchToProps = dispatch => ({
    addItem: item => dispatch(addItem(item))
})

export default connect(null, mapDispatchToProps)(ProductItem);