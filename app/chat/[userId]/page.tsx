import Header from '@/components/header';
import { ChatInterface } from '@/components/chat-interface';

export default function ChatPage({ params }: { params: { userId: string } }) {
  return (
    <div className="min-h-screen bg-gradient-to-b from-pink-50 to-white">
      <Header />
      <main className="container mx-auto px-4 py-6">
        <ChatInterface userId={params.userId} />
      </main>
    </div>
  );
}
