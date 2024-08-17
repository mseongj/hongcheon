import dynamic from 'next/dynamic';
import React from "react";
import Loading from './loading';
import SuggestCourse from '@/app/components/suggestCourse';

const ShowCourse = dynamic(() => import('@/app/components/showCourse'), {
  loading: () => <Loading/>,
}) 

let isModalOpen = true;

export default function Home() {
  return (
    <div className='flex flex-col'>
      <div id="주변놀거리&추천코스" className="w-full">
        <h3 className='text-lg font-bold'>주변 놀거리 & 추천 코스</h3>
          {isModalOpen && <ShowCourse/> || <Loading/>}
      </div>
      <div id='추천 코스' className='w-full mt-10'>
        {isModalOpen && <SuggestCourse/> || <Loading/>}
      </div>
    </div>
  );
}


//
// {projects.map(project => (
//   <div className={`w-[32rem] ${project.boxHeight} p-2 m-4 md:2xl:w-full md:2xl:h-52 sm:h-80`} key={project.id}>
//     <div className="flex flex-row items-center mb-3">
//       <p className="text-2xl font-bold ">{project.projectName}</p>
//       <Link href={project.githubLink} className={`rounded-full ring-2 ${project.githubButtonColor} p-2 ml-4`}>Github</Link>
//       <Image src={project.imageSrc} width={project.imageWidth} height={project.imageHeight} alt={project.imageAlt} className="ml-auto self-end mr-3"></Image> 
//     </div>
//     <p className="text-lg text-gray-500">{project.description}</p>
//     <p className="text-l text-gray-500">Why am i made this project: </p>
//     <div className="ml-2">
//         <p className="text-md text-gray-500 text-pretty">{project.why}</p>
//     </div>
//   </div>
//   ))}