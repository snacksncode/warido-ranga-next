import Button from "@components/Button";
import Logos from "@components/Logos";
import classNames from "classnames";
import Link from "next/link";
import {
  BookBookmark,
  CaretDown,
  Checks,
  CurrencyCircleDollar,
  HouseLine,
  IconContext,
  List,
  Phone,
  UserCirclePlus,
  UserList,
  X,
} from "phosphor-react";
import { FC, useState } from "react";
import { Media, MediaContextProvider } from "utils/media";
import styles from "./Header.module.scss";

type pageIds = "home" | "about" | "s-ks" | "s-au" | "s-zk" | "s-dok";
interface Props {
  activeMenuItem: pageIds;
}

const Header: FC<Props> = ({ activeMenuItem }) => {
  const [menuOpened, setMenuOpened] = useState(false);
  const toggleMenu = () => setMenuOpened((s) => !s);
  const closeMenu = () => setMenuOpened(false);

  return (
    <header className={styles.wrapper}>
      <MediaContextProvider>
        <Logos />
        <Media at="xs">
          <button
            className={classNames(styles.hamburger, { [styles["hamburger--close"]]: menuOpened })}
            onClick={toggleMenu}
          >
            {menuOpened ? <X weight="bold" size={20} /> : <List weight="bold" size={20} />}
          </button>
        </Media>

        <IconContext.Provider
          value={{
            color: "currentColor",
            size: 28,
          }}
        >
          <nav className={classNames(styles.nav, { [styles["nav--opened"]]: menuOpened })}>
            <ul className={styles.nav__list}>
              <li data-active={activeMenuItem === "home"} className={styles.nav__item}>
                <Link passHref href="/">
                  <a>
                    <Media at="xs">
                      <HouseLine />
                    </Media>
                    <span>Strona główna</span>
                  </a>
                </Link>
              </li>
              <li className={styles.nav__item} data-active={activeMenuItem === "about"}>
                <Link passHref href="/about">
                  <a>
                    <Media at="xs">
                      <UserList />
                    </Media>
                    <span>O Nas</span>
                  </a>
                </Link>
              </li>
              <li
                tabIndex={-1}
                data-active={(["s-au", "s-ks", "s-zk", "s-dok"] as pageIds[]).includes(activeMenuItem)}
                className={classNames(styles.nav__item, styles["nav__item--dropdown"])}
              >
                <Media greaterThan="xs">
                  Usługi <CaretDown color="currentColor" weight="bold" size={16} />
                </Media>
                <div className={styles.dropdown}>
                  <Media greaterThan="xs">
                    <div className={styles.dropdown__tick}></div>
                  </Media>
                  <ul className={styles.dropdown__list}>
                    <li className={styles.dropdown__item} data-active={activeMenuItem === "s-ks"}>
                      <Link passHref href="/uslugi-ksiegowe">
                        <a>
                          <BookBookmark />
                          <div>
                            <span>Usługi Księgowe</span>
                            <Media greaterThan="xs">
                              <div>Lorem ipsum dolor sit amet, consectetur adipiscing elit</div>
                            </Media>
                          </div>
                        </a>
                      </Link>
                    </li>
                    <li className={styles.dropdown__item} data-active={activeMenuItem === "s-au"}>
                      <Link passHref href="/uslugi-audytorskie">
                        <a>
                          <Checks />
                          <div>
                            <span>Usługi Audytorskie</span>
                            <Media greaterThan="xs">
                              <div>
                                Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor
                                incididunt
                              </div>
                            </Media>
                          </div>
                        </a>
                      </Link>
                    </li>
                    <li className={styles.dropdown__item} data-active={activeMenuItem === "s-zk"}>
                      <Link passHref href="/zakladanie-spolek">
                        <a>
                          <UserCirclePlus />
                          <div>
                            <span>Zakładanie spółek</span>
                            <Media greaterThan="xs">
                              <div>Duis aute irure dolor in reprehenderit in</div>
                            </Media>
                          </div>
                        </a>
                      </Link>
                    </li>
                    <li className={styles.dropdown__item} data-active={activeMenuItem === "s-dok"}>
                      <Link passHref href="/dokumentacja-cen-transferowych">
                        <a>
                          <CurrencyCircleDollar />
                          <div>
                            <span>Dokumentacja cen transferowych</span>
                            <Media greaterThan="xs">
                              <div>
                                Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt
                                mollit anim id est laborum.
                              </div>
                            </Media>
                          </div>
                        </a>
                      </Link>
                    </li>
                  </ul>
                </div>
              </li>
              <Button
                linkTo="/#contact"
                onClick={closeMenu}
                icon={Phone}
                fillIcon
                className={styles.contact}
                size="small"
              >
                Kontakt
              </Button>
            </ul>
          </nav>
        </IconContext.Provider>
      </MediaContextProvider>
    </header>
  );
};

export default Header;
