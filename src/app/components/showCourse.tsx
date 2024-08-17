'use client'

import { useState } from 'react';
import Image from 'next/image';

const initialPostList = 2; // 초기에 보여 줄 게시물 개수
const incrementInitialPostList = 4; // "load more"버튼을 누를 때 마다 추가 될 게시물 개수

const courses = [
    {
      id: 1,
      name: '비발디파크 오션월드',
      address: '강원특별자치도 홍천군 서면 한치골길 262 (우)25102',
      isOpen: true,
      imageUrl: '/img2.jpg',
      openTime: '매일 10:00 ~ 17:30',
      phoneNumber: '1588-4888',
    },
    {
      id: 2,
      name: 'asdf',
      address: '강원특별자치도 홍천군 서면 한치골길 262 (우)25102',
      isOpen: true,
      imageUrl: '/img3.jpg',
      openTime: '매일 10:00 ~ 17:30',
      phoneNumber: '1588-4888',
    },
    {
      id: 3,
      name: 'asdf',
      address: '강원특별자치도 홍천군 서면 한치골길 262 (우)25102',
      isOpen: true,
      imageUrl: '/test.png',
      openTime: '매일 10:00 ~ 17:30',
      phoneNumber: '1588-4888',
    },
    {
      id: 4,
      name: 'asdf',
      address: '강원특별자치도 홍천군 서면 한치골길 262 (우)25102',
      isOpen: true,
      imageUrl: '/test.png',
      openTime: '매일 10:00 ~ 17:30',
      phoneNumber: '1588-4888',
    },
    {
      id: 5,
      name: '비발디파크 오션월드',
      address: '강원특별자치도 홍천군 서면 한치골길 262 (우)25102',
      isOpen: true,
      imageUrl: '/test.png',
      openTime: '매일 10:00 ~ 17:30',
      phoneNumber: '1588-4888',
    },
    {
      id: 6,
      name: 'asdf',
      address: '강원특별자치도 홍천군 서면 한치골길 262 (우)25102',
      isOpen: true,
      imageUrl: '/test.png',
      openTime: '매일 10:00 ~ 17:30',
      phoneNumber: '1588-4888',
    },
    {
      id: 7,
      name: 'asdf',
      address: '강원특별자치도 홍천군 서면 한치골길 262 (우)25102',
      isOpen: true,
      imageUrl: '/test.png',
      openTime: '매일 10:00 ~ 17:30',
      phoneNumber: '1588-4888',
    },
    {
      id: 8,
      name: 'asdf',
      address: '강원특별자치도 홍천군 서면 한치골길 262 (우)25102',
      isOpen: true,
      imageUrl: '/test.png',
      openTime: '매일 10:00 ~ 17:30',
      phoneNumber: '1588-4888',
    },
]

export default function ShowCourse() {
  const [displayPosts, setDisplayPosts] = useState(initialPostList);
  const [articles, setArticles] = useState(courses);

  const loadMore = () => {
    setDisplayPosts(displayPosts + incrementInitialPostList);
  }

  const loadLess = () => {
    setDisplayPosts(initialPostList);
  }

  return (
    <div className='flex flex-col'>
      {articles.slice(0, displayPosts).map(course => (
        <div className="flex flex-row w-full h-fit mb-8">
            <div className="w-fit h-fit">
                <Image src={course.imageUrl} width={200} height={200} alt={course.name} />
            </div>
            <div className="flex flex-col ml-4">
                <p>{course.name}</p>
                <p>{course.address}</p>
                <p>{course.isOpen === true ? '영업중' : '영업종료'}</p>
                <p>{course.openTime}</p>
                <div className="flex flex-row">
                    <p>대표번호: </p>
                    <p>{course.phoneNumber}</p>
                </div>
            </div>
        </div>
      ))}
      {displayPosts < articles.length ? ( 
          <div className="flex flex-col items-center justify-center w-full h-12 cursor-pointer" onClick={loadMore}>
            <h3 className='text-sm'>클릭해서 더 보기</h3>
            <Image src={'down-arrow.svg'} width={20} height={20} alt={'more'}/>
          </div>
      ) : displayPosts >= articles.length ? (
        <div className="flex flex-col items-center justify-center w-full h-12 cursor-pointer" onClick={loadLess}>
            <h3 className='text-sm'>축소</h3>
            <Image src={'down-arrow.svg'} width={20} height={20} alt={'more'} className='transform rotate-180'/>
        </div>
      ) : null}
    </div>
  );
}
