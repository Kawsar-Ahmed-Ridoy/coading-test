import React from "react";

const Home = () => {
  return (
    <div className="h-screen lg:w-2/4 md:w-[100%] px-10 mx-auto mt-20">
      <div className=" rounded-lg shadow-lg">
        <div className="w-full  ">
          <h1 className="text-3xl font-bold text-center pt-16 mb-6">Form</h1>
        </div>
        <div className="lg:px-20 md:px-14 px-6 pb-10">
          <form>
            <label className="label-text">Name:</label>
            <br/>
            <input
              type="name"
              placeholder="Name"
              name="name"
              className="mt-2 rounded-md border border-black w-full h-10 px-4"
              required
            />
            <div className="my-6">
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
            <input type="checkbox" required/>
            <label className="label-text ml-2 font-bold">Agree to terms</label>
            <div className="flex flex-col my-6 justify-between sm:flex-row items-center">
                <button className="border border-black px-6 py-2 rounded-md font-bold " type="submit">Save</button>
                <p className="my-auto ml-2">Result saved <span className="underline font-bold ">click here to see the result</span></p>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
};

export default Home;
