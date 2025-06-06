export default function ContactPage() {
  return (
    <main className="min-h-screen bg-[#f6ead4] flex items-center justify-center px-6 py-12">
      <div className="max-w-2xl w-full text-center text-[#a2a595]">
        <h2 className="text-3xl font-semibold mb-6 text-[#b4a284]">Me contacter</h2>

        <p className="mb-4">
          Email :{" "}
          <a
            href="mailto:asma.derragui@hotmail.fr"
            className="text-[#b4a284] hover:underline"
          >
            asma.derragui@hotmail.fr
          </a>
        </p>

        <p className="mb-8">
          Retrouvez-moi sur{" "}
          <a
            href="https://www.linkedin.com/in/asma-derragui-3368b0190/"
            target="_blank"
            rel="noopener noreferrer"
            className="text-[#b4a284] hover:underline"
          >
            LinkedIn
          </a>
        </p>

        <form className="mx-auto bg-white p-6 rounded-lg shadow-md border border-[#b4a284] max-w-md text-left">
          <label className="block mb-4">
            <span className="text-[#a2a595] font-medium">Nom</span>
            <input
              type="text"
              name="name"
              required
              className="mt-1 block w-full rounded-md border border-[#a2a595] px-3 py-2 text-[#333] focus:outline-none focus:ring-2 focus:ring-[#b4a284]"
            />
          </label>

          <label className="block mb-4">
            <span className="text-[#a2a595] font-medium">Email</span>
            <input
              type="email"
              name="email"
              required
              className="mt-1 block w-full rounded-md border border-[#a2a595] px-3 py-2 text-[#333] focus:outline-none focus:ring-2 focus:ring-[#b4a284]"
            />
          </label>

          <label className="block mb-4">
            <span className="text-[#a2a595] font-medium">Message</span>
            <textarea
              name="message"
              rows={4}
              required
              className="mt-1 block w-full rounded-md border border-[#a2a595] px-3 py-2 text-[#333] focus:outline-none focus:ring-2 focus:ring-[#b4a284]"
            />
          </label>

          <button
            type="submit"
            className="w-full bg-[#b4a284] text-[#f6ead4] font-semibold py-2 rounded hover:bg-[#a2a595] transition-colors"
          >
            Envoyer
          </button>
        </form>
      </div>
    </main>
  );
}
