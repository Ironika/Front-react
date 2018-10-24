// IMPORT PACKAGE REFERENCES
import React, { Component, Fragment } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';

// IMPORT PROJECT REFERENCES
import { getProduct } from '../../../services/ShopService';
import { LoadingIndicator } from '../../shared/LoadingIndicator/LoadingIndicator';
import { ProductGallery } from './ProductGallery';
import { RelatedProducts } from './RelatedProducts';
import { Select } from '../../shared/Select/Select';
import { Counter } from '../../shared/Counter/Counter';
import { addToCart } from '../../../services/CartService';
import Modal from 'react-modal';
import imgClose from '../../../images/icons/icon-close.png';
import imgCart from '../../../images/icons/icon-cart.png';

// COMPONENT

class Product extends Component {

    constructor(props) {
        super(props);
        this.state = {
            quantity: 1,
            size: {
                text: null,
                value: null
            },
            shape: {
                text: null,
                value: null
            },
            material: {
                text: null,
                value: null
            },
            color: {
                text: null,
                value: null
            },
            modalIsOpen: false
        };
    }

    componentDidMount() {
        window.scrollTo(0, 0);
        let token = window.localStorage.getItem('token');
        if(token)
            this.props.getProduct(token, this.props.slug);

        this.handleClickQuantity = this.handleClickQuantity.bind(this);
        this.handleChangeQuantity = this.handleChangeQuantity.bind(this);
        this.handleClickCart = this.handleClickCart.bind(this);
        this.handleChangeSizes = this.handleChangeSizes.bind(this);
        this.handleChangeMaterials = this.handleChangeMaterials.bind(this);
        this.handleChangeShapes = this.handleChangeShapes.bind(this);
        this.handleChangeColors = this.handleChangeColors.bind(this);

        this.closeModal = this.closeModal.bind(this);
        Modal.setAppElement('#Shop');
    }

    closeModal() {
        this.setState({modalIsOpen: false});
    }

    handleClickQuantity(operator) {
        if(operator == '+')
            this.setState({quantity: this.state.quantity + 1});
        else {
            if(this.state.quantity - 1 > 0)
                this.setState({quantity: this.state.quantity - 1});
        }
    }

    handleChangeQuantity(event) {
        this.setState({quantity: event.target.value});
    }

    handleChangeSizes(event) {
        let size = {
            text: event.target.textContent,
            value: event.target.value
        };
        this.setState({size: size});
    }

    handleChangeShapes(event) {
        let shape = {
            text: event.target.textContent,
            value: event.target.value
        };
        this.setState({shape: shape});
    }

    handleChangeMaterials(event) {
        let material = {
            text: event.target.textContent,
            value: event.target.value
        };
        this.setState({material: material});
    }

    handleChangeColors(event) {
        let color = {
            text: event.target.textContent,
            value: event.target.value
        };
        this.setState({color: color});
    }

    handleClickCart() {
        let orderProduct = {
            id: new Date().getTime() + Math.floor((Math.random()*10000)+1).toString(16),
            product : {
                id : this.props.product.id,
                name: this.props.product.name,
                price : this.props.product.price,
                media : this.props.product.medias[0],
            },
            quantity : this.state.quantity
        };

        if(this.state.size.value != null)
            orderProduct.size = this.state.size;
        else {
            if(this.props.product.sizes.length > 0) {
                orderProduct.size = {};
                orderProduct.size.text = this.props.product.sizes[0].name;
                orderProduct.size.value = this.props.product.sizes[0].id;
            }
        }
        if(this.state.shape.value != null)
            orderProduct.shape = this.state.shape;
        else {
            if(this.props.product.shapes.length > 0) {
                orderProduct.shape = {};
                orderProduct.shape.text = this.props.product.shapes[0].name;
                orderProduct.shape.value = this.props.product.shapes[0].id;
            }
        }
        if(this.state.material.value != null)
            orderProduct.material = this.state.material;
        else {
            if(this.props.product.materials.length > 0) {
                orderProduct.material = {};
                orderProduct.material.text = this.props.product.materials[0].name;
                orderProduct.material.value = this.props.product.materials[0].id;
            }
        }
        
        this.props.addToCart(orderProduct);
        this.setState({modalIsOpen: true});
    }

    render() {
        if(!this.props.fetching_product)
            return (
                <Fragment>
                    <Modal isOpen={this.state.modalIsOpen} onRequestClose={this.closeModal}>
                        <div className="container">
                            <div className="bg0 p-lr-15-lg how-pos3-parent">
                                <button className="how-pos3 hov3 trans-04 btn-modal" onClick={this.closeModal}>
                                    <img src={imgClose} alt="CLOSE" />
                                </button>
                                <div className="modal-product">
                                    <img src={imgCart} alt="Cart" className="img-cart"/>
                                    <p>You have add <span className="product-name">{ '"' + this.props.product.name + '"' }</span> to your cart !</p>
                                </div>
                            </div>
                        </div>
                    </Modal>
                    <section className="sec-product-detail bg0 p-t-65 p-b-60">
                        <div className="container">
                            <div className="row">
                                <div className="col-md-6 col-lg-7 p-b-30">
                                    <ProductGallery medias={this.props.product.medias}/>
                                </div>
                                    
                                <div className="col-md-6 col-lg-5 p-b-30">
                                    <div className="p-r-50 p-t-5 p-lr-0-lg">
                                        <h4 className="mtext-105 cl2 js-name-detail p-b-14">
                                            { this.props.product.name }
                                        </h4>

                                        <span className="mtext-106 cl2">
                                            ${ this.props.product.price }
                                        </span>

                                        <p className="stext-102 cl3 p-t-23">
                                            { this.props.product.description }
                                        </p>
                                        
                                        <div className="p-t-33">
                                            {this.props.product.sizes.length > 0 && <Select datas={this.props.product.sizes} label="Sizes" value={this.state.size.value} change={this.handleChangeSizes.bind(this)}/>}

                                            {this.props.product.shapes.length > 0 && <Select datas={this.props.product.shapes} label="Shapes" value={this.state.shape.value} change={this.handleChangeShapes.bind(this)} />}

                                            {this.props.product.materials.length > 0 && <Select datas={this.props.product.materials} label="Materials" value={this.state.material.value} change={this.handleChangeMaterials.bind(this)} />}

                                            {this.props.product.colors.length > 0 && <Select datas={this.props.product.colors} label="Colors" value={this.state.color.value} change={this.handleChangeColors.bind(this)} />}

                                            <div className="flex-w flex-r-m p-b-10">
                                                <div className="size-204 flex-w flex-m respon6-next">
                                                    <Counter class={'flex-w m-r-20 m-tb-10'} clickMinus={this.handleClickQuantity.bind(this, '-')} clickPlus={this.handleClickQuantity.bind(this, '+')} change={this.handleChangeQuantity} inputValue={this.state.quantity.toString()}/>
                                                    <button className="flex-c-m stext-101 cl0 size-101 bg1 bor1 hov-btn1 p-lr-15 trans-04 js-addcart-detail" onClick={this.handleClickCart.bind(this)}>
                                                        Add to cart
                                                    </button>
                                                </div>
                                            </div>  
                                        </div>

                                        <div className="flex-w flex-m p-l-100 p-t-40 respon7">
                                            <div id="fb-root"></div>
                                            <div className="fb-share-button" 
                                                data-href="{{ absolute_url(path('product_detail', {'slug' : product.slug})) }}" 
                                                data-layout="button_count">
                                            </div>

                                            <a className="fs-24 cl3 hov-cl1 trans-04 lh-10 p-lr-5 p-tb-2 m-r-8 tooltip100 twitter-share-button" href="https://twitter.com/share?ref_src=twsrc%5Etfw" data-show-count="false" data-tooltip="Twitter">
                                                <i className="fa fa-twitter"></i>
                                            </a>

                                            <a href="#" className="fs-24 cl3 hov-cl1 trans-04 lh-10 p-lr-5 p-tb-2 m-r-8 tooltip100" data-tooltip="Instagram">
                                                <i className="fa fa-instagram"></i>
                                            </a>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>

                        <div className="bg6 flex-c-m flex-w size-302 p-tb-15">
                            <span className="stext-107 cl6 p-lr-25">
                                Collection : { this.props.product.collection.name }
                            </span>

                            <span className="stext-107 cl6 p-lr-25">
                                Category : { this.props.product.category.name }
                            </span>
                        </div>
                    </section>

                    <section className="sec-relate-product bg0 p-t-45 p-b-105">
                        <RelatedProducts products={this.props.products} product={this.props.product}/>
                    </section>
                </Fragment>
            );
        else
            return (<LoadingIndicator busy={this.props.fetching_product} />);
    }
}

Product.propTypes = {
    slug: PropTypes.string.isRequired,
    getProduct: PropTypes.func.isRequired,
    product: PropTypes.object,
    fetching_product: PropTypes.bool.isRequired,
    products: PropTypes.array,
    addToCart: PropTypes.func
};


// CONFIGURE REACT REDUX

const mapStateToProps = state => {
    const { fetching_product, product } = state.products;
    return { fetching_product, product };
};

const mapDispatchToProps = dispatch => (
    bindActionCreators({ getProduct, addToCart }, dispatch)
);

const hoc = connect(mapStateToProps, mapDispatchToProps)(Product);


// EXPORT COMPONENT

export { hoc as Product };