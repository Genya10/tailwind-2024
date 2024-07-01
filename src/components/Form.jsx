export function Form() {
  return (
    <form>
      <input
        className="py-1 px-2 rounded-md border-2 border-dashed border-transparent
                          duration-300 transition-colors ease-linear outline-none
                       hover:border-green-500 focus:border-blue-700 
                        after:w-5 block"
        type="text"
        placeholder="Enter email:"
      />
      <button className="mt-5">Submit</button>
    </form>
  );
}
