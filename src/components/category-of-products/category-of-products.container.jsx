import { connect } from "react-redux";
import { createStructuredSelector } from "reselect";
import { compose } from "redux";
import { selectIsCollectionFetching } from "../../redux/shop/shop.selectors";
import WithSpinner from "../with-spinner/with-spinner.component";
import CategoryOfProducts from "./category-of-products.component";

const mapStateToProps = createStructuredSelector({
    isLoading: selectIsCollectionFetching
});

const CategoryOfProductsContainer = compose(
    connect(mapStateToProps),
    WithSpinner
)(CategoryOfProducts);

export default CategoryOfProductsContainer;

