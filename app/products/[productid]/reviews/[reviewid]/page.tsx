const ProductReview = async (
    { params }: { params: Promise<{ productid: string; reviewid: string }> ;}
) => {
    const { productid, reviewid } = await params;
    return ( 
        <div>
            <p>Details of review {reviewid} for product {productid} </p>
        </div>
     );
}
 
export default ProductReview;