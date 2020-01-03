FROM node:12.14-alpine
WORKDIR "/app"
COPY ./package.json /app/
RUN npm install
COPY . /app/
CMD node .

