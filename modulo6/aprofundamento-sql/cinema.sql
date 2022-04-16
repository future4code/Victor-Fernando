USE `joy-420029-victor-santos`;

SET SQL_SAFE_UPDATES = 0;

## 1
ALTER TABLE Actor ADD favorite_ice_cream_flavor VARCHAR(255);

ALTER TABLE Actor ADD type VARCHAR(255) DEFAULT "NotDirector";

# a) Essa query delataria a coluna salary.

# b) Essa query altera o nome da coluna gender para sex e a quatidade de caracteres para 6.

# c) Essa query não funcionaria porque a query anterio mudou o nome da coluna.
#   E se não considerar a query anterio essa coluna passaria a aceitar o valor null. 

# d) 
ALTER TABLE Actor CHANGE gender gender VARCHAR(100);


## 2

# a)
UPDATE Actor
SET
	name = "Angelica Franco",
    birth_date = "2020-02-10"
WHERE id = 3;

# b)
UPDATE Actor
SET name = "JULIANA PAES"
WHERE name ="Juliana Paes";

UPDATE Actor
SET name = "Juliana Paes"
WHERE name ="JULIANA PAES";

# c) 
UPDATE Actor
SET 
name = "Moacyr Franco",
birth_date = "2020-02-10",
salary = 600000,
gender = "male"
WHERE id = 5;

# d)

UPDATE Actor
SET 
salary = 600000
WHERE id = 7;
# A query funcionao mas não atualizou nenhum dado porque a coluna não existe.


## 3

# a)
DELETE FROM Actor WHERE name = "Fernanda Montenegro";

# b) 
DELETE FROM Actor
WHERE 
	gender = "male" AND
    salary > 1000000;
    
## 4

# a)
SELECT MAX(salary) FROM Actor;

# b)
SELECT MIN(salary) FROM Actor WHERE gender = "female";

# c)
SELECT COUNT(*) FROM Actor WHERE gender = "female";

# d)
SELECT SUM(salary) FROM Actor;


## 5

# a) Essa query separa os atores por sexo e retora a quantidade de cada um em uma tabela.

SELECT COUNT(*), gender
FROM Actor
GROUP BY gender;

# b)
SELECT id, name FROM Actor ORDER BY name ASC;

# c)
SELECT * FROM Actor ORDER BY salary DESC;

# d)
SELECT * FROM Actor ORDER BY salary DESC LIMIT 3;

# e)
SELECT AVG(salary), gender
FROM Actor
GROUP BY gender;


## 6

# a)
ALTER TABLE Filmes ADD limite_data_cinema DATE;


# b)
ALTER TABLE Actor CHANGE nota nota FLOAT;

# c)
UPDATE Filmes
SET
	limite_data_cinema = "2020-12-31"
WHERE id = 2;
UPDATE Filmes
SET
	limite_data_cinema = "2022-07-31"
WHERE id = 3;

# d)
DELETE FROM Filmes WHERE id = 4;

UPDATE Filmes
SET
	sinopse = "Conta a história dos Madrigal, uma família extraordinária que vive escondida nas montanhas da Colômbia, 
				em uma casa mágica, em uma cidade vibrante, em um lugar maravilhoso conhecido como um Encanto."
WHERE id = 4;

# A query funcionou mas não atualizou nenhum dado porque a coluna não existe mais.
