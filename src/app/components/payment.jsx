// components/PaymentCard.jsx
'use client';
import { useState } from 'react';

export default function PaymentCard() {
  const upiId = "9788599074@superyes";
  const recipientName = "PRASATH";
  const amount = "20";
  const [showInstructions, setShowInstructions] = useState(false);

  // UPI URLs for different platforms
  const paymentLinks = {
    gpay: `https://gpay.app.goo.gl/${upiId}`,
    phonepe: `phonepe://transactions/upi/pay?pa=${upiId}&pn=${encodeURIComponent(recipientName)}&am=${amount}`,
    paytm: `paytmmp://pay?pa=${upiId}&pn=${encodeURIComponent(recipientName)}&am=${amount}`,
    upi: `upi://pay?pa=${upiId}&pn=${encodeURIComponent(recipientName)}&am=${amount}&cu=INR`
  };

  const handlePayment = (app) => {
    const url = paymentLinks[app];
    
    if (app === 'gpay') {
      // GPay web link works on both iOS and Android
      window.open(url, '_blank');
    } else {
      // Try deep link with fallback
      const fallbackUrls = {
        phonepe: 'https://phonepe.com',
        paytm: 'https://paytm.com',
        upi: 'https://upiapp.page.link'
      };

      const startTime = Date.now();
      window.location.href = url;
      
      // Fallback if deep link doesn't work (especially on iOS)
      setTimeout(() => {
        if (Date.now() - startTime < 2000) {
          window.open(fallbackUrls[app], '_blank');
        }
      }, 500);
    }
  };

  const handleUPIPayment = () => {
    setShowInstructions(true);
  };

  const copyUPIId = () => {
    navigator.clipboard.writeText(upiId);
    alert('UPI ID copied to clipboard!');
  };

  return (
    <div className="w-full max-w-md bg-white rounded-2xl shadow-xl overflow-hidden border border-gray-200">
      {/* Header */}
      <div className="bg-purple-600 text-white p-6 text-center shadow-md">
        <h1 className="text-2xl font-bold mb-2">Secure Payment</h1>
        <p className="text-purple-100 text-sm">Complete your transaction quickly and safely</p>
      </div>
      
      {/* Payment Details */}
      <div className="p-6">
        {/* Amount Display */}
        <div className="text-center mb-6">
          <div className="text-gray-600 text-sm mb-1">Amount to Pay</div>
          <div className="text-4xl font-bold text-gray-800">₹{amount}</div>
        </div>
        
        {/* Recipient Info */}
        <div className="flex items-center bg-gray-50 rounded-xl p-4 mb-6 border border-gray-200">
          <div className="w-12 h-12 bg-purple-600 rounded-full flex items-center justify-center text-white font-bold mr-4 shadow-sm">
            P
          </div>
          <div className="flex-1">
            <h3 className="font-semibold text-gray-800">{recipientName}</h3>
            <div className="flex items-center gap-2">
              <p className="text-gray-600 text-sm">{upiId}</p>
              <button 
                onClick={copyUPIId}
                className="text-purple-600 hover:text-purple-800 text-xs"
              >
                Copy
              </button>
            </div>
          </div>
        </div>

        {showInstructions ? (
          /* Manual UPI Instructions for iOS */
          <div className="bg-yellow-50 border border-yellow-200 rounded-xl p-4 mb-4">
            <h3 className="font-semibold text-yellow-800 mb-2">Manual Payment Instructions:</h3>
            <ol className="text-yellow-700 text-sm list-decimal list-inside space-y-1">
              <li>Open your UPI app (GPay, PhonePe, Paytm, etc.)</li>
              <li>Enter amount: <strong>₹{amount}</strong></li>
              <li>Send to: <strong>{upiId}</strong></li>
              <li>Add note: "Payment for {recipientName}"</li>
            </ol>
            <button
              onClick={() => setShowInstructions(false)}
              className="w-full mt-3 bg-yellow-600 hover:bg-yellow-700 text-white font-semibold py-3 px-6 rounded-xl transition-all duration-300"
            >
              Got it
            </button>
          </div>
        ) : (
          /* Payment Buttons */
          <>
            {/* Main UPI Payment Button */}
            <button
              onClick={handleUPIPayment}
              className="w-full bg-purple-600 hover:bg-purple-700 text-white font-semibold py-4 px-6 rounded-xl transition-all duration-300 transform hover:-translate-y-1 hover:shadow-lg active:translate-y-0 border border-purple-700 mb-4"
            >
              Pay with UPI
            </button>
            
            {/* Payment Method Icons */}
            <div className="text-center text-gray-600 text-sm mb-3">Or pay with</div>
            
            <div className="flex justify-center gap-4 mb-4">
              {/* Google Pay */}
              <button
                onClick={() => handlePayment('gpay')}
                className="flex-1 bg-white rounded-xl p-3 shadow-md hover:shadow-lg transition-all duration-300 border border-gray-200 hover:border-gray-300 hover:-translate-y-1 flex flex-col items-center"
              >
                <div className="w-10 h-10 bg-[#4285F4] rounded-full flex items-center justify-center mb-1">
                  <span className="text-white text-sm font-bold">G</span>
                </div>
                <span className="text-[10px] text-gray-600">Google Pay</span>
              </button>

              {/* PhonePe */}
              <button
                onClick={() => handlePayment('phonepe')}
                className="flex-1 bg-[#5F259F] rounded-xl p-3 shadow-md hover:shadow-lg transition-all duration-300 border border-[#5F259F] hover:border-[#4a1d7c] hover:-translate-y-1 flex flex-col items-center"
              >
                <div className="w-10 h-10 bg-white rounded-full flex items-center justify-center mb-1">
                  <span className="text-[#5F259F] text-sm font-bold">P</span>
                </div>
                <span className="text-[10px] text-white">PhonePe</span>
              </button>

              {/* Paytm */}
              <button
                onClick={() => handlePayment('paytm')}
                className="flex-1 bg-[#002970] rounded-xl p-3 shadow-md hover:shadow-lg transition-all duration-300 border border-[#002970] hover:border-[#001a4d] hover:-translate-y-1 flex flex-col items-center"
              >
                <div className="w-10 h-10 bg-[#00B9F1] rounded-full flex items-center justify-center mb-1">
                  <span className="text-white text-sm font-bold">P</span>
                </div>
                <span className="text-[10px] text-white">Paytm</span>
              </button>
            </div>
          </>
        )}
        
        {/* Note */}
        <p className="text-center text-gray-500 text-xs mt-4">
          {showInstructions 
            ? "Follow the instructions above to complete payment" 
            : "You'll be redirected to your UPI app to complete payment"
          }
        </p>
      </div>
      
      {/* Footer */}
      <div className="bg-gray-50 px-6 py-4 text-center border-t border-gray-200">
        <p className="text-gray-500 text-xs">Your payment is secure and encrypted</p>
      </div>
    </div>
  );
}