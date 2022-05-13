//// 1

class User {
    private id: string;
    private email: string;
    private name: string;
    private password: string;
  
    constructor(
          id: string,
          email: string,
          name: string,
          password: string
      ){
          console.log("Chamando o construtor da classe User")
          this.id = id
          this.email = email
          this.name = name 
          this.password = password
      }
  
      public getId(): string {
          return this.id
      }
  
      public getEmail(): string {
          return this.email
      }
  
      public getName(): string {
          return this.name
      }

      public interoduceYourself(): string {
        return `Olá, sou ${this.name} Bom dia!`
     }
  }

  const newUser = new User("1", "teste@gamil.com", "teste", "1234")

//   console.log(newUser.getId(), newUser.getEmail(), newUser.getName())

// A) Sim mais ele vem com as outras imformações mas somente a password não.

// B) Apenas uma vez.


//// 2

class Customer extends User {
    public purchaseTotal: number = 0;
    private creditCard: string;
  
    constructor(
      id: string,
      email: string,
      name: string,
      password: string,
      creditCard: string
    ) {
      super(id, email, name, password);
      console.log("Chamando o construtor da classe Customer");
      this.creditCard = creditCard;
    }
  
    public getCreditCard(): string {
      return this.creditCard;
    }
}

const newUser2 = new Customer("1", "teste@gamil.com", "teste", "1234", "4566665544")

// console.log(newUser2.getCreditCard())


// A) Uma vez.

// B) Duas vezes, aprimeira é da class pais e a segunda foi porque a class filha camou a class pai.


//// 3

newUser2.purchaseTotal = 300

// console.log(newUser2)


//// 4

console.log(newUser2.interoduceYourself(), newUser2)

//// 5 
console.log(newUser2.interoduceYourself(), newUser2)
