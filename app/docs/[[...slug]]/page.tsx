const Docs = async ({params,} : {
    params : Promise<{slug: string[]}>;
}) => {
    const {slug} = await params;
    if(slug?.length === 2){
    return ( 
        <div>
            <p>Viewing doc for feature {slug[0]} and concept {slug[1]} </p>
        </div>
     );
    } else if (slug?.length === 1){
        return ( 
            <div>
                <p>Viewing doc for feature {slug[0]} </p>
            </div>
         );
    } else {
        return ( 
            <div>
                <p>Docs Home Page </p>
            </div>
         );
    }
}
 
export default Docs;

