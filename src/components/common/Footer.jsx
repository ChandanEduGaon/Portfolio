import React from 'react'

const Footer = () => {
  return (
    <div className="w-screen h-[10%] flex justify-center items-center">
      <div className="flex justify-center items-center font-thin">
        <span className="text-purple-600">
          <span className='font-bold'>Linkedin</span>{" "}
          <a
            href="https://www.linkedin.com/in/chandan-singh-2b6020280/"
            className="text-black hover:text-purple-600"
            target="_blank"
          >
            clcik here
          </a>
        </span>
      </div>
    </div>
  );
}

export default Footer