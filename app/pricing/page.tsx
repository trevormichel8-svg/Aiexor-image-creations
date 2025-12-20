export default function PricingPage() {
  return (
    <main className="flex flex-col items-center justify-center min-h-screen bg-gray-900 text-white">
      <h1 className="text-3xl font-bold mb-6">Pricing Plans</h1>
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
        <div className="bg-gray-800 p-6 rounded">
          <h2 className="text-xl font-semibold mb-2">Free</h2>
          <p>10 free generations per month.</p>
        </div>
        <div className="bg-gray-800 p-6 rounded">
          <h2 className="text-xl font-semibold mb-2">Pro</h2>
          <p>$9.99/month for 500 generations.</p>
        </div>
        <div className="bg-gray-800 p-6 rounded">
          <h2 className="text-xl font-semibold mb-2">Enterprise</h2>
          <p>Custom pricing for large-scale usage.</p>
        </div>
      </div>
    </main>
  );
}
