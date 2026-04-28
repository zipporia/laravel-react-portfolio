import { ChevronDownIcon } from '@heroicons/react/16/solid';
import { PhotoIcon, UserCircleIcon } from '@heroicons/react/24/solid';
import axiosClient from '../../axiosClient';

export default function ProductForm() {

    const onSubmit = (ev) => {
        ev.preventDefault();

        // axiosClient.post('/product', {
        //     id: 'test',
        //     image: '',
        //     name: 'test name',
        //     price_cents: '11111',
        //     rating_stars: '4',
        //     rating_count: '55',
        //     keywords: ['socks', 'sports', 'apparel'],
        // })
    }

    return (
        <form method="POST" onSubmit={onSubmit}>
            <div className="space-y-12">
                <div className="border-b border-gray-900/10 pb-12">
                    <div className="mt-10 grid grid-cols-1 gap-x-6 gap-y-8 sm:grid-cols-6">

                        <div className="col-span-full">
                            <label htmlFor="photo" className="block text-sm/6 font-medium text-gray-900">
                                Product Photo
                            </label>
                            <div className="mt-2 flex items-center gap-x-3">
                                <UserCircleIcon aria-hidden="true" className="size-12 text-gray-300" />
                                <button
                                    type="button"
                                    className="rounded-md bg-white px-3 py-2 text-sm font-semibold text-gray-900 shadow-xs inset-ring inset-ring-gray-300 hover:bg-gray-50"
                                >
                                    Change
                                </button>
                            </div>
                        </div>
                    </div>
                </div>

                <div className="border-b border-gray-900/10 pb-12">

                    <div className="mt-10 grid grid-cols-1 gap-x-6 gap-y-8 sm:grid-cols-6">
                        <div className="sm:col-span-6">
                            <label htmlFor="product-name" className="block text-sm/6 font-medium text-gray-900">
                                Product name
                            </label>
                            <div className="mt-2">
                                <input
                                    id="product-name"
                                    name="product-name"
                                    type="text"
                                    autoComplete="given-name"
                                    className="block w-full rounded-md bg-white px-3 py-1.5 text-base text-gray-900 outline-1 -outline-offset-1 outline-gray-300 placeholder:text-gray-400 focus:outline-2 focus:-outline-offset-2 focus:outline-indigo-600 sm:text-sm/6"
                                />
                            </div>
                        </div>

                        <div className="sm:col-span-6">
                            <label htmlFor="rating-stars" className="block text-sm/6 font-medium text-gray-900">
                                Rating Stars
                            </label>
                            <div className="mt-2">
                                <input
                                    id="rating-stars"
                                    name="rating-stars"
                                    type="text"
                                    autoComplete="family-name"
                                    className="block w-full rounded-md bg-white px-3 py-1.5 text-base text-gray-900 outline-1 -outline-offset-1 outline-gray-300 placeholder:text-gray-400 focus:outline-2 focus:-outline-offset-2 focus:outline-indigo-600 sm:text-sm/6"
                                />
                            </div>
                        </div>

                        <div className="sm:col-span-6">
                            <label htmlFor="rating-count" className="block text-sm/6 font-medium text-gray-900">
                                Rating Count
                            </label>
                            <div className="mt-2">
                                <input
                                    id="rating-count"
                                    name="rating-count"
                                    type="text"
                                    autoComplete="family-name"
                                    className="block w-full rounded-md bg-white px-3 py-1.5 text-base text-gray-900 outline-1 -outline-offset-1 outline-gray-300 placeholder:text-gray-400 focus:outline-2 focus:-outline-offset-2 focus:outline-indigo-600 sm:text-sm/6"
                                />
                            </div>
                        </div>


                        <div className="sm:col-span-6">
                            <label htmlFor="price_cents" className="block text-sm/6 font-medium text-gray-900">
                                Price Cents
                            </label>
                            <div className="mt-2">
                                <input
                                    id="price_cents"
                                    name="price_cents"
                                    type="number"
                                    autoComplete="email"
                                    className="block w-full rounded-md bg-white px-3 py-1.5 text-base text-gray-900 outline-1 -outline-offset-1 outline-gray-300 placeholder:text-gray-400 focus:outline-2 focus:-outline-offset-2 focus:outline-indigo-600 sm:text-sm/6"
                                />
                            </div>
                        </div>

                        <div className="sm:col-span-6">
                            <label htmlFor="keywords" className="block text-sm/6 font-medium text-gray-900">
                                Keywords
                            </label>
                            <div className="mt-2 grid grid-cols-1">
                                <select
                                    id="keywords"
                                    name="keywords"
                                    autoComplete="country-name"
                                    className="col-start-1 row-start-1 w-full appearance-none rounded-md bg-white py-1.5 pr-8 pl-3 text-base text-gray-900 outline-1 -outline-offset-1 outline-gray-300 focus:outline-2 focus:-outline-offset-2 focus:outline-indigo-600 sm:text-sm/6"
                                >
                                    <option>Sport</option>
                                    <option>Apparel</option>
                                    <option>Men's</option>
                                </select>
                                <ChevronDownIcon
                                    aria-hidden="true"
                                    className="pointer-events-none col-start-1 row-start-1 mr-2 size-5 self-center justify-self-end text-gray-500 sm:size-4"
                                />
                            </div>
                        </div>

                    </div>
                </div>

            </div>

            <div className="mt-6 flex items-center justify-end gap-x-6">
                <button type="button" className="text-sm/6 font-semibold text-gray-900">
                    Cancel
                </button>
    
                <button
                    type="submit"
                    className="rounded-md bg-indigo-600 px-3 py-2 text-sm font-semibold text-white shadow-xs hover:bg-indigo-500 focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600"
                >
                    Save
                </button>
            </div>
        </form>
    );
}
