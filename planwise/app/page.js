// pages/index.tsx or index.jsx

export default function Home() {
  return (
    <main className="min-h-screen bg-gray-50 flex flex-col items-center px-4 py-10">
      <header className="w-full max-w-6xl flex justify-between items-center mb-10">
        <h1 className="text-3xl font-bold text-blue-600">PlanWise</h1>
        <button className="bg-blue-600 text-white px-4 py-2 rounded-xl hover:bg-blue-700 transition">
          Sign In
        </button>
      </header>

      <section className="text-center max-w-3xl">
        <h2 className="text-5xl font-bold mb-4 text-gray-800">
          Turn PDFs into Action Plans
        </h2>
        <p className="text-gray-600 text-lg mb-6">
          Upload any document and let AI generate a clear, editable checklist for you in seconds.
        </p>
        <div className="flex flex-col sm:flex-row justify-center gap-4 mb-10">
          <button className="bg-blue-600 text-white px-6 py-3 rounded-xl font-semibold hover:bg-blue-700 transition">
            Upload PDF
          </button>
          <button className="border border-blue-600 text-blue-600 px-6 py-3 rounded-xl font-semibold hover:bg-blue-50 transition">
            Try Demo
          </button>
        </div>
      </section>

      <section className="w-full max-w-4xl grid md:grid-cols-3 gap-6 text-center mt-6">
        {[
          {
            title: "📄 Upload PDF",
            desc: "Drag & drop or upload your document  we will handle the rest."
          },
          {
            title: "🧠 Get a Smart Plan",
            desc: "AI reads your doc and turns it into step-by-step tasks."
          },
          {
            title: "✅ Stay Organized",
            desc: "Use your checklist, mark done, reorder or export anywhere."
          }
        ].map(({ title, desc }, i) => (
          <div key={i} className="p-6 rounded-2xl bg-white shadow hover:shadow-md transition">
            <h3 className="text-xl text-gray-700 font-semibold mb-2">{title}</h3>
            <p className="text-gray-600">{desc}</p>
          </div>
        ))}
      </section>

      <footer className="text-gray-400 text-sm mt-20">
        &copy; 2025 PlanWise. Built by indie devs.
      </footer>
    </main>
  );
}
