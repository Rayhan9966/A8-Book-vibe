import React from 'react';

const List = ({ list }) => {
    const { image, bookName, page, yearOfPublishing, author, tags, category, rating, publisher } = list;

    return (
        <div>
          
            
            <div className="flex flex-col border-4 rounded gap-2 max-w-7xl ml-6 p-6 space-y-4 sm:p-10 bg-white-400 text-black-100">

                <ul className="flex flex-col divide-y divide-gray-700">
                    <li className="flex flex-col py-6  gap-4 sm:flex-row sm:justify-between">
                        <div className="flex w-full space-x-2 sm:space-x-4">
                            <img className="flex-shrink-0 object-cover w-20 h-20 dark:border- rounded outline-none sm:w-32 sm:h-32 bg-gray-500" src={image} alt="Polaroid camera" />
                            <div className="flex flex-col justify-between w-full pb-4">
                                <div className="flex justify-between w-full pb-2 space-x-2">
                                    <div className="space-y-1">
                                        <h3 className="text-lg font-semibold leading-snug text1 sm:pr-8">{bookName}</h3>
                                        <p className="text-sm text-black">By : {author}</p><br />
                                        <div className='flex gap-10'>
                                            <p className="text-sm text-green-400"><span className="text-black">Tag: </span> {tags}</p>
                                            <div className="text-left flex gap-2">
                                                <p className="text-lg font-semibold"></p>
                                                <img src="./Frame2.png" alt="" />
                                                <p className="text-sm  text-gray-600">Year of Publishing:{yearOfPublishing}</p>
                                            </div>
                                        </div>
                                        <div className='flex gap-6'>

                                            <img src="./Frame1.png" alt="" />

                                            <p className="text-sm text-gray-400">Publisher: {publisher}</p>
                                            <img src="./Frame.png" alt="" />
                                            <p className="text-sm text-gray-400">Page:{page}</p>
                                        </div>
                                    </div>
                                    <div><hr /></div>

                                </div>
                                <div className="flex text-sm divide-x">
                                    <button type="button" className="flex items-center px-2 py-1 pl-0 space-x-1">

                                        <span className='btn1'>Categoty: {category}</span>
                                    </button>
                                    <button type="button" className="flex items-center px-2 py-1 space-x-1">

                                        <span className='btn2'>Rating:{rating}</span>
                                    </button>
                                    <div className="flex justify-end space-x-4">

                                        <button type="button" className="px-6 btn3 py-2 border rounded-md bg-violet-400 text-gray-900 border-violet-400">
                                            <span className="sr-only sm:not-sr-only">View Details </span>
                                        </button>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </li>


                </ul>


            </div>

        </div>
    );
};

export default List;