function Home() {
  return (
    <div className="flex items-center justify-center h-screen bg-gradient-to-r from-indigo-500 via-purple-500 to-pink-500">
      <div className="text-center text-white p-10 rounded-2xl shadow-2xl bg-black/30 backdrop-blur-md">
        <h1 className="text-4xl md:text-6xl font-bold mb-6">
          🚀 Dia 26/9 ainda tentando aprender a programar pelo VS Code
        </h1>
        <p className="text-lg md:text-2xl mb-8">
          Mas cada linha de código é uma conquista ✨
        </p>
        <button className="px-6 py-3 text-lg font-semibold rounded-xl bg-white text-indigo-600 hover:bg-indigo-200 transition duration-300">
          Continuar Aprendendo
        </button>
      </div>
    </div>
  );
}

export default Home;
