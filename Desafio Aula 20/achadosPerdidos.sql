CREATE DATABASE escola_achados_perdidos;
USE escola_achados_perdidos;
CREATE TABLE itens(
id INT NOT NULL AUTO_INCREMENT PRIMARY KEY,
objeto VARCHAR(60) NOT NULL,
descricao VARCHAR(255) NOT NULL,
local_ VARCHAR(60),
data_ DATE,
status_ VARCHAR(20)
);
INSERT INTO itens (id, objeto, descricao, local_, data_, status_) VALUES
(1, "Calcinha", "Calcinha preta provavelmente usada encontrada proxima do assento onde o aluno Lunim fica", "Sala de Aula", "2026-05-27", "Aguardando Retirada"),
(default, "Cachimbo de Crack", "Cachimbo de Crack encontrado proximo aos escritorios da TEF", "TEF", "2026-05-20", "Entregue");

SELECT * FROM itens;

DROP TABLE itens;