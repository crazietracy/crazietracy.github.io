import React from 'react'
import RashSelfIcon from '../assets/images/rashmi.svg'
import AboutBox from '../components/About/AboutBox'
import about from '../data/About'
import { UserWrapper, UserTitle, UserDescription, DownloadButton, UserTopic } from '../styles/indexStyle.js'
import Layout from '../components/layout'

const IndexPage = () => {
  return <Layout>
  <UserWrapper>
    <UserTitle>Huiwen Jiang</UserTitle>
    <UserDescription>
      <div>
        <p>
        Hello there, welcome to my portfolio. I am a
        software engineer, focusing on backend development and mobile application development.
        </p>
        <DownloadButton href="https://github.com/crazietracy/personal-website-react/raw/master/Huiwen_Jiang_Tracy_resume.pdf"  download title="Resume">Download Resume</DownloadButton>
      </div>
      <img src={RashSelfIcon} alt="rashmi self" />
    </UserDescription>
    <UserTopic>
      {
        about.map(item => (<AboutBox key={item.id} info={item} />))
      }
    </UserTopic>
  </UserWrapper>
  </Layout>
}

export default IndexPage
