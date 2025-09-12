const DetailsProduct = async ({ params }: { params: { productid: string } }) => {
    const productid = (await params).productid;
    return ( 

        <div>
            <p>Details of product {productid} </p>
        </div>
     );
}
 
export default DetailsProduct;