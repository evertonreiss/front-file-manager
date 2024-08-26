# File Manager (Front-end)

![image](https://github.com/user-attachments/assets/0cc4852a-9f04-46c6-bec8-44a81d7faf33)

## Back End
Esta aplicação é o front-end da API disponível no repositório [front-end-file-manager](https://github.com/evertonreiss/front-file-manager), acesse o link e siga os passo para a instalação para utilizar os recursos.

## Pré-requisitos

Ferramentas necessárias para iniciar o projeto:

- [Git](https://git-scm.com/)
- [Docker](https://www.docker.com/)
- [Docker Compose](https://docs.docker.com/compose/)

## Instruções de Instalação da Api

Siga os passos abaixo para configurar e iniciar a aplicação:

### 1. Clone o Repositório

No terminal, execute o comando abaixo para clonar o repositório:

```bash
git clone https://github.com/evertonreiss/front-file-manager
```

### 2. Entre na Pasta do Projeto

Navegue até o diretório do projeto:

```bash
cd file-manager
```

### 3. Fazer Build do Contêiner

Execute o seguinte comando para buildar a imagem

```bash
docker build -t front-end-file-manager .
```

### 4. Iniciar Aplicação

Execute o comando para iniciar o contêiner da aplicação em segundo plano na porta 8080:

```bash
docker run -d -p 8080:80 --name front-end-file-manager front-end-file-manager-image
```

### 6. Comandos Úteis

- Iniciar aplicação:

  ```bash
  docker run -d -p 8080:80 front-end-file-manager
  ```

- Parar aplicação:

  ```bash
  docker stop front-end-file-manager
  ```

## Uso
Para utilizar a aplicação, acesse: `localhost:8080`


## Contribuições
Fique a vontade para contribuir ou reportar problemas!
