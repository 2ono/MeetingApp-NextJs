import Link from "next/link";
import classes from "./main-header.module.css";
function MainHeader() {
  return (
    <header className={classes.header}>
      <div className={classes.logo}>
        <Link href={"/"}>번개방</Link>
      </div>
      <na>
        <ul>
          <li className={classes.navigation}>
            <Link href="/events">모든 모임 리스트</Link>
          </li>
        </ul>
      </na>
    </header>
  );
}

export default MainHeader;
