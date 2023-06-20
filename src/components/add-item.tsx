"use client";

function AddItem() {
  return (
    <section className="absolute right-0 top-0 h-screen w-1/5">
      <div className="pl-12 pr-8 pt-11">
        <h1 className="mb-8 text-2xl font-medium">Add a new item</h1>
        <form>
          <div className="mb-4">
            <label htmlFor="name" className="mb-1 block text-sm font-medium">
              Name
            </label>
            <input
              type="text"
              id="name"
              name="name"
              placeholder="Enter a name"
              className="w-full rounded-xl border-0 px-4 py-5 text-sm font-medium ring-2 ring-gray-300 placeholder:text-sm placeholder:font-medium placeholder:text-gray-300 focus:ring-2 focus:ring-primary"
            />
          </div>
          <div className="mb-4">
            <label htmlFor="note" className="mb-1 block text-sm font-medium">
              Note (optional)
            </label>
            <textarea
              placeholder="Enter a note"
              className="w-full rounded-xl border-0 px-4 py-5 text-sm font-medium ring-2 ring-gray-300 placeholder:text-sm placeholder:font-medium placeholder:text-gray-300 focus:ring-2 focus:ring-primary"
              rows={3}
            />
          </div>
          <div className="mb-4">
            <label htmlFor="image" className="mb-1 block text-sm font-medium">
              Image (optional)
            </label>
            <input
              type="text"
              id="image"
              name="image"
              placeholder="Enter a url"
              className="w-full rounded-xl border-0 px-4 py-5 text-sm font-medium ring-2 ring-gray-300 placeholder:text-sm placeholder:font-medium placeholder:text-gray-300 focus:ring-2 focus:ring-primary"
            />
          </div>
        </form>
      </div>
    </section>
  );
}

export default AddItem;
