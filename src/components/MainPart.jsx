export function MainPart() {
  return (
    <div className="container">
      <header className="w-96 flex items-center justify-between mb-10">
        <div
          className="cursor-pointer hover:text-green-500 transition-colors duration-300
                      ease-in-out bg-green-50/10 px-4 py-2 shadow-lg shadow-green-500/50"
        >
          Logo
        </div>
        <ul className="flex gap-2 first:text-red-700 last:text-blue-600">
          <li>First</li>
          <li>Second</li>
          <li>Third</li>
        </ul>
        <button className="hover:scale-125 transition-transform duration-500">
          Contact us
        </button>
      </header>
      <section className="grid grid-cols-3 gap-5">
        <div className="rotate-6 hover:animate-ping">IMAGE</div>
        <div className="blur-sm">IMAGE</div>
        <div className="hover:translate-y-2 hover:translate-x-1/3">IMAGE</div>
        <div>IMAGE</div>
        <div>IMAGE</div>
        <div>IMAGE</div>
        <div>IMAGE</div>
        <div>IMAGE</div>
        <div>IMAGE</div>
      </section>
    </div>
  );
}
