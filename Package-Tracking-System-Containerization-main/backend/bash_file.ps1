

#docker network create my-network 
docker rm -f database backend-container frontend-container

docker run -d --name database --network my-network -p 27017:27017 mongo:6.0
sleep 5 

#docker build -t backend-image .
sleep 5
docker run -d --name backend-container --network my-network -p 3000:3000 --env MONGO_URI="mongodb://database:27017/Package_Tracking_System/" backend-image
cd ..

#docker build -t frontend-image .
sleep 5
docker run -d --name frontend-container -p 3001:3000 frontend-image

#docker exec -it database bash -c "apt-get update && apt-get install -y mongodb-tools"
sleep 5
