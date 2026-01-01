import{j as a}from"./jsx-runtime-CkFRF0oa.js";import{r as d}from"./iframe-Ba2SlsMH.js";import{T as n}from"./TextInputPhone-Dx-FDfIz.js";import"./preload-helper-PPVm8Dsz.js";import"./utils-CDN07tui.js";import"./Icons-AXdbc_qY.js";import"./createLucideIcon-1W8JK1jP.js";import"./arrow-up-DmLog2SS.js";import"./label-CX_qOxkC.js";import"./index-U-TPQdkm.js";import"./index-BvN1LLaO.js";const P={title:"Components/Fields/TextInputPhone",tags:["components"],parameters:{layout:"centered"},component:n,args:{id:"phone-input",label:"Phone Number",placeholder:"20 123 456",required:!1,error:void 0,disabled:!1},argTypes:{onChange:{action:"changed"},onCountryChange:{action:"country-changed"}}},s=o=>{const[p,l]=d.useState("");return a.jsx(n,{...o,id:o?.id||"phone-input",value:p,onChange:t=>{l(t.target.value),o?.onChange?.(t)}})},e={render:o=>a.jsx(s,{...o})},r={args:{error:"Please enter a valid phone number."},render:o=>a.jsx(s,{...o})};e.parameters={...e.parameters,docs:{...e.parameters?.docs,source:{code:`const Default = () => <ControlledTemplate
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
}`,...r.parameters?.docs?.source}}};const E=["Default","WithError"];export{e as Default,r as WithError,E as __namedExportsOrder,P as default};
