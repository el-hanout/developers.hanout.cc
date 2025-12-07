import{j as r}from"./jsx-runtime-NB1XKu45.js";import{r as s}from"./iframe-BmJKktP_.js";import{S as a}from"./Switch-DOHUC1wh.js";import"./preload-helper-PPVm8Dsz.js";import"./utils-CDN07tui.js";const m={title:"Layout/Switch",tags:["autodocs","components"],parameters:{layout:"centered"},argTypes:{items:{control:"object"}},args:{items:[{label:"Option 1",value:"option1"},{label:"Option 2",value:"option2"}],value:"option1",onValueChange:()=>{}},component:a},e={args:{items:[{label:"Option 1",value:"option1"},{label:"Option 2",value:"option2"}],value:"option1",onValueChange:()=>{}},render:o=>{const[t,n]=s.useState("option1");return r.jsx(a,{...o,value:t,onValueChange:n})}};e.parameters={...e.parameters,docs:{...e.parameters?.docs,source:{code:`const Primary = () => {
    const [value, setValue] = useState('option1');

    return (
        <Switch
            items={[
              { label: 'Option 1', value: 'option1' },
              { label: 'Option 2', value: 'option2' },
            ]}
            value={value}
            onValueChange={setValue} />
    );
};`,...e.parameters?.docs?.source}}};e.parameters={...e.parameters,docs:{...e.parameters?.docs,source:{originalSource:`{
  args: {
    items: [{
      label: 'Option 1',
      value: 'option1'
    }, {
      label: 'Option 2',
      value: 'option2'
    }],
    value: 'option1',
    onValueChange: () => {}
  },
  render: args => {
    const [value, setValue] = useState('option1');
    return <Switch {...args} value={value} onValueChange={setValue} />;
  }
}`,...e.parameters?.docs?.source}}};const v=["Primary"];export{e as Primary,v as __namedExportsOrder,m as default};
