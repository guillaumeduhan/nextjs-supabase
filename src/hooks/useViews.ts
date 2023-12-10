// business logic hook

import { supabase } from "@/lib/supabase"
import { useState } from "react"

export const useViews = () => {
  const [views, setViews] = useState<any[]>([])

  const getViews = async () => {
    const { data, error } = await supabase
      .from('views') // RLS policies
      .select('*')
    
    if (data) {
      setViews(data)
    }
  }

  return {
    views,
    setViews
  }
}