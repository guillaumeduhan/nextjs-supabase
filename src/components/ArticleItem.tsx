'use client';

import IconsUp from '@/components/Icons/Up';
import { useArticles } from '@/hooks/useArticles';
import { useSupabase } from '@/hooks/useSupabase';
import { useEffect, useState } from 'react';

export type Article = {
  id: number;
  created_at?: string;
  title: string;
  votes?: any[];
}

export default function ArticleItem({
  article: {
    id,
    title,
    votes
  }
}: {
  article: Article
}) {
  const { user, getCurrentUser } = useSupabase();
  const { newVote } = useArticles()

  const [hasVoted, setHasVoted] = useState<boolean>(false);

  useEffect(() => {
    getCurrentUser();
  }, [])

  useEffect(() => {
    if (user) {
      const { id } = user;
      const findVote = votes?.find(v => v.user_id === id);
      if (findVote) setHasVoted(true)
    }
  }, [user])

  return <div className="border flex items-center justify-between px-4 py-3 cursor-pointer hover:bg-gray-900">
    <h2>{title}</h2>
    <div className={`grid ${hasVoted ? 'text-rose-700' : 'text-white'}`}>
      <span onClick={() => newVote(id)}>
        <IconsUp />
      </span>
      <span>{votes?.length} votes</span>
      <span onClick={() => newVote(id, true)}>
        <IconsUp className="rotate-180" />
      </span>
    </div>
  </div>;
}