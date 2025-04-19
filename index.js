const express = require('express');
const axios = require('axios');
const app = express();
const port = process.env.PORT || 3000;

app.get('/api/klines', async (req, res) => {
  try {
    const { symbol = 'BTCUSDT', interval = '1m', limit = 10 } = req.query;

    const response = await axios.get('https://api.binance.com/api/v3/klines', {
      params: { symbol, interval, limit }
    });

    res.json(response.data);
  } catch (error) {
    console.error('Erro ao consultar a Binance:', error.message);
    res.status(500).json({ error: 'Erro ao consultar a Binance' });
  }
});

app.listen(port, () => {
  console.log(`Proxy Binance rodando na porta ${port}`);
});
