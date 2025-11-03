// components/PaymentCard.jsx
'use client';
export default function PaymentCard() {
  const upiId = "9788599074@superyes";
  const recipientName = "PRASATH";
  const amount = "20";

  const handleOpenUPIApp = () => {
    // Direct UPI payment link that opens the default UPI app
    const upiUrl = `upi://pay?pa=${upiId}&pn=${encodeURIComponent(recipientName)}&am=${amount}&cu=INR`;
    
    // Try to open UPI app directly
    window.location.href = upiUrl;
    
    // Fallback - if direct app doesn't open, show instructions
    setTimeout(() => {
      if (!document.hidden) {
        alert(`Open your UPI app and send ₹${amount} to:\n${upiId}\n\nOr tap OK to copy UPI ID`, );
        navigator.clipboard.writeText(upiId);
      }
    }, 1000);
  };

  const copyUPIDetails = () => {
    const details = `Send ₹${amount} to ${recipientName}\nUPI ID: ${upiId}`;
    navigator.clipboard.writeText(details);
    alert('Payment details copied! Open your UPI app and paste to pay.');
  };

  return (
    <div className="w-full max-w-md bg-white rounded-2xl shadow-xl overflow-hidden border border-gray-200">
      {/* Header */}
      <div className="bg-purple-600 text-white p-6 text-center shadow-md">
        <h1 className="text-2xl font-bold mb-2">Secure Payment</h1>
        <p className="text-purple-100 text-sm">Pay instantly with any UPI app</p>
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
            <p className="text-gray-600 text-sm">{upiId}</p>
          </div>
        </div>

        {/* Payment Instructions */}
        <div className="bg-blue-50 border border-blue-200 rounded-xl p-4 mb-6">
          <h3 className="font-semibold text-blue-800 mb-3 text-center">How to Pay:</h3>
          <ol className="text-blue-700 text-sm space-y-2">
            <li className="flex items-start">
              <span className="bg-blue-600 text-white rounded-full w-5 h-5 flex items-center justify-center text-xs mr-2 flex-shrink-0">1</span>
              Click "Open UPI App" below
            </li>
            <li className="flex items-start">
              <span className="bg-blue-600 text-white rounded-full w-5 h-5 flex items-center justify-center text-xs mr-2 flex-shrink-0">2</span>
              Verify amount and recipient
            </li>
            <li className="flex items-start">
              <span className="bg-blue-600 text-white rounded-full w-5 h-5 flex items-center justify-center text-xs mr-2 flex-shrink-0">3</span>
              Enter UPI PIN to complete
            </li>
          </ol>
        </div>
        
        {/* Open UPI App Button */}
        <button
          onClick={handleOpenUPIApp}
          className="w-full bg-purple-600 hover:bg-purple-700 text-white font-semibold py-4 px-6 rounded-xl transition-all duration-300 transform hover:-translate-y-1 hover:shadow-lg active:translate-y-0 border border-purple-700 mb-3 flex items-center justify-center gap-3"
        >
          <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z" />
          </svg>
          Open UPI App
        </button>

        {/* Alternative: Copy Details */}
        <button
          onClick={copyUPIDetails}
          className="w-full bg-gray-100 hover:bg-gray-200 text-gray-700 font-semibold py-3 px-6 rounded-xl transition-all duration-300 border border-gray-300 flex items-center justify-center gap-3"
        >
          <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 16H6a2 2 0 01-2-2V6a2 2 0 012-2h8a2 2 0 012 2v2m-6 12h8a2 2 0 002-2v-8a2 2 0 00-2-2h-8a2 2 0 00-2 2v8a2 2 0 002 2z" />
          </svg>
          Copy Payment Details
        </button>
        
        {/* Note */}
        <p className="text-center text-gray-500 text-xs mt-4">
          Works with GPay, PhonePe, Paytm, BHIM & all UPI apps
        </p>
      </div>
      
      {/* Footer */}
      <div className="bg-gray-50 px-6 py-4 text-center border-t border-gray-200">
        <p className="text-gray-500 text-xs">Your payment is secure and encrypted</p>
      </div>
    </div>
  );
}