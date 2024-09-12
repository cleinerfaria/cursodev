export default function Home() {
  return (
    <div className="flex flex-col justify-center items-center">
      <div className="flex flex-col w-full p-4 items-center justify-center bg-slate-600">
        <img
          src="/assets/images/logo/logo_white.png"
          alt="Logomarca Cleiner Faria"
          className="drop-shadow-[0_0_40px_rgba(255,0,0,0.3)] bg-orange-400"
        />
        <span className="text-white m-5 text-sm text-center font-orbitron tracking-wider">
          Em breve um sistema que irá mudar a forma que a sua empresa consome
          dados!!!
        </span>
      </div>
      <div className="grid lg:grid-cols-3 xl:grid-cols-4 grid-cols-1 gap-4 bg-gray-300 p-3 justify-between w-full h-full">
        <div className="rounded-lg h-full bg-red-500 lg:row-span-2">Testes</div>
        <div className="rounded-lg h-full bg-blue-500">
          Drop Down adsasda asdasda sdasda asd asd
        </div>
        <div className="rounded-lg h-full bg-green-500">Imput</div>
        <div className="rounded-lg h-full bg-red-500">Testes</div>
        <div className="rounded-lg h-full bg-red-500">Testes</div>
        <div className="rounded-lg h-full bg-blue-500 lg:col-span-2">
          Drop Down
        </div>
        <div className="rounded-lg h-full bg-green-500">Imput</div>
        <div className="rounded-lg h-full bg-red-500">Testes</div>
        <div className="rounded-lg h-full bg-blue-500">Drop Down</div>
        <div className="rounded-lg h-full bg-green-500 lg:row-span-2">
          Imput2
        </div>
        <div className="rounded-lg h-full bg-red-500">Testes</div>
        <div className="rounded-lg h-full bg-blue-500">Drop Down</div>
      </div>
    </div>
  );
}
