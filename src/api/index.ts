import express from "express";

const app = express();

app.use(express.json());

const PORT = 3156;

app.get('/ping', (_req,res) => {
    console.log('Hello Mundo!!');
   res.send('ola World!!')
});

app.listen(PORT, () => {
    console.log(`Server is running on port ${PORT}`);
});