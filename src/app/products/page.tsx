import Button from "@/components/Button/Button";
import { Suspense } from "react";

export default function Page(){
    
    return(
        <>
            <h1>Products List</h1>
            <h2>Product 1</h2>
            <h2>Product 2</h2>
            <h2>Product 3</h2>
            <Suspense>
                <Button>Click</Button>
            </Suspense>
        </>
    )
}

