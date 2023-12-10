"use client";

import ArticleItem from "@/components/ArticleItem";
import { useArticles } from "@/hooks/useArticles";
import { supabase } from "@/lib/supabase";
import { useEffect } from "react";

export default function Home() {
  const { articles, getArticles } = useArticles()

  // const subscribedChannel = supabase
  //   .channel('articles-follow-up')
  //   .on('postgres_changes', {
  //     event: '*',
  //     schema: 'public',
  //     table: 'articles'
  //   }, (payload: any) => {
  //     console.log(payload)
  //   })
  //   .subscribe();

  const subscribedChannel = supabase
    .channel('articles-follow-up')
    .on('postgres_changes', {
      event: '*',
      schema: 'public',
      table: 'votes'
    }, async (payload: any) => {
      await getArticles()
    })
    .subscribe();

  useEffect(() => {
    getArticles()
  }, []);

  return <div className="container mx-auto my-8">
    <div className="grid gap-4">
      {articles.map((article: any, key: number) => {
        return <ArticleItem key={key} article={article} />
      })}
    </div>
  </div>
}
