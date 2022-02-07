import React from 'react'
import Styles from '~/styles/layouts/app.module.css'
import Tooltip from '~/components/Tooltip'

const App = () => {
  return (
    <div className={Styles.root}>
      <div className={Styles.inner}>
        <Tooltip>
          A tooltip is often used to specify extra information about something when the user moves the mouse pointer
          over an element.
        </Tooltip>
        <Tooltip>
          A tooltip is often used to specify extra information about something when the user moves the mouse pointer
          over an element.
        </Tooltip>
        <Tooltip>
          A tooltip is often used to specify extra information about something when the user moves the mouse pointer
          over an element.
        </Tooltip>
        <Tooltip>
          A tooltip is often used to specify extra information about something when the user moves the mouse pointer
          over an element.
        </Tooltip>
      </div>
    </div>
  )
}

export default App
