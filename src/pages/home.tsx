import React, { useEffect, useState } from 'react';
import Data from '../components/data';
import { getProducts,deleteProducts } from './../apis/productApi';
import ProductItem from './../components/product'

type Product = {
    id : number,
    name : string
}
const Home = () => {

    const [products, setProduct] = useState<Product[]>([]);
    const [loading,setLoading] = useState(false)

    useEffect(() => {
        async function startCallData() {
            setLoading(true)
            const data = await getProducts();
            // console.log(data.data);
            setProduct(data.data)
            setLoading(false)
        }
        startCallData();
    }, []);
    
    const deleteProduct = async(id:number) => {
        const data = await deleteProducts(id);
        console.log(data);
        
    }
    // const khonghieu = (data : string) => {
    //     console.log(`hello ${data}`);
    // }

    return (
        <div>
            {/* <Data khohieuqua="kho hieu qua" khong={khonghieu} /> */}
            {products.map(item => {
                return <ProductItem item={item} delete={deleteProduct} />
            })}
        </div>
    );
};

export default Home;