import React, {useState} from 'react'
import Link from "next/link"
import classes from "./Header.module.css"

export const Header = () => {

  const [openMenu, setOpenMenu] = React.useState(false)
  console.log(openMenu)
  let toggleMenu = () => {
    console.log(openMenu)
    setOpenMenu(!openMenu)
}

  return (
    <header className="bg-secondary text-accent w-full text-center font-playfair border-b-2 border-accent">
      <div className="p-5 flex w-full items-center justify-between">
        <div>
          <svg width="25" height="25" viewBox="0 0 44 44" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path d="M4.99049 26.7307C4.99049 29.4841 4.97137 31.9506 4.93313 34.1304C4.93313 36.2719 4.85665 37.9545 4.70368 39.1782C4.58896 40.0195 4.41687 40.727 4.18742 41.3006C3.99622 41.8742 3.6138 42.2184 3.04018 42.3331C2.7725 42.4096 2.48569 42.467 2.17975 42.5052C1.87382 42.5435 1.58701 42.5626 1.31933 42.5626C1.01339 42.5626 0.860429 42.6773 0.860429 42.9068C0.860429 43.2127 1.16636 43.3656 1.77822 43.3656C2.19888 43.3656 2.71513 43.3465 3.32699 43.3083C3.93885 43.3083 4.5316 43.2892 5.10521 43.2509C5.67883 43.2509 6.15685 43.2318 6.53926 43.1936C6.95992 43.1936 7.17025 43.1936 7.17025 43.1936C7.24673 43.1936 7.4953 43.1936 7.91595 43.1936C8.37485 43.2318 8.92935 43.2509 9.57945 43.2509C10.2678 43.2892 11.0135 43.3083 11.8166 43.3083C12.6196 43.3465 13.4227 43.3656 14.2258 43.3656C14.8376 43.3656 15.1436 43.2127 15.1436 42.9068C15.1436 42.6773 14.9906 42.5626 14.6847 42.5626C14.417 42.5626 14.0154 42.5435 13.4801 42.5052C12.9829 42.467 12.524 42.4096 12.1034 42.3331C11.2238 42.2184 10.6502 41.8742 10.3825 41.3006C10.1148 40.727 9.94274 40.0195 9.86626 39.1782C9.71329 37.9545 9.61769 36.2719 9.57945 34.1304C9.57945 31.9506 9.57945 29.4841 9.57945 26.7307V25.354C9.57945 25.0481 9.71329 24.8951 9.98098 24.8951L17.0365 25.0098C17.3042 25.0098 17.5528 25.1245 17.7822 25.354C18.0499 25.7364 18.4132 26.2527 18.8721 26.9028C19.3692 27.5146 19.8855 28.203 20.4209 28.9678C20.9945 29.7326 21.5872 30.5357 22.1991 31.377C22.8109 32.2183 23.4228 33.0405 24.0347 33.8436C25.679 36.0233 27.0748 37.8207 28.2221 39.2356C29.3693 40.6123 30.5548 41.6257 31.7785 42.2758C32.5051 42.6964 33.3082 42.9832 34.1877 43.1362C35.0673 43.2892 36.3101 43.3656 37.9163 43.3656H41.989C42.5243 43.3656 42.8876 43.3274 43.0788 43.2509C43.27 43.2127 43.3656 43.098 43.3656 42.9068C43.3656 42.6773 43.1936 42.5626 42.8494 42.5626C42.6582 42.5626 42.3714 42.5626 41.989 42.5626C41.6065 42.5243 41.1477 42.467 40.6123 42.3905C39.8857 42.2758 38.9297 41.9698 37.7442 41.4727C36.5587 40.9756 35.182 39.9048 33.6141 38.2604C31.9315 36.4631 30.115 34.3216 28.1647 31.8359C26.2144 29.3502 24.0538 26.5968 21.6828 23.5758C24.245 21.2048 26.0423 18.9486 27.0748 16.8071C28.1074 14.6273 28.6236 12.4667 28.6236 10.3252C28.6236 9.33088 28.4707 8.41309 28.1647 7.57178C27.897 6.73047 27.5529 5.98477 27.1322 5.33466C26.7498 4.68456 26.3291 4.13006 25.8702 3.67117C25.4114 3.17403 25.0098 2.79161 24.6656 2.52392C23.136 1.41493 21.4534 0.726584 19.6178 0.458893C17.8204 0.152964 16.004 0 14.1684 0C13.7095 0 13.1359 0.0191204 12.4475 0.0573612C11.7592 0.0573612 11.0517 0.0764816 10.3252 0.114722C9.63681 0.114722 9.00583 0.133843 8.43221 0.172084C7.89683 0.172084 7.55266 0.172084 7.39969 0.172084C7.32321 0.172084 7.05552 0.172084 6.59663 0.172084C6.17597 0.133843 5.64059 0.114722 4.99049 0.114722C4.37863 0.0764816 3.70941 0.0573612 2.98282 0.0573612C2.25624 0.0191204 1.56789 0 0.917792 0C0.30593 0 0 0.152964 0 0.458893C0 0.688343 0.152965 0.803067 0.458896 0.803067C0.726585 0.803067 1.05164 0.822188 1.43405 0.860429C1.8547 0.860429 2.17975 0.898669 2.4092 0.975151C3.36524 1.16636 3.99622 1.51053 4.30215 2.00767C4.60808 2.5048 4.79928 3.25051 4.87577 4.24479C4.91401 4.70368 4.93313 5.20082 4.93313 5.73619C4.97137 6.23333 4.99049 6.92168 4.99049 7.80123C4.99049 8.64254 4.99049 9.77065 4.99049 11.1856C4.99049 12.6005 4.99049 14.417 4.99049 16.635V26.7307ZM9.57945 2.8681C9.57945 2.52393 9.73241 2.29448 10.0383 2.17975C10.3443 2.10327 10.8414 2.02679 11.5298 1.95031C12.2181 1.87382 13.002 1.83558 13.8816 1.83558C16.9791 1.83558 19.4075 2.84898 21.1666 4.87577C22.9257 6.90256 23.8052 9.71329 23.8052 13.308C23.8052 15.4877 23.461 17.3424 22.7727 18.8721C22.1226 20.3635 21.3004 21.4534 20.3061 22.1417C19.656 22.6006 18.9486 22.9065 18.1837 23.0595C17.4189 23.1742 16.6923 23.2316 16.004 23.2316C14.742 23.2316 13.5183 23.1551 12.3328 23.0021C11.1856 22.8109 10.4016 22.5815 9.98098 22.3138C9.71329 22.1608 9.57945 21.9314 9.57945 21.6255V2.8681Z" fill="#272727"/>
          </svg>
        </div>
        <div className={classes["menu-icon"]} onClick={toggleMenu}>
          <i className={openMenu ? classes.open : classes.close}></i>
          <i className={openMenu ? classes.open : classes.close}></i>
          <i className={openMenu ? classes.open : classes.close}></i>
        </div>
        <div className={classes.links}>
          <ul>
            <li><Link href="/">HOME</Link></li>
            <li><Link href="/projects">PROJECTS</Link></li>
            <li><Link href="/contacts">CONTACTS</Link></li>
          </ul>
        </div>
      </div>
    </header>
  )
}
 
