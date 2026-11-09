import { testimonials } from "../../img/assets";
import MyComponent from "../stateSroll/Mycomponeet";

const Tugguests = () => {


    const Star = ({ filled }) => (
        <svg className="w-4 h-4 text-yellow-400" fill={filled ? "currentColor" : "none"} stroke="currentColor" strokeWidth="1.5" viewBox="0 0 24 24" >
            <path strokeLinecap="round" strokeLinejoin="round"  d="M12 17.25l-6.16 3.73 1.64-7.03L2.5 9.77l7.19-.61L12 2.5l2.31 6.66 7.19.61-5 4.18 1.64 7.03z" />
        </svg>
    );

    return (


     
        <div className="flex flex-col items-center px-6 md:px-16 lg:px-24 pt-20 pb-30">

            <div className="flex flex-wrap items-center justify-center gap-6 mt-20 mb-10">
                {testimonials.map((testimonial) => (
                    <MyComponent key={testimonial.id}>

                   
                    <div  style={{padding:'20px 15px'}} className="bg-white p-6 rounded-xl shadow max-w-xs">
                        <div className="flex items-center gap-3">
                            <img className="w-12 h-12 rounded-full" src={testimonial.image} alt={testimonial.name} />
                            <div>
                                <p className="font-playfair text-xl">{testimonial.name}</p>
                                <p className="text-gray-500">{testimonial.address}</p>
                            </div>
                        </div>
                        <div style={{padding:'10px 0px 15px 0px'}} className="flex items-center gap-1 mt-4">
                            {Array(5).fill(0).map((_, index) => (
                                <Star key={index} filled={testimonial.rating > index} />
                            ))}
                        </div>
                        <p className="text-gray-500 max-w-90 mt-4">"{testimonial.review}"</p>
                    </div>
 </MyComponent>
                ))}
                
            </div>
        </div> 
          
    );
}
export default Tugguests