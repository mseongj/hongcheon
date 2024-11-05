"use client"

import React, { useEffect, useRef, useState } from 'react';
import Image from 'next/image';
import Link from 'next/link';

declare global {
  interface Window {
    kakao: any;
  }
}

export default function ShowNearbyPlaces() {
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
  const [keyword, setKeyword] = useState<string>("홍천 버스 터미널");
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
        setMap(newMap);

        // 장소 검색 객체 생성
        const places = new window.kakao.maps.services.Places(newMap);

        // 키워드 검색 함수
        const searchPlaces = () => {
          places.keywordSearch(keyword, placesSearchCB, {
            useMapBounds: true,
          });
          console.log("검색 됨.")
        };

        // 키워드 검색이 완료됐을 때 호출되는 콜백함수
        const placesSearchCB = (data: Place[], status: any) => {
          if (status === window.kakao.maps.services.Status.OK) {
            data.forEach(place => displayMarker(place));
          } else if( status === window.kakao.maps.services.Status.ZERO_RESULT ){
            // 여기서 찾는 장소가 없으면, 모달창을 실행하게 할 코드를 짜주세요 미래의 나야;;
            console.log("찾는 장소가 없습니당...")
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
        
        // Debounce searchPlaces function
        let debounceTimeoutId: NodeJS.Timeout | null = null;

        const debounceSearchPlaces = () => {
          if (debounceTimeoutId) clearTimeout(debounceTimeoutId);
          debounceTimeoutId = setTimeout(() => searchPlaces(), 3000); // Adjust delay as needed
        };

        debounceSearchPlaces();
      });
    };

    kakaoMapScript.addEventListener('load', onLoadKakaoAPI);

    return () => {
      kakaoMapScript.removeEventListener('load', onLoadKakaoAPI);
      document.head.removeChild(kakaoMapScript);
    };
  }, [keyword]);

  return (
    <div>
      <input 
        type="text" 
        value={keyword} 
        onChange={(e) => setKeyword(e.target.value)} 
        className='w-full h-12 text-slate-950 pl-5 focus:bg-slate-100 border-none mb-1 rounded'
        placeholder="검색어를 입력하세요"
      />
      <div ref={mapRef} style={{ width: '100%', height: '70vh', borderRadius: '10px' }}></div>
      {selectedPlace && (
        <div className='mt-3 h-max flex flex-col items-center justify-center gap-2 w-full text-center bg-white rounded-t-lg shadow-lg text-black mb-20'>
          <p>{selectedPlace.place_name}</p>
          <p>{selectedPlace.address_name}</p>
          <p>{selectedPlace.phone}</p>
          <Link href={selectedPlace.place_url} target="_blank" className='mb-2 mx-auto p-3 h-14 text-white rounded-lg bg-green-600'>지도 바로가기</Link>
        </div>
      )}
      
    </div>
  );
}
