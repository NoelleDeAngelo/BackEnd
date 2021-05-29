# Parley Backend
A back-end server for the Parley app that connects users through  Websockets and uploads audio recordings to AWS S3

## Tech Stack

- [Node](https://nodejs.org/en/)
- [Express](https://expressjs.com/)
- [PeerJS](https://peerjs.com/)
- [AWS S3](https://aws.amazon.com/s3/)
- [Socket.io](https://socket.io/)

## Getting Started

* Install PeerJS globaly
``` sh 
npm install -g peer
```
* Install npm packages
``` sh 
npm install
```
* Create .env file
  * Add S3 Credentials
    * Access Key
    * Secret Access Key
    * Region
    * Bucket
 
## Usage

* Start peerJS server
``` sh 
peerjs --port 3001
```
* Strat express server
 ``` sh 
npm run server
```




