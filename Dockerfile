# Etapa 1: Construir a aplicação
FROM node:16 AS build

# Define o diretório de trabalho
WORKDIR /app

# Copia o package.json e o package-lock.json para o contêiner
COPY package.json package-lock.json ./

# Instala as dependências
RUN npm install

# Copia o código-fonte da aplicação para o contêiner
COPY . .

# Executa o build da aplicação
RUN npm run build

# Etapa 2: Servir a aplicação
FROM nginx:alpine

# Copia os arquivos construídos para o contêiner Nginx
COPY --from=build /app/dist /usr/share/nginx/html

# Exponha a porta 80
EXPOSE 80

# Comando padrão para executar o Nginx
CMD ["nginx", "-g", "daemon off;"]
