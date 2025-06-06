export default function ProjetsPage() {
  return (
    <main className="p-6 bg-[#f6ead4] min-h-screen">
      <h2 className="text-center text-3xl font-semibold mb-8 text-[#a2a595]">Mes projets</h2>
      <ul className="grid grid-cols-1 md:grid-cols-2 gap-6">
        <li className="bg-white rounded-lg shadow-md p-6 border border-[#b4a284] hover:shadow-lg transition-shadow">
          <h3 className="text-xl font-bold mb-2 text-[#b4a284]">
            <a
              href="https://github.com/O-clock-Samoussas/S15E03-React-Blog-Formulaires-Asma-95"
              target="_blank"
              rel="noopener noreferrer"
              className="underline hover:text-[#a2a595] transition-colors"
            >
              Projet 1 : Blog
            </a>
          </h3>
          <p className="text-[#a2a595]">
            Pour ce challenge, j'ai travaillé sur un blog en cours de mise en place. La page
            d'accueil est disponible, avec un formulaire d'abonnement à la newsletter et un
            champ de recherche d'articles.
          </p>
        </li>
        <li className="bg-white rounded-lg shadow-md p-6 border border-[#b4a284] hover:shadow-lg transition-shadow">
  <h3 className="text-xl font-bold mb-2 text-[#b4a284]">
    <a
      href="https://github.com/O-clock-Samoussas/S15E05-React-crud-todolist-Asma-95"
      target="_blank"
      rel="noopener noreferrer"
      className="underline hover:text-[#a2a595] transition-colors"
    >
      Projet 2 : Todolist
    </a>
  </h3>
  <p className="text-[#a2a595]">Une application de gestion de tâches simple et efficace faite en React.</p>
</li>

      </ul>
    </main>
  );
}
