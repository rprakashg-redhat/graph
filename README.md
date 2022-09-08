# Overview
This is a simple GraphQL server written in typescript and uses Apollo GraphQL. Currently only query operation is implemented and real times queries data from three different REST endpoints and MongoDB database

Source code for the REST apis this server queries can be found [here](https://github.com/rprakashg-redhat/scheduler). Its a Java/Quarkus application that reads and writes data from a PostgreSQL database all running on OpenShift.

## Building the server
Follow steps below to build this server. Before you can build the server 

1) Deploy the REST Apis. Follow instructions in this [repo](https://github.com/rprakashg-redhat/scheduler)

2) Create a MongoDB database. For this demo I used the free tier option with Monodb atlas service and stood up a cluster and created a database named graph with a collection called reviews. You also need to create a service account to connect to this database. Be sure to allow connection from any IP. Obviously don't do that for production usecases but for demo/learning its ok to do that.  Once you have created some sample data using the CRUD operations exposed in the REST endpoints you can add some reviews in the mongoDB database using the sample JSON provided in the data folder. Be sure to replace the session id with your own values 

3) Clone this repo and add an .env file and include the code below in the .env file

```
SCHEDULER_URL={replace with the URL to access the scheduler quarkus application}
DATABASE_URL={replace with URL to connect to MongoDB database}
```

4) To start the server in development environment you can run command below

```
yarn run dev
```

5) To build a container image using podman run command below

```
podman build -t graph -f ./.ci/Dockerfile .
```

6) Push the container image to a registry

7) Deploy the server to OpenShift using Helm chart. Be sure to replace the ContainerImage value in the Values file with the full path to the container image. 

Be sure to create a secret named 'reviews-db-secret' that contains a key CONNECTION_STRING which will have connection string value to connect to the MongoDB database

```
helm upgrade -i graph ./deploy/k8s/helm -f ./deploy/k8s/helm/Values.yaml
```
