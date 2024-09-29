'use client'
import { StaticImport } from 'next/dist/shared/lib/get-img-props';
import Image from 'next/image';
import Link from 'next/link';
import { useState, useEffect } from 'react';


const courses = [
    {
      id: 1,
      recommendedUserName: '김홍천',
      likedCount: 230,
      placese:{
        place1: {imageUrl: '/coursesImages/page1.cover.png', coursesName: '개구리 축제',},
        place2: {imageUrl: '/img2.jpg', coursesName: 'ㅁㄴㅇㄹ',},
        place3: {imageUrl: '/img3.jpg', coursesName: 'ㅇㄹ호ㅠㅍㅍ',},
        place4: {imageUrl: '/img4.jpg', coursesName: 'ㅁㄴㅇd',},
        place5: {imageUrl: '/img5.jpg', coursesName: 'ㅇㄹ호ㅠㅍㅍ',},
      },
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
  const [coursesData, setCoursesData] = useState(courses);
  const [likedStates, setLikedStates] = useState(courses.map(() => false));
  
  useEffect(() => {
    // 서버에서 코스 데이터를 가져오는 함수
    const fetchCourses = async () => {
      try {
        const response = await fetch('/api/courses');
        const data = await response.json();
        setCoursesData(data);
        setLikedStates(data.map(() => false));
      } catch (error) {
        console.error('코스 데이터를 가져오는 데 실패했습니다:', error);
      }
    };
  
    fetchCourses();
  }, []);

  const handleLike = async (index:any) => {
    setLikedStates(prevStates => {
      const newStates = [...prevStates];
      newStates[index] = !newStates[index];
      return newStates;
    });

    // 서버에 좋아요 상태 업데이트 요청
    try {
      const response = await fetch(`/api/courses/${coursesData[index].id}/like`, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({ liked: !likedStates[index] }),
      });
    
      if (!response.ok) {
        throw new Error('좋아요 업데이트에 실패했습니다.');
      }
    
      const updatedCourse = await response.json();
      setCoursesData(prevCourses => {
        const newCourses = [...prevCourses];
        newCourses[index] = updatedCourse;
        return newCourses;
      });
    } catch (error) {
      console.error('좋아요 업데이트 중 오류 발생:', error);
      // 오류 발생 시 좋아요 상태를 원래대로 되돌림
      setLikedStates(prevStates => {
        const newStates = [...prevStates];
        newStates[index] = !newStates[index];
        return newStates;
      });
    }
  };

  return (
    <div>
      {coursesData.map((course, index) => (
        <Link href={`/suggestCourses/${course.id}`} key={course.id}>
        <div className='' key={course.id}>
          <div className='flex flex-row w-full h-fit mb-2 items-center'>
            <p className="text-lg mr-auto">{course.recommendedUserName}님이 추천하는 코스에요.</p>
            <div className='flex flex-row items-center'>
              추천 수:&nbsp;
              <p className='text-red-600 font-bold'>
                {likedStates[index] ? course.likedCount + 1 : course.likedCount}
              </p>
              <button 
                onClick={() => handleLike(index)} 
                className={`ml-2 border-2 rounded-md px-2 py-1 ${
                  likedStates[index] ? 'bg-red-500 text-white dark:bg-red-500 dark:text-white' : 'border-black dark:border-white'
                }`}
              >
                {likedStates[index] ? 'Liked' : 'Like'}
              </button>
            </div>
          </div>
          <div className="flex flex-row w-full h-fit mb-8">
            <div className="flex flex-row mb-8 h-fit overflow-x-scroll">
              {Object.values(course.placese).map((place: { imageUrl: string | StaticImport; coursesName: string }) => (
                <div key={place.coursesName} className='w-52 h-auto flex flex-col items-center'> 
                  <Image src={place.imageUrl} width={200} height={150} alt={place.coursesName} className='w-40 h-32 overflow-hidden object-cover rounded-md'/>
                  <p className='text-sm overflow-clip w-52'>{place.coursesName}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
        </Link>
      ))}
    </div>
  );
}







  
