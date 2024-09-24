import Image from 'next/image';
import React from 'react';


function Page1() {
  return (
    <div>
        <Image src={'/1.png'} className='' width={300} height={300} alt={'홍천 개구리축제'}></Image>
        <p>제7회 홍천 개구리축제</p>
        <h1>자연과 사람이 함께 어우러지는 홍천 개구리축제</h1>
        <br />
        <p>개구리 서식지인 아람마을을 보호하는</p>
        <p>특별한 플로깅 행사를 준비했어요!</p>

        <p>건강도 챙기고 환경도 보호할 수 있는</p>
        <p>일석이조 친환경 축제 🌱🏃‍♀️</p>
        <p>함께 뛰면서 지구를 지키는 데 동참해 보세요.</p>

        <p>특히 이번 축제는 '풍암2리메밀경관사업단'이 주관하여</p>
        <p>농촌 지역 경관을 활용해 주민 소득도 높이고</p>
        <p>지역 발전에도 기여하는 뜻깊은 마을 축제랍니다.</p>

        <p>메밀꽃과 코스모스가 가득 핀 아람마을에</p>
        <p>여러 가지 체험 프로그램과</p>
        <p>맛있는 먹거리 😋 즐기러 와주세요~</p>
    </div>
  );
}

export default Page1;

