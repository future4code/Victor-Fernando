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

# c)



