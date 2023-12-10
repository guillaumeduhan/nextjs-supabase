"use client";

import { supabase } from "@/lib/supabase";
import { useEffect } from "react";

export default function Home() {
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

  useEffect(() => {
    getSession()
  }, []);

  return <div>Logged in</div>
}
