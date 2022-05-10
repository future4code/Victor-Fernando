import { app } from "./app"
import { getAllUsers } from "./endpoints/getAllRecipes"

app.get("/recipes", getAllUsers)