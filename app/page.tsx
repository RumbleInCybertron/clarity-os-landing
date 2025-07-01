import EmailCaptureForm from "components/EmailCaptureForm";

export default function HomePage() {
  return (
    <main className="min-h-screen bg-white text-gray-900 px-6 py-12">
      <section className="max-w-4xl mx-auto text-center">
        <h1 className="text-4xl font-bold mb-4">See exactly which campaigns are driving revenue.</h1>
        <p className="text-lg mb-6">
          Clarity OS tracks first- and last-touch attribution across your funnel — from traffic to CRM to revenue.
          No dashboards to babysit. No data science degree required.
        </p>

        <EmailCaptureForm />
      </section>
    </main>
  );
}
