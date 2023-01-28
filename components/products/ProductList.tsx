import { Grid } from "@mui/material";

import { IProduct } from "@/interfaces";
import { ProductCard } from "./card/ProductCard";

interface Props {
    products: IProduct[];
}

export const ProductList = ({ products }: Props) => {
    return (
        <Grid container spacing={6}>
            {products.map((product, index) => (
                <ProductCard
                    key={product.slug}
                    index={index}
                    product={product}
                />
            ))}
        </Grid>
    );
};
