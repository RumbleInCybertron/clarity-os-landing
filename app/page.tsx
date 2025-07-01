import EmailCaptureForm from 'components/EmailCaptureForm'

export default function HomePage() {
  return (
    <main className="min-h-screen bg-white text-gray-900 px-6 py-20">
      <section className="max-w-3xl mx-auto text-center space-y-6">
        <h1 className="text-5xl font-bold leading-tight">
          See exactly which campaigns are driving revenue.
        </h1>
        <p className="text-xl text-gray-700">
          Clarity OS tracks first- and last-touch attribution across your funnel — from traffic to CRM to revenue.
          No dashboards to babysit. No data science degree required.
        </p>
        <EmailCaptureForm />
        <p className="text-sm text-gray-400">Join the waitlist for early access.</p>
      </section>
    </main>
  );
}
