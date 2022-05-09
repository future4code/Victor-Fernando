import connection from "../../data/connection";
import { v1 as geraId } from 'uuid';

export const createPostPurchases = async (user_id:string , product_id:string, quantity:Number ): Promise<any> => {
    const novoId = String(geraId())

    const produto = await connection("labecommerce_products")
        .where("id", `${product_id}`)
    

    
    let somaPreco = 0

    somaPreco = Number(produto[0].price) * Number(quantity)

    const result = await connection("labecommerce_purchases").insert({
        id: novoId,
        user_id: user_id,
        product_id: product_id,
        quantity: quantity,
        total_price: somaPreco
    })
    
    console.log(produto[0])
}
