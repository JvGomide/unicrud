# Use imagem leve com Node.js
FROM node:lts-alpine

# Variável para definir diretório de trabalho
WORKDIR /app

# Melhora do cache: copia só arquivos de dependências primeiro
COPY package.json package-lock.json* ./

# Instala as dependências
RUN npm install

# Copia o restante do projeto
COPY . .

# Exponha a porta padrão do Vite
EXPOSE 5173

# Comando para dev com suporte a HMR + rede
CMD ["npm", "run", "dev", "--", "--host"]