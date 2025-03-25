
function Registeration() {
    return (
        <div>
            <section className="p-6 bg-gray-900 text-white">
            <h1 className="mb-10 font-bold text-yellow-400 text-4xl text-center"> Sign up </h1>
            <div className="space-y-2 col-span-full lg:col-span-1 text-center mb-10">
                <p className="font-medium">Personal Inormation</p>
                <p className="text-xs">Please provide your personal information below!</p>
            </div>
                <form noValidate="" action="" className="pl-60 border-red border-4 border-yellow-600 rounded-lg">
                    <fieldset className="grid grid-cols-4 gap-6 p-6 rounded-md shadow-sm dark:bg-gray-900">
                        <div className="grid grid-cols-6 gap-4 col-span-full lg:col-span-3">
                            <div className="col-span-full sm:col-span-3">
                                <label htmlFor="firstname" className="text-sm text-white font-bold">First name</label>
                                <input id="firstname" type="text" placeholder="First name" className="bg-white w-full rounded-md focus:ring focus:ring-opacity-75 text-black focus:dark:ring-violet-600 dark:border-gray-300 bg-white" />
                            </div>
                            <div className="col-span-full sm:col-span-3">
                                <label htmlFor="lastname" className="text-sm text-white font-bold">Last name</label>
                                <input id="lastname" type="text" placeholder="Last name" className="bg-white w-full rounded-md focus:ring focus:ring-opacity-75 text-black focus:dark:ring-violet-600 dark:border-gray-300" />
                            </div>
                            <div className="col-span-full sm:col-span-3">
                                <label htmlFor="email" className="text-sm text-white font-bold">Email</label>
                                <input id="email" type="email" placeholder="Email" className="bg-white w-full rounded-md focus:ring focus:ring-opacity-75 text-black focus:dark:ring-violet-600 dark:border-gray-300" />
                            </div>
                            <div className="col-span-full sm:col-span-3">
                                <label htmlFor="email" className="text-sm text-white font-bold">Mobile.no</label>
                                <input id="email" type="email" placeholder="Number" className="bg-white w-full rounded-md focus:ring focus:ring-opacity-75 text-black focus:dark:ring-violet-600 dark:border-gray-300" />
                            </div>
                            <div className="col-span-full">
                                <label htmlFor="address" className="text-sm text-white font-bold">Address</label>
                                <input id="address" type="text" placeholder="" className="bg-white w-full rounded-md focus:ring focus:ring-opacity-75 text-black focus:dark:ring-violet-600 dark:border-gray-300"/>
                            </div>
                            <div className="col-span-full sm:col-span-2">
                                <label htmlFor="city" className="text-sm text-white font-bold">City</label>
                                <input id="city" type="text" placeholder="" className="bg-white w-full rounded-md focus:ring focus:ring-opacity-75 text-black focus:dark:ring-violet-600 dark:border-gray-300" />
                            </div>
                            <div className="col-span-full sm:col-span-2">
                                <label htmlFor="state" className="text-sm text-white font-bold">State / Province</label>
                                <input id="state" type="text" placeholder="" className="bg-white w-full rounded-md focus:ring focus:ring-opacity-75 text-black focus:dark:ring-violet-600 dark:border-gray-300" />
                            </div>
                            <div className="col-span-full sm:col-span-2">
                                <label htmlFor="zip" className="text-sm text-white font-bold">ZIP / Postal</label>
                                <input id="zip" type="text" placeholder="" className="w-full rounded-md focus:ring focus:ring-opacity-75 text-black focus:dark:ring-violet-600 dark:border-gray-300 bg-white" />
                            </div>
                            <div className="bg-red-400 w-20 ml-80 mt-6 pl-4 rounded-md">
                                <button>Submit</button>
                            </div>
                        </div>
                    </fieldset>
                </form>
            </section>
        </div>
    )
}

export default Registeration