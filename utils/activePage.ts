/* eslint-disable react-hooks/rules-of-hooks */
import { useRouter } from 'next/router';

export default function activePage(path: string) {
  const router = useRouter();
  const originalPath = `/${path}`;

  if (router.pathname === originalPath) {
    return true;
  }

  return false;
}
