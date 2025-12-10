import{j as r}from"./jsx-runtime-CChQA9tb.js";import{r as s}from"./iframe-D5OrQ5bS.js";import{S as o}from"./Switch-DoiKgMKJ.js";import"./preload-helper-PPVm8Dsz.js";import"./utils-CDN07tui.js";const c={title:"Components/Buttons/Switch",tags:["autodocs","components"],parameters:{layout:"centered"},argTypes:{items:{control:"object"}},args:{items:[{label:"Option 1",value:"option1"},{label:"Option 2",value:"option2"}],value:"option1",onValueChange:()=>{}},component:o},e={args:{items:[{label:"Option 1",value:"option1"},{label:"Option 2",value:"option2"}],value:"option1",onValueChange:()=>{}},render:t=>{const[n,a]=s.useState("option1");return r.jsx(o,{...t,value:n,onValueChange:a})}};e.parameters={...e.parameters,docs:{...e.parameters?.docs,source:{code:`const Primary = () => {
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
}`,...e.parameters?.docs?.source}}};const v=["Primary"];export{e as Primary,v as __namedExportsOrder,c as default};
