// import { Link, useLoaderData } from "react-router-dom";
import { Link } from "react-router-dom";
import Nav from "../components/Nav";
// import bookCard from "../components/bookCard";
import List from '../components/List/List';
import { useEffect, useState } from "react";
import HomeCard from "../components/HomeCard";



const Home = () => {
	const [cards,setCard]= useState([]);
    useEffect(()=>{
fetch('book.json')
.then(res=> res.json())
.then(data=> setCard(data))

    },[])

    // const home=useLoaderData()
    // console.log(home);
    return (
        <div className="" >
            <div className="hero min-h-screen bg-white-200 rounded ">
                <div className="hero-content flex-col lg:flex-row-reverse gap-11 ">
                    <div className=" bg-gray-200 bor"> <img src="/src/assets/pic.jpg" className=" max-w-sm rounded-lg" /></div>
                    <div>
                        <h1 className="text-6xl font-bold mr-8 tex">Books to freshen up <br />your bookshelf</h1><br />

                       
                        <Link to='/listedbooks'>
						<button  className="btn4 bg-green-500 font-bold "> View The List</button></Link>
                    </div>
                </div>
            </div>
            <div className='hero-content text-center font-bold ml-11 text-6xl'>
                <h1>Books</h1>
            </div>
			<div>

    
    
        <div><br />
		<section className="py-6 sm:py-12 text-black">
	<div className="container p-6 mx-auto space-y-8">
		
		<div className="grid grid-cols-1 gap-x-4 gap-y-8 md:grid-cols-2 lg:grid-cols-3">
			<article className="flex flex-col">
				<a rel="noopener noreferrer" href="#" aria-label="Te nulla oportere reprimique his dolorum">
					<img alt="" className="object-cover w-full h-52 bg-gray-500" src="https://i.postimg.cc/Hs1GpzRn/book3.jpg" />
				</a>
				<div className="flex flex-col flex-1 p-6">
					<a rel="noopener noreferrer" href="#" aria-label="Te nulla oportere reprimique his dolorum"></a>
					<a rel="noopener noreferrer" href="#" className="text-xs tracking-wider uppercase hover:underline text-violet-400">Tag:<span className=" text-green-400"> #Adventure#Middle-earth</span></a>
					<h3 className="flex-1 py-2 text-lg font-semibold leading-snug">The Great Gatsby</h3>
					<div className="flex flex-wrap justify-between pt-3 space-x-2 text-xs text-gray-400">
						<span>Classic</span>
						<span>Rating: 4.8</span>
					</div>
				</div>
			</article>
			<article className="flex flex-col">
				<a rel="noopener noreferrer" href="#" aria-label="Te nulla oportere reprimique his dolorum">
					<img alt="" className="object-cover w-full h-52 bg-gray-500" src="https://i.postimg.cc/59vGkvyV/book5.jpg" />
				</a>
				<div className="flex flex-col flex-1 p-6">
					<a rel="noopener noreferrer" href="#" aria-label="Te nulla oportere reprimique his dolorum"></a>
					<a rel="noopener noreferrer" href="#" className="text-xs tracking-wider uppercase hover:underline text-violet-400">Tag:<span className=" text-green-400">  #Romance#Drama</span></a>
					<h3 className="flex-1 py-2 text-lg font-semibold leading-snug">Robert kills</h3>
					<div className="flex flex-wrap justify-between pt-3 space-x-2 text-xs text-gray-400">
						<span>Dystopian</span>
						<span>Rating: 3.5</span>
					</div>
				</div>
			</article>
			<article className="flex flex-col">
				<a rel="noopener noreferrer" href="#" aria-label="Te nulla oportere reprimique his dolorum">
					<img alt="" className="object-cover w-full h-52 bg-gray-500" src="https://i.postimg.cc/Hs1GpzRn/book3.jpg" />
				</a>
				<div className="flex flex-col flex-1 p-6">
					<a rel="noopener noreferrer" href="#" aria-label="Te nulla oportere reprimique his dolorum"></a>
					<a rel="noopener noreferrer" href="#" className="text-xs tracking-wider uppercase hover:underline text-violet-400">Tag: <span className=" text-green-400"> #Political#Social Commentary</span></a>
					<h3 className="flex-1 py-2 text-lg font-semibold leading-snug">To Kill a Mockingbird</h3>
					<div className="flex flex-wrap justify-between pt-3 space-x-2 text-xs text-gray-400">
						<span>Fiction</span>
						<span>Rating: 4.6</span>
					</div>
				</div>
			</article>
			<article className="flex flex-col">
				<a rel="noopener noreferrer" href="#" aria-label="Te nulla oportere reprimique his dolorum">
					<img alt="" className="object-cover w-full h-52 bg-gray-500" src="https://i.postimg.cc/L6p7dXgZ/book6.jpg" />
				</a>
				<div className="flex flex-col flex-1 p-6">
					<a rel="noopener noreferrer" href="#" aria-label="Te nulla oportere reprimique his dolorum"></a>
					<a rel="noopener noreferrer" href="#" className="text-xs tracking-wider uppercase hover:underline text-violet-400">Tag:<span className=" text-green-400">  #Social Issues#Coming of Age</span></a>
					<h3 className="flex-1 py-2 text-lg font-semibold leading-snug">The Catcher in the Rye</h3>
					<div className="flex flex-wrap justify-between pt-3 space-x-2 text-xs text-gray-400">
						<span>Coming of Age</span>
						<span>Rating: 4.7</span>
					</div>
				</div>
			</article>
			<article className="flex flex-col">
				<a rel="noopener noreferrer" href="#" aria-label="Te nulla oportere reprimique his dolorum">
					<img alt="" className="object-cover w-full h-52 bg-gray-500" src="https://i.postimg.cc/bvJW6BDC/book4.jpg" />
				</a>
				<div className="flex flex-col flex-1 p-6">
					<a rel="noopener noreferrer" href="#" aria-label="Te nulla oportere reprimique his dolorum"></a>
					<a rel="noopener noreferrer" href="#" className="text-xs tracking-wider uppercase hover:underline text-violet-400">Tag:<span className=" text-green-400">  #Teenage Angst#Alienation</span></a>
					<h3 className="flex-1 py-2 text-lg font-semibold leading-snug">Pride and Prejudice</h3>
					<div className="flex flex-wrap justify-between pt-3 space-x-2 text-xs text-gray-400">
						<span>Romance</span>
						<span>Rating: 4.8</span>
					</div>
				</div>
			</article>
			<article className="flex flex-col">
				<a rel="noopener noreferrer" href="#" aria-label="Te nulla oportere reprimique his dolorum">
					<img alt="" className="object-cover w-full h-52 bg-gray-500" src="https://i.postimg.cc/fRQPNb39/book1.jpg" />
				</a>
				<div className="flex flex-col flex-1 p-6">
					<a rel="noopener noreferrer" href="#" aria-label="Te nulla oportere reprimique his dolorum"></a>
					<a rel="noopener noreferrer" href="#" className="text-xs tracking-wider uppercase hover:underline text-violet-400">Tag:<span className=" text-green-400">  #Regency Era#Satire</span></a>
					<h3 className="flex-1 py-2 text-lg font-semibold leading-snug">The Hobbit</h3>
					<div className="flex flex-wrap justify-between pt-3 space-x-2 text-xs text-gray-400">
						<span>Fantasy</span>
						<span>Rating: 4.5</span>
					</div>
				</div>
			</article>
		</div>
	</div>
</section>
           
            
            {/* <div>
                <div>
                    
                </div>
{
    cards.map(card=><HomeCard key={card.bookId} card={card}></HomeCard>)
}
            </div> */}
        </div>
			</div>
           

            </div>
        


    );
};

export default Home;