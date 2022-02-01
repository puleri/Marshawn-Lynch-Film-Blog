import type { NextPage } from 'next'

import styles from '../styles/Home.module.css'
import Image from 'next/image'
import Tilt from 'react-vanilla-tilt';
import Link from 'next/link'

// images
import blm from '../img/BLM.png';
import sah from '../img/SAH.png';


const Intro: NextPage = () => {
  return (
    <div>
      <Tilt className={styles.tilt}>
      <main className={styles.main}>
        <p>One without an in-depth knowledge of Marshawn Lynch prior to watching <em>Marshawn Lynch: A History</em>,  could benefit as I did from having watched the film twice. With knowledge of what is to come, hearing Marshawn pressed by local media in high school could not be a more honest foreshadowing of what is to come.</p>
        <h1>
          &quot;You <em className={styles.movie}>think you gonna hide back there huh Lynch?</em>... I gotta ask Lynch a question. Pass the microphone back to Lynch.&quot;
        </h1>
        <p>Pressure to entertain the media may be well recieved by some, but in Lynch&apos;s case, he made clear what he wanted was peace and brevity. The media chose to go against his wishes for their entertainment and often at Lynch&apos;s expense.</p>

          <nav className={styles.navbar}>
            <div>
              <Image
                alt="Black Lives Matter"
                height={50}
                width={90}
                src={blm}/>
            </div>
            <div>
              <strong><Link href="/">Home </Link>  |  <Link href="/pt1"> Pt. II</Link> </strong>
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
export default Intro
