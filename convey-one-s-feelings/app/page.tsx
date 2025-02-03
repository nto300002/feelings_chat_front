// 先頭に以下を追加
import { TestAuthButton } from '@/components/test-auth-button';

import Image from 'next/image';
import { Button } from '@/components/ui/button';
import { Card } from '@/components/ui/card';
import Link from 'next/link';

export default function Home() {
  return (
    <main className="min-h-screen bg-gradient-to-b from-pink-50 to-white">
      <div className="container mx-auto px-4 py-16 flex flex-col items-center justify-center min-h-screen">
        <Card className="max-w-2xl w-full p-8 bg-white/80 backdrop-blur-sm shadow-lg">
          <div className="flex flex-col items-center space-y-8">
            <div className="relative w-64 h-64 md:w-80 md:h-80">
              <Image
                src="https://hebbkx1anhila5yf.public.blob.vercel-storage.com/cosf_logo_trans-PTXYjZPtKonvRTGPUdlgFg9bD3wXEu.png"
                alt="赤い花のイラスト"
                fill
                className="object-contain"
                priority
              />
            </div>

            <div className="flex items-center space-x-2">
              <svg
                className="w-6 h-6 text-red-500"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M8 10h.01M12 10h.01M16 10h.01M9 16H5a2 2 0 01-2-2V6a2 2 0 012-2h14a2 2 0 012 2v8a2 2 0 01-2 2h-4l-4 4-4-4z"
                />
              </svg>
              <h1 className="text-2xl md:text-3xl font-medium tracking-wider">
                convey-one&apos;s-feelings
              </h1>
            </div>

            <p className="text-center text-gray-600 max-w-lg leading-relaxed">
              気持ちの伝え方がわからない、言い出しづらい事がある時、
              このアプリがあなたのコミュニケーションのお手伝いをする
              チャットアプリです。
            </p>

            <Button
              className="bg-pink-200 hover:bg-pink-300 text-gray-700 px-8 py-2 rounded-full transition-colors duration-200"
              asChild
            >
              <Link href="/sign-up">試してみる</Link>
            </Button>
            <TestAuthButton />
          </div>
        </Card>
      </div>
    </main>
  );
}
