// components/PaymentCard.jsx
'use client';
export default function PaymentCard() {
  const upiId = "9788599074@superyes";
  const recipientName = "PRASATH";
  const amount = "20";
  
  // UPI URL template
  const upiUrl = `upi://pay?pa=${upiId}&pn=${encodeURIComponent(recipientName)}&am=${amount}&cu=INR&tn=Thank%20You`;
  
  // Payment app specific URLs
  const paymentLinks = {
    gpay: `https://gpay.app.goo.gl/${upiId}`,
    phonepe: `phonepe://transfer/${upiId}`,
    paytm: `paytmmp://pay?pa=${upiId}&pn=${encodeURIComponent(recipientName)}&am=${amount}`,
    upi: upiUrl
  };

  const handlePayment = (app = 'upi') => {
    const url = paymentLinks[app] || paymentLinks.upi;
    window.location.href = url;
  };

  return (
    <div className="w-full max-w-md bg-white rounded-2xl shadow-xl overflow-hidden border border-gray-200">
      {/* Header - Solid color with shadow */}
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
          <div>
            <h3 className="font-semibold text-gray-800">{recipientName}</h3>
            <p className="text-gray-600 text-sm">{upiId}</p>
          </div>
        </div>
        
        {/* Main Payment Button */}
        <button
          onClick={() => handlePayment('upi')}
          className="w-full bg-purple-600 hover:bg-purple-700 text-white font-semibold py-4 px-6 rounded-xl transition-all duration-300 transform hover:-translate-y-1 hover:shadow-lg active:translate-y-0 border border-purple-700 mb-4"
        >
          Pay with UPI
        </button>
        
        {/* Payment Method Icons with Logos */}
        <div className="flex justify-center gap-4 mt-6 mb-4">
          {/* Google Pay */}
          <button
            onClick={() => handlePayment('gpay')}
            className="w-14 h-14 bg-white rounded-xl flex items-center justify-center shadow-md hover:shadow-lg transition-all duration-300 border border-gray-200 hover:border-gray-300 hover:-translate-y-1"
            title="Pay with Google Pay"
          >
            <div className="text-center">
              <div className="w-8 h-8 mx-auto bg-[#4285F4] rounded-full flex items-center justify-center">
                <span className="text-white text-xs font-bold">G</span>
              </div>
              <span className="text-[10px] text-gray-600 mt-1">Pay</span>
            </div>
          </button>

          {/* PhonePe */}
          <button
            onClick={() => handlePayment('phonepe')}
            className="w-14 h-14 bg-[#5F259F] rounded-xl flex items-center justify-center shadow-md hover:shadow-lg transition-all duration-300 border border-[#5F259F] hover:border-[#4a1d7c] hover:-translate-y-1"
            title="Pay with PhonePe"
          >
            <div className="text-center">
              <div className="w-8 h-8 mx-auto bg-white rounded-full flex items-center justify-center">
                <span className="text-[#5F259F] text-xs font-bold">P</span>
              </div>
              <span className="text-[10px] text-white mt-1">PhonePe</span>
            </div>
          </button>

          {/* Paytm */}
          <button
            onClick={() => handlePayment('paytm')}
            className="w-14 h-14 bg-[#002970] rounded-xl flex items-center justify-center shadow-md hover:shadow-lg transition-all duration-300 border border-[#002970] hover:border-[#001a4d] hover:-translate-y-1"
            title="Pay with Paytm"
          >
            <div className="text-center">
              <div className="w-8 h-8 mx-auto bg-[#00B9F1] rounded-full flex items-center justify-center">
                <span className="text-white text-xs font-bold">P</span>
              </div>
              <span className="text-[10px] text-white mt-1">Paytm</span>
            </div>
          </button>

          {/* BHIM UPI */}
          <button
            onClick={() => handlePayment('upi')}
            className="w-14 h-14 bg-[#1F51FF] rounded-xl flex items-center justify-center shadow-md hover:shadow-lg transition-all duration-300 border border-[#1F51FF] hover:border-[#1a43d9] hover:-translate-y-1"
            title="Pay with BHIM UPI"
          >
            <div className="text-center">
              <div className="w-8 h-8 mx-auto bg-white rounded-full flex items-center justify-center">
                <span className="text-[#1F51FF] text-xs font-bold">U</span>
              </div>
              <span className="text-[10px] text-white mt-1">BHIM</span>
            </div>
          </button>
        </div>
        
        {/* Note */}
        <p className="text-center text-gray-500 text-xs mt-4">
          You&apos;ll be redirected to your UPI app to complete the payment
        </p>
      </div>
      
      {/* Footer */}
      <div className="bg-gray-50 px-6 py-4 text-center border-t border-gray-200">
        <p className="text-gray-500 text-xs">Your payment is secure and encrypted</p>
      </div>
    </div>
  );
}