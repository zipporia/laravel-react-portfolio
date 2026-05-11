import { UserCircleIcon } from '@heroicons/react/24/solid';
import { useState } from 'react';
import axiosClient from '../../axiosClient';

export default function ProductForm() {

    const [product, setProduct] = useState({
        image: null,
        image_url: null,
        name: '',
        price_cents: '',
        rating_stars: '',
        rating_count: '',
        keywords: [],
    });

    const onImageChoose = (ev) => {
        const file = ev.target.files[0];

        const reader = new FileReader();
        reader.onload = () => {
            setProduct({
                ...product,
                image: file,
                image_url: reader.result,
            });

            ev.target.value = '';
        };
        reader.readAsDataURL(file);
    };

    const handleChange = (ev) => {
        setProduct({
            ...product,
            [ev.target.name]: ev.target.value,
        });
    };

    const handleKeywordChange = (ev) => {
        const value = ev.target.value;
        const checked = ev.target.checked;

        setProduct(prev => ({
            ...prev,
            keywords: checked
                ? [...prev.keywords, value]
                : prev.keywords.filter(k => k !== value)
        }));
    };

    const keywordOptions = [
        'sports',
        'apparel',
        'mens'
    ];

    const onSubmit = (ev) => {
        ev.preventDefault();

        const payload = { ...product };

        if(payload.image) {
            payload.image = payload.image_url;
        }

        delete payload.image_url

        axiosClient.post("/product", payload).then((res) => {
            console.log(product);
        })
    
    };

    return (
        <form method="POST" onSubmit={onSubmit}>
            <div className="space-y-12">
                <div className="border-b border-gray-900/10 pb-12">
                    <div className="mt-10 grid grid-cols-1 gap-x-6 gap-y-8 sm:grid-cols-6">
                        <div className="col-span-full">
                            <label htmlFor="" className="block text-sm/6 font-medium text-gray-900">
                                Product Photo
                            </label>
                            <div className="mt-2 flex items-center gap-x-3">
                                {product.image_url && <img src={product.image_url} className="h-20" />}

                                {!product.image_url && <UserCircleIcon aria-hidden="true" className="size-12 text-gray-300" />}

                                <input type="file" id="photo" onChange={onImageChoose} className="hidden" />
                                <button
                                    type="button"
                                    onClick={() => document.getElementById('photo').click()}
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
                            <label htmlFor="name" className="block text-sm/6 font-medium text-gray-900">
                                Product name
                            </label>
                            <div className="mt-2">
                                <input
                                    id="name"
                                    name="name"
                                    type="text"
                                    value={product.name}
                                    onChange={handleChange}
                                    autoComplete="given-name"
                                    className="block w-full rounded-md bg-white px-3 py-1.5 text-base text-gray-900 outline-1 -outline-offset-1 outline-gray-300 placeholder:text-gray-400 focus:outline-2 focus:-outline-offset-2 focus:outline-indigo-600 sm:text-sm/6"
                                />
                            </div>
                        </div>

                        <div className="sm:col-span-6">
                            <label htmlFor="rating_stars" className="block text-sm/6 font-medium text-gray-900">
                                Rating Stars
                            </label>
                            <div className="mt-2">
                                <input
                                    id="rating_stars"
                                    name="rating_stars"
                                    type="text"
                                    value={product.rating_stars}
                                    onChange={handleChange}
                                    autoComplete="family-name"
                                    className="block w-full rounded-md bg-white px-3 py-1.5 text-base text-gray-900 outline-1 -outline-offset-1 outline-gray-300 placeholder:text-gray-400 focus:outline-2 focus:-outline-offset-2 focus:outline-indigo-600 sm:text-sm/6"
                                />
                            </div>
                        </div>

                        <div className="sm:col-span-6">
                            <label htmlFor="rating_count" className="block text-sm/6 font-medium text-gray-900">
                                Rating Count
                            </label>
                            <div className="mt-2">
                                <input
                                    id="rating_count"
                                    name="rating_count"
                                    type="text"
                                    value={product.rating_count}
                                    onChange={handleChange}
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
                                    value={product.price_cents}
                                    onChange={handleChange}
                                    autoComplete="email"
                                    className="block w-full rounded-md bg-white px-3 py-1.5 text-base text-gray-900 outline-1 -outline-offset-1 outline-gray-300 placeholder:text-gray-400 focus:outline-2 focus:-outline-offset-2 focus:outline-indigo-600 sm:text-sm/6"
                                />
                            </div>
                        </div>

                        <div className="sm:col-span-6">
                            <label className="block text-sm font-medium text-gray-900">Keywords</label>

                            <div className="mt-2 space-y-2">
                                {keywordOptions && keywordOptions.map(keyword => (
                                    <label key={keyword} className="flex items-center gap-2">
                                    <input
                                            type="checkbox"
                                            value={keyword}
                                            checked={product.keywords.includes(keyword)}
                                            onChange={handleKeywordChange}
                                            className="h-1 w-1 rounded border-gray-300"
                                        />
                                        {keyword} 
                                    </label>
                                ))

                                }
                            </div>
                        </div>

                        {/* <div className="sm:col-span-6">
                            <label htmlFor="keywords" className="block text-sm/6 font-medium text-gray-900">
                                Keywords
                            </label>
                            <div className="mt-2 grid grid-cols-1">
                                <select
                                    id="keywords"
                                    name="keywords"
                                    value={product.keywords}
                                    onChange={handleChange}
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
                        </div> */}
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
