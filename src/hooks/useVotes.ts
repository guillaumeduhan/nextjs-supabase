import { supabase } from "@/lib/supabase"
import { useState } from "react"

export const useVotes = () => {
  const [votes, setVotes] = useState<any[]>([])

  const getVotes = async () => {
    const { data, error } = await supabase
      .from('votes')
      .select('*')
    
    if (data) {
      setVotes(data)
    }
  }
  return {
    votes,
    getVotes
  }
}