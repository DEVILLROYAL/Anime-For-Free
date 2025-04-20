'use client'
import SearchScript from './SearchScript';
import { useRouter } from 'next/navigation';

export default function Navbar() {

  const router = useRouter();
  const handleHomeClick = (home) => {
    router.push('/');
  };


  return (
    <>
      <div id="Navbar-border">
        <div id="logo-border">
          <img  id='logo' src='https://i.ibb.co/sGYL13s/new.jpg' style={{cursor:'pointer'}} onClick={()=>handleHomeClick()} alt='anime-for-free' ></img></div>
                  <SearchScript/>
      </div>
    </>
  )
}
