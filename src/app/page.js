import PaymentCard from "./components/payment"

export default function Home() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-purple-600 via-blue-600 to-blue-500 flex justify-center items-center p-4">
      <PaymentCard />
    </div>
  )
}