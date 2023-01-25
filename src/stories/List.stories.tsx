import { ComponentMeta, ComponentStory } from '@storybook/react'
import React from 'react'

// import { List } from 'src/components/List.js'
import { List } from '../components/List/List'
// import { List } from './List'

// More on default export: https://storybook.js.org/docs/react/writing-stories/introduction#default-export
export default {
  title: 'List',
  component: List,
  // More on argTypes: https://storybook.js.org/docs/react/api/argtypes
  argTypes: {
    backgroundColor: { control: 'color' },
  },
} as ComponentMeta<typeof List>

// More on component templates: https://storybook.js.org/docs/react/writing-stories/introduction#using-args
const Template: ComponentStory<typeof List> = (args) => <List {...args} /> //{...args}

export const Default = Template.bind({})
// // More on args: https://storybook.js.org/docs/react/writing-stories/args

const data = [
  'qdwq dopwjq iodjwdjwidjw',
  'oerioptui uitri tiert irt',
  'dbbvdbnbedel jioehue riwje',
  'ooiuytwtfvhjn kdhsdjad ak od ',
  'wrtf sjck oscis csab sahix',
]

Default.args = {
  title: 'Title',
  data: data,
}

// export const Secondary = Template.bind({})
// Secondary.args = {
//   label: 'Button',
// }

// export const Large = Template.bind({})
// Large.args = {
//   size: 'large',
//   label: 'Button',
// }

// export const Small = Template.bind({})
// Small.args = {
//   size: 'small',
//   label: 'Button',
// }
