/* eslint-disable react/prop-types */


const ServicesCard = ({ service }) => {
    const { img, title, price } = service;
    return (
        <div>
            <div className="card card-compact w-96 bg-base-100 shadow-xl mx-auto my-7 md:w-80 lg:w-96">
                <figure><img className="h-60 w-full" src={img} alt="" /></figure>
                <div className="card-body">
                    <h2 className="card-title">{title}</h2>
                    <div className="card-actions justify-between items-center">
                        <h3 className="text-base font-semibold">Price : ${price}</h3>
                        <button className="btn btn-primary">Book Now</button>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default ServicesCard;