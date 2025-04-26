'use client'
import { useRouter } from "next/navigation"
export default function SourcePlayer(props) {

    const router = useRouter();

  return (
    <>
       <a className="dropdown-item" href="#">{props.sourcename}</a>
    </>
  )
}
