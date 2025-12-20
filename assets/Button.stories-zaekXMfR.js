import{B as t}from"./Button-C3UA1BRf.js";import"./jsx-runtime-C7JLgHXN.js";import"./iframe-Cj8hrqrB.js";import"./preload-helper-PPVm8Dsz.js";import"./createLucideIcon-DVHixRSd.js";import"./arrow-up-6MZNaLMn.js";const{fn:n}=__STORYBOOK_MODULE_TEST__,i={title:"Example/Button",component:t,parameters:{layout:"centered"},tags:["autodocs"],argTypes:{backgroundColor:{control:"color"}},args:{onClick:n()}},r={args:{primary:!0,label:"Button"}},e={args:{label:"Button"}},a={args:{size:"large",label:"Button"}},o={args:{size:"small",label:"Button"}},s={args:{primary:!1,label:"Button"}};r.parameters={...r.parameters,docs:{...r.parameters?.docs,source:{code:'const Primary = () => <Button onClick={fn()} primary label="Button"></Button>;',...r.parameters?.docs?.source}}};e.parameters={...e.parameters,docs:{...e.parameters?.docs,source:{code:'const Secondary = () => <Button onClick={fn()} label="Button"></Button>;',...e.parameters?.docs?.source}}};a.parameters={...a.parameters,docs:{...a.parameters?.docs,source:{code:'const Large = () => <Button onClick={fn()} size="large" label="Button"></Button>;',...a.parameters?.docs?.source}}};o.parameters={...o.parameters,docs:{...o.parameters?.docs,source:{code:'const Small = () => <Button onClick={fn()} size="small" label="Button"></Button>;',...o.parameters?.docs?.source}}};s.parameters={...s.parameters,docs:{...s.parameters?.docs,source:{code:'const Field = () => <Button onClick={fn()} primary={false} label="Button"></Button>;',...s.parameters?.docs?.source}}};r.parameters={...r.parameters,docs:{...r.parameters?.docs,source:{originalSource:`{
  args: {
    primary: true,
    label: 'Button'
  }
}`,...r.parameters?.docs?.source}}};e.parameters={...e.parameters,docs:{...e.parameters?.docs,source:{originalSource:`{
  args: {
    label: 'Button'
  }
}`,...e.parameters?.docs?.source}}};a.parameters={...a.parameters,docs:{...a.parameters?.docs,source:{originalSource:`{
  args: {
    size: 'large',
    label: 'Button'
  }
}`,...a.parameters?.docs?.source}}};o.parameters={...o.parameters,docs:{...o.parameters?.docs,source:{originalSource:`{
  args: {
    size: 'small',
    label: 'Button'
  }
}`,...o.parameters?.docs?.source}}};s.parameters={...s.parameters,docs:{...s.parameters?.docs,source:{originalSource:`{
  args: {
    primary: false,
    label: "Button"
  }
}`,...s.parameters?.docs?.source}}};const B=["Primary","Secondary","Large","Small","Field"];export{s as Field,a as Large,r as Primary,e as Secondary,o as Small,B as __namedExportsOrder,i as default};
