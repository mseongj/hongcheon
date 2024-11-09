import Image from 'next/image';
import React from 'react';
type Props = {
  params: {
    id: string;
  }
}

export default function Courses({params}: Props) {
  const courese: {[key: string]: React.ReactNode} = {
    '1': 
    (<div className='w-full h-full text-center text-lg'>
      <Image src={'/coursesImages/page1.img.main.png'} className='w-full mx-auto mb-2' width={300} height={300} alt={'홍천 개구리축제'}></Image>
      <p className='text-2xl font-bold text-[#3893d6]'>제7회 홍천 개구리축제</p>
      <br  />
      <h1>자연과 사람이 함께 어우러지는 홍천 <span className='text-[#3893d6]'>개구리축제</span></h1>
      <br />
      <p><span className='font-bold'>개구리 서식지</span>인 <span className='font-bold'>아람마을</span> 을 보호하는</p>
      <p>특별한 <span className='font-bold text-[#3893d6]'>플로깅</span> 행사를 준비했어요!</p>
    
      <p>건강도 챙기고 환경도 보호할 수 있는</p>
      <p className='font-bold'>일석이조 <span className='text-[#3893d6]'>친환경</span> 축제 🌱🏃‍♀️</p>
      <p>함께 뛰면서 지구를 지키는 데 동참해 보세요.</p>
      <p>특히 이번 축제는 <span className='font-bold'>&apos;풍암2리메밀경관사업단&apos;</span>이 주관하여</p>
      <p>농촌 지역 경관을 활용해 주민 소득도 높이고</p>
      <p>지역 발전에도 기여하는 <span className='font-bold'>뜻깊은 마을 축제</span>랍니다.</p>
    
      <p><span className='font-bold text-[#3893d6]'>메밀꽃</span>과 <span className='font-bold text-[#3893d6]'>코스모스</span>가 가득 핀 아람마을에</p>
      <p>여러 가지 체험 프로그램과</p>
      <p>맛있는 먹거리 😋 즐기러 와주세요~</p>
      <Image src={'/coursesImages/page1.img1.png'} className='text-center w-40 mt-10 mx-auto mb-2' width={300} height={300} alt={'홍천 개구리축제'}></Image>
        <p className='text-xl'><span className='font-bold bg-[#5d90bd] dark:bg-[rgb(93,144,189)]'>2024년 9월 28일(토) 10:00~21:00</span></p>
        <p className='text-xl'>🐸 플로깅 행사 14:00~16:00</p>
        <p className='text-xl'>🐸 개막식 16:30~17:30</p>
        <p className='text-xl'>🐸 아람마을 노래자랑 19:00~21:00</p>
      <Image src={'/coursesImages/page1.img2.png'} className='text-center w-40 mt-10 mx-auto mb-2' width={300} height={300} alt={'홍천 개구리축제'}></Image>
      <p className='font-bold text-xl'>강원 홍천군 서석면 아미산길 54</p>
      <p>고양산 아람마을 일대</p>
      <Image src={'/coursesImages/page1.img3.png'} className='text-center w-40 mt-10 mx-auto mb-2' width={300} height={300} alt={'홍천 개구리축제'}></Image>
      <p className='font-bold text-[#3893d6] text-2xl'>0507-1433-8930</p>
      <p className='text-red-500 text-sm'>※ 평일 오전 10시~오후 5시</p>
      <p className='text-red-500 text-sm'>(주말, 공휴일 실시간 안내 불가)</p>
      <div className='flex h-12 mt-10 mb-2 justify-center items-center rounded-md mx-auto bg-green-600 hover:bg-yellow-300 transition-colors duration-300 cursor-pointer'>
        <Image src={'/arrow-right-circle.svg'} className='w-6 h-6 mr-2' width={20} height={20} alt={'홍천 개구리축제'}></Image>
        <a className='text-white text-lg font-bold' href="https://booking.naver.com/booking/12/bizes/716348/items/5560195">예약하기</a>
      </div>
    </div>),
      '2': 
      (<div>
        <Image src={'/1.png'} className='' width={300} height={300} alt={'홍천 개구리축제'}></Image>
        <p>제7회 홍천 개구리축제</p>
        <h1>자연과 사람이 함께 어우러지는 홍천 개구리축제</h1>
        <br />
        <p>개구리 서식지인 아람마을을 보호하는</p>
        <p>특별한 플로깅 행사를 준비했어요!</p>
      
        <p>건강도 챙기고 환경도 보호할 수 있는</p>
        <p>일석이조 친환경 축제 🌱🏃‍♀️</p>
        <p>함께 뛰면서 지구를 지키는 데 동참해 보세요.</p>
        <p>특히 이번 축제는 &apos;풍암2리메밀경관사업단&apos;이 주관하여</p>
        <p>농촌 지역 경관을 활용해 주민 소득도 높이고</p>
        <p>지역 발전에도 기여하는 뜻깊은 마을 축제랍니다.</p>
      
        <p>메밀꽃과 코스모스가 가득 핀 아람마을에</p>
        <p>여러 가지 체험 프로그램과</p>
        <p>맛있는 먹거리 😋 즐기러 와주세요~</p>
      </div>),
      };

  return (
    <>
    {courese[params.id]}
    </>
  )
}

export function generateStaticParams() {
  const posts = ['1', '2', '3'];
  return posts.map((post) => ({
    id: post
  }))
}


