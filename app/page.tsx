import Link from "next/link";
import { Button } from "@/components/ui/button";

export default function HomePage() {
  const tools = [
    "Figma",
    "JavaScript",
    "React",
    "Next.js",
    "Tailwind CSS",
    "TypeScript",
    "HTML",
    "CSS",
  ];

  const experiences = [
    {
      title: "Chargée de clientèle",
      company: "COOLTRA",
      location: "Barcelone",
      year: "2016",
    },
    {
      title: "Traductrice",
      company: "Erasmusu",
      location: "Télétravail",
      year: "2018",
    },
    {
      title: "Traductrice",
      company: "Agriconomie.com",
      location: "Kremlin-Bicêtre",
      year: "2018",
    },
    {
      title: "Téléconseillère",
      company: "DOCAPOST",
      location: "Louviers",
      year: "2020-2021",
    },
    {
      title: "Webdesigner",
      company: "HDM NETWORK",
      location: "Télétravail",
      year: "2022",
    },
  ];

  return (
    <main className="min-h-screen flex flex-col items-center justify-center px-6 bg-animated-gradient">
      <div className="max-w-2xl text-center bg-[#f6ead4]/90 p-8 rounded-lg shadow-lg mt-12">
        <h1 className="text-5xl font-extrabold mb-4 text-[#a2a595]">
          Bonjour, je suis <span className="text-[#b4a284]">Asma Derragui</span>
        </h1>
        <p className="text-lg mb-6 text-[#a2a595]">
          Développeuse débutante passionnée par le web.
        </p>

        <Link href="/projets">
          <Button className="px-6 py-3 text-base bg-[#b4a284] text-[#f6ead4] hover:bg-[#a2a595] transition-colors">
            Voir mes projets
          </Button>
        </Link>
      </div>

      {/* Grille 2 colonnes avec items-stretch pour même hauteur */}
      <div className="grid grid-cols-2 gap-8 max-w-5xl mt-12 w-full items-stretch">

        {/* Outils */}
        <section className="bg-[#f6ead4]/90 p-8 rounded-lg shadow-lg flex flex-col">
          <h2 className="text-3xl font-bold text-[#b4a284] mb-6 text-center">Mes outils</h2>
          <div className="flex flex-wrap justify-center gap-4 max-w-xl mx-auto">
            {tools.map((tool) => (
              <span
                key={tool}
                className="bg-[#f6ead4]/80 text-[#a2a595] px-4 py-2 rounded-full text-sm font-medium shadow-sm border border-[#b4a284]"
              >
                {tool}
              </span>
            ))}
          </div>
        </section>

        {/* Parcours */}
        <section className="bg-[#f6ead4]/90 p-8 rounded-lg shadow-lg flex flex-col">
          <h2 className="text-3xl font-bold text-[#b4a284] mb-4 text-center">Mon parcours</h2>
          <p className="text-lg leading-relaxed max-w-prose mx-auto text-[#a2a595]">
            En formation développeuse web front-end, je développe mes compétences en HTML, CSS,
            JavaScript et frameworks modernes. Je suis enthousiaste à l’idée de contribuer à des
            projets web innovants tout en continuant à apprendre.
          </p>
        </section>

      </div>

      {/* Expérience - s’étend sur 2 colonnes et centrée */}
      <section
        className="bg-[#f6ead4]/90 p-8 rounded-lg shadow-lg col-span-2 justify-self-center w-full max-w-3xl flex flex-col mt-12"
        style={{ minHeight: "320px" }}
      >
        <h2 className="text-3xl font-bold text-[#b4a284] mb-6 text-center">Expérience</h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 mt-auto text-[#a2a595]">
          {experiences.map(({ title, company, location, year }) => (
            <div
              key={`${title}-${company}`}
              className="bg-[#f6ead4]/80 rounded-lg shadow-md p-6 flex flex-col justify-between h-40"
            >
              <h3 className="text-xl font-semibold text-[#b4a284] mb-2">{title}</h3>
              <p className="text-sm">
                {company} | {location}
              </p>
              <p className="text-sm mt-auto font-medium">{year}</p>
            </div>
          ))}
        </div>
      </section>
    </main>
  );
}
