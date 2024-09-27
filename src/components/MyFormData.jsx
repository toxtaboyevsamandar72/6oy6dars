import { brands } from "../constants";
import { colors } from "../constants";

function MyFormData() {
  function handlesubmit(event) {
    event.preventDefault();
    const result = new FormData(event.target);
    console.log(result.get("brand"), result.get("name"), result.get("color"));
  }

  return (
    <div className="base-container flex justify-center p-20">
      <form onSubmit={handlesubmit} className="w-full max-w-96">
        <h2 className="font-semibold text-2xl mb-5">yangi mashina qo'shish</h2>
        <div className="flex flex-col gap-20">
          <input
            name="name"
            type="text"
            placeholder="Type here"
            className="input input-ghost w-full"
          />

          <select
            defaultValue=""
            name="color"
            className="select select-bordered w-full "
          >
            <option disabled value="">
              Rangini tanlang
            </option>
            {colors.map((color) => (
              <option key={color} value={color}>
                {color}
              </option>
            ))}
          </select>

          <select
            defaultValue=""
            name="brand"
            className="select select-bordered w-full "
          >
            <option disabled value="">
              Mashina brandini tanlang
            </option>
            {brands.map((brand) => (
              <option key={brand} value={brand}>
                {brand}
              </option>
            ))}
          </select>

          <button className="btn btn-primary" type="submit">
            Save
          </button>
        </div>            
      </form>
    </div>
  );
}

export default MyFormData;
