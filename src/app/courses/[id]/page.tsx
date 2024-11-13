import Image from 'next/image';
import React from 'react';
import MapImport from '@/app/courses/[id]/map'
type Props = {
  params: {
    id: string;
  }
}

export default function Courses({params}: Props) {
  const courese: {[key: string]: React.ReactNode} = {
    '1': 
      (<div className='w-full h-full text-center text-lg'>
        <div className='bg-[#fff7eb]'>
          <Image src={'/coursesImages/page3.img1.png'} className='w-screen h-auto' width={500} height={500} alt={'쑥떡쑥떡 축제'}></Image>
          <h1 className='font-bold text-[#198852] text-3xl '>제1회 태극마을 쑥떡쑥떡 축제</h1>
          <p>곰이 쑥을 먹고 사람이 되었다는 단군신화 이야기!</p>
          <p>그 쑥이 어디서 왔을지 상상해본 적 있나요?</p>
          <br  />
          <p>홍천강 줄기가 태극모양으로 흐르는 태극마을은</p>
          <p>강인한 생명력과 조화를 상징하는 마을입니다.</p>
          <br  />
          <p>태극마을에서 자란 쑥은 신화 속 기운을 그대로 품고 있어,</p>
          <p>마을 사람들은 쑥을 통해 건강과 평화를 얻는다고 믿어왔어요.</p>
          <br  />
          <p>자연과 전설이 만나는 신비로운 태극마을의 쑥을</p>
          <p>제1회 태극마을 쑥떡쑥떡 축제에서 만나보세요!</p>
          <br  />
          <p>쑥쑥커피와 쑥쑥크림라떼 한 잔에 담긴 신비로운 맛과 향,</p>
          <p>쑥을 활용한 다양한 체험이 여러분을 기다리고 있습니다.</p>
          <Image src={'/coursesImages/page3.img2.png'} className='text-center w-50 mt-10 mx-auto mb-2' width={300} height={300} alt={''}></Image>
          <p>2024년 11월 1일&#40;금&#41; 11시</p>
          <Image src={'/coursesImages/page3.img3.png'} className='text-center w-50 mt-10 mx-auto mb-2' width={300} height={300} alt={''}></Image>
          <p>강원 홍천군 남면 고드래미길 47 태극마을</p>
          <Image src={'/coursesImages/page3.img4.png'} className='text-center w-50 mt-10 mx-auto mb-2' width={300} height={300} alt={''}></Image>
          <p>0507-1433-8930</p>
          <p>※ 평일 오전 10시~오후 5시</p>
          <p>&#40;주말, 공휴일 실시간 안내 불가&#41;</p>
          <br  />
        </div>
        <div className='bg-[#9BC1E4] h-5 w-screen'></div>
        <Image src={'/coursesImages/page3.img5.png'} className='text-center mt-10 mx-auto mb-2 w-screen' width={500} height={500} alt={''}></Image>
        <Image src={'/coursesImages/page3.img6.png'} className='text-center mt-10 mx-auto mb-2 h-auto' width={115} height={500} alt={''}></Image>

          <p>축제가 끝나도 쑥 체험은 계속된다!</p>
          <p>11월 딱 한 달만 10,000원 할인 적용!</p>
          <Image src={'/coursesImages/page3.img7.jpg'} className='text-center mt-10 mx-auto mb-2 w-screen h-auto' width={500} height={500} alt={''}></Image>
          <p>개인 패키지</p>
          <p>&apos; 오롯이 ~ 쑥 &apos;</p>
          <p>10,000원/1인</p>
          <p>&#40;정상가 20,000원&#41;</p>
          <Image src={'/coursesImages/page3.img8.png'} className='text-center mt-10 mx-auto mb-2 w-screen h-auto' width={500} height={500} alt={''}></Image>
          <div className='font-bold'>
            <p>① 쑥 수제비 뜯어서 만들어 먹기</p>
            <p>② 음료 1잔</p>
            <p className='text-violet-900'>- 다양한 카페 메뉴 중 선택 가능!</p>
            <p>③ 쑥 족욕 체험 &#40;자율&#41;</p>
            <p>④ 쑥 찜질 체험 &#40;자율&#41;</p>
            <p className='text-red-600 text-sm font-bold'>※ 쑥 족욕과 찜질은 자율적으로 진행합니다.</p>
            <p className='text-red-600 text-sm font-bold'>별도의 체험 진행요원이 없습니다.</p>
          </div>
          <button className='px-5 py-2 bg-green-500 rounded-full text-white mt-5'>개인 패키지 예약하기</button>
          <br  />
          <br  />
          <br  />
          <p>단체 패키지</p>
          <p>&apos; 쑥 떡 쑥 떡 &apos;</p>
          <p>25,000원/1인</p>
          <p>&#40;정상가 35,000원&#41;</p>
          <Image src={'/coursesImages/page3.img9.png'} className='text-center mb-1 mt-10 mx-auto w-screen h-auto' width={500} height={500} alt={''}></Image>
          <Image src={'/coursesImages/page3.img10.png'} className='text-center mx-auto mb-2 w-screen h-auto' width={500} height={500} alt={''}></Image>
          <div className='font-bold'>
            <p>① 쑥개떡 만들기</p>
            <p>② 쑥 수제비 뜯어서 만들어 먹기</p>
            <p>③ 식음료 만들기 체험</p>
            <p className='text-violet-900'>- 성인 : 핸드드립 커피</p>
            <p className='text-violet-900'>- 어린이/학생 : 요거트 스무디</p>
            <p>④ 쑥 족욕 체험</p>
            <p>⑤ 쑥 찜질 체험</p>
          </div>
          <div className='px-5 py-2 bg-green-500 rounded-full text-white mt-5 mb-10'>단체 문의 0507-1433-8930</div>
          <div className='bg-[#A29BE4] h-5 w-screen'></div>
          
          <div className='bg-[#fff7eb]'>
            <p>&apos;오롯이~쑥&apos; & &apos;쑥떡쑥떡&apos;</p>
            <p>체험 프로그램 자세히 보기</p>
            <br  />
            <p className='bg-green-500 text-white w-auto font-bold mb-5'>체험 하나, 카페 오롯이 즐기기</p>
            <Image src={'/coursesImages/page3.img11.png'} className='text-center mx-auto mb-2 h-auto ' width={200} height={105} alt={''}></Image>
            <Image src={'/coursesImages/page3.img7.jpg'} className='text-center mt-10 mx-auto mb-2 w-screen h-auto' width={500} height={500} alt={''}></Image>
            <p>태극마을의 특별한 카페 ‘오롯이’로 초대합니다!</p>
            <p>신선한 재료로 만든 음료 한 잔을 즐기며,</p>
            <p>축제의 여유를 만끽해 보세요!</p>
            <br  />
            <p>쑥을 테마로 한 <strong>쑥쑥커피</strong>나 <strong>쑥쑥크림라떼</strong>,</p>
            <p>마을에서 자라는 과일을 활용한 <strong>속빨간 복숭아 스무디</strong> 등</p>
            <p>특별하고도 건강한 메뉴들이 많이 준비되어 있어요.</p>
            <br  />
            <p>이번 축제와 함께 처음 오픈하는 카페 오롯이에서</p>
            <p>축제의 재미와 여유를 모두 느껴보세요!</p>
          </div>

          <p>체험 둘, 쑥 족욕</p>
          <Image src={'/coursesImages/page3.img12.png'} className='text-center mx-auto mb-2 h-auto' width={200} height={105} alt={''}></Image>
          <Image src={'/coursesImages/page3.img13.jpg'} className='text-center mx-auto mb-2 w-screen h-auto' width={500} height={500} alt={''}></Image>
          <p>카페 오롯이 안에 마련된 족욕체험존에서</p>
          <p>몸에 좋은 태극 쑥을 넣고 족욕을 즐겨보세요!</p>
          <br  />
          <p>신선한 쑥의 향기가 가득한 족욕은</p>
          <p>몸과 마음을 따뜻하게 풀어줄 특별한 경험입니다.</p>
          <br  />
          <p>피로한 발을 부드럽게 감싸 안아주는 따뜻한 물 속에서</p>
          <p>쑥의 건강 효능을 직접 느껴보세요.</p>
          <p>스트레스가 확 풀리며 몸과 마음 모두 정화해 줄 거예요!</p>
          <p className='text-red-600 text-sm font-bold'>※ 쑥 족욕은 자율적으로 진행합니다.</p>
          <p className='text-red-600 text-sm font-bold'>별도의 체험 진행요원이 없습니다.</p>

          <div className='bg-[#fff7eb]'>
            <p>체험 셋, 쑥 찜질</p>
            <Image src={'/coursesImages/page3.img14.png'} className='text-center mx-auto mb-2 h-auto' width={200} height={105} alt={''}></Image>
            <Image src={'/coursesImages/page3.img15.jpg'} className='text-center mx-auto mb-2 w-screen h-auto' width={500} height={500} alt={''}></Image>
            <p className='text-xs'>※ 이해를 돕기 위한 사진이며, 실제와 다를 수 있습니다.</p>
            <p>태극 쑥을 활용한 찜질팩으로 몸의 피로를 풀어보세요.</p>
            <p>어깨찜질팩, 복부찜질팩, 방석찜질팩이 준비되어 있어요.</p>
            <br  />
            <p>따뜻한 온기와 함께 쑥의 기운이 몸 깊숙이 스며들고</p>
            <p>신선한 쑥의 향기는 마음까지 치유해 준답니다.</p>
            <br  />
            <p>쌀쌀한 가을날 따뜻한 찜질을 통해</p>
            <p>근육도 이완하고 마음도 힐링하는</p>
            <p>소중한 시간을 가져보세요~</p>
            <br  />
            <p className='text-red-600 text-sm font-bold'>※ 쑥 찜질은 자율적으로 진행합니다.</p>
            <p className='text-red-600 text-sm font-bold'>별도의 체험 진행요원이 없습니다.</p>
          </div>

          <p>체험 넷, 쑥 수제비 뜯어서 만들어 먹기</p>
          <Image src={'/coursesImages/page3.img16.png'} className='text-center mx-auto mb-2 h-auto' width={200} height={105} alt={''}></Image>
          <Image src={'/coursesImages/page3.img17.jpg'} className='text-center mx-auto mb-2 w-screen h-auto' width={500} height={500} alt={''}></Image>
          <p>솜씨 좋은 태극마을 사무장님께서</p>
          <p>정성으로 끓인 채소 육수에</p>
          <p>직접 쑥 반죽을 뜯어서 넣어주세요~</p>
          <p>면만 잘 익으면 쑥 수제비 완성!</p>
          <br  />
          <p>가족, 친구들과 함께 쑥 반죽 뜯는 재미는</p>
          <p>태극마을에서만 느낄 수 있는 매력이에요.</p>
          <p>귀찮은 조리 과정과 뒷정리는 모두 마을에서 해주니까.</p>
          <p>더욱 편하고 즐겁게 식사하실 수 있답니다.</p>
          <br  />
          <p>무엇보다도 정말 구수하고 맛있으니</p>
          <p>이번 쑥떡쑥떡 축제를 통해 꼭 맛보고 가세요!</p>

          <div className='bg-[#fff7eb]'>
            <p>체험 다섯, 쑥개떡 만들기</p>
            <Image src={'/coursesImages/page3.img18.png'} className='text-center mx-auto mb-2 h-auto' width={200} height={105} alt={''}></Image>
            <Image src={'/coursesImages/page3.img19.jpg'} className='text-center mx-auto mb-2 w-screen h-auto' width={500} height={500} alt={''}></Image>
            <p>태극쑥의 향긋함을 가득 담은 태극마을의 아이콘!</p>
            <p>맛있는 ‘쑥개떡’을 직접 만들어 보세요!</p>
            <br  />
            <p>봄철에 미리 뜯어둔 태극쑥을</p>
            <p>깨끗하게 손질하고 신선한 상태로 냉동 보관하여</p>
            <p>맛과 향을 최대한 유지하였어요!</p>
            <br  />
            <p>신선한 태극쑥을 사용해 만든 쑥개떡은</p>
            <p>향은 물론, 부드럽고 쫄깃한 식감도 일품입니다.</p>
            <br  />
            <p>특히 아이들은 별모양, 하트모양 등</p>
            <p>다양한 모양으로도 만들 수 있어</p>
            <p>창의력이 쑥쑥 자란답니다~</p>
          </div>

          <p>체험 여섯, 식음료 만들기</p>
          <Image src={'/coursesImages/page3.img20.png'} className='text-center mx-auto mb-2 h-auto' width={200} height={105} alt={''}></Image>
          <Image src={'/coursesImages/page3.img21.jpg'} className='text-center mx-auto mb-2 w-screen h-auto' width={500} height={500} alt={''}></Image>
          <p className='text-xs'>※ 이해를 돕기 위한 사진이며, 실제와 다를 수 있습니다.</p>
          <p>쑥개떡이 익을 동안 함께 먹을 음료도 만들어 볼까요?</p>
          <p>어른들은 핸드드립 커피를 내리고</p>
          <p>아이들은 복숭아 스무디를 갈아 마실 거예요!</p>
          <br  />
          <p>#핸드드립_커피</p>
          <p>엄선한 원두를 정성껏 갈아서 내리는 핸드드립 커피는</p>
          <p>풍부한 향은 물론, 깊고 부드러운 맛이 일품입니다.</p>
          <p>나만의 완벽한 한 잔을 만들어 보세요!</p>
          <br  />
          <p>#복숭아_스무디</p>
          <p>태극마을의 신선한 복숭아로 즐기는 달콤한 체험!</p>
          <p>직접 수확한 복숭아와 천연 꿀, 우유만 사용하여</p>
          <p>아이들 건강에도 좋은 디저트랍니다.</p>

          <br  />
          <br  />
          <p>더 여유로운 하루를 원하신다면?</p>
          <p>태극마을 숙소를 소개합니다!</p>
          <Image src={'/coursesImages/page3.img22.png'} className='text-center mx-auto mb-2 w-screen h-auto' width={500} height={500} alt={''}></Image>
          <div className='flex flex-row flex-wrap w-full justify-center'>
            <Image src={'/coursesImages/page3.img23.jpg'} className='h-[155px] w-max reletive overflow-hidden ' width={500} height={500} alt={''}></Image>
            <Image src={'/coursesImages/page3.img24.jpg'} className='h-[155px] w-max reletive overflow-hidden ' width={500} height={500} alt={''}></Image>
            <Image src={'/coursesImages/page3.img25.jpg'} className='h-[155px] w-max reletive overflow-hidden ' width={500} height={500} alt={''}></Image>
            <div className='flex items-center justify-center w-[232.312px] max-w-full h-[155px]'>
            <Image src={'/coursesImages/page3.img26.jpg'} className='w-full h-full object-cover' width={500} height={500} alt={''}></Image>
            </div>
            <Image src={'/coursesImages/page3.img27.jpg'} className='h-[155px] w-max reletive overflow-hidden ' width={500} height={500} alt={''}></Image>
            <Image src={'/coursesImages/page3.img28.jpg'} className='h-[155px] w-max reletive overflow-hidden ' width={500} height={500} alt={''}></Image>
            <Image src={'/coursesImages/page3.img29.jpg'} className='h-[155px] w-max reletive overflow-hidden ' width={500} height={500} alt={''}></Image>
            <Image src={'/coursesImages/page3.img30.jpg'} className='h-[155px] w-max reletive overflow-hidden ' width={500} height={500} alt={''}></Image>
          </div>
          <p>태극마을에서 여유롭게 축제를 즐기실 분들을 위해,</p>
          <p>저렴하고 편안한 태극숙소를 소개합니다.</p>
          <br  />
          <p>화려한 인테리어는 아니지만</p>
          <p>신축된 이후 깔끔하고 청결하게 관리하고 있습니다.</p>
          <br  />
          <p>별이 쏟아지는 농촌의 밤하늘을 감상하고,</p>
          <p>숙소에서 직접 바비큐를 해먹으며 즐거운 시간을 보내세요!</p>
          <p>저렴한 가격에 태극마을을 만끽하고 싶은 분들에게 추천 드립니다.</p>
          <br  />
          <p>A. 태극 1호</p>
          <p>- 2인 기준 &#40;최대 인원 4인&#41;</p>
          <p>- 2인 초과 시 1인 당 1만 원 추가</p>
          <p>- 싱크대 없음</p>

          <p>B. 태극 2호 & 태극 3호</p>
          <p>- 4인 기준 &#40;최대 인원 8인&#41;</p>
          <p>- 4인 초과 시 1인 당 1만 원 추가</p>
          <p>- 싱크대 있음</p>

          <p>공통 사항</p>
          <p>- 침구류 제공</p>
          <p>- 개인 위생용풍 지참</p>
          <p>- 사전 예약 시 조식 제공 가능 &#40;유료&#41;</p>
          <p>- 체크인 14:00 / 체크아웃 11:00</p>
          <p>- 바비큐 사용료 2만 원</p>
          <p>&#40;4인 기준, 5인부터 1인당 5천 원 추가&#41;</p>
          
          <br />
          <br />
          <br />
          <Image src={'/coursesImages/page3.img31.png'} className='text-center mx-auto mb-2 h-auto' width={77} height={105} alt={''}></Image>
          <p>즐거운 축제를 위한 안내사항</p>
          <p>이것만은 꼭 지켜주세요!</p>
          <br />
          <p>- 달집태우기 등 화기 사용 시 안전요원의 지시에 반드시 따르세요.</p>
          <p>- 쑥 족욕 및 쑥 찜질 체험 시 민감성 피부를 가진 분들은 주의해 주세요.</p>
          <p>- 식음료에 알레르기 유발 가능 성분이 있을 수 있으니 체험 전 알레르기 여부를 확인해 주세요.</p>
          <p>- 어린이 체험객은 반드시 보호자가 동반해 주셔야 합니다.</p>
          <p>- 이 밖에 안전한 체험을 위해 현장 지시에 잘 따라주세요.</p>
          <br />
          <br />
          <p>찾아오시는 길</p>
          <p>강원 홍천군 남면 고드래미길 47</p>
          <MapImport />

      </div>),
    '2': 
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
    </div>),
      '3': 
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
    <a className='flex h-12 mt-10 mb-2 justify-center items-center rounded-md mx-auto bg-green-600 hover:bg-yellow-300 transition-colors duration-300 cursor-pointer text-white text-lg font-bold'
          // href="https://booking.naver.com/booking/12/bizes/716348/items/5560195"
          // href={`api/payments/${params.id}`}
          href={`../payments`}
          target="_blank"
          rel="noopener noreferrer"
        >
        <Image src={'/arrow-right-circle.svg'} className='w-6 h-6 mr-2' width={20} height={20} alt={'홍천 개구리축제'}></Image>
        예약하기
      </a>
    </>
  )
}

export function generateStaticParams() {
  const posts = ['1', '2', '3'];
  return posts.map((post) => ({
    id: post
  }))
}


