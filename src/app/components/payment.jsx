// components/PaymentCard.jsx
'use client';// components/PaymentCard.jsx
export default function PaymentCard() {
  const upiUrl = "upi://pay?pa=9788599074@superyes&pn=PRASATH&am=1&cu=INR&tn=Thank%20You";
  
  const handlePayment = () => {
    // Try to open UPI link
    window.location.href = upiUrl;
    
    // Fallback for web (this will show an error but demonstrates the approach)
    // In a real app, you might want to show a QR code or alternative payment methods
  };

  return (
    <div className="w-full max-w-md bg-white rounded-2xl shadow-xl overflow-hidden">
      {/* Header */}
      <div className="bg-gradient-to-r from-purple-700 to-purple-500 text-white p-6 text-center">
        <h1 className="text-2xl font-bold mb-2">Secure Payment</h1>
        <p className="text-purple-100 text-sm">Complete your transaction quickly and safely</p>
      </div>
      
      {/* Payment Details */}
      <div className="p-6">
        {/* Amount Display */}
        <div className="text-center mb-6">
          <div className="text-gray-600 text-sm mb-1">Amount to Pay</div>
          <div className="text-4xl font-bold text-gray-800">₹20</div>
        </div>
        
        {/* Recipient Info */}
        <div className="flex items-center bg-gray-50 rounded-xl p-4 mb-6">
          <div className="w-12 h-12 bg-gradient-to-r from-purple-600 to-purple-400 rounded-full flex items-center justify-center text-white font-bold mr-4">
            P
          </div>
          <div>
            <h3 className="font-semibold text-gray-800">PRASATH</h3>
            <p className="text-gray-600 text-sm">9788599074@superyes</p>
          </div>
        </div>
        
        {/* Payment Button */}
        <button
          onClick={handlePayment}
          className="w-full bg-gradient-to-r from-purple-600 to-purple-500 hover:from-purple-700 hover:to-purple-600 text-white font-semibold py-4 px-6 rounded-xl transition-all duration-300 transform hover:-translate-y-1 hover:shadow-lg active:translate-y-0"
        >
          Pay Now
        </button>
        
        {/* Note */}
        <p className="text-center text-gray-500 text-xs mt-4">
          You&apos;ll be redirected to your UPI app to complete the payment
        </p>
        
        {/* Payment Method Icons */}
        <div className="flex justify-center gap-4 mt-6">
          {['GP', 'PH', 'PY', 'BH'].map((method, index) => (
            <div
              key={index}
              className="w-12 h-12 bg-gray-100 rounded-lg flex items-center justify-center text-gray-600 font-semibold text-lg"
            >
              {method}
            </div>
          ))}
        </div>
      </div>
      
      {/* Footer */}
      <div className="bg-gray-50 px-6 py-4 text-center">
        <p className="text-gray-500 text-xs">Your payment is secure and encrypted</p>
      </div>
    </div>
  );
}