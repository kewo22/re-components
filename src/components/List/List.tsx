import './List.scss'

import { useState } from 'react'
import { ListItem } from 'src/types/list/list.type'

import EditIcon from '../../stories/assets/edit.svg'
// import MenuCircleVertical from '../../stories/assets/menu-circle-vertical.svg'
import PlusIcon from '../../stories/assets/plus.svg'
import TrashIcon from '../../stories/assets/trash.svg'

export type ListProps = {
  title: string
  onSave?: (value: any) => void
}

export const List = (props: ListProps) => {
  const { title } = props
  const { onSave } = props

  const [isAddVisible, setIsAddVisible] = useState(true)
  const [inputVal, setInputVal] = useState('')
  const [mouseOverItem, setMouseOverItem] = useState<ListItem | null>(null)

  const items: ListItem[] = [
    {
      id: 0,
      text: 'q wdwqdwqdh uwqhduwq hduwq hduw hqduiw hdwhdjncjnjnu hcuwjh duwh dwuqdh wuq dhqwud hwqu dhuwhdwuqdh wuqd hwuqd hwuqdh wqud hwqudhwuq dhuwq dhuwq dhuqw dhuwq dhuwqhd',
    },
    {
      id: 1,
      text: 'q wdwqdwqdh uwqhduwq hduwq hduw hqduiw hdwhdjncjnjnu hcuwjh duwh dwuqdh wuq dhqwud hwqu dhuwhdwuqdh wuqd hwuqd hwuqdh wqud hwqudhwuq dhuwq dhuwq dhuqw dhuwq dhuwqhd',
    },
    {
      id: 2,
      text: 'q wdwqdwqdh uwqhduwq hduwq hduw hqduiw hdwhdjncjnjnu hcuwjh duwh dwuqdh wuq dhqwud hwqu dhuwhdwuqdh wuqd hwuqd hwuqdh wqud hwqudhwuq dhuwq dhuwq dhuqw dhuwq dhuwqhd',
    },
    {
      id: 3,
      text: 'q wdwqdwqdh uwqhduwq hduwq hduw hqduiw hdwhdjncjnjnu hcuwjh duwh dwuqdh wuq dhqwud hwqu dhuwhdwuqdh wuqd hwuqd hwuqdh wqud hwqudhwuq dhuwq dhuwq dhuqw dhuwq dhuwqhd',
    },
    {
      id: 4,
      text: 'q wdwqdwqdh uwqhduwq hduwq hduw hqduiw hdwhdjncjnjnu hcuwjh duwh dwuqdh wuq dhqwud hwqu dhuwhdwuqdh wuqd hwuqd hwuqdh wqud hwqudhwuq dhuwq dhuwq dhuqw dhuwq dhuwqhd',
    },
    {
      id: 5,
      text: 'q wdwqdwqdh uwqhduwq hduwq hduw hqduiw hdwhdjncjnjnu hcuwjh duwh dwuqdh wuq dhqwud hwqu dhuwhdwuqdh wuqd hwuqd hwuqdh wqud hwqudhwuq dhuwq dhuwq dhuqw dhuwq dhuwqhd',
    },
  ]

  const onAddClick = () => {
    setIsAddVisible(true)
  }

  const onDiscardClick = () => {
    setInputVal('')
    setIsAddVisible(false)
  }

  const onSaveClick = () => {
    if (onSave) onSave(inputVal)
    setInputVal('')
    setIsAddVisible(false)
  }

  const onInputChange = (e: any) => {
    setInputVal(e.target.value)
  }

  const onMouseOver = (item: ListItem) => {
    setMouseOverItem(item)
  }

  const onMouseLeave = () => {
    setMouseOverItem(null)
  }

  return (
    <>
      <div className="wrapper">
        <div className="header">
          <div>{title}</div>
          <button onClick={onAddClick}>
            <img className="plus-icon" src={PlusIcon} />
          </button>
        </div>
        <div className="body">
          {isAddVisible && (
            <div className="add-item">
              <input value={inputVal} autoFocus={true} onChange={onInputChange} />
              <div>
                <button className="discard-btn" onClick={onDiscardClick}>
                  Discard
                </button>
                <button onClick={onSaveClick}>Save</button>
              </div>
            </div>
          )}

          {items.map((item) => {
            return (
              <div
                key={item.id}
                className="item of-el"
                onMouseEnter={() => {
                  onMouseOver(item)
                }}
                onMouseLeave={onMouseLeave}
              >
                {item.text}
                {mouseOverItem?.id === item.id && (
                  <span className="options">
                    <button className="edit">
                      <img src={EditIcon} />
                    </button>
                    <button className="delete">
                      <img src={TrashIcon} />
                    </button>
                    {/* <button className="more-options">
                      <img src={MenuCircleVertical} />
                    </button> */}
                  </span>
                )}
              </div>
            )
          })}
        </div>
      </div>
    </>
  )
}
