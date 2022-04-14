USE `joy-420029-victor-santos`;

CREATE TABLE Actor (
	id VARCHAR(255) PRIMARY KEY,
    name VARCHAR(255) NOT NULL,
    salary FLOAT NOT NULL,
    birth_date DATE NOT NULL,
    gender VARCHAR(6) NOT NULL
);

## 1
# a) O varchar que dizer que espera uma string e o numero em parenteses
# quer dizer a quantidade de letras permitidas, e também tem o date quer
# dizar que espera uma data.

# b) DEu erro.
# SHOW TABLES Actor;

# c) Mostra a descrição da tabela, toda a estrutura.
DESCRIBE Actor;

DROP TABLE Actor;
DESCRIBE Actor;
DELETE FROM Actor
WHERE id = "001";

INSERT INTO Actor (id, name, salary, birth_date, gender)
VALUES(
  "001", 
  "Tony Ramos",
  400000,
  "1948-08-25", 
  "male"
);

INSERT INTO Actor (id, name, salary, birth_date, gender)
VALUES(
  "002", 
  "Glória Pires",
  1200000,
  "1963-08-23", 
  "female"
);

INSERT INTO Actor (id, name, salary, birth_date, gender)
VALUES(
  "003", 
  "Fernanda Montenegro",
  300000,
  "1929-10-19", 
  "female"
);

INSERT INTO Actor (id, name, salary, birth_date, gender)
VALUES(
  "004",
  "Chico Anizio",
  400000,
  "1949-04-18", 
  "male"
);

INSERT INTO Actor (id, name, salary, birth_date, gender)
VALUES(
  "005", 
  "Juliana Paes",
  719333.33,
  "1979-03-26", 
  "female"
);

## 3
SELECT * FROM Actor;
SELECT id, salary FROM Actor;
SELECT id, name FROM Actor WHERE gender = "male";

# a)
SELECT * FROM Actor WHERE gender = "female";

# b)
SELECT salary FROM Actor WHERE name = "Tony Ramos";

# c) Na criação da tabela foi declarado que o gender não pode receber o valor null,
# logo ao fazer essa query não retornanra nenhu valor.

# d) 
SELECT id, name, salary FROM Actor WHERE salary < 500000;

# e) O erro acontece por buscar uma coluna com nome errado ou que não existe na tabela.
SELECT id, name from Actor WHERE id = "002";


## 4
SELECT * FROM Actor
WHERE (name LIKE "A%" OR name LIKE "J%") AND salary > 300000;

# a) A query vai buscar todos os nomes que comecem com A ou J e tem o salario maior que R$300.000.

# b)
SELECT * FROM Actor
WHERE name NOT LIKE "A%"  AND salary > 350000;

# c)
SELECT * FROM Actor
WHERE name LIKE "%G%" OR name LIKE "%g%";

# d)
SELECT * FROM Actor
WHERE 
	(name LIKE "%A%" OR name LIKE "%a%" OR name LIKE "%G%" OR name LIKE "%g%") 
	AND salary BETWEEN 350000 AND 900000;
    
## 5
CREATE TABLE Filmes (
	id INT PRIMARY KEY,
    nome VARCHAR(255) NOT NULL,
    sinopse VARCHAR(500) NOT NULL,
    data_lançamento DATE NOT NULL,
    nota FLOAT
);

# a) A query acime cria uma nova tabela chamada Filmes.

# b)
INSERT INTO Filmes (id, nome, sinopse, data_lançamento,	nota)
values(
	001,
	"Se Eu Fosse Você",
	"Cláudio e Helena são casados há muitos anos e enfrentam a rotina do casamento. 
		Um dia eles são atingidos por um fenômeno inexplicável e trocam de corpos.",
	"2006-01-06",
	7
);

# c)
INSERT INTO Filmes (id, nome, sinopse, data_lançamento,	nota)
values(
	002,
	"Doce de mãe",
	"Dona Picucha, uma animada senhora de 85 anos, sempre causa grandes confusões. 
		A vida dela e dos seus quatro filhos sofre uma reviravolta depois que Zaida, 
        empregada e amiga de Dona Picucha, anuncia que vai se casar e não poderá mais morar com ela.",
	"2012-12-27",
	10
);

# d)
INSERT INTO Filmes (id, nome, sinopse, data_lançamento,	nota)
values(
	003,
	"Doce de mãe",
	"Dona Flor é uma sedutora professora de culinária casada com Vadinho, 
		que só quer saber de farras e jogatina nas boates. 
        A vida de abusos acaba por acarretar sua morte precoce.",
	"2017-11-02",
	8
);

# e) 
INSERT INTO Filmes (id, nome, sinopse, data_lançamento, nota)
values(
	"004",
    "Deus é Brasileiro",
    "Cansado da humanidade, Deus resolve tirar férias para descansar e procura alguém no 
		Brasil capaz de substituí-lo. O borracheiro e pescador Taoca e a solitária 
        Madá deverão guiá-lo até Quincas das Mulas, candidato de Deus a santo.",
    "2003-01-31",
    9
);

## 6

# a)
SELECT id, nome, nota FROM Filmes WHERE id = 2;

# b)
SELECT * FROM Filmes WHERE nome = "Deus é Brasileiro";

# c)
SELECT id, nome, sinopse FROM Filmes WHERE nota >= 7;


## 7

# a)
SELECT * FROM Filmes
WHERE nome LIKE "%vida%";

# b)
SELECT * FROM Filmes
WHERE 
	nome LIKE "%Dona%" OR sinopse LIKE "%Dona%";
    
# c)
SELECT * FROM Filmes
WHERE data_lançamento < "2022-04-13";

# d)
SELECT * FROM Filmes
WHERE nome LIKE "%Dona%" OR sinopse LIKE "%Dona%"
	AND nota > 7 
    AND data_lançamento < "2015-04-13";




