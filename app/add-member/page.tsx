import Header from '@/components/header';
import { AddMemberForm } from '@/components/add-member-form';

export default function AddMemberPage() {
  return (
    <div className="min-h-screen bg-gradient-to-b from-pink-50 to-white">
      <Header />
      <main className="container mx-auto px-4 py-6">
        <h1 className="text-2xl font-bold mb-6">メンバー追加</h1>
        <AddMemberForm />
      </main>
    </div>
  );
}
