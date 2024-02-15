import Image from "next/image";
import { GitHub, LinkedIn, Email } from "@mui/icons-material";

export default function Home() {
  return (
    <main className="flex min-h-screen flex-col items-center justify-center p-4 bg-slate-700">
      <div className='sm:text-center text-left'>
        <div className="mb-12">
          <h1 className='sm:text-4xl text-2xl'>PETER LEE</h1>
          <h3 className='sm:text-1xl text-l'>SOFTWARE ENGINEER / WEB DEV</h3>
        </div>
        <h1 className='sm:text-3xl text-xl'>Hi, welcome to my website 👋<br />As you can see it is currently work in progress, <br />in the mean time check out my socials:</h1>
      </div>
      <div className='sm:w-fit w-full'>
        <div className='flex-row items-center mt-12 mb-4'>
          <GitHub />
          <a href="https://github.com/doko37" className='ml-4 underline'>Github Repository</a>
        </div>
        <div className='flex-row items-center mb-4'>
          <LinkedIn />
          <a href="https://www.linkedin.com/in/peter-lee-b846011a9/" className='ml-4 underline'>LinkedIn Profile</a>
        </div>
        <div className='flex-row items-center'>
          <Email />
          <a href="mailto:hunubmm@gmail.com" className='ml-4 underline'>Email Me!</a>
        </div>
      </div>
    </main>
  );
}
