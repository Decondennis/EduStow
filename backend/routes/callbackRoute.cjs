const express = require('express');
const Payment = require('../models/paymentModel.cjs'); // Import your Payment model here

const router = express.Router();

router.post('/callback', (req, res) => {
  // Extract the necessary information from the payment response
  const { paymentId } = req.body;

  // Retrieve the payment record from the database using the paymentId
  Payment.findOne({ _id: paymentId }, (err, payment) => {
    if (err) {
      console.error('Error retrieving payment:', err);
      return res.status(500).json({ error: 'Internal Server Error' });
    }

    if (!payment) {
      // Payment record not found
      return res.status(404).json({ error: 'Payment not found' });
    }

    // Update the status_flag property to 1
    payment.status_flag = 1;

    // Save the updated payment record
    payment.save((err, updatedPayment) => {
      if (err) {
        console.error('Error updating payment:', err);
        return res.status(500).json({ error: 'Internal Server Error' });
      }

      // Set the SameSite attribute to None when setting the cookie
      res.cookie('mp_eeb0103404a2857dec4c324d2f2108c5_mixpanel', 'cookie-value', {
        sameSite: 'None',
        // other cookie options
      });

      // Payment updated successfully
      return res.status(200).json({ message: 'Payment updated successfully' });
    });
  });
});

module.exports = router;
