// funzione per l'animazione fade-out pagina:
const animatePage = (event) => {
  // Prevent the immediate navigation
  if (!window.AnimationEvent) {
    window.location.href = event.target.href;
  }

  document.body.classList.add("animate-fade-out");

  // Navigate to the target URL

  window.location.href = event.target.href;
};

export function MainPage() {
  return (
    <main className=" flex flex-col items-center  md:min-h-screen md:bg-hero-pattern md:bg-top md:bg-cover md:bg-overlay md:relative ">
      <div className="xsm:pt-16 w-4/5 m-auto p-5 text-center mt-9 md:w-full md:text-pretty md:relative md:z-10">
        <h1 className="text-white text-7xl font-playfair md:text-[10rem] md:pt-20 md:tracking-widest">
          Meditate
          <br />
          <span className="text-primary">&</span> Sleep
        </h1>
      </div>
      <div className="xsm:hidden w-[80%] m-auto md:relative md:z-10">
        <p className="text-white font-sourceSans text-2xl font-thin">
          <em> Well rested, better productivity.</em>
        </p>
      </div>
      <figure className="md:hidden">
        <img
          className="mt-10 block w-full m-auto  "
          src="./img/meditation.svg"
        ></img>
      </figure>
      <div className="md:p-10 md:relative md:z-10 xsm:mt-24">
        <a
          id="btn"
          onClick={animatePage}
          href="/main.html"
          className="px-14 py-3 rounded-xl bg-primary  flex justify-center items-center"
        >
          <span className="font-sourceSans text-[#000] font-semibold text-3xl xsm:text-4xl">
            Start
          </span>
        </a>
      </div>
    </main>
  );
}