{/* <nav className={classes.nav}>
<h1 className={classes.logo}><Link href="/">Duplex Val Thorens</Link></h1>
<div className={classes.wrapper}>
    <div className={classes["menu-icon"]} onClick={toogleMenu}>
        <i className={openMenu ? classes.open : classes.close}></i>
        <i className={openMenu ? classes.open : classes.close}></i>
        <i className={openMenu ? classes.open : classes.close}></i>
    </div>
</div>
<div className={classes.links}>
    <ul>
        <li><Link href="/">{t("common:navbar.home")}</Link></li>
        <li><Link href="/apartment">{t("common:navbar.apartment")}</Link></li>
        <li><Link href="/rates">{t("common:navbar.rates")}</Link></li>
        <li><Link href="/maps">{t("common:navbar.maps")}</Link></li>
        <li><Link href="/contacts">{t("common:navbar.contacts")}</Link></li>
    </ul>
    <div className={classes["translation-wrapper"]}>
        <button aria-label="french translation" className={classes.translation} onClick={() => englishToFrench()}><span className="flag-icon flag-icon-fr"></span></button>
        <button aria-label="english translation" className={classes.translation} onClick={() => frenchToEnglish()}><span className="flag-icon flag-icon-gb"></span></button>
    </div>
</div>
<div className={openMenu ? classes["nav-links"] : classes["nav-links-closed"]}>
    <ul>
        <li onClick={toogleMenu}><Link href="/">{t("common:navbar.home")}</Link></li>
        <li onClick={toogleMenu}><Link href="/apartment">{t("common:navbar.apartment")}</Link></li>
        <li onClick={toogleMenu}><Link href="/rates">{t("common:navbar.rates")}</Link></li>
        <li onClick={toogleMenu}><Link href="/maps">{t("common:navbar.maps")}</Link></li>
        <li onClick={toogleMenu}><Link href="/contacts">{t("common:navbar.contacts")}</Link></li>
    </ul>
    <div className={classes["translation-wrapper"]}>
        <button aria-label="french translation" className={classes.translation}  onClick={() => englishToFrench()}><span className="flag-icon flag-icon-fr"></span></button>
        <button aria-label="english translation" className={classes.translation}  onClick={() => frenchToEnglish()}><span className="flag-icon flag-icon-gb"></span></button>
    </div>
</div>
</nav> */}