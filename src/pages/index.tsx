import Head from 'next/head'
import {GetServerSideProps} from 'next'

import React from 'react'
import { Challenges } from '../components/Challenges'
import { CompletedChallenges } from '../components/CompletedChallenges'
import { Countdown } from '../components/Countdown'
import { ExperienceBar } from '../components/ExperienceBar'
import { Profile } from '../components/Profile'
import { CountdownProvider } from '../contexts/CountdownContext'

import styles from '../styles/pages/Home.module.css'
import { ChallengesProvider } from '../contexts/ChallengesContext'

interface HomeProps {
  level: number
  currentExperience: number
  challengesCompleted: number
}

export default function Home(props) {
  return (
    <ChallengesProvider 
      level={props.level}
      currentExperience={props.currentExperience}
      challengesCompleted={props.challengesCompleted}
    >
      <div className={styles.container}>
        <Head>
          <title>Início | Moveit</title>
        </Head>

        <ExperienceBar />

        <CountdownProvider>
          <section>
            <div>
              <Profile />
              <CompletedChallenges />
              <Countdown />
            </div>
            <div>
              <Challenges />
            </div>
          </section>
        </CountdownProvider>
      </div>
    </ChallengesProvider>
  )
}

export const getServerSideProps: GetServerSideProps = async (ctx) => {
  const user = {
    level: 1,
    currentExperience: 50,
    challengesCompleted: 2
  }

  const { level, currentExperience,challengesCompleted } = ctx.req.cookies

  return {
    props: {
      level: Number(level),
      currentExperience: Number(currentExperience),
      challengesCompleted: Number(challengesCompleted)
    }
  }
}