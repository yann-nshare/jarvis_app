FROM node:10.13.0-alpine

# ENV for jarvis
ENV ENV_NAME dev
ENV TYPE postgres
ENV HOST localhost
ENV PORT 8080
ENV DB_NAME jarvis_database
ENV DB_USER admin
ENV DB_PASS 123
ENV DB_PORT 5432

# Create repo container
# WORKDIR /home/YANN/my_projet/pool_software/jarvis_app/app
WORKDIR /app

COPY package.json .

# install all package
RUN npm install <package.json> --save-dev
RUN npm install <package.json> --save-prod
RUN npm install

# Copy all source code to work directory
ADD . /app

# TypeScript

RUN npm run start

#start
CMD [ "npm", "start"]

EXPOSE 8080