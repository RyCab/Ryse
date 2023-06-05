import React from 'react';
import { Grid } from '@material-ui/core';

import Product from './Product/Product';

const products = [
    {id:1, name: 'Shoes', description: 'Running shoes.', price: '$5', image: 'https://www.google.com/url?sa=i&url=https%3A%2F%2Fwww.goat.com%2Fsneakers%2Foff-white-x-air-jordan-1-retro-high-og-aa3834-101&psig=AOvVaw18H-IveHsbssZFZaDuBtSF&ust=1686026216305000&source=images&cd=vfe&ved=0CBAQjRxqFwoTCOj51J-nq_8CFQAAAAAdAAAAABAF'},
    {id:2, name: 'Macbook', description: 'Apple Macbook.', price: '$10', image: 'https://www.google.com/url?sa=i&url=https%3A%2F%2Fwww.cnet.com%2Freviews%2Fapple-macbook-2015-review%2F&psig=AOvVaw08yfPI_0U1GdyqA6DrPjYI&ust=1686026173341000&source=images&cd=vfe&ved=0CBAQjRxqFwoTCLiRu4unq_8CFQAAAAAdAAAAABAG'},
];

const Products = () => {
    return (
        <main>
            <Grid container justify="center" spacing={4}>
                {products.map((product) => (
                    <Grid item key={product.id} xs={12} sm={6} md={4} lg={3}>
                        <Product product={product} />
                    </Grid>
                ))}
            </Grid>
        </main>
    )
}

export default Products;