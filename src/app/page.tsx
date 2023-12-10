"use client";

import { useArticles } from "@/hooks/useArticles";
import { supabase } from "@/lib/supabase";
import { useEffect } from "react";

export default function Home() {
  const { articles, getArticles } = useArticles()

  const subscribedChannel = supabase
    .channel('articles-follow-up')
    .on('postgres_changes', {
      event: '*',
      schema: 'public',
      table: 'articles'
    }, (payload: any) => {
      console.log(payload)
    })
    .subscribe();

  const unsubscribeFromArticles = () => {
    supabase.removeChannel(subscribedChannel)
  };

  useEffect(() => {
    getArticles()
  }, []);

  return <div>
    <button onClick={() => unsubscribeFromArticles()}>Unsubscribe</button>
    <ul>
      {articles.map((article: any, key: number) => {
        return <li key={key}>{article.title}</li>
      })}
    </ul>
  </div>
}
