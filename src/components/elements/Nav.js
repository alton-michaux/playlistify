import globalStyles from '../../assets/modules/App.module.css'
import styles from '../../assets/modules/componentModules/Nav.module.css'

const Nav = () => {
  return (
    <nav className={[styles.navList, styles.navItem, styles.gridItems].join(' ')}>
      <div className={styles.navBox}>
      </div>
      <div className={[styles.navBox, styles.centerBox].join(' ')}>Underground Music Hub</div>
      <div className={styles.navBox}></div>
    </nav>
  )
}

export default Nav
