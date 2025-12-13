import{j as a}from"./jsx-runtime-ClaT_e-X.js";import{r as d}from"./iframe-CQBO3shF.js";import{T as t}from"./TextInputPhone-qley2gq6.js";import"./preload-helper-PPVm8Dsz.js";import"./utils-CDN07tui.js";import"./Icons-D_NeAHVI.js";import"./createLucideIcon-B84Z7sVE.js";import"./arrow-up-DWarNPS7.js";const C={title:"Components/Fields/TextInputPhone",tags:["components"],parameters:{layout:"centered"},component:t,args:{id:"phone-input",label:"Phone Number",placeholder:"20 123 456",required:!1,error:void 0,disabled:!1},argTypes:{onChange:{action:"changed"},onCountryChange:{action:"country-changed"}}},s=o=>{const[l,p]=d.useState("");return a.jsx(t,{...o,id:o?.id||"phone-input",value:l,onChange:n=>{p(n.target.value),o?.onChange?.(n)}})},e={render:o=>a.jsx(s,{...o})},r={args:{error:"Please enter a valid phone number."},render:o=>a.jsx(s,{...o})};e.parameters={...e.parameters,docs:{...e.parameters?.docs,source:{code:`const Default = () => <ControlledTemplate
    id="phone-input"
    label="Phone Number"
    placeholder="20 123 456"
    required={false}
    error={undefined}
    disabled={false} />;`,...e.parameters?.docs?.source}}};r.parameters={...r.parameters,docs:{...r.parameters?.docs,source:{code:`const WithError = () => <ControlledTemplate
    id="phone-input"
    label="Phone Number"
    placeholder="20 123 456"
    required={false}
    error="Please enter a valid phone number."
    disabled={false} />;`,...r.parameters?.docs?.source}}};e.parameters={...e.parameters,docs:{...e.parameters?.docs,source:{originalSource:`{
  render: args => <ControlledTemplate {...args} />
}`,...e.parameters?.docs?.source}}};r.parameters={...r.parameters,docs:{...r.parameters?.docs,source:{originalSource:`{
  args: {
    error: 'Please enter a valid phone number.'
  },
  render: args => <ControlledTemplate {...args} />
}`,...r.parameters?.docs?.source}}};const x=["Default","WithError"];export{e as Default,r as WithError,x as __namedExportsOrder,C as default};
