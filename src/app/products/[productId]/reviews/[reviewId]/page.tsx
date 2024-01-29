import {notFound} from 'next/navigation'
import { parse } from 'path'

export default function Reviews({
    params
}: {
    params: {
        productId: string
        reviewId: string
    }
}) {
    if(parseInt(params.productId) > 1000){
        notFound()
    }
    return (
        <h1>Product {params.productId} Review {params.reviewId}</h1>
    )
}