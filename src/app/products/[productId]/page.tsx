import { Metadata } from "next"

type Params = {
    params: {
        productId: string
    }
}

export const generateMetadata = async ({params} : Params): Promise<Metadata> => {
    const title = await new Promise((resolve) => {
        setTimeout(() => {
            resolve(`iPhone ${params.productId}`)
        }, 100)
    })
    return {
        title: `Product ${title}`
    }
}


export default function Page({
    params
}: Params) {
    return (
        <h1>Product {params.productId}</h1>
    )
}