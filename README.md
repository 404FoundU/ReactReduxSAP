# React Redux Single Page Application

## Setup

Required software:
- Node.js
- NPM
- Git


Move into the directory and install the dependencies.

```
npm install
```

At this point, your app is ready to go!
To start the server, just run

```
npm start
```

You can access it at `localhost:8080`.



## APPENDIX

### Wine data structure

```
{
  "id": UUID (String),
  "name": String,
  "vintage": String,
  "vineyard": String,
  "type": String,
  "region": String,
  "unitsSold": Number,
  "ratings": [Rating]
}
```

### Rating data structure

```
{
  "stars": Number
}
```
