import React from 'react';

const Home = () => {
    return (
        <div className='h-screen lg:w-2/4 md:w-[100%] mx-auto'>
            <div className=" rounded-lg shadow-lg">
                <div className="w-full  ">
                    <h1 className='text-3xl font-bold text-center pt-16 mb-6'>Form</h1>
                </div>
                <div className="lg:px-20 md:px-14 px-6">
                    <form>
                    <label className="label-text">Name:
                </label>
                <br/>
                <input
                  type="name"
                  placeholder="Name"
                  name="name"
                  className="mt-2 rounded-md border border-black w-full h-10 px-4"
                  required
                />
                    </form>
                </div>
            </div>
        </div>
    );
};

export default Home;