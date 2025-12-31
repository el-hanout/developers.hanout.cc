import{j as o}from"./jsx-runtime-DqY7mUZh.js";import{T as d}from"./TextInput-B8e7RUT1.js";import"./iframe-Ce6jbqxU.js";import"./preload-helper-PPVm8Dsz.js";import"./utils-CDN07tui.js";import"./label-DTT525Ty.js";import"./index-Df6s00ac.js";import"./index-w0Sntf8T.js";import"./Button-DgPl4GFz.js";import"./button-DgmYDNQ_.js";import"./Icons-C0Qz2dLJ.js";import"./createLucideIcon-WbWtkNdC.js";import"./arrow-up-DbyF4mAD.js";const P={title:"Components/Fields/TextInput",tags:["autodocs","components"],parameters:{layout:"centered"},args:{id:"input-id",label:"Label",error:void 0,suffixIcon:void 0,prefixIcon:void 0,required:!1,placeholder:"Placeholder"},component:d},e={args:{id:"input-id",label:"Input Label",error:void 0,suffixIcon:void 0,prefixIcon:void 0,required:!1,placeholder:"Placeholder",disabled:!1},render:s=>o.jsx(d,{...s})},r={args:{id:"input-id",label:"Password",error:void 0,suffixIcon:"eye",prefixIcon:void 0,type:"password",placeholder:"••••••",disabled:!1},render:s=>o.jsx(d,{...s})},n={args:{id:"input-id",label:"Input Label",error:void 0,suffixIcon:"email",prefixIcon:void 0,required:!1,placeholder:"Placeholder",disabled:!1},render:s=>o.jsx(d,{...s})},a={args:{id:"input-id",label:"Input Label",error:"Error Message",suffixIcon:void 0,prefixIcon:void 0,required:!1,placeholder:"Placeholder",disabled:!1},render:s=>o.jsx(d,{...s})};e.parameters={...e.parameters,docs:{...e.parameters?.docs,source:{code:`const Primary = () => <TextInput
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
