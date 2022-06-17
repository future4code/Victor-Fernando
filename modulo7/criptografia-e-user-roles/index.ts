// 1

//// A) round faz a criptografia e o salt adiciona string para dificultar caso seja raquado.
// O valor recomendado é 12. 

//// B,C

import * as bcrypt from "bcryptjs";


 const hash = async(s: string): Promise<string> => {
    const rounds = Number(process.env.BCRYPT_COST);
    const salt = await bcrypt.genSalt(rounds);
    const result = await bcrypt.hash(s, salt);
    return result;
  }

 const compare = async(s: string, hash: string): Promise<boolean> => {
    return bcrypt.compare(s, hash);
  }


  // 1

  //// A) O cadastro para que a criptografia seja feita antes de salvar no banco.

  //// B)

//   app.post("/signup", async (req: Request, res: Response) => {
//     try {
//       const userData = {
//         email: req.body.email,
//         password: req.body.password
//       };
    
//       const id = generate();
  
//       const hashPassword = await hash(userData.password);
  
//       await createUser(id, userData.email, hashPassword);
  
//       const token = generateToken({
//         id
//       });
  
//       res.status(200).send({
//         token,
//       });
//     } catch (err) {
//       res.status(400).send({
//         message: err.message,
//       });
//     }
//   });


// C) 

// app.post("/login", async (req: Request, res: Response) => {
//     try {
//       if (!req.body.email || req.body.email.indexOf("@") === -1) {
//         throw new Error("Invalid email");
//       }
  
//       const userData = {
//         email: req.body.email,
//         password: req.body.password,
//       };
  
//       const user = await getUserByEmail(userData.email);
  
//       const comapreResult = await compare(
//         userData.password,
//         user.password
//       );
  
//       if (!compareResult) {
//         throw new Error("Invalid password");
//       }
  
//       const token = generateToken({
//         id: user.id    
//           });
  
//       res.status(200).send({
//         token,
//       });
//     } catch (err) {
//       res.status(400).send({
//         message: err.message,
//       });
//     }
//   });


// D) Não pos a aleração ira acontecer na senha e não no token.