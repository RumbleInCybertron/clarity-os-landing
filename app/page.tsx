export default function HomePage() {
  return (
    <main className="min-h-screen bg-white text-gray-900 px-6 py-12">
      <section className="max-w-4xl mx-auto text-center">
        <h1 className="text-4xl font-bold mb-4">See exactly which campaigns are driving revenue.</h1>
        <p className="text-lg mb-6">
          Clarity OS tracks first- and last-touch attribution across your funnel — from traffic to CRM to revenue.
          No dashboards to babysit. No data science degree required.
        </p>
        <form method="POST" action="/api/subscribe" className="flex flex-col sm:flex-row justify-center gap-4">
          <input type="email" name="email" placeholder="you@example.com"
            className="px-4 py-2 border border-gray-300 rounded w-full sm:w-72" required />
          <button type="submit" className="bg-black text-white px-6 py-2 rounded hover:bg-gray-800">
            Join Early Access
          </button>
        </form>
      </section>
    </main>
  );
}
