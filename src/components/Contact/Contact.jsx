import { useState } from "react";
import GoogleMap from "../Map/GoogleMap";

export default function Contact() {
  const [form, setForm] = useState({
    name: "",
    email: "",
    message: "",
  });
  const [status,setStatus]=useState('')

  const handleChange = (e) =>
    setForm({ ...form, [e.target.name]: e.target.value });

  const handleSubmit =async (e) => {
    e.preventDefault();
    
    const res=await fetch('http://localhost:3000/api/contact',{
      method:"POST",
      headers:{
        "content-Type" :"application/json",
      },
      body:JSON.stringify(form)
    })
    
    const result = await res.json()
    console.log('backend response :',result)
     setStatus(result.message)
     setForm({name:'',email:'',message:''})
     setTimeout(()=>{
      setStatus('')
     },2000)


  };
 
  return (
    <section className="py-20 bg-slate-950">
      <div className="max-w-6xl mx-auto px-4">
        <h2 className="text-3xl text-center mb-12">Contact Us</h2>

        <div className="grid gap-10 md:grid-cols-2">

          {/* LEFT: FORM */}
          <form
            onSubmit={handleSubmit}
            className="bg-slate-900 p-6 rounded-xl space-y-4"
          > {status && (
            <div className="bg-green-600 text-white p-3 rounded text-center">
              {status}
            </div>
          )}
            <input
              name="name"
              value={form.name}
              onChange={handleChange}
              placeholder="Your Name"
              className="w-full p-2 rounded bg-slate-950"
              required
            />
            <input
              name="email"
              type="email" 
              value={form.email}
              onChange={handleChange}
              placeholder="Your Email"
              className="w-full p-2 rounded bg-slate-950"
            />
            <textarea
              name="message"
              value={form.message}
              onChange={handleChange}
              placeholder="Your Message"
              className="w-full p-2 rounded bg-slate-950"
              required
            />
            <button className="bg-cyan-500 text-black px-4 py-2 rounded">
              Submit
            </button>
          </form>

          {/* RIGHT: MAP */}
          <div className="flex flex-col gap-4">
            <div>
              <h3 className="text-xl mb-2">Our Location</h3>
              <p className="text-sm text-slate-400">
                7xcoder – Remote Software Agency (India)
              </p>
            </div>

            <GoogleMap />
          </div>

        </div>
      </div>
    </section>
  );
}
