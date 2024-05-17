import person from '../../assets/images/about_us/person.jpg'
import parts from '../../assets/images/about_us/parts.jpg'
const About = () => {
    return (
        <div className="hero min-h-screen">
            <div className="hero-content flex-col lg:flex-row">
                <div className='lg:w-1/2 relative'>
                    <img src={person} className="w-3/4 rounded-lg shadow-2xl" />
                    <img src={parts} className="w-1/2 absolute right-5 top-2/3 rounded-lg shadow-2xl border-8 border-white"/>
                </div>
                <div className='lg:w-1/2 space-y-5 p-5'>
                    <h1 className='text-3xl font-bold text-orange-600'>About Us</h1>
                    <h1 className="text-5xl text-gray-800 font-bold">We are qulified & of experience in this field</h1>
                    <p className="py-4">There are many variations of passages of Lorem Ipsum available, but the majority have suffered alteration in some form, by injected humour, or randomised words which don't look even slightly believable. </p>
                    <p className="">the majority have suffered alteration in some form, by injected humour, or randomised words which don't look even slightly believable.  </p>
                    <button className="btn bg-orange-600 border-none text-white">Get More Info</button>
                </div>
            </div>
        </div>
    );
};

export default About;