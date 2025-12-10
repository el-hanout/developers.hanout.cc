import{j as d}from"./jsx-runtime-CChQA9tb.js";import{T as s}from"./TextInput-BL4hI7vJ.js";import"./iframe-D5OrQ5bS.js";import"./preload-helper-PPVm8Dsz.js";import"./utils-CDN07tui.js";import"./Icons-DyZL75T8.js";import"./arrow-up-CBUurEKt.js";import"./createLucideIcon-CP_7qT0j.js";const g={title:"Components/Fields/TextInput",tags:["autodocs","components"],parameters:{layout:"centered"},args:{id:"input-id",label:"Label",error:void 0,icon:void 0,required:!1,placeholder:"Placeholder"},component:s},e={args:{id:"input-id",label:"Input Label",error:void 0,icon:void 0,required:!1,placeholder:"Placeholder"},render:o=>d.jsx(s,{...o})},r={args:{id:"input-id",label:"Password",error:void 0,icon:"eye",type:"password",placeholder:"••••••"},render:o=>d.jsx(s,{...o})},a={args:{id:"input-id",label:"Input Label",error:void 0,icon:"email",required:!1,placeholder:"Placeholder"},render:o=>d.jsx(s,{...o})},n={args:{id:"input-id",label:"Input Label",error:"Error Message",icon:void 0,required:!1,placeholder:"Placeholder"},render:o=>d.jsx(s,{...o})};e.parameters={...e.parameters,docs:{...e.parameters?.docs,source:{code:`const Primary = () => <TextInput
    id="input-id"
    label="Input Label"
    error={undefined}
    icon={undefined}
    required={false}
    placeholder="Placeholder" />;`,...e.parameters?.docs?.source}}};r.parameters={...r.parameters,docs:{...r.parameters?.docs,source:{code:`const Password = () => <TextInput
    id="input-id"
    label="Password"
    error={undefined}
    icon="eye"
    required={false}
    placeholder="••••••"
    type="password" />;`,...r.parameters?.docs?.source}}};a.parameters={...a.parameters,docs:{...a.parameters?.docs,source:{code:`const WithIcon = () => <TextInput
    id="input-id"
    label="Input Label"
    error={undefined}
    icon="email"
    required={false}
    placeholder="Placeholder" />;`,...a.parameters?.docs?.source}}};n.parameters={...n.parameters,docs:{...n.parameters?.docs,source:{code:`const WithError = () => <TextInput
    id="input-id"
    label="Input Label"
    error="Error Message"
    icon={undefined}
    required={false}
    placeholder="Placeholder" />;`,...n.parameters?.docs?.source}}};e.parameters={...e.parameters,docs:{...e.parameters?.docs,source:{originalSource:`{
  args: {
    id: 'input-id',
    label: 'Input Label',
    error: undefined,
    icon: undefined,
    required: false,
    placeholder: 'Placeholder'
  },
  render: args => <TextInput {...args} />
}`,...e.parameters?.docs?.source}}};r.parameters={...r.parameters,docs:{...r.parameters?.docs,source:{originalSource:`{
  args: {
    id: 'input-id',
    label: 'Password',
    error: undefined,
    icon: 'eye',
    type: 'password',
    placeholder: '••••••'
  },
  render: args => <TextInput {...args} />
}`,...r.parameters?.docs?.source}}};a.parameters={...a.parameters,docs:{...a.parameters?.docs,source:{originalSource:`{
  args: {
    id: 'input-id',
    label: 'Input Label',
    error: undefined,
    icon: 'email',
    required: false,
    placeholder: 'Placeholder'
  },
  render: args => <TextInput {...args} />
}`,...a.parameters?.docs?.source}}};n.parameters={...n.parameters,docs:{...n.parameters?.docs,source:{originalSource:`{
  args: {
    id: 'input-id',
    label: 'Input Label',
    error: 'Error Message',
    icon: undefined,
    required: false,
    placeholder: 'Placeholder'
  },
  render: args => <TextInput {...args} />
}`,...n.parameters?.docs?.source}}};const f=["Primary","Password","WithIcon","WithError"];export{r as Password,e as Primary,n as WithError,a as WithIcon,f as __namedExportsOrder,g as default};
