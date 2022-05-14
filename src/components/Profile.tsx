import { useContext } from 'react'
import { ChallengesContext } from '../contexts/ChallengesContext'
import styles from '../styles/components/Profile.module.css'

export function Profile() {
    const { level } = useContext(ChallengesContext)

    return (
        <div className={styles.profileContainer}>
            <img src="https://scontent.fmii3-1.fna.fbcdn.net/v/t1.0-9/36598405_1801938016557716_7293724409938837504_o.jpg?_nc_cat=103&ccb=3&_nc_sid=09cbfe&_nc_ohc=qO-H0J73lGcAX_5ZmeQ&_nc_ht=scontent.fmii3-1.fna&oh=b661c8017d0846ef4ad02401ba133bae&oe=60591B4D" alt="Rafael Zoucas" />
            <div>
                <strong>Rafael Zoucas</strong>
                <p>
                    <img src="icons/level.svg" alt="Level" />
                    Level {level}
                </p>
            </div>
        </div>
    )
}