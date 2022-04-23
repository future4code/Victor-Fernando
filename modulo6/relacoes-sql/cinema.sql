# 1

CREATE TABLE Rating (
	id VARCHAR(255) PRIMARY KEY,
    comment TEXT NOT NULL,
	rate FLOAT NOT NULL,
    filmes_id INT,
    FOREIGN KEY (filmes_id) REFERENCES Filmes(id)
);

## a) È o id usado para relacionar as tabelas.alter

## b)
INSERT INTO Rating VALUES("001", "Otimo filme para ver rem familia.", 7.5, 1);
INSERT INTO Rating VALUES("002", "Uma historia muito legal.", 8, 2);
INSERT INTO Rating VALUES("003", "Historia triste.", 7.2, 3);

## c) Da um erro que não é possivel adiciona uma linha filho com chave estrangeira falha.
INSERT INTO Rating VALUES("004", "Filme legal.", 7, 5);

## d)
ALTER TABLE Filmes DROP COLUMN rating;

## e) Não é possivel excluir uma linha de uma tabela que tenha chave estrangeira.
DELETE FROM Filmes WHERE id = 3;


# 2


