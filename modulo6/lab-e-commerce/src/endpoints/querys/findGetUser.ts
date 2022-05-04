import connection from "../../data/connection";

export const findGetUsers = async (): Promise<any> => {

    const result: any[]= await connection("labecommerce_users")

    console.log(result)
    return result

}