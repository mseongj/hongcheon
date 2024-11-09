export default async function handler(req, res) {
  if (req.method === 'POST') {
    try {
      // Java 서버로 로그아웃 요청
      const javaServerResponse = await fetch('https://your-java-server.com/logout', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
          'Authorization': 'Bearer YOUR_AUTH_TOKEN' // 필요한 경우
        },
        body: JSON.stringify({ userId: req.body.userId }) // 필요한 데이터
      });
  
      if (!javaServerResponse.ok) {
        throw new Error('Java server logout failed');
      }
  
      // 로컬 로그아웃 처리 (예: 세션 삭제)
      // ...
  
      res.status(200).json({ message: 'Logged out successfully' });
    } catch (error) {
      console.error('Logout error:', error);
      res.status(500).json({ message: 'Logout failed' });
    }
  } else {
    res.setHeader('Allow', ['POST']);
    res.status(405).end(`Method ${req.method} Not Allowed`);
  }
}