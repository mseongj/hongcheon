'use client'
import { StaticImport } from 'next/dist/shared/lib/get-img-props';
import Image from 'next/image';
import { useState } from 'react';


const courses = [
    {
      id: 1,
      recommendedUserName: '김홍천',
      likedCount: 230,
      placese:{
        place1: {imageUrl: '/img1.jpg', coursesName: '비발디파크 오션월드',},
        place2: {imageUrl: '/img2.jpg', coursesName: 'ㅁㄴㅇㄹ',},
        place3: {imageUrl: '/img3.jpg', coursesName: 'ㅇㄹ호ㅠㅍㅍ',},
        place4: {imageUrl: '/img4.jpg', coursesName: 'ㅁㄴㅇㄹ',},
        place5: {imageUrl: '/img5.jpg', coursesName: 'ㅇㄹ호ㅠㅍㅍ',},
      }
    },
    {
      id: 2,
      recommendedUserName: '박홍철',
      likedCount: 180,
      placese:{
        place1: {imageUrl: '/img3.jpg', coursesName: 'asdf',},
        place2: {imageUrl: '/img2.jpg', coursesName: 'ㅁㄴㅇㄹf',},
        place3: {imageUrl: '/img5.jpg', coursesName: 'a호픁',},
        place4: {imageUrl: '/img1.jpg', coursesName: '핫플',}
      }
    },
    {
      id: 3,
      recommendedUserName: '홍길동',
      likedCount: 30,
      placese:{
        place1: {imageUrl: '/img1.jpg', coursesName: 'asdf',},
        place2: {imageUrl: '/img5.jpg', coursesName: 'ㅁㄴㅇㄹf',},
        place3: {imageUrl: '/img2.jpg', coursesName: 'a호픁',},
        place4: {imageUrl: '/img4.jpg', coursesName: '핫플',}
      }
    },
];


export default function SuggestCourse() {
  const [isLiked, setIsLiked] = useState(false);
  
  const handleClick = () => {
    setIsLiked(!isLiked);
  };
    return (
      <div>
      {courses.map(course => (
        <div className='' key={course.id}>
            <div className='flex flex-row w-full h-fit'>
              <p className="text-lg mr-auto">{course.recommendedUserName}님이 추천하는 코스에요.</p>
              <div className='flex flex-row items-center'>
               추천 수:<p className='text-red-600 font-bold'>{course.likedCount}</p>
                <button onClick={handleClick} className='ml-2'>
                  {isLiked ? 'Liked' : 'Like'}
                </button>
              </div>
            </div>
          <div className="flex flex-row w-full h-fit mb-8">
          <div className="flex flex-row mb-8 h-fit overflow-x-scroll">
            {Object.values(course.placese).map((place: { imageUrl: string | StaticImport; coursesName: string }) => (
              <div key={place.coursesName} className='w-52 h-auto flex flex-col items-center' > 
                <Image src={place.imageUrl} width={200} height={150} alt={place.coursesName} className='w-40 h-auto'/>
                <p className='text-sm overflow-clip w-52'>{place.coursesName}</p>
              </div>
            ))}
          </div>
        </div>
        </div>
      ))}
    </div>
    
      );
}







  
