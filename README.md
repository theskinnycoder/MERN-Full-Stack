# **MERN-Full-Stack**

> A **MERN** Stack Web-App that enables you to **_Create_**, **_Read_**, **_Update_**, **_Delete_** blog articles

## **A. Environemnt Variables**

- Create a **`config.env`** file in the **`config/`** directory and add the required data

```env
PORT = 5000
MONGO_URI = <Your MongoDB Atlas Access Token String>
```

## **B. Scripts**

1. Run the whole app in production mode :

```bash
npm install # yarn
cd client
npm install # yarn
cd ..
npm start # yarn start
```

2. Run only the server in development mode :

```bash
npm run dev # yarn dev
```

3. Run the whole app in development mode :

```bash
 # Server :
 npm run dev # yarn dev

 # Client :
 cd client
 npm start # yarn start
```
