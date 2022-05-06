import connection from "../../data/connection";

export const findGetUsers = async (id?: Number): Promise<any> => {

    const users: any = []

    if(id){
        const result = await connection("labecommerce_users")
        .where({id: id})
        users.push(result)
    } else{
        const result = await connection("labecommerce_users")
        users.push(result)
    }
    

    console.log(users[0])
    return users[0]

}