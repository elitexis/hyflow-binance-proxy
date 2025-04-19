const express = require('express');
const axios = require('axios');
const app = express();
const port = process.env.PORT || 3000;

app.get('/simular', async (req, res) => {
  try {
    const response = await axios.get('https://binance-proxy.vitalflux.dev/api/v3/klines', {
      params: {
        symbol: 'BTCUSDT',
        interval: '1m',
        limit: 10
      }
    });

    res.json({
      message: 'Simulação realizada com sucesso',
      data: response.data
    });

  } catch (error) {
    console.error('Erro ao buscar dados da Binance:', error.message);
    res.status(500).json({ error: 'Erro ao buscar dados da Binance' });
  }
});

app.listen(port, () => {
  console.log(`Servidor rodando na porta ${port}`);
});
