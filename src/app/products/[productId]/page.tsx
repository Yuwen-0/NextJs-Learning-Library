export default function Page({
    params
}: {
    params: {
        productId: string
    }
}) {
    return (
        <h1>Product {params.productId}</h1>
    )
}