// functional logic hook

import { supabase } from "@/lib/supabase";
import { useState } from "react";

export const useSupabase = () => {
  const [user, setUser] = useState<any>()

  const getCurrentUser = async () => {
    const { data: { user: currentUser } } = await supabase.auth.getUser()
    setUser(currentUser)
  }

  const getSession = async () => {
    const {
      data: {
        session
      }
    } = await supabase.auth.getSession();

    const { access_token, refresh_token }: any = session;

    await setSession(access_token, refresh_token);

    return session
  }

  const refreshSession = async () => {
    const {
      data: {
        session
      }
    } = await supabase.auth.refreshSession();

    return session
  }

  const setSession = async (access_token: string, refresh_token: string) => {
    const { data, error } = await supabase.auth.setSession({
      access_token,
      refresh_token
    });

    return true
  }

  return {
    user,
    getCurrentUser,
    setSession,
    refreshSession,
    getSession
  }
}