import { useEffect, useState } from "react";
import { fetchProducts } from "../services/productService";
import ProductCard from "./ProductCard"

function ProductGrid() {
    const [products, setProducts] = useState([]);
    const [loading, setLoading] = useState(true);
    useEffect(() => {
        fetchProducts()
            .then(data => {
                setProducts(data);
                setLoading(false);
            })
            .catch(error => {
                console.error(error);
                setLoading(false);
            });
    }, []);

    if (loading) return <p>Loading products...</p>;

    console.log(products);

    return(
        <>
            <section className="mx-auto w-full py-8">
                <div className="flex flex-wrap justify-center gap-6">
                    {/* {
                        products.map((product) => {
                            return <ProductCard key={product.name} name={product.name} price={product.price} stock={product.stock}/>
                        })
                    } */}
                    <ProductCard />
                    <ProductCard />
                    <ProductCard />
                    <ProductCard />
                    <ProductCard />
                    <ProductCard />
                    <ProductCard />
                </div>
            </section>
        </>
    )
}

export default ProductGrid