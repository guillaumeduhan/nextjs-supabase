import { supabase } from "@/lib/supabase"
import { useState } from "react"

export const useArticles = () => {
  const [articles, setArticles] = useState<any[]>([])

  const getArticles = async () => {
    const { data, error } = await supabase
      .from('articles')
      .select('*, votes(*)')
    
    if (data) {
      console.log(data)
      setArticles(data)
    }
  }

  const newVote = async (article_id: number, remove: boolean = false) => {
    const {
      data: {
        session
      }
    } = await supabase.auth.getSession();

    if (!session) return alert('You are not authenticated');

    const { user: { id } } = session;

    if (remove) {
      const { data, error } = await supabase
        .from('votes')
        .delete()
        .eq('article_id', article_id)
        .eq('user_id', id)
      
      return data
    }

    const { data, error } = await supabase
      .from('votes')
      .insert({
        article_id,
        user_id: id
      })
      .select()
      .single()
    
    return data
  }

  return {
    articles,
    getArticles,
    newVote
  }
}