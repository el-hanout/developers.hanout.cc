import{j as n}from"./jsx-runtime-CzAYnTDj.js";import{r as c}from"./iframe-Ct4NInGb.js";import{T as a}from"./TextInputOTP-Czl62YwD.js";import"./preload-helper-PPVm8Dsz.js";import"./utils-CDN07tui.js";import"./Icons-DAnAB02m.js";import"./createLucideIcon-BKnI13kg.js";import"./arrow-up-D2x7Onu9.js";const h={title:"Components/Fields/TextInputOTP",tags:["components"],parameters:{layout:"centered"},component:a,args:{id:"otp-input",label:"Verification Code",count:5,error:void 0,required:!0},argTypes:{onChange:{action:"changed"}}},s=e=>{const[i,p]=c.useState(e?.value||"");return n.jsx(a,{...e,id:e?.id||"otp-input",count:e?.count||5,value:i,onChange:t=>{p(t),e?.onChange?.(t)}})},r={args:{id:"otp-input",count:5,value:"",onChange:()=>{}},render:e=>n.jsx(s,{...e})},o={args:{id:"otp-input",count:6,value:"",onChange:()=>{},error:"Invalid verification code, please try again."},render:e=>n.jsx(s,{...e})};r.parameters={...r.parameters,docs:{...r.parameters?.docs,source:{code:`const Default = () => <ControlledTemplate
    id="otp-input"
    label="Verification Code"
    count={5}
    error={undefined}
    required
    value=""
    onChange={() => { }} />;`,...r.parameters?.docs?.source}}};o.parameters={...o.parameters,docs:{...o.parameters?.docs,source:{code:`const WithError = () => <ControlledTemplate
    id="otp-input"
    label="Verification Code"
    count={6}
    error="Invalid verification code, please try again."
    required
    value=""
    onChange={() => { }} />;`,...o.parameters?.docs?.source}}};r.parameters={...r.parameters,docs:{...r.parameters?.docs,source:{originalSource:`{
  args: {
    id: 'otp-input',
    count: 5,
    value: '',
    onChange: () => {}
  },
  render: args => <ControlledTemplate {...args} />
}`,...r.parameters?.docs?.source}}};o.parameters={...o.parameters,docs:{...o.parameters?.docs,source:{originalSource:`{
  args: {
    id: 'otp-input',
    count: 6,
    value: '',
    onChange: () => {},
    error: 'Invalid verification code, please try again.'
  },
  render: args => <ControlledTemplate {...args} />
}`,...o.parameters?.docs?.source}}};const T=["Default","WithError"];export{r as Default,o as WithError,T as __namedExportsOrder,h as default};
