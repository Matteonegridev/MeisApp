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
    <main className="flex flex-col">
      <div className="w-4/5 m-auto p-5 text-center mt-9">
        <h1 className="text-white text-7xl font-playfair">
          Meditate
          <br />
          <span className="text-primary">&</span> Sleep
        </h1>
      </div>
      <figure>
        <img
          className="mt-10 block w-[90%] m-auto"
          src="./img/meditation.svg"
        ></img>
      </figure>
      <a
        id="btn"
        onClick={animatePage}
        href="main.html"
        className=" mt-24 self-center px-14 py-3 rounded-md bg-primary"
      >
        <span className="font-sourceSans text-[#000] font-semibold text-4xl">
          Start
        </span>
      </a>
    </main>
  );
}
