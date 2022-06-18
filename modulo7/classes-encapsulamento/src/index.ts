//// 1

// A) Serve para executar função pre estalecidas e retornalas assim que a class é chamada passando os parametros.
//    const user: UserAccount = new UserAccount()

// B) A mensagem aparece uma vez.

// export class UserAccount {
//     private cpf: string;
//     private name: string;
//     private age: number;
//     private balance: number = 0;
//     private transactions = [];
  
//     constructor(
//        cpf: string,
//        name: string,
//        age: number,
//     ) {
//        console.log("Chamando o construtor da classe UserAccount")
//        this.cpf = cpf;
//        this.name = name;
//        this.age = age;
//     }
  
//   }

//   const user: UserAccount = new UserAccount("Ande", "11144455566", 16)


// C) Usando o metodo getters e setters.


//// 2


class Transaction {
    private date: string;
    private value: number;
    private description: string;

    constructor(date: string, value: number, description: string){
        this.description = description;
        this.value = value;
        this.date = date;

    }

    public getDescription = () => this.description
    public getValue = () => this.value
    public getDate = () => this.date

}

class UserAccount {
  private cpf: string;
  private name: string;
  private age: number;
  private balance: number = 0;
  private transactions: Transaction[] = [];

  constructor(
     cpf: string,
     name: string,
     age: number,
  ) {
     console.log("Chamando o construtor da classe UserAccount")
     this.cpf = cpf;
     this.name = name;
     this.age = age;
  }

  public getCpf = () => this.cpf
  public getName = () => this.name
  public getAge = () => this.age

}


// 3 

class Bank {
    private accounts: UserAccount[];
  
    constructor(accounts: UserAccount[]) {
      this.accounts = accounts;
    }

    public getAccounts = () => this.accounts
  
}