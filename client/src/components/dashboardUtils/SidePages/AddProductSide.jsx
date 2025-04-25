import React from "react";

const AddProductSide = () => {
    return (
        <section className="p-4">

            <div className="flex justify-between items-center mb-6 w-full">
                <h2 className="text-2xl font-semibold">Add New Product</h2>
                <div className="space-x-3">
                    <button className="bg-gray-100 text-gray-800 font-medium py-2 px-4 rounded hover:bg-gray-200 text-sm">
                        Save to draft
                    </button>
                    <button className="bg-blue-600 text-white font-medium py-2 px-4 rounded hover:bg-blue-700 text-sm">
                        Publish
                    </button>
                </div>
            </div>

            <div className="flex flex-wrap -mx-4">
                <div className="w-full lg:w-9/12 px-4">


                    {/* Basic Section */}
                    <div className="bg-white shadow rounded-lg mb-6">
                        <div className="border-b p-4">
                            <h4 className="text-lg font-medium">Basic</h4>
                        </div>
                        <div className="p-4">
                            <form>
                                <div className="mb-4">
                                    <label className="block mb-1">Product title</label>
                                    <input type="text" placeholder="Type here" className="w-full border rounded px-3 py-2" />
                                </div>
                                <div className="mb-4">
                                    <label className="block mb-1">Full description</label>
                                    <textarea className="w-full border rounded px-3 py-2" rows="4" placeholder="Type here"></textarea>
                                </div>
                                <div className="flex flex-wrap -mx-2">
                                    <div className="w-full lg:w-1/3 px-2 mb-4">
                                        <label className="block mb-1">Regular price</label>
                                        <input type="text" placeholder="$" className="w-full border rounded px-3 py-2" />
                                    </div>
                                    <div className="w-full lg:w-1/3 px-2 mb-4">
                                        <label className="block mb-1">Promotional price</label>
                                        <input type="text" placeholder="$" className="w-full border rounded px-3 py-2" />
                                    </div>
                                    <div className="w-full lg:w-1/3 px-2 mb-4">
                                        <label className="block mb-1">Currency</label>
                                        <select className="w-full border rounded px-3 py-2">
                                            <option>USD</option>
                                            <option>EUR</option>
                                            <option>RUBL</option>
                                        </select>
                                    </div>
                                </div>
                                <div className="mb-4">
                                    <label className="block mb-1">Tax rate</label>
                                    <input type="text" placeholder="%" className="w-full border rounded px-3 py-2" />
                                </div>
                                <label className="flex items-center mb-4">
                                    <input type="checkbox" className="mr-2" />
                                    <span>Make a template</span>
                                </label>
                            </form>
                        </div>
                    </div>

                    {/* Shipping Section */}
                    <div className="bg-white shadow rounded-lg mb-6">
                        <div className="border-b p-4">
                            <h4 className="text-lg font-medium">Shipping</h4>
                        </div>
                        <div className="p-4">
                            <form>
                                <div className="flex flex-wrap -mx-2">
                                    <div className="w-full md:w-1/2 px-2 mb-4">
                                        <label className="block mb-1">Width</label>
                                        <input type="text" placeholder="inch" className="w-full border rounded px-3 py-2" />
                                    </div>
                                    <div className="w-full md:w-1/2 px-2 mb-4">
                                        <label className="block mb-1">Height</label>
                                        <input type="text" placeholder="inch" className="w-full border rounded px-3 py-2" />
                                    </div>
                                </div>
                                <div className="mb-4">
                                    <label className="block mb-1">Weight</label>
                                    <input type="text" placeholder="gram" className="w-full border rounded px-3 py-2" />
                                </div>
                                <div className="mb-4">
                                    <label className="block mb-1">Shipping fees</label>
                                    <input type="text" placeholder="$" className="w-full border rounded px-3 py-2" />
                                </div>
                            </form>
                        </div>
                    </div>
                </div>

                {/* Sidebar */}
                <div className="w-full lg:w-3/12 px-4">
                    <div className="bg-white shadow rounded-lg mb-6">
                        <div className="border-b p-4">
                            <h4 className="text-lg font-medium">Media</h4>
                        </div>
                        <div className="p-4">
                            <div className="border border-dashed rounded-lg p-4 text-center">
                                <img src="/upload.svg" alt="upload" className="mx-auto mb-2" />
                                <input type="file" className="w-full text-sm" />
                            </div>
                        </div>
                    </div>

                    <div className="bg-white shadow rounded-lg mb-6">
                        <div className="border-b p-4">
                            <h4 className="text-lg font-medium">Organization</h4>
                        </div>
                        <div className="p-4">
                            <div className="flex flex-wrap -mx-2">
                                <div className="w-full sm:w-1/2 px-2 mb-4">
                                    <label className="block mb-1">Category</label>
                                    <select className="w-full border rounded px-3 py-2">
                                        <option>Automobiles</option>
                                        <option>Home items</option>
                                        <option>Electronics</option>
                                        <option>Smartphones</option>
                                        <option>Sport items</option>
                                        <option>Baby and Toys</option>
                                    </select>
                                </div>
                                <div className="w-full sm:w-1/2 px-2 mb-4">
                                    <label className="block mb-1">Sub-category</label>
                                    <select className="w-full border rounded px-3 py-2">
                                        <option>Nissan</option>
                                        <option>Honda</option>
                                        <option>Mercedes</option>
                                        <option>Chevrolet</option>
                                    </select>
                                </div>
                                <div className="w-full px-2">
                                    <label className="block mb-1">Tags</label>
                                    <input type="text" className="w-full border rounded px-3 py-2" />
                                </div>
                            </div>
                        </div>
                    </div>

                </div>
            </div>
        </section>
    );
};

export default AddProductSide;
