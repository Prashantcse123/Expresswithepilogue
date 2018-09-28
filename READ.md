Stepwise run the project:

sudo docker-compose build
sudo docker-compose up -d

Run command in terminal to check for connectivity with postgresql
psql -h localhost -p 5432 -U docker -W docker -d  postgres

//create first model with sequelize
node_modules/.bin/sequelize model:generate --name User --attributes firstName:string,lastName:string,email:string