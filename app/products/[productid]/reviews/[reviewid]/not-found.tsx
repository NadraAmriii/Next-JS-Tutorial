
"use client";
import { usePathname } from "next/navigation";


const NotFound = () => {
    const pathname = usePathname();
    const productid = pathname.split("/")[2];
    const reviewid = pathname.split("/")[4];
    return ( 
        <div>
            <p>Could not find review {reviewid} for product {productid} </p>
            <h1>404 - Page Not Found</h1>
        </div>
     );
}
 
export default NotFound;