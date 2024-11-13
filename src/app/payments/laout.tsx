export const metadata = {
  title: '결제 페이지',
  icons: {
    icon: '/icon-toss-logo.png', // payments 페이지에만 적용될 favicon
  },
};

export default function PaymentLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="ko">
      <body>{children}</body>
    </html>
  );
}
