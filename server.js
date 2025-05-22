const express = require('express');
const bodyParser = require('body-parser');
const dotenv = require('dotenv');

dotenv.config();
const app = express();
app.use(bodyParser.json());

app.post('/transfer', (req, res) => {
    const { sender, receiver, amount } = req.body;
    if (!sender || !receiver || amount <= 0) {
        return res.status(400).json({ message: 'Invalid transaction details' });
    }

    console.log(`Transferring ${amount} from ${sender} to ${receiver}`);
    res.status(200).json({ message: 'Transfer successful' });
});

const PORT = process.env.PORT || 3000;
app.listen(PORT, () => console.log(`API running on port ${PORT}`));

const transferRoutes = require('./routes/transfer');

dotenv.config();
app.use(bodyParser.json());

// Use the new routes
app.use('/api', transferRoutes);
