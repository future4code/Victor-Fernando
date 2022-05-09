import connection from "../../data/connection";

export const findGetPurchases = async (user_id: string): Promise<any> => {

    const users: any = []

        const result = await connection("labecommerce_purchases")
        .select("labecommerce_users.name", "labecommerce_products.name", "labecommerce_purchases.quantity", "labecommerce_purchases.total_price")
        .join("labecommerce_users", "labecommerce_purchases.user_id", "labecommerce_users.id")
        .join("labecommerce_products", "labecommerce_purchases.product_id", "labecommerce_products.id")
        .where("labecommerce_purchases.user_id", `${user_id}`)
        users.push(result) 
    
     

    console.log(users[0])
    return users[0]

}