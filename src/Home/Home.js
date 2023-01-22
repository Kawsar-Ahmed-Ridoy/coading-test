import React from "react";

const Home = () => {
  return (
    <div className="h-screen lg:w-2/4 md:w-[100%] mx-auto">
      <div className=" rounded-lg shadow-lg">
        <div className="w-full  ">
          <h1 className="text-3xl font-bold text-center pt-16 mb-6">Form</h1>
        </div>
        <div className="lg:px-20 md:px-14 px-6">
          <form>
            <label className="label-text">Name:</label>
            <br />
            <input
              type="name"
              placeholder="Name"
              name="name"
              className="mt-2 rounded-md border border-black w-full h-10 px-4"
              required
            />
            <div className="mt-6">
            <label className="label-text">Sectors: </label>
            <select className="border border-black ml-4 h-10">
                <option>Manufacturing</option>
                <option>Contruction materials</option>
                <option>Electronics and Optics</option>
                <option>Food and Beverage</option>
                <option>Bakery &amp; confectionery products</option>
                <option>Beverage</option>
                <option>Fish &amp; fish products</option>
                <option>Meat &amp; meat products</option>
                <option>Milk &amp; dairy products</option>
                <option>Other</option>
                <option>Sweet &amp; sback food</option>
                <option>Furniture</option>
                <option>Bathroom/sauna</option>
                <option>Other</option>
                <option>Labeling and packaging printing</option>
                <option>Telecommunications</option>
                <option>Water</option>
            </select>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
};

export default Home;
