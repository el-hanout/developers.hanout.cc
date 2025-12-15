import{j as o}from"./jsx-runtime-CgErpkYP.js";import{L as s}from"./Link-fDzOMTsn.js";import"./iframe-BM8yQpH8.js";import"./preload-helper-PPVm8Dsz.js";import"./use-merged-ref-DkJV8dSN.js";import"./utils-CDN07tui.js";import"./Icons-BUujMB1E.js";import"./createLucideIcon-COGvKqjn.js";import"./arrow-up-CR6NUjgX.js";const l={title:"Components/Buttons/Link",tags:["autodocs","components"],parameters:{layout:"centered"},args:{href:"/",children:"Link",target:"_blank",prefixIcon:void 0,suffixIcon:void 0},argTypes:{target:{control:"select",options:["_blank","_self","_parent","_top"]}},component:s},e={args:{href:"/",children:"Link",prefixIcon:void 0,suffixIcon:void 0,underline:!1},render:n=>o.jsx(s,{...n})},r={args:{href:"/",children:"Link",prefixIcon:"refresh",suffixIcon:void 0,underline:!1},render:n=>o.jsx(s,{...n})};e.parameters={...e.parameters,docs:{...e.parameters?.docs,source:{code:`const Primary = () => <Link
    href="/"
    target="_blank"
    prefixIcon={undefined}
    suffixIcon={undefined}
    underline={false}>Link</Link>;`,...e.parameters?.docs?.source}}};r.parameters={...r.parameters,docs:{...r.parameters?.docs,source:{code:`const WithIcon = () => <Link
    href="/"
    target="_blank"
    prefixIcon="refresh"
    suffixIcon={undefined}
    underline={false}>Link</Link>;`,...r.parameters?.docs?.source}}};e.parameters={...e.parameters,docs:{...e.parameters?.docs,source:{originalSource:`{
  args: {
    href: '/',
    children: 'Link',
    prefixIcon: undefined,
    suffixIcon: undefined,
    underline: false
  },
  render: args => <Link {...args} />
}`,...e.parameters?.docs?.source}}};r.parameters={...r.parameters,docs:{...r.parameters?.docs,source:{originalSource:`{
  args: {
    href: '/',
    children: 'Link',
    prefixIcon: 'refresh',
    suffixIcon: undefined,
    underline: false
  },
  render: args => <Link {...args} />
}`,...r.parameters?.docs?.source}}};const x=["Primary","WithIcon"];export{e as Primary,r as WithIcon,x as __namedExportsOrder,l as default};
