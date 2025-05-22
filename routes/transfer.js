const express = require('express');
const router = express.Router();

router.post('/transfer', (req, res) => {
    const { sender, receiver, amount } = req.body;
    if (!sender || !receiver || amount <= 0) {
        return res.status(400).json({ message: 'Invalid transaction details' });
    }

    console.log(`Transferring ${amount} from ${sender} to ${receiver}`);
    res.status(200).json({ message: 'Transfer successful' });
});

module.exports = router;

