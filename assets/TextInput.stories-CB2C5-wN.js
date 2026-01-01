import{j as o}from"./jsx-runtime-CkFRF0oa.js";import{T as d}from"./TextInput-DMJ6rMS3.js";import"./iframe-Ba2SlsMH.js";import"./preload-helper-PPVm8Dsz.js";import"./utils-CDN07tui.js";import"./label-CX_qOxkC.js";import"./index-U-TPQdkm.js";import"./index-BvN1LLaO.js";import"./Button-BXVdGfXE.js";import"./button-B79okVYK.js";import"./Icons-AXdbc_qY.js";import"./createLucideIcon-1W8JK1jP.js";import"./arrow-up-DmLog2SS.js";const P={title:"Components/Fields/TextInput",tags:["autodocs","components"],parameters:{layout:"centered"},args:{id:"input-id",label:"Label",error:void 0,suffixIcon:void 0,prefixIcon:void 0,required:!1,placeholder:"Placeholder"},component:d},e={args:{id:"input-id",label:"Input Label",error:void 0,suffixIcon:void 0,prefixIcon:void 0,required:!1,placeholder:"Placeholder",disabled:!1},render:s=>o.jsx(d,{...s})},r={args:{id:"input-id",label:"Password",error:void 0,suffixIcon:"eye",prefixIcon:void 0,type:"password",placeholder:"••••••",disabled:!1},render:s=>o.jsx(d,{...s})},n={args:{id:"input-id",label:"Input Label",error:void 0,suffixIcon:"email",prefixIcon:void 0,required:!1,placeholder:"Placeholder",disabled:!1},render:s=>o.jsx(d,{...s})},a={args:{id:"input-id",label:"Input Label",error:"Error Message",suffixIcon:void 0,prefixIcon:void 0,required:!1,placeholder:"Placeholder",disabled:!1},render:s=>o.jsx(d,{...s})};e.parameters={...e.parameters,docs:{...e.parameters?.docs,source:{code:`const Primary = () => <TextInput
    id="input-id"
    label="Input Label"
    error={undefined}
    suffixIcon={undefined}
    prefixIcon={undefined}
    required={false}
    placeholder="Placeholder"
    disabled={false} />;`,...e.parameters?.docs?.source}}};r.parameters={...r.parameters,docs:{...r.parameters?.docs,source:{code:`const Password = () => <TextInput
    id="input-id"
    label="Password"
    error={undefined}
    suffixIcon="eye"
    prefixIcon={undefined}
    required={false}
    placeholder="••••••"
    type="password"
    disabled={false} />;`,...r.parameters?.docs?.source}}};n.parameters={...n.parameters,docs:{...n.parameters?.docs,source:{code:`const WithIcon = () => <TextInput
    id="input-id"
    label="Input Label"
    error={undefined}
    suffixIcon="email"
    prefixIcon={undefined}
    required={false}
    placeholder="Placeholder"
    disabled={false} />;`,...n.parameters?.docs?.source}}};a.parameters={...a.parameters,docs:{...a.parameters?.docs,source:{code:`const WithError = () => <TextInput
    id="input-id"
    label="Input Label"
    error="Error Message"
    suffixIcon={undefined}
    prefixIcon={undefined}
    required={false}
    placeholder="Placeholder"
    disabled={false} />;`,...a.parameters?.docs?.source}}};e.parameters={...e.parameters,docs:{...e.parameters?.docs,source:{originalSource:`{
  args: {
    id: 'input-id',
    label: 'Input Label',
    error: undefined,
    suffixIcon: undefined,
    prefixIcon: undefined,
    required: false,
    placeholder: 'Placeholder',
    disabled: false
  },
  render: args => <TextInput {...args} />
}`,...e.parameters?.docs?.source}}};r.parameters={...r.parameters,docs:{...r.parameters?.docs,source:{originalSource:`{
  args: {
    id: 'input-id',
    label: 'Password',
    error: undefined,
    suffixIcon: 'eye',
    prefixIcon: undefined,
    type: 'password',
    placeholder: '••••••',
    disabled: false
  },
  render: args => <TextInput {...args} />
}`,...r.parameters?.docs?.source}}};n.parameters={...n.parameters,docs:{...n.parameters?.docs,source:{originalSource:`{
  args: {
    id: 'input-id',
    label: 'Input Label',
    error: undefined,
    suffixIcon: 'email',
    prefixIcon: undefined,
    required: false,
    placeholder: 'Placeholder',
    disabled: false
  },
  render: args => <TextInput {...args} />
}`,...n.parameters?.docs?.source}}};a.parameters={...a.parameters,docs:{...a.parameters?.docs,source:{originalSource:`{
  args: {
    id: 'input-id',
    label: 'Input Label',
    error: 'Error Message',
    suffixIcon: undefined,
    prefixIcon: undefined,
    required: false,
    placeholder: 'Placeholder',
    disabled: false
  },
  render: args => <TextInput {...args} />
}`,...a.parameters?.docs?.source}}};const v=["Primary","Password","WithIcon","WithError"];export{r as Password,e as Primary,a as WithError,n as WithIcon,v as __namedExportsOrder,P as default};
