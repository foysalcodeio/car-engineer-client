import { useEffect, useState } from "react";
import Card from "./Card";

const Services = () => {
    const [services, setServices] = useState([])
    useEffect(()=> {
        fetch('http://localhost:5000/services')
        .then(res => res.json())
        .then(data => setServices(data))
    }, [])
    return (
        <div>
            <div className="text-center">
                <h3 className="text-3xl font-bold text-orange-600">Our Services</h3>
                <h1 className="text-5xl font-bold text-black">Our Service Area</h1>
                <p className="font-bold">the majority have suffered alteration in some form, by injected humour, or randomised <br />
                 words which don't look even slightly believable. </p>
            </div>
            <div className="grid justify-center grid-cols-1  md:grid-cols-2 lg:grid-cols-3 gap-6 mt-5">
                {
                    services.map(service => <Card
                    key={service._id}
                    service={service}
                    ></Card>)
                }
            </div>
        </div>
    );
};

export default Services;