import { app } from "./app";
import { getUsers } from "./endpoints/getUsers"
import { postUsers } from "./endpoints/postUsers"
import { postProducts } from "./endpoints/postProducts"

app.get("/users", getUsers)

app.post("/users", postUsers)

app.post("/products", postProducts)