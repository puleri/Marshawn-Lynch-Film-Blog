import type { NextPage } from 'next'

import styles from '../styles/Home.module.css'
import Image from 'next/image'
import Tilt from 'react-vanilla-tilt';
import Link from 'next/link'

// images
import exploit from '../img/exploit.png';
import blm from '../img/BLM.png';
import sah from '../img/SAH.png';


const Conclusion: NextPage = () => {
  return (
    <div>
      <Tilt className={styles.tilt}>
      <main className={styles.main}>
      <div className={styles.shooter}>
      </div>
      <h1>
      &quot;Any white man in the world says 'give me liberty or give me death' [and] the entire white world applauds, but a black man says exactly the same thing, word for word, <em className={styles.movie}>he is judged a criminal and treated like one</em>.&quot;
      </h1>
        <p>While the judgement and media harassment of Marshawn Lynch did not cease, we see at the end of the documentary more and more atheletes beginning to adapt a higher sense of self preservation when poked and prodded by the media. Marshawn through his actions has inspired others to create a world where black players will rise above the media.</p>

          <nav className={styles.navbar}>
            <div>
              <Image
                alt="Black Lives Matter"
                height={50}
                width={90}
                src={blm}/>
            </div>
            <div>
              <strong><Link href="/pt2">Pt. III </Link> | <Link href="/"> Home</Link> </strong>
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
export default Conclusion
