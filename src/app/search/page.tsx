import dynamic from 'next/dynamic';
import React from "react";
import BottomBar from "@/app/components/BottomBar";
import Loading from '@/app/loading';

const ShowNearbyPlaces = dynamic(() => import('@/app/search/showNearbyPlaces'), {
  loading: () => <Loading/>,
})

let isModalOpen = true;

export default function Search() {
  return (
    <div className='flex flex-col'>
      <div className="w-full">
        <h3 className='fix text-lg font-bold'>주변 탐색</h3>
          {isModalOpen && <ShowNearbyPlaces/> || <Loading/>}
      </div>
      <BottomBar />
    </div>
  );
}