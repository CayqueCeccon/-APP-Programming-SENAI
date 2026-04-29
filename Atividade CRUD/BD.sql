CREATE DATABASE loja;
USE loja;
CREATE TABLE vendas(
id_venda INT NOT NULL AUTO_INCREMENT PRIMARY KEY,
nome_produto VARCHAR(60) NOT NULL,
categoria VARCHAR(60) NOT NULL,
quantidade smallint NOT NULL,
preco DOUBLE(5, 2) NOT NULL,
total_preco DOUBLE(5, 2) NOT NULL,
data_venda DATE NOT NULL,
forma_pagamento VARCHAR(60),
nome_vendedor VARCHAR(60)
);
INSERT INTO vendas (id_venda, nome_produto, categoria, quantidade, preco, total_preco, data_venda, forma_pagamento, nome_vendedor) VALUES (1, "Banana", "Frutas", 4, 2.50, 10, '2026-04-29', "Crédito", "Lunim");

SELECT * FROM vendas;

DROP TABLE vendas;