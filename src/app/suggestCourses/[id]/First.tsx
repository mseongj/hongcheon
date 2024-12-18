"use client"

import React from 'react';
import Image from 'next/image';
import { useEffect, useRef, useState } from 'react';
import Link from 'next/link';

declare global {
  interface Window {
    kakao: any;
  }
}
export default function FirstCourse(){
    type Place = {
        place_name: string;
        distance: string;
        place_url: string;
        category_name: string;
        address_name: string;
        road_address_name: string;
        id: string;
        phone: string;
        category_group_code: string;
        category_group_name: string;
        x: number;
        y: number;
      };
      
      const mapRef = useRef<HTMLDivElement>(null);
      const [selectedPlace, setSelectedPlace] = useState<Place | null>(null);
      const [keyword, setKeyword] = useState<string>("막국수");
      const [map, setMap] = useState<any>(null);
      
      useEffect(() => {
        const kakaoMapScript = document.createElement('script');
        kakaoMapScript.async = true;
        kakaoMapScript.src = `//dapi.kakao.com/v2/maps/sdk.js?appkey=061dcbd9d5f13daeebce972e744ca70c&autoload=false&libraries=services`;
      
        document.head.appendChild(kakaoMapScript);
      
        const onLoadKakaoAPI = () => {
          window.kakao.maps.load(() => {
            const container = mapRef.current;
            const options = {
              center: new window.kakao.maps.LatLng(37.689117, 127.878916),
              level: 5,
            };
      
            const newMap = new window.kakao.maps.Map(container, options);
            setMap(newMap)
      
            // 장소 검색 객체 생성
            const places = new window.kakao.maps.services.Places(newMap);
      
            // 키워드 검색 함수
            const searchPlaces = () => {
              places.keywordSearch(keyword, placesSearchCB, {
                useMapBounds: true,
              });
            };
      
            // 키워드 검색이 완료됐을 때 호출되는 콜백함수
            const placesSearchCB = (data: Place[], status: any) => {
              if (status === window.kakao.maps.services.Status.OK) {
                data.forEach(place => displayMarker(place));
              } else if( status == null || status == "ZERO_RESULT" ) {
                console.error('찾는 곳이 없습니다:', status);
              } else {
                console.error('Search failed:', status);
              }
            };
      
            // 지도에 마커를 표시하는 함수
            const displayMarker = (place: Place) => {
              const marker = new window.kakao.maps.Marker({
                map: newMap,
                position: new window.kakao.maps.LatLng(place.y, place.x),
              });
      
              window.kakao.maps.event.addListener(marker, 'click', () => {
                setSelectedPlace(place);
              });
            };
      
            searchPlaces();
          });
        };
      
        kakaoMapScript.addEventListener('load', onLoadKakaoAPI);
      
        return () => {
          kakaoMapScript.removeEventListener('load', onLoadKakaoAPI);
          document.head.removeChild(kakaoMapScript);
        };
      }, [keyword]);
      
// 홍천 서석면 풍암리 715
  return (
      <div>
        <div>
          <Image src={"/suggestCourses/page1.img1.png"} width={1000} height={500} alt={"홍천 개구리 축제 플로깅 챌린지"} />
          <Image src={"/suggestCourses/page1.img2.png"} width={1000} height={300} alt={"플로깅 챌린지 리워드"}/>
          <br />
          <p>홍천 개구리 축제 플로깅 챌린지</p>
        </div>
          <div ref={mapRef} style={{ width: '100%', height: '400px' }}></div>
          <input 
              type="text" 
              value={keyword} 
              onChange={(e) => setKeyword(e.target.value)} 
              className='w-full h-12 text-slate-950 pl-5 focus:bg-slate-300 rounded-t-lg mt-2'
              placeholder="검색어를 입력하세요"
          />
          {selectedPlace && (
              <div className='h-max flex flex-col items-center justify-center gap-2 w-full text-center bg-white shadow-lg text-black'>
                  <p>{selectedPlace.place_name}</p>
                  <p>{selectedPlace.address_name}</p>
                  <p>{selectedPlace.phone}</p>
                  <Link href={selectedPlace.place_url} target="_blank" className='mb-2 mx-auto p-3 h-14 text-white rounded-lg bg-green-600'>지도 바로가기</Link>
              </div>
          )}          
      </div>
  );
}