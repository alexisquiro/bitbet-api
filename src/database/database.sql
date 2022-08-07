CREATE TABLE Usuario(
    id_user SERIAL PRIMARY KEY,
    nombre_usuario VARCHAR(30) UNIQUE NOT NULL,
	email VARCHAR(50) UNIQUE NOT NULL,
	pass VARCHAR(100) NOT NULL
);
CREATE TABLE Game(
    id_game SERIAL PRIMARY KEY,
    team1 VARCHAR(30) NOT NULL,
	team2 VARCHAR(30) NOT NULL,
	game_date date NOT NULL,
	winner integer default NULL
);
CREATE TABLE Ticket_Bet(
    id_ticket SERIAL PRIMARY KEY,
	id_user INTEGER NOT NULL,
    id_game integer NOT NULL,
	team VARCHAR (30) NOT NULL,
	email_pay VARCHAR (50)NOT NULL,
	hash_pay VARCHAR (100) NOT NULL,
	amount INTEGER  NOT NULL,
	confirm INTEGER NOT NULL,
    CONSTRAINT FK_IdUser FOREIGN KEY (id_user) REFERENCES Usuario(id_user),
    CONSTRAINT FK_IdGame FOREIGN KEY (id_game) REFERENCES Game(id_Game)

);


