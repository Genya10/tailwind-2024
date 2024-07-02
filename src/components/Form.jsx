import cl from "../Core.module.scss";

export function Form() {
  return (
    <form
      className="bg-primary-color/20 p-3 rounded-lg border
          border-solid border-white/50"
    >
      <h1 className="mb-5 font-semibold">Login</h1>
      <input className={cl.field} type="text" placeholder="Enter email:" />
      <input className={cl.field} type="text" placeholder="Enter password:" />
      <button className="btn">Submit</button>
    </form>
  );
}
