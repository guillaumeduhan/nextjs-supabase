"use client";

import { useArticles } from "@/hooks/useArticles";
import { useEffect } from "react";

export default function Home() {
  const { articles, getArticles } = useArticles()

  useEffect(() => {
    getArticles()
  }, []);

  return <div>
    <ul>
      {articles.map((article: any, key: number) => {
        return <li key={key}>{article.title}</li>
      })}
    </ul>
  </div>
}
