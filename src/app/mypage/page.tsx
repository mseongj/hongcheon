import Image from 'next/image';

export default function MyPage() {
    let progress = 34.8;
    let myLevel = 'primium';
    return (
        <div className='flex flex-col'>
            <div className='flex flex-row w-full h-full mt-10 items-center justify-center' id="user-componets">
                <Image src={'/userImage.jpg'} width={100} height={100} className={'rounded-full'} alt='user-image'/>
                <div className="flex flex-col w-3/4">
                    <div className='flex flex-col h-full ml-4'>
                        <div className='flex flex-row'>
                            <p className='text-lg font-bold'>홍길동</p>
                            <p className='ml-3 text-sm text-gray-400 align-text-bottom'>상병</p>
                        </div>
                        <p className='text-gray-400 text-sm mb-2'>내 계정 설정</p>
                        <div className="w-full bg-gray-300 rounded-full">
                            <div className={`bg-green-500 rounded-full text-right pr-1 text-white`} style={{width: `${Math.round(progress)}%`}}>{progress}%</div>
                        </div>
                    </div>
                </div>
            </div>
            <div className='w-full h-full mt-10 items-center justify-center bg-blue-600 rounded-lg text-white p-4' id='user-info-card'>
                <div className='flex flex-row mb-5'>
                    <p>{`${myLevel[0].toUpperCase()}${myLevel.slice(1)}`} Level</p>
                    <p className='ml-3 text-sm text-gray-400 align-text-bottom mt-1'>멤버십 갱신
                        <span className="inline-block w-2 h-2 border-black dark:border-gray-400 border-r-2 border-b-2 transform rotate-[-45deg] ml-1" />
                    </p>
                </div>
                <div className='flex flex-row'>
                    <p className='text-xl'>나의 리뷰 점수</p>
                    <p className='ml-3 text-sm text-gray-400 align-text-bottom mt-1'>자세히 보기
                        <span className="inline-block w-2 h-2 border-black dark:border-gray-400 border-r-2 border-b-2 transform rotate-[-45deg] ml-1" />
                    </p>
                </div>
                <div className='flex flex-row'>
                    <p className='text-xl'>홍천 점수</p>
                    <p className='ml-3 text-sm text-gray-400 align-text-bottom mt-1'>자세히 보기
                        <span className="inline-block w-2 h-2 border-black dark:border-gray-400 border-r-2 border-b-2 transform rotate-[-45deg] ml-1" />
                    </p>
                </div>

            </div>
        </div>
    );
}
