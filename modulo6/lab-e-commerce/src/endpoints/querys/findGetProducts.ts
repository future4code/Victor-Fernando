import connection from "../../data/connection";

export const findGetProducts = async (id?: Number): Promise<any> => {

    const users: any = []

    if(id){
        const result = await connection("labecommerce_products")
        .where({id: id})
        users.push(result)
    } else{
        const result = await connection("labecommerce_products")
        users.push(result)
    }
    

    console.log(users[0])
    return users[0]  

}