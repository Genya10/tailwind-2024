export function MainPart() {
  return (
    <div className="container">
      <header className="w-96 flex items-center justify-between mb-10">
        <div>Logo</div>
        <ul className="flex gap-2">
          <li>First</li>
          <li>Second</li>
          <li>Third</li>
        </ul>
        <button>Contact us</button>
      </header>
      <section className="grid grid-cols-3 gap-5">
        <div>IMAGE</div>
        <div>IMAGE</div>
        <div>IMAGE</div>
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
