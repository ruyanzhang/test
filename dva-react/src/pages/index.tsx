import React from 'react';
import styles from './index.css';

interface componentState {
  isShow: boolean;
}
interface componentProps {

}
export class Home extends React.Component<componentProps, componentState> {
  constructor(props: any) {
    super(props)
    this.state = {
      isShow: false
    }
  }

  toggle () {
    const isShow = !this.state.isShow
    const aa:any = document.getElementById('aa')
    aa.style.height = isShow? "150px": "0px"
    this.setState({
      isShow
    })
  }

  render() {
    const isShow = this.state.isShow
    const contentClass= isShow ? `${styles.wrap_content}` : `${styles.wrap_content} ${styles.hidden}`
    return (
      <div className={styles.normal}>
        <div className={styles.welcome} />
        <ul className={styles.list}>
          <li>To get started, edit <code>src/pages/index.js</code> and save to reload.</li>
          <li>
            <a href="https://umijs.org/guide/getting-started.html">
            123455
            </a>
          </li>
        </ul>
        <div className={styles.wrap}>
          <div className={styles.wrap_header}><span onClick={() => this.toggle()}>5</span>123455</div>
          <div className={contentClass} id="aa">
            <p>23444</p>
            <p>23444</p>
            <p>23444</p>
            <p>23444</p>
            <p>23444</p>
            <p>23444</p>
            <p>23444</p>
            <p>23444</p>
            <p>23444</p>
            <p>23444</p>
            <p>23444</p>
            <p>23444</p>
            <p>23444</p>
            <p>23444</p>
            <p>23444</p>
            <p>23444</p>
            <p>23444</p>
            <p>23444</p>
            <p>23444</p>
            <p>23444</p>
          </div>
        </div>
      
      </div>
    )
  }
}
