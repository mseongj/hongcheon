"use client"

import React, { useEffect, useState } from 'react';

// TossPayments SDK를 사용할 수 있도록 타입을 선언합니다.
declare const TossPayments: any;


export default function PaymentPage(){
  const [couponApplied, setCouponApplied] = useState(false);
  const [amount, setAmount] = useState({ currency: 'KRW', value: 1 });
  // TODO: 서버, 프톤트단에서 정보 종합해서 리턴해주는 함수 필요.(discountAmount, customerName, customerEmail은 서버단에,  orderName은 프론트단)
  let userData:{ discountAmount: number, customerName: string, customerEmail: string, orderName: string,} = {
    discountAmount: 5000,
    customerName: '민강현',
    customerEmail: 'customer123@gmail.com',
    orderName: '홍천 쑥떡쑥떡 체험 (2인)',
  }

  useEffect(() => {
    // 외부 스크립트를 동적으로 로드
    const script = document.createElement('script');
    script.src = 'https://js.tosspayments.com/v2/standard';
    script.async = true;
    document.body.appendChild(script);

    script.onload = () => {
      main(); // 스크립트가 로드되면 main 함수 실행
    };

    return () => {
      document.body.removeChild(script); // 컴포넌트가 언마운트될 때 스크립트 제거
    };
  }, []);

  const main = async () => {
    const clientKey = 'test_gck_docs_Ovk5rk1EwkEbP0W43n07xlzm';
    const customerKey = generateRandomString();
    
    // TossPayments 객체 초기화
    const tossPayments = TossPayments(clientKey);

    // 회원 결제 위젯 초기화
    const widgets = tossPayments.widgets({
      customerKey,
    });

    // 주문서의 결제 금액 설정
    await widgets.setAmount(amount);

    await Promise.all([
      // 결제 UI 렌더링
      widgets.renderPaymentMethods({
        selector: '#payment-method',
        variantKey: 'DEFAULT',
      }),
      // 이용약관 UI 렌더링
      widgets.renderAgreement({
        selector: '#agreement',
        variantKey: 'AGREEMENT',
      }),
    ]);

    // 쿠폰 체크박스 변경 시 결제 금액 업데이트

    document.getElementById('coupon-box')?.addEventListener('change', async () => {
      if (couponApplied) {
        await widgets.setAmount({
          currency: 'KRW',
          value: amount.value - userData.discountAmount,
        });
      } else {
        await widgets.setAmount(amount);
      }
      setCouponApplied(!couponApplied);
    });

    // 결제 버튼 클릭 시 결제창 띄우기
    document.getElementById('payment-button')?.addEventListener('click', async () => {
      await widgets.requestPayment({
        orderId: generateRandomString(),
        orderName: userData.orderName,
        successUrl: window.location.origin + '/payments/widget',
        failUrl: window.location.origin + '/payments/fail',
        customerEmail: userData.customerEmail,
        customerName: userData.customerName,
      });
    });
  };

  const generateRandomString = (): string => {
    return window.btoa(Math.random().toString()).slice(0, 20);
  };

  return (
    <div className="wrapper">
      <div className="box_section" style={{ padding: '40px 30px 50px', marginTop: '30px', marginBottom: '50px' }}>
        {/* 결제 UI */}
        <div id="payment-method"></div>
        
        {/* 이용약관 UI */}
        <div id="agreement"></div>
        
        {/* 쿠폰 체크박스 */}
        <div style={{ paddingLeft: '30px' }} className=''>
          <div className="checkable typography--p ">
            <label htmlFor="coupon-box" className="checkable__label typography--regular">
              <input id="checkable-:r6:" className="checkable__input w-5 h-5 rounded-md " type="checkbox" aria-checked={couponApplied} />
              <span className="checkable__label-text text-gray-500 ml-5 pb-3"><span className='font-bold text-rose-500'>{userData.discountAmount}</span>원 군인할인 적용</span>
            </label>
          </div>
        </div>

        {/* 결제하기 버튼 */}
        <button className="button text-white text-lg px-3 py-2 bg-blue-500 rounded-lg hover:bg-blue-400" id="payment-button" style={{ marginTop: '30px' }}>
          결제하기
        </button>
      </div>
    </div>
  );
};

// payments/widget?paymentType=NORMAL&orderId=MC4yNDIzMTQ5OTYxMTc1&paymentKey=tgen_20241109165826DC7Z7&amount=50000
// paymetns/widget?paymentType=NORMAL&orderId=MC42MzEyMjczNTkzODcx&paymentKey=tgen_20241109170412CuOi8&amount=1



// export default async function Page({ searchParams }:any) {
//     const secretKey = process.env.TOSS_SECRET_KEY;
//     const basicToken = Buffer.from(`${secretKey}:`, "utf-8").toString("base64");
//     const payments = await fetch(
//         `https://api.tosspayments.com/v1/payments/orders/${searchParams.orderId}`,
//         {
//             headers: {
//         Authorization: `Basic ${basicToken}`,
//         "Content-Type": "application/json",
//       },
//     }
//     ).then((res) => res.json());
//     const { card } = payments;
//     return (
//         <div>
//             <link rel="icon" href="https://static.toss.im/icons/png/4x/icon-toss-logo.png" />
//             <h1>결제가 완료 되었습니다!</h1>
//             <ul>
//                 <li>결제상품 {payments.orderName}</li>
//                 <li>주문 번호 {payments.orderId}</li>
//                 <li>카드 회사 - {card.company}</li>
//                 <li>결제한 카드 번호 {card.number}</li>
//                 <li>결제 금액 - {card.amount}</li>
//                 <li>
//                     결제승인 시간 -
//                     {Intl.DateTimeFormat().format(new Date(payments.approvedAt))}
//                 </li>
//             </ul>
//         </div>
    
//     );
// }