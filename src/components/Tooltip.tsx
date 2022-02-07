import React, { CSSProperties, useState } from 'react'
import HelpIcon from '~/components/icons/HelpIcon'
import Styles from '~/styles/components/tooltip.module.css'

const Tooltip: React.FC = ({ children }) => {
  const [visibleContents, setVisibleContents] = useState(false)
  const [contentsPosition, setContentsPosition] = useState<CSSProperties>({})

  return (
    <div className={Styles.root}>
      <div
        className={Styles.icon}
        onMouseEnter={(event) => {
          const { clientX } = event
          const boundaryX = window.innerWidth / 2
          setVisibleContents(true)
          setContentsPosition(clientX > boundaryX ? { right: '1.5rem' } : { left: '1.5rem' })
        }}
        onMouseLeave={() => {
          setVisibleContents(false)
        }}
      >
        <HelpIcon />
      </div>

      {visibleContents && (
        <div style={contentsPosition} className={Styles.contents}>
          {children}
        </div>
      )}
    </div>
  )
}

export default Tooltip
