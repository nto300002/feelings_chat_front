import Header from '@/components/header';
import { MemberList } from '@/components/member-list';

export default function MembersPage() {
  return (
    <div className="min-h-screen bg-gradient-to-b from-pink-50 to-white">
      <Header />
      <main className="container mx-auto px-4 py-6">
        <h1 className="text-2xl font-bold mb-6">おはなしメンバー一覧</h1>
        <MemberList />
      </main>
    </div>
  );
}
