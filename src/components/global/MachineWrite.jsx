/* eslint-disable no-debugger */
/* eslint-disable no-use-before-define */
/* eslint-disable react/prop-types */
/* eslint-disable react/react-in-jsx-scope */

// typewrite-effect
import TypewriterComponent from 'typewriter-effect'

// styles of local
import '../../styles/components/global/MachineWrite.style.css'

const ManchineWrite = ({ menssage, base, timeWriter, timeDelete, lop, classBase = true, classWrite = true }) => {
  return (
    <div className='container-effect-write-machine'>
      <p className={classBase ? 'base-write-machine' : ''}>
        {base || ''}
      </p>
      <span className={classWrite ? 'write' : ''}>
          <TypewriterComponent
            onInit={(typewrite) => {
              typewrite.changeDelay(150).pasteString(menssage[menssage.length - 1]).start()
            }}
            options={
              {
                autoStart: true,
                loop: lop || false,
                cursor: '_',
                strings: menssage,
                delay: timeWriter || 130,
                deleteSpeed: timeDelete || 150
              }
            }
          />
        </span>
    </div>
  )
}

export default ManchineWrite
