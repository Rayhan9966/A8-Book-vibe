import { Link } from "react-router-dom";


const ErrorPage = () => {
  
  return (
    
     <div className="flex flex-col justify-center items-center mt-52 text-error space-y-3">
     <h2 className="text-4xl font-bold text-black my-5">Opps !!! </h2>
     <h2 className="text-4xl font-bold my-5">408</h2>
      <h3 className="text-xl font-bold"> Page Not found</h3>
     
     <Link to='/'><button className="btn bg-red-600">Go Home</button></Link>
      
      


    </div>
  );
};

export default ErrorPage;