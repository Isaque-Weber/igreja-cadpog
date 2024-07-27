import express from 'express';
import fetch from 'node-fetch';
import cors from 'cors';
const app = express();

app.use(cors());

app.get('/api/versiculo', async (req, res) => {
    try {
        const response = await fetch('https://bible-api.com/?random=verse&translation=almeida');
        if (!response.ok) {
            throw new Error('Erro na requisição à API');
        }
        const data = await response.json();
        res.json(data);
    } catch (error) {
        res.status(500).json({ error: 'Erro ao buscar o versículo' });
    }
});

app.listen(3000, () => {
    console.log('Servidor proxy rodando na porta 3000');
});
