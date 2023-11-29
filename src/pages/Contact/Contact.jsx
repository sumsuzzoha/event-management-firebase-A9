import contact1Img from '../../assets/images/contact-sect.jpg'
const Contact = () => {
    return (
        <div>
            <div className="min-h-full w-full pt-10 mx-auto bg-base-200">
                <div className="flex flex-col items-center w-10/12 mx-auto lg:flex-row-reverse">
                    <img src={contact1Img} className="max-w-sm rounded-lg shadow-2xl" />
                    <div className='flex flex-col gap-auto items-stretch'>
                        <h3 className="font-bold pt-10 text-slate-500 ">CONTACT US</h3>
                        <div className="flex flex-col items-stretch md:flex-row w-full ">
                            <div className="w-full">
                                <div className="h-20 flex items-end pb-6">
                                    <h1 className="text-xl md:text-5xl font-extrabold ">Get In Touch</h1>
                                </div>
                                <p className="mr-6">Provident cupiditate voluptatem etin. Quaerat fugiat ut assumenda excepturi
                                    exercitationem quasi. In deleniti eaque aut repudiandae et a id nisi.</p>
                                <h1 className="text-2xl font-bold py-2">dEVENTS</h1>
                            </div>
                            <div className="flex flex-col w-full">
                                <div className="h-20 flex items-end pb-6">
                                    <h1 className="text-xl md:text-2xl font-bold ">Contact</h1>
                                </div>
                                <h3 className="text-lg ">021 Hollywood Boulevard, LA</h3>
                                <h3 className="text-lg">customer@example.com</h3>
                                <h3 className="text-lg">(021) 345-6789</h3>
                                <p className="py-2">Icon</p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <div className=" min-h-full w-full mx-auto py-4 md:py-10 bg-base-200">
                <div className="flex flex-col w-full justify-between gap-4 w-10/12 mx-auto md:flex-row-reverse">
                    <div className="card shrink-0 w-full max-w-xl shadow-2xl bg-base-100 ">
                        <form className="card-body">
                            <div className="form-control">
                                <label className="label">
                                    <span className="label-text">Email</span>
                                </label>
                                <input type="email" placeholder="email" className="input input-bordered" required />
                            </div>
                            <div className="form-control">
                                <label className="label">
                                    <span className="label-text">Password</span>
                                </label>
                                <input type="password" placeholder="password" className="input input-bordered" required />
                                <label className="label">
                                    <a href="#" className="label-text-alt link link-hover">Forgot password?</a>
                                </label>
                            </div>
                            <div className="form-control mt-6">
                                <button className="btn btn-primary">Login</button>
                            </div>
                        </form>
                    </div>
                    <div className="card shrink-0 w-full max-w-lg shadow-2xl bg-teal-900">
                        <form className="card-body">
                            <div className="form-control">
                                <input type="name" placeholder="Name" className="input input-bordered" required />
                            </div>
                            <div className="form-control">
                                <input type="email" placeholder="email" className="input input-bordered" required />
                            </div>
                            <div className="form-control">
                                <textarea className="textarea textarea-bordered" placeholder="Message"></textarea>
                                {/* <input type="textarea" placeholder="Message" className="textarea textarea-bordered" required /> */}
                            </div>
                            <div className="form-control mt-6">
                                <button className="btn btn-primary">Send Message</button>
                            </div>
                        </form>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Contact;