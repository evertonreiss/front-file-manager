# File Manager (Front-end)

![Image do app](https://private-user-images.githubusercontent.com/102697614/361577598-31e7751a-dd7c-4aa8-b097-00d9ef446558.png?jwt=eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJnaXRodWIuY29tIiwiYXVkIjoicmF3LmdpdGh1YnVzZXJjb250ZW50LmNvbSIsImtleSI6ImtleTUiLCJleHAiOjE3MjQ3MDY4MzUsIm5iZiI6MTcyNDcwNjUzNSwicGF0aCI6Ii8xMDI2OTc2MTQvMzYxNTc3NTk4LTMxZTc3NTFhLWRkN2MtNGFhOC1iMDk3LTAwZDllZjQ0NjU1OC5wbmc_WC1BbXotQWxnb3JpdGhtPUFXUzQtSE1BQy1TSEEyNTYmWC1BbXotQ3JlZGVudGlhbD1BS0lBVkNPRFlMU0E1M1BRSzRaQSUyRjIwMjQwODI2JTJGdXMtZWFzdC0xJTJGczMlMkZhd3M0X3JlcXVlc3QmWC1BbXotRGF0ZT0yMDI0MDgyNlQyMTA4NTVaJlgtQW16LUV4cGlyZXM9MzAwJlgtQW16LVNpZ25hdHVyZT01MDc2NmRmODdkOWVjMmE1YTJjMjhhNDU3Mzc1NWFmYjE1ODA4YTBhZWZhNmQ1NDk3ZjY3NDA5Y2MyYTBhMjlhJlgtQW16LVNpZ25lZEhlYWRlcnM9aG9zdCZhY3Rvcl9pZD0wJmtleV9pZD0wJnJlcG9faWQ9MCJ9.ZxGRWr53C553b-6UpVFH2xoIuj4g4k_gEUtVVNV26b4)

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
