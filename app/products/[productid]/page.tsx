

import { Metadata } from "next";

type Props = {
    params : Promise<{ productid: string }>;
};
export const  generateMetadata = async ({ params,

 }: Props): Promise<Metadata> => {
    const id = (await params).productid;// Extracting productid from params
    const title = await new Promise((resolve) => {
        setTimeout(() => {
            resolve(`iphone ${id} Details`);
        },100);
    });
    return {
        title: `Product ${title} `,
    };

};


const DetailsProduct = async ({ params }: { params: { productid: string } }) => {
    const productid = (await params).productid;
    return ( 

        <div>
            <p>Details of product {productid} </p>
        </div>
     );
}
 
export default DetailsProduct;