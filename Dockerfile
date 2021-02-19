FROM node:10.13.0-alpine

# ENV for jarvis
ENV ENV_NAME dev

# Create repo container
WORKDIR /home/YANN/my_projet/pool_software/jarvis_app/app

COPY package.json .

# install all package
RUN npm install

# Copy all source code to work directory
ADD . /home/YANN/my_projet/pool_software/jarvis_app/app

# TypeScript
RUN npm run tsc

#start
CMD [ "npm", "start"]

# EXPOSE 7001