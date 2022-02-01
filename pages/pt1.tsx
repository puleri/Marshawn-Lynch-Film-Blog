import type { NextPage } from 'next'

import styles from '../styles/Home.module.css'
import Image from 'next/image'
import Tilt from 'react-vanilla-tilt';
import Link from 'next/link'

// images
import blm from '../img/BLM.png';
import sah from '../img/SAH.png';
import shooter from '../img/shooter.png'


const Pt1: NextPage = () => {
  return (
    <div>
      <Tilt className={styles.tilt}>
      <main className={styles.main}>
      <div className={styles.shooter}>
      <Image
      height={115}
      width={210}
      src={shooter}/>
      </div>
      <h1>
      &quot;Shooting suspect Dylan Storm Roof got <em className={styles.movie}>a free meal from police on his way to jail</em>. They went to Burger King.&quot;
      </h1>
        <p>Brimming with cut-aways, news reels, and sports caster sidebars, the film highlights black exploitation and white privlidge from creative angles.
        For example, we are shown how being white awards a killer with a free meal-- juxtaposed to seeing Mr. Lynch likened to the unibomber for not speaking when spoken to by the media.</p>

          <nav className={styles.navbar}>
            <div>
              <Image
                alt="Black Lives Matter"
                height={50}
                width={90}
                src={blm}/>
            </div>
            <div>
              <strong><Link href="/intro">Pt I </Link> | <Link href="/pt2"> Pt. III</Link> </strong>
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
export default Pt1
