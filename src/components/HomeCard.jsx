import React from 'react';

const HomeCard = ({card}) => {
    const { image, bookName, page, yearOfPublishing, author, tags, category, rating, publisher } = card;
    return (
        <div className=''>
            <section className="py-6 sm:py-12 text-black">
	<div className="container p-6 mx-auto space-y-8">
		
		<div className="">
			<div className="flex flex-col  ">
				<a rel="noopener noreferrer" href="#" aria-label="Te nulla oportere reprimique his dolorum">
					<img alt="" className="object-cover w-full rounded h-72  bg-gray-500" src={image}/>
				</a>
				<div className="flex flex-col flex-1 p-6">
					<a rel="noopener noreferrer" href="#" aria-label="Te nulla oportere reprimique his dolorum"></a>
					<a rel="noopener noreferrer" href="#" className="text-xs tracking-wider uppercase hover:underline text-violet-400">Tag:<span className=" text-green-400"> {tags}</span></a>
					<h3 className="flex-1 py-2 text-lg font-semibold leading-snug">{bookName}</h3>
					<div className="flex flex-wrap justify-between pt-3 space-x-2 text-xs text-gray-900">
						<span>{category}</span>
						<div className='flex gap-3'>
                        <h2>{rating}</h2>
                        
                        </div>
					</div>
				</div>
			</div>
		
			
			
			
		</div>
	</div>
</section>
        </div>
    );
};

export default HomeCard;