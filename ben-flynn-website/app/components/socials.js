import Link from "next/link";
import Image from "next/image";

export default function Socials(){
    return (
        <div className="socials">
            <Link href={"mailto:ben.flyynn@gmail.com"}><Image src={"/icons/email.svg"} height={18} width={28}></Image></Link>
            <Link href={"https://github.com/ben-flynn"}><Image src={"/icons/github.svg"} height={28} width={28}></Image></Link>
            <Link href={"https://www.instagram.com/ben._flynn/"}><Image src={"/icons/instagram.svg"} height={26} width={26}></Image></Link>
            <Link href={"https://www.linkedin.com/in/ben-flynn-a74562194/"}><Image src={"/icons/linkedin.svg"} height={28} width={28}></Image></Link>
        </div>
    )
}