import connection from "../../data/connection";
import { v1 as geraId } from 'uuid';

export async function createPostProducts(name:string, price:string, imageUrl:string ): Promise<void> {
    
    const result = await connection("labecommerce_users").insert({
        id: String(geraId),
        name: name,
        price: price,
        image_url: imageUrl
    })
}
