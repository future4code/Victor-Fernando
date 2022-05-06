import { app } from "./app";
import { getUsers } from "./endpoints/getUsers"
import { postUsers } from "./endpoints/postUsers"
import { getIdUsers } from "./endpoints/getIdUsers"
import { postProducts } from "./endpoints/postProducts"
import { getProducts } from "./endpoints/getProducts"
import { postPurchases } from "./endpoints/postPurchases"



app.get("/users", getUsers) 

app.post("/users", postUsers)

app.get("/users/:id", getIdUsers) 

app.post("/products", postProducts)

app.get("/products", getProducts)

app.get("/purchases", postPurchases)  