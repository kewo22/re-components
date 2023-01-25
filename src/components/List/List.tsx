import './List.scss'

import React, { useEffect, useState } from 'react'
import { ListItem } from 'src/types/list/list.type'

import EditIcon from '../../stories/assets/edit.svg'
// import MenuCircleVertical from '../../stories/assets/menu-circle-vertical.svg'
import PlusIcon from '../../stories/assets/plus.svg'
import TrashIcon from '../../stories/assets/trash.svg'
import AddEditItem from './AddEditItem'

export type ListProps = {
  title: string
  data: string[]
  addable?: boolean
  editable?: boolean
  removable?: boolean
  onDiscard?: () => void
  onSave?: (value: string) => void
}

export const List = (props: ListProps) => {
  const { title, data, addable = true, editable = false, removable = false } = props
  const { onSave, onDiscard } = props

  const [isAddVisible, setIsAddVisible] = useState(false)
  const [isEditdVisible, setIsEditdVisible] = useState(false)
  const [mouseOverItem, setMouseOverItem] = useState<ListItem | null>(null)
  const [items, setItems] = useState<ListItem[]>([])

  const isOptionsAvailable = editable || removable

  useEffect(() => {
    const listItems: ListItem[] = []
    data.forEach((item, i) => {
      const listItem: ListItem = {
        text: item,
        id: i,
      }
      listItems.push(listItem)
    })
    setItems(listItems)
  }, [data])

  const onAddClick = () => {
    setIsAddVisible(true)
  }

  const onDiscardClick = () => {
    if (onDiscard) onDiscard()
    if (isEditdVisible) {
      setIsEditdVisible(false)
    } else {
      setIsAddVisible(false)
    }
  }

  const onSaveClick = (e: string) => {
    if (onSave) onSave(e)
    if (isEditdVisible) {
      setIsEditdVisible(false)
    } else {
      setIsAddVisible(false)
    }
  }

  const onMouseOver = (e: React.MouseEvent<HTMLDivElement>, item: ListItem) => {
    if (isEditdVisible) {
      e.preventDefault()
      return
    }
    setMouseOverItem(item)
  }

  const onMouseLeave = () => {
    if (isEditdVisible) {
      return
    }
    setMouseOverItem(null)
  }

  const onEditClick = () => {
    setIsEditdVisible(true)
  }

  return (
    <>
      <div className="wrapper">
        <div className="header">
          <div>{title}</div>
          {addable && (
            <button onClick={onAddClick}>
              <img className="plus-icon" src={PlusIcon} />
            </button>
          )}
        </div>
        <div className="body">
          {isAddVisible && <AddEditItem onDiscard={onDiscardClick} onSave={onSaveClick} />}

          {items.map((item) => {
            return (
              <div
                key={item.id}
                className="item of-el"
                onMouseEnter={(e) => {
                  onMouseOver(e, item)
                }}
                onMouseLeave={onMouseLeave}
              >
                {item.text}

                <>
                  {mouseOverItem?.id === item.id && isEditdVisible && (
                    <div className="edit-wrapper">
                      <AddEditItem
                        onDiscard={onDiscardClick}
                        onSave={onSaveClick}
                        value={mouseOverItem?.text}
                      />
                    </div>
                  )}
                </>

                {mouseOverItem?.id === item.id && !isEditdVisible && isOptionsAvailable && (
                  <span className="options">
                    {editable && (
                      <button className="edit" onClick={onEditClick}>
                        <img src={EditIcon} />
                      </button>
                    )}
                    {removable && (
                      <button className="delete">
                        <img src={TrashIcon} />
                      </button>
                    )}
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
