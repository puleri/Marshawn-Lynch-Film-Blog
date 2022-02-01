import type { NextPage } from 'next'

import styles from '../styles/Home.module.css'
import Image from 'next/image'
import Tilt from 'react-vanilla-tilt';
import Link from 'next/link'

// images
import exploit from '../img/exploit.png';
import blm from '../img/BLM.png';
import sah from '../img/SAH.png';


const Pt2: NextPage = () => {
  return (
    <div>
      <Tilt className={styles.tilt}>
      <main className={styles.main}>
      <div className={styles.shooter}>
      </div>
      <div style={{
        float: 'right',
        margin: '-35px 0 0',
        fontSize: '60px'}}>👨🏿‍⚕️
        </div>
      <h1>
      &quot;[to Marshawn] What advice would you give the youth thats watching? [Marshawn] Grow up and wanna <em className={styles.movie}>be a doctor</em>.&quot;
      </h1>
        <p>Another thought posed in the documentary is how strong black men are used by the media like gorillas on exhibit at the zoo. This harkens back to the study showing how black student-athletes make their schools exorbitant amounts of wealth-- yet are often unable to afford their college tuition. Meanwhile, their white student counterparts are finishing their degrees to go on and have successfull careers.</p>
        <p>Consequently, not only are black student-athletes being set up for failure in their careers, but physical health is put at significant risk. Beyond risks, head trauma, PTSD, brain damage, and reduced life spans are all but guaranteed in the National Football League</p>


          <nav className={styles.navbar}>
            <div>
              <Image
                alt="Black Lives Matter"
                height={50}
                width={90}
                src={blm}/>
            </div>
            <div>
              <strong><Link href="/pt1">Pt. II </Link> | <Link href="/conclusion"> Conclusion</Link> </strong>
            </div>
            <div>
              <Image
                alt="Stop Asian Hate"
                height={90}
                width={90}
                src={sah}/>
            </div>
          </nav>
        </main>
        </Tilt>
    </div>
  )
}
export default Pt2
