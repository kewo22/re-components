import {  useEffect, useState } from 'react'

import FloppyDiskIcon from '../../stories/assets/floppy-disk.svg'
import Undo from '../../stories/assets/undo.svg'

type AddEditItemProps = {
  value?: string
  onDiscard: (value: string) => void
  onSave: (value: string) => void
}

const AddEditItem = (props: AddEditItemProps) => {
  const { value } = props
  const { onSave, onDiscard } = props

  const [inputVal, setInputVal] = useState('')

  useEffect(() => {
    value ? setInputVal(value) : ''
  }, [value])

  const onDiscardClick = () => {
    setInputVal('')
    onDiscard('')
  }

  const onSaveClick = () => {
    setInputVal('')
    onSave(inputVal)
  }

  const onInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setInputVal(e.target.value)
  }

  return (
    <>
      <div className="add-item">
        <input value={inputVal} autoFocus={true} onChange={onInputChange} />
        <div>
          <button className="discard-btn" onClick={onDiscardClick}>
            <img src={Undo} />
          </button>
          <button onClick={onSaveClick}>
            <img src={FloppyDiskIcon} />
          </button>
        </div>
      </div>
    </>
  )
}

export default AddEditItem
