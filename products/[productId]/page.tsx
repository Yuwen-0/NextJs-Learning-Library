export default function ProductPage({
    params 
}: { 
    params: { productId: number } 
}) {
    return <h1>Details About Product {params.productId}</h1>
}