import Image from 'next/image';

export default function MyPage() {
    let progress = 34.8;
    return (
    <div className='flex flex-row w-full h-full mt-10'>
        <Image src={'/userImage.jpg'} width={100} height={100} className={'rounded-full'} alt='user-image'/>
        <div className="flex flex-col w-3/4" id="user-componets">
            <div className='flex flex-col h-full ml-4'>
                <div className='flex flex-row'>
                    <p className='text-lg font-bold'>홍길동</p>
                    <p className='ml-3 text-sm text-gray-400'>상병</p>
                </div>
                <p className='text-gray-400 text-sm mb-1'>내 계정 설정</p>
                <div className="w-full bg-gray-300 rounded-full">
                    {/* <div className={`w-[${20}%] bg-green-500 rounded-full text-right pr-1 text-white`}>25%</div> */}
                    <div className={`bg-green-500 rounded-full text-right pr-1 text-white`} style={{width: `${Math.round(progress)}%`}}>{progress}%</div>
                </div>
            </div>
        </div>
    </div>
    );
}
