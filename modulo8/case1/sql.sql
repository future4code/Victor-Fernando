-- Active: 1655943362138@@35.226.146.116@3306@joy-420029-victor-santos
CREATE TABLE case_competicoes(
	id VARCHAR(255) PRIMARY KEY,
	name VARCHAR(255) NOT NULL
);

ALTER TABLE case_competicoes
CHANGE encerrada encerrada VARCHAR(2) DEFAULT 'F';

ALTER TABLE case_competicoes
CHANGE name competicao VARCHAR(255) NOT NULL;

SELECT * FROM case_competicoes;
