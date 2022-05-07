import connection from "../../data/connection";
import { v1 as geraId } from 'uuid';

export const createPostPurchases = async (user_id:string , product_id:string ): Promise<any> => {
    const novoId = String(geraId())

    const verificar = await connection("labecommerce_purchases")
        .where({user_id: user_id})

    const preco = await connection("labecommerce_products")
        .select( "price" ).where("id", `${product_id}`)
    const valores: any= await connection("labecommerce_purchases")
        .select("total_price", "quantity").where({user_id: user_id})

    
    let somaPreco = 0
    let somaQuantidade = 0

    if(!verificar){

        somaPreco = somaPreco + Number(preco[0].price)
        somaQuantidade = somaQuantidade + 1

        const result = await connection("labecommerce_purchases").insert({
            id: novoId,
            user_id: user_id,
            product_id: product_id,
            quantity: somaQuantidade,
            total_price: somaPreco

        })  
    } else{
        if(valores[0].total_price === 0 && valores[0].quantity === 0){

        somaPreco = somaPreco + Number(preco[0].price)
        somaQuantidade = somaQuantidade + 1
        let id_product = [...verificar[0].product_id, product_id]

        const result = await connection("labecommerce_purchases").update({
            product_id: id_product,
            quantity: somaQuantidade,
            total_price: somaPreco
        }) 

        } else {
            somaPreco = Number(valores[0].total_price) + Number(preco[0].price)
            somaQuantidade = valores[0].quantity + 1
            let id_product = [...verificar[0].product_id, product_id]

            const result = await connection("labecommerce_purchases").update({
                product_id: id_product,
                quantity: somaQuantidade,
                total_price: somaPreco
            }) 
        }

        
    }
    
    
    console.log(preco[0], valores)
}
