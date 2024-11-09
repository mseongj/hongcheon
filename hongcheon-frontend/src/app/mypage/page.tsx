import Image from 'next/image';
import Link from 'next/link';
import LogoutButton from '@/app/mypage/components/LogoutButton';

export default function MyPage() {
    interface userInformation {
        userName: string;
        userGrade: string;
        userProgress: number;
        userLevel: string;
    };
    const userInformation : userInformation = {
        userName: "홍길동",
        userGrade: "상병",
        userProgress: 34.8,
        userLevel: "primium"
    };
    
    const menuItems = [
        { text: '나의 코스', href: '/mypage/my-courses' },
        { text: '내 계정 설정', href: '/mypage/account-settings' },
        { text: '친구 설정', href: '/mypage/friend-settings' },
        { text: '나의 멤버십 / 요금제 갱신', href: '/mypage/membership' },
        { text: '계정 연동 확인 / 티머니 연동', href: '/mypage/account-linking' }, // 이 경로는 파일 구조에 없으므로 확인 필요
        { text: '내가 마음에 들어한 코스', href: '/mypage/liked-courses' }
    ];
    
    return (
        <div className='flex flex-col items-center'>
            <div className='flex flex-row w-full h-full mt-10 items-center justify-center' id="user-componets">
                <Image src={'/userImage.jpg'} width={100} height={100} className={'rounded-full'} alt='user-image'/>
                <div className="flex flex-col w-3/4">
                    <div className='flex flex-col h-full ml-4'>
                        <div className='flex flex-row'>
                            <p className='text-lg font-bold'>{userInformation.userName}</p>
                            <p className='ml-3 text-sm text-gray-400 align-text-bottom'>{userInformation.userGrade}</p>
                        </div>
                        <p className='text-gray-400 text-sm mb-2'>내 계정 설정</p>
                        <div className="w-full bg-gray-300 rounded-full">
                            <div className={`bg-green-500 rounded-full text-right pr-1 text-white`} style={{width: `${Math.round(userInformation.userProgress)}%`}}>{userInformation.userProgress}%</div>
                        </div>
                    </div>
                </div>
            </div>
            <div className='flex flex-col h-full mx-5 mt-5 md:w-10/12 md:mx-auto lg:w-10/12 sm:w-full w-full justify-center bg-blue-600 rounded-lg text-white p-4' id='user-info-card'>
                <div className='flex flex-row mb-5'>
                    <p>{`${userInformation.userLevel[0].toUpperCase()}${userInformation.userLevel.slice(1)}`} Level</p>
                    <Link href='/mypage/membership'>
                        <p className='ml-3 text-sm text-gray-400 align-text-bottom mt-1'>멤버십 갱신
                            <span className="inline-block w-2 h-2 border-black dark:border-gray-400 border-r-2 border-b-2 transform rotate-[-45deg] ml-1" />
                        </p>
                    </Link>
                </div>
                <div className='flex flex-row'>
                    <p className='text-xl'>나의 리뷰 점수</p>
                    <Link href='/mypage/my-courses'>
                        <p className='ml-3 text-sm text-gray-400 align-text-bottom mt-1'>자세히 보기
                            <span className="inline-block w-2 h-2 border-black dark:border-gray-400 border-r-2 border-b-2 transform rotate-[-45deg] ml-1" />
                        </p>
                    </Link>
                    <div className='w-7 h-7 bg-green-500 rounded-full ml-3 align-text-bottom pt-1'>
                        <p className='text-xs text-center text-white items-center '>85%</p>
                    </div>
                </div>
                <div className='flex flex-row'>
                    <p className='text-xl'>홍천 점수</p>
                    <Link href='/mypage/my-courses'>
                        <p className='ml-3 text-sm text-gray-400 align-text-bottom mt-1'>자세히 보기
                            <span className="inline-block w-2 h-2 border-black dark:border-gray-400 border-r-2 border-b-2 transform rotate-[-45deg] ml-1" />
                        </p>
                    </Link>
                        
                    <div className='w-7 h-7 bg-blue-400 rounded-full ml-3 align-text-bottom pt-1'>
                        <p className='text-xs text-center text-white'>75%</p>
                    </div>
                </div>
                <hr className='bg-white w-full h-[1px] border-none mt-5'/>
                <div className='flex flex-row justify-evenly items-center text-center'>
                    <div className='w-15 ml-3'>
                        <Link href="mypage/message">
                            <EmailIcon color1='white' color2='white' />
                            <p className='text-[8px]'>내 메시지 함</p>
                        </Link>
                    </div>
                    <div className='w-[1px] h-[100px] bg-white mr-5'/>
                    <div className='w-15 mr-3'>
                        <Link href="mypage/announcement">
                            <MegaphoneIcon />
                            <p className='text-[8px]'>공지사항</p>
                        </Link>
                    </div>
                    <div className='w-[1px] h-[100px] bg-white mr-5' />
                    <div className='w-15 mr-3'>
                        <Link href="/mypage/my-courses">
                            <FlagIcon color='#68005b'/>
                            <p className='text-[8px]'>나의 코스</p>
                        </Link>
                    </div>
                    <div className='w-[1px] h-[100px] bg-white mr-5' />
                    <div className='w-15 mr-3'>
                        <Link href="mypage/liked-courses">
                            <HearIcon color='red'/>
                            <p className='text-[8px]'>팔로워가<br/>좋아하는<br />내 코스</p>
                        </Link>
                    </div>
                </div>
            </div>
            <div className='flex flex-col items-start w-full m-5 h-full justify-between' id='user-settings'>
                {menuItems.map((item, index) => (
                    <Link key={index} href={item.href}>
                    <p className='mb-3 ml-5 cursor-pointer hover:text-blue-500'>
                        {item.text}
                    </p>
                    </Link>
                ))}
            </div>
            <div className='flex flex-col items-start w-full m-5 h-full justify-between' >
                <Link href="/terms-of-service">
                    <p className='mb-3 ml-5 cursor-pointer hover:text-blue-500 font-bold'>이용약관</p>
                </Link>
                <Link href="/privacy-policy">
                    <p className='mb-3 ml-5 cursor-pointer hover:text-blue-500 font-bold'>개인정보 처리방침</p>
                </Link>
                <LogoutButton />
            </div>
        </div>
    );
}


