import React from 'react';

function Contact() {
  return (
    <>
      <div className='flex h-screen items-center justify-center'>
          <div className="">
            <h3 className="font-bold text-3xl">Contact Us</h3>
            <div className='mt-5 space-y-2'>
              <label>Name</label>
              <br />
              <input
                type="text"
                placeholder="Enter your full name"
                className="w-96 px-3 py-1 border rounded-md outline-none"
              />
            </div>
            <div className='mt-4 space-y-2'>
              <label>Email</label>
              <br />
              <input
                type="email"
                placeholder="Enter your email"
                className="w-96 px-3 py-1 border rounded-md outline-none"
              />
            </div>
            <div className='mt-4 space-y-2'>
              <label>Message</label>
              <br />
              <textarea
                placeholder="Type your message"
                className="w-96 px-3 py-1 border rounded-md outline-none"
                rows="4"
              ></textarea>
            </div>
            <div className='flex justify-start mt-4'>
              <button className='bg-blue-500 text-white rounded-md px-3 py-1 hover:bg-blue-700 duration-200'>
                Submit
              </button>
            </div>
          </div>
      </div>
    </>
  );
}

export default Contact;
