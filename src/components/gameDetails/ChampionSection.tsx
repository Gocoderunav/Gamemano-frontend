'use client';

 function ChampionSection() {
    const champions = [
        { name: "Akali", title: "The Rogue Assassin", align: "left" },
        { name: "Thresh", title: "The Chain Warden", align: "right" },
        { name: "Jinx", title: "The Loose Cannon", align: "left" },
      
        { name: "Yasuo", title: "The Unforgiven", align: "right" },
      ];
    
      return (
        <section className="bg-gradient-to-b from-[#1d1a16] to-black min-h-screen w-full flex flex-col justify-around pl-20 pr-20 py-20 gap-40">

          {champions.map((champion, index) => (
            <div
              key={index}
              className={`flex ${
                champion.align === "left" ? "justify-start" : "justify-end"
              } px-8`}
            >
              <div
                className={`flex flex-col items-${
                  champion.align === "left" ? "start" : "end"
                } text-white`}
              >
                <h2 className="text-4xl font-bold mb-2 tracking-widest">{champion.name}</h2>
                <p className="text-gray-300 text-lg mb-4">{champion.title}</p>
                <button className="bg-orange-500 hover:bg-orange-600 text-white font-semibold px-6 py-2 rounded-full transition">
                  Play Now
                </button>
              </div>
            </div>
          ))}
        </section>
  );
}

export default ChampionSection;