// hooks/useNavigation.ts

import { useParams, usePathname, useRouter, useSearchParams } from "next/navigation";
import { useState } from "react";

export const useNavigation = () => {
 const [loading, setLoading] = useState<boolean>(false);
 const [open, setOpen] = useState<boolean>(false);
 const [active, setActive] = useState<string>('');
 const router = useRouter();
 const params = useParams();
 const searchParams = useSearchParams();
 const pathname = usePathname();

 return {
   open,
   setOpen,
   active,
   setActive,
   pathname,
   params,
   router,
   searchParams,
   loading,
   setLoading
 }
}
