const express = require('express')
const router = express.Router()

// Route index page
router.get('/', function (req, res) {
  res.render('index');
})


router.post('/payment-screens/service-payment-screen', function (req, res) {

 // Make a variable and give it the value from 'juggling-balls'
 var paymentType = req.session.data['payment-type']

 console.log( paymentType );

 // Check whether the variable matches a condition
 if (paymentType == "cheque"){
   // Send user to next page
   res.redirect('/payment-screens/complete')
 }
 if (paymentType == "your-account"){
   // Send user to next page
   res.redirect('/payment-screens/select-account')
 }
 else {
   // Send user to ineligible page
   res.redirect('/payment-screens/HWF-ref')
 }

})

// router.post('/service-payment-screen', function (req, res) {
//   if (req.body.paymentTypeSelected === 'cheque') {
//     res.redirect('/service-screens/complete')
//   } else {
//     res.redirect('/payment-screens/HWF')
//   }
// })


// Add your routes here - above the module.exports line

module.exports = router
