import React from 'react'
import Movies from './Movies'
import TopImage from './TopImage'

export default function Home(props) {
  return (
    <div>
      <TopImage />
      <Movies link={props.link} name={props.name} watchFunction={props.watchFunction} descFunction={props.descFunction} progressFunction={props.progressFunction} />
    </div>
  )
}