const EmailIcon = ({ color1 = "#010002", color2 ="#010002"}) => (
    <svg width="40" height="40" viewBox="0 0 348.165 348.165">
      <g>
        <polygon fill={color1} points="0,60.58 0,71.921 174.083,193.19 348.165,71.921 348.165,60.58" />
        <polygon fill={color2} points="174.083,217.356 71.545,145.228 0,95.39 0,287.585 348.165,287.585 348.165,95.39 276.62,145.228" />
      </g>
    </svg>
);


const MegaphoneIcon = () => (
    <svg viewBox="0 0 14 14" role="img" focusable="false" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="#000000" width={40} height={40}>
        <g id="SVGRepo_bgCarrier" stroke-width="0"></g>
        <g id="SVGRepo_tracerCarrier" stroke-linecap="round" stroke-linejoin="round"></g>
        <g id="SVGRepo_iconCarrier">
            <path fill="#90caf9" d="M5.1230769 9.67458367h-.73846154V8.44381443H5.6153846l.12307692.46153847c.0923077.4-.21538461.76923077-.61538462.76923077zm6.03076928.92307693S7.52307692 8.44381443 5.6153846 8.44381443V4.13612209c1.7846154 0 5.53846158-2.15384617 5.53846158-2.15384617v8.61538468z"></path>
        <g fill="#283593" transform="translate(-.23076929 -.47926256) scale(.3077)">
            <circle cx="9" cy="22" r="5"></circle>
            <path d="M40 19h-3v6h3c1.7 0 3-1.3 3-3s-1.3-3-3-3zM18.6 41.2c-.9.6-2.5 1.2-4.6 1.4-.6.1-1.2-.3-1.4-1L8.2 27.9S17 21.7 17 29c0 5.5 1.5 8.4 2.2 9.5.5.7.5 1.6 0 2.3-.2.2-.4.3-.6.4z"></path>
        </g>
        <path fill="#3f51b5" d="M2.5384615 8.44381443h3.0769231V4.13612209H2.5384615c-.33846154 0-.61538462.27692308-.61538462.61538462v3.0769231c0 .33846154.27692308.61538462.61538462.61538462z"></path> <path fill="#42a5f5" d="M11.46153849 11.21304522c-.33846154 0-.61538462-.27692308-.61538462-.61538462V1.98227592c0-.33846154.27692308-.61538462.61538462-.61538462.33846154 0 .61538462.27692308.61538462.61538462v8.61538468c0 .33846154-.27692308.61538462-.61538462.61538462z"></path>
        </g>
    </svg>
);

const FlagIcon = ({color = "#066224"}) => (
    <svg viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" width={40} height={40}>
        <g id="SVGRepo_bgCarrier" stroke-width="0"></g>
        <g id="SVGRepo_tracerCarrier" stroke-linecap="round" stroke-linejoin="round"></g>
        <g id="SVGRepo_iconCarrier">
            <path opacity="0.7" fill-rule="evenodd" clip-rule="evenodd" d="M6.5 1.75C6.5 1.33579 6.16421 1 5.75 1C5.33579 1 5 1.33579 5 1.75V21.75C5 22.1642 5.33579 22.5 5.75 22.5C6.16421 22.5 6.5 22.1642 6.5 21.75V13.6V3.6V1.75Z" fill="white"></path>
            <path d="M13.3486 3.78947L13.1449 3.70801C11.5821 3.08288 9.8712 2.9258 8.22067 3.25591L6.5 3.60004V13.6L8.22067 13.2559C9.8712 12.9258 11.5821 13.0829 13.1449 13.708C14.8385 14.3854 16.7024 14.5119 18.472 14.0695L18.6864 14.0159C19.3115 13.8597 19.75 13.298 19.75 12.6538V5.28673C19.75 4.50617 19.0165 3.93343 18.2592 4.12274C16.628 4.53055 14.9097 4.41393 13.3486 3.78947Z" fill={color}></path>
        </g>
    </svg>
);

const HearIcon = ({color = "#ff0000"}) => (
    <svg viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" width={40} height={40}>
        <g id="SVGRepo_bgCarrier" stroke-width="0"></g>
        <g id="SVGRepo_tracerCarrier" stroke-linecap="round" stroke-linejoin="round"></g>
        <g id="SVGRepo_iconCarrier">
            <path d="M12.39 20.87a.696.696 0 0 1-.78 0C9.764 19.637 2 14.15 2 8.973c0-6.68 7.85-7.75 10-3.25 2.15-4.5 10-3.43 10 3.25 0 5.178-7.764 10.664-9.61 11.895z" fill={color}>
            </path>
        </g>
    </svg>
);

