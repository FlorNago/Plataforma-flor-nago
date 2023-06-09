/*Banco de dados Flor Nagô
Alinny Ribeiro e Kawany França*/

CREATE DATABASE IF NOT EXISTS Flor_Nago;

USE Flor_Nago;

CREATE TABLE IF NOT EXISTS Genero(
id_genero 			int				auto_increment primary key,
nm_genero			varchar(50)		not null,
abr_genero			char(12)
);

CREATE TABLE IF NOT EXISTS Logradouro(
id_logradouro 		int 			auto_increment primary key,
cep					int				not null,
nome_rua			varchar(500)	not null				
);

CREATE TABLE IF NOT EXISTS Usuario(
id_usuario 			int     		auto_increment primary key,
nm_usuario			varchar(300)	not null,
telefone_usuario 	int				not null,
email_usuario 		varchar(300)	not null,
senha_usuario		varchar(300)	not null,
dt_nascimento		date			not null,
cpf					varchar(11),
verificacao			bit 			not null,
dt_criacao			date			not null,
arroba_usuario		varchar(100)	not null,
id_genero			int,
foreign key (id_genero) references genero(id_genero)
);

CREATE TABLE IF NOT EXISTS Usuario_Empreendedor(
id_usuarioMei 			int     		auto_increment,
id_usuario				int				not null,
telefone_Comercial 		int 			not null,
cnpj					int,
email_Comercial 		varchar(300)	not null,
localizacao				varchar(300)	not null,
horario_Abertura		time,
horario_Encerramento	time,
ds_negocio				varchar(600)	not null,
nr_endereço				varchar(10),
complemento_endereco	varchar(50),
arruba_Negocio			varchar(100)	not null,
primary key(id_usuarioMei, id_usuario),
foreign key (id_usuarioMei) references Usuario(id_usuario)
);

CREATE TABLE IF NOT EXISTS Usuario_Seguidor(
id_usuarioSeguidor 		int     		auto_increment,
id_usuario				int				not null,
dt_follow				datetime,
primary key(id_usuarioSeguidor, id_usuario),
foreign key (id_usuario) references Usuario(id_usuario)
);

CREATE TABLE IF NOT EXISTS Postagem(
id_postagem 			int     		auto_increment,
id_usuario				int				not null,
ds_postagem				varchar(700),
img_postagem			longblob,
dt_postagem				datetime		not null,
primary key(id_postagem, id_usuario),
foreign key (id_usuario) references Usuario(id_usuario)
);

CREATE TABLE IF NOT EXISTS Curtida_Postagem(
id_UsuarioPostagem 			int     		auto_increment,
id_UsuarioSeguidor			int				not null,
curtida						bit				not null,
dt_curtida					datetime		not null,
primary key(id_UsuarioPostagem , id_UsuarioSeguidor),
foreign key (id_UsuarioPostagem) references Postagem(id_postagem )
);

CREATE TABLE IF NOT EXISTS Comentario_Postagem(
id_UsuarioPostagem 			int     		auto_increment,
id_UsuarioSeguidor			int				not null,
ds_comentario				varchar(700)	not null,
dt_curtida					datetime		not null,
primary key(id_UsuarioPostagem , id_UsuarioSeguidor),
foreign key (id_UsuarioPostagem) references Postagem(id_postagem)
);

CREATE TABLE IF NOT EXISTS Mensagem(
id_mensagem						int				auto_increment,
ds_mensagem						varchar(500)	not null,
dt_mensagem						datetime		not null,
id_UsuarioMensagem				int				not null,
id_UsuarioSeguidorMensagem		int				not null,
primary key (id_mensagem),
foreign key (id_UsuarioMensagem) references Usuario(id_usuario),
foreign key (id_UsuarioSeguidorMensagem) references Usuario_Seguidor(id_usuarioSeguidor)
);

show tables;
desc Genero;
desc Logradouro;
desc Usuario;
desc Usuario_Empreendedor;
desc Usuario_Seguidor;
desc Postagem;
desc Curtida_Postagem;
desc Comentario_Postagem;
desc Mensagem;
