import React from 'react';
import { Link } from 'react-router-dom';
import products from '../../data/InsuranceData';
import { useLocation } from 'react-router-dom';


const Products = ({ data }) => {
    if (data) {
        return (
        <section className="px-6 lg:-ml-6">
            <div className="mt-6 grid sm:grid-cols-2 md:grid-cols-3 gap-6">
            {data.map((product) => (
                <Link key={product.id} to={`../products/${product.name}`}>
                <div key={product.id} className="flex flex-col group shadow-lg rounded-lg bg-white transition duration-200 ease-in-out transform hover:-translate-y-3 hover:scale-105 hover:opacity-70">
                    <div className="">
                    <img
                        src={product.imageSrc}
                        alt={product.imageAlt}
                        className="object-top object-contain w-full sm:h-40 lg:h-52 xl:h-72"
                    />
                    </div>
                    <div className="mx-auto my-4 ">
                    <h3 className="sm:text-base md:text-lg xl:text-xl text-black font-medium font-sans subpixel-antialiased">
                        {product.name}
                    </h3>
                    </div>
                </div>
                </Link>
            ))}
            </div>
        </section>
        );
    }
    return (<></>);
};

const FilteredProducts = () => {
    const keyword = useLocation().pathname.split('/').pop();
    const filteredProducts = filterProducts(products, keyword);

    return (
        <div className="w-screen " >
            <section className="mt-8">
                <div className="uppercase tracking-wide font-bold text-gray-800 text-xl px-6 mx-auto w-full max-w-7xl mb-2" >
                    Sản phẩm
                </div>

                <div className="container mx-auto mb-28">
                    <Products data={filteredProducts} />
                    {/* <div className="flex justify-center w-full my-12">
                        <ChevLeft {...pages} getPage={getPage} />

                        {[...Array(size)].map((item, index) => <Page key={index} index={index} {...pages} getPage={getPage} />)}

                        <ChevRight {...pages} getPage={getPage} />
                    </div> */}
                </div>
            </section>
        </div>
    );
};

const filterProducts = (products, keyword) => {
    if (!keyword) {
        return products;
    }
    return products.filter((product) => {
        const postName = product.name.toLowerCase();
        if (postName.includes(keyword)) {
            return postName.includes(keyword);
        }
    });
};

export default FilteredProducts;