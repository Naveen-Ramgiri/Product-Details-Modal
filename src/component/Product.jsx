import React, { useState, useEffect } from 'react';
import { useParams } from 'react-router';
import { NavLink } from 'react-router-dom';
import Skeleton from 'react-loading-skeleton';

const Product = (props) => {
    const { onAdd } = props;
    const { id } = useParams();
    const [product, setProduct] = useState([]);
    const [loading, setLoading] = useState(false);

    // Api calling
    useEffect(() => {
        const getProduct = async () => {
            setLoading(true);
            const response = await fetch(`https://mocki.io/v1/2525e36d-120e-45ba-8966-1fa95d85f300/products/${id}`);
            setProduct(await response.json());
            setLoading(false);
        }
        getProduct();
    }, []);

    const Loading = () => {
        return (
            <>
                <div className="col-md-6">
                    <Skeleton height={400} />
                </div>
                <div className="col-md-6" style={{ lineHeight: 2 }}>
                    <Skeleton height={50} width={300} />
                    <Skeleton height={75} />
                    <Skeleton height={25} width={150} />
                    <Skeleton height={50} />
                    <Skeleton height={150} />
                    <Skeleton height={50} width={100} />
                    <Skeleton height={50} width={100} style={{ marginLeft: 6 }} />
                </div>
            </>
        )
    }

    const ShowProduct = () => {

        return (

            <div className='product-desc'>
                {/* Pdp starts here */}
                <div className="row">
                    <div className="col-md-6">
                        <img src={product.image} alt={product.title} />
                    </div>
                    <div className="col-md-6">
                        <h1 className="display-5">{product.title}</h1>
                        <h5 className="text-uppercase text-black-50">{product.category}</h5>
                        <p className="lead fw-bolder">
                            Rating {product.rating && product.rating.rate}
                            <i className='fa fa-star'></i>
                        </p>
                        <h3 className="display-6 fw-bold my-4">${product.price}</h3>
                        <p className="lead">{product.description}</p>
                        <button className="btn btn-primary px-4 py-2" onClick={() => onAdd(product)}>Add to Basket</button>
                        {/* <NavLink to="/cart" className="btn btn-dark ms-2 px-3 py-2">Go to Basket</NavLink> */}   
                    </div>
                </div>
                {/* Pdp ends here */}
            </div>
        )
    }


    return (
        <div>
            <div className="container py-5 my-pdp">
                <div className="row py-4">
                    {loading ? <Loading /> : <ShowProduct onAdd={onAdd} />}
                </div>
            </div>
        </div>
    )
}

export default Product