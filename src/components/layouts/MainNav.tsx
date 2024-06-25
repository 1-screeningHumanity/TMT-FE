import Link from "next/link";
import NotiIcon from "../ui/icons/NotiIcon";
import AlarmCount from "../pages/alarm/AlarmCount";
import SearchIcon from "../ui/icons/SearchIcon";

export default function MainNav() {

  return (
    <nav>
      <ul className="flex justify-end items-center gap-4">
        <li><Link href={"/search"}><SearchIcon/></Link></li>
        <li><Link href={"/alarm"}><NotiIcon /><AlarmCount /></Link></li>
      </ul>
    </nav>
  )
}