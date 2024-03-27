// import { Link, useLoaderData } from "react-router-dom";
import Nav from "../components/Nav";
// import bookCard from "../components/bookCard";



const Home = () => {


    // const home=useLoaderData()
    // console.log(home);
    return (
        <div className="" >
            <div className="hero min-h-screen bg-white-200 rounded ">
                <div className="hero-content flex-col lg:flex-row-reverse gap-11 ">
                    <div className=" bg-gray-200 bor"> <img src="/src/assets/pic.jpg" className=" max-w-sm rounded-lg" /></div>
                    <div>
                        <h1 className="text-6xl font-bold mr-8 tex">Books to freshen up <br />your bookshelf</h1><br />

                       
                        {/* <button className="btn bg-green-500 font-bold "></button> */}
                    </div>
                </div>
            </div>
            <div className='hero-content text-center font-bold ml-11 text-6xl'>
                <h1>Books</h1>
            </div>
            <div>
            <section className="bg-white-200 text-gray-100">
	<div className="container max-w-6xl p-6 mx-auto space-y-6 sm:space-y-12">
		{/* <a rel="noopener noreferrer" href="#" className="block max-w-sm gap-3 mx-auto sm:max-w-full group hover:no-underline focus:no-underline lg:grid lg:grid-cols-12 bg-gray-900">
			<img src="https://source.unsplash.com/random/480x360" alt="" className="object-cover w-full h-64 rounded sm:h-96 lg:col-span-7 bg-gray-500" />
			<div className="p-6 space-y-2 lg:col-span-5">
				<h3 className="text-2xl font-semibold sm:text-4xl group-hover:underline group-focus:underline">Noster tincidunt reprimique ad pro</h3>
				<span className="text-xs text-gray-400">February 19, 2021</span>
				<p>Ei delenit sensibus liberavisse pri. Quod suscipit no nam. Est in graece fuisset, eos affert putent doctus id.</p>
			</div>
		</a> */}
		<div className="grid justify-center grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3">
			<a rel="noopener noreferrer" href="#" className="max-w-sm mx-auto group hover:no-underline focus:no-underline bg-gray-500">
				<img role="presentation" className="object-cover w-full  p-5 h-38  bg-white-200" src="https://i.postimg.cc/fRQPNb39/book1.jpg" />
				<div className="p-6 space-y-2">
					<h3 className="text-2xl font-semibold group-hover:underline group-focus:underline">In usu laoreet repudiare legendos</h3>
					<span className="text-xs text-gray-400">January 21, 2021</span>
					<p>Mei ex aliquid eleifend forensibus, quo ad dicta apeirian neglegentur, ex has tantas percipit perfecto. At per tempor albucius perfecto, ei probatus consulatu patrioque mea, ei vocent delicata indoctum pri.</p>
				</div>
			</a>
			<a rel="noopener noreferrer" href="#" className="max-w-sm mx-auto group hover:no-underline focus:no-underline bg-gray-500">
				<img role="presentation" className="object-cover w-full rounded  p-5 h-38  bg-white-200" src="https://i.postimg.cc/rynd3dPf/book7.jpg" />
				<div className="p-6 space-y-2">
					<h3 className="text-2xl font-semibold group-hover:underline group-focus:underline">In usu laoreet repudiare legendos</h3>
					<span className="text-xs text-gray-400">January 22, 2021</span>
					<p>Mei ex aliquid eleifend forensibus, quo ad dicta apeirian neglegentur, ex has tantas percipit perfecto. At per tempor albucius perfecto, ei probatus consulatu patrioque mea, ei vocent delicata indoctum pri.</p>
				</div>
			</a>
			<a rel="noopener noreferrer" href="#" className="max-w-sm mx-auto group hover:no-underline focus:no-underline bg-gray-500">
				<img role="presentation" className="object-cover w-full rounded p-5 h-38  bg-white-200" src="https://i.postimg.cc/Hs1GpzRn/book3.jpg" />
				<div className="p-6 space-y-2">
					<h3 className="text-2xl font-semibold group-hover:underline group-focus:underline">In usu laoreet repudiare legendos</h3>
					<span className="text-xs text-gray-400">January 23, 2021</span>
					<p>Mei ex aliquid eleifend forensibus, quo ad dicta apeirian neglegentur, ex has tantas percipit perfecto. At per tempor albucius perfecto, ei probatus consulatu patrioque mea, ei vocent delicata indoctum pri.</p>
				</div>
			</a>
			<a rel="noopener noreferrer" href="#" className="max-w-sm mx-auto group hover:no-underline focus:no-underline bg-gray-500 hidden sm:block">
				<img role="presentation" className="object-cover w-full rounded p-5 h-38  bg-white-200" src="https://i.postimg.cc/bvJW6BDC/book4.jpg" />
				<div className="p-6 space-y-2">
					<h3 className="text-2xl font-semibold group-hover:underline group-focus:underline">In usu laoreet repudiare legendos</h3>
					<span className="text-xs text-gray-400">January 24, 2021</span>
					<p>Mei ex aliquid eleifend forensibus, quo ad dicta apeirian neglegentur, ex has tantas percipit perfecto. At per tempor albucius perfecto, ei probatus consulatu patrioque mea, ei vocent delicata indoctum pri.</p>
				</div>
			</a>
			<a rel="noopener noreferrer" href="#" className="max-w-sm mx-auto group hover:no-underline focus:no-underline bg-gray-500 hidden sm:block">
				<img role="presentation" className="object-cover w-full rounded  p-5 h-38  bg-white-200" src="https://i.postimg.cc/59vGkvyV/book5.jpg" />
				<div className="p-6 space-y-2">
					<h3 className="text-2xl font-semibold group-hover:underline group-focus:underline">In usu laoreet repudiare legendos</h3>
					<span className="text-xs text-gray-400">January 25, 2021</span>
					<p>Mei ex aliquid eleifend forensibus, quo ad dicta apeirian neglegentur, ex has tantas percipit perfecto. At per tempor albucius perfecto, ei probatus consulatu patrioque mea, ei vocent delicata indoctum pri.</p>
				</div>
			</a>
			<a rel="noopener noreferrer" href="#" className="max-w-sm mx-auto group hover:no-underline focus:no-underline bg-gray-500 hidden sm:block">
				<img role="presentation" className="object-cover w-full rounded  p-5 h-38  bg-white-200" src="https://i.postimg.cc/L6p7dXgZ/book6.jpg" />
				<div className="p-6 space-y-2">
					<h3 className="text-2xl font-semibold group-hover:underline group-focus:underline">In usu laoreet repudiare legendos</h3>
					<span className="text-xs text-gray-400">January 26, 2021</span>
					<p>Mei ex aliquid eleifend forensibus, quo ad dicta apeirian neglegentur, ex has tantas percipit perfecto. At per tempor albucius perfecto, ei probatus consulatu patrioque mea, ei vocent delicata indoctum pri.</p>
				</div>
			</a>
            {/* {home.map(home=>
            <bookCard key={home.bookId}/>
            )} */}
		</div>
		{/* <div className="flex justify-center">
			<button type="button" className="px-6 py-3 text-sm rounded-md hover:underline bg-gray-900 text-gray-400">Load more posts...</button>
		</div> */}
	</div>
</section>

            </div>
        </div>


    );
};

export default Home;