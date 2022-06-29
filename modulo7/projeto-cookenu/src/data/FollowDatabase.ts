import { BaseDatabase } from "./BaseDatabase"
import { CustomError } from "../error/customError";
import { follow } from "../model/follow";


export class FollowDatabase extends BaseDatabase {
    private TABLE_FOLLOWING = "cookenu_following"

    public insertFollow = async (follow: follow) => {
        try{ 
            console.log("followData")
            await FollowDatabase.connection()
                .insert({
                    id: follow.id,
                    id_user: follow.idUser,
                    id_seguido: follow.idSeguido
                })
                .into(this.TABLE_FOLLOWING)

        } catch (error: any) {
            throw new CustomError(400, error.message);
        }
    }
}