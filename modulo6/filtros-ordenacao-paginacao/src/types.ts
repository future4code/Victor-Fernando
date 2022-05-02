export type recipe = {
    id: Number
    name: string
    email: string
    type: string
 }
 
 export type user = {
    id: string
    name: string
    email: string
    password: string
    recipes?: recipe[]
 }

//  id INT PRIMARY KEY,
//     name VARCHAR(255) NOT NULL,
//     email VARCHAR(255) UNIQUE NOT NULL,
//     type VARCHAR(255) NOT NULL