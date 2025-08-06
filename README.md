# NAGP Kubernetes Demo Project

This project demonstrates a simple containerized CRUD API application deployed on a Kubernetes cluster. It uses a backend database running in the same cluster for data persistence.

## 🔗 Useful Links

- **Source Code Repository:** [nksachdeva/nagp_k8_demo](https://github.com/nksachdeva/nagp_k8_demo)
- **Docker Hub Images:** [naveensachdeva/nagp-nodejs-app](https://hub.docker.com/r/naveensachdeva/nagp-nodejs-app)

- **Sampe API Endpoint Call (GET Request):** <pre> ```cmd curl.exe -H "Host: nagp.demo.com" http://34.93.206.244/items ``` </pre>
- **Component folders in repo:** 
    - nodejs app code + Dockerfile : [/nodejs-app](https://github.com/nksachdeva/nagp_k8_demo/tree/main/nodejs-app)
    - nodejs app yaml files : [/nodejs-app-yamls](https://github.com/nksachdeva/nagp_k8_demo/tree/main/nodejs-app-yamls)
    - postgres db yaml files : [/postgres-db](https://github.com/nksachdeva/nagp_k8_demo/tree/main/postgres-db)

## 📦 Features

- RESTful API supporting CRUD operations
- Backend database with persistent storage using PVC
- Secure configuration using Kubernetes Secrets and ConfigMaps
- Exposed via Kubernetes Service and Ingress
- Production-ready setup with rolling updates and decoupled configuration

## 🛠 Tech Stack

- Node.js
- PostgreSQL / MySQL (your DB)
- Docker
- Kubernetes
