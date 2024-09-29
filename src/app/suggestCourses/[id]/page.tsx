import React from 'react';
type Props = {
  params: {
    id: string;
  }
}

export default function Courses({params}: Props) {
  const courese: {[key: string]: React.ReactNode} = {
    '1': 
    (<div>
      <p>1번째 코스</p>
    </div>),
      '2': 
      (<div>
        <p>2번째 코스</p>
      </div>),
      };

  return (
    <>
    {courese[params.id]}
    </>
  )
}

export function generateStaticParams() {
  const posts = ['1', '2', '3'];
  return posts.map((post) => ({
    id: post
  }))
}


