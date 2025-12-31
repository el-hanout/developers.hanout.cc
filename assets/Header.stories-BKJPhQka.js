import{H as a}from"./Header-XA8zn1o8.js";import"./jsx-runtime-DqY7mUZh.js";import"./iframe-Ce6jbqxU.js";import"./preload-helper-PPVm8Dsz.js";import"./Button-B1vAbavR.js";import"./createLucideIcon-WbWtkNdC.js";import"./arrow-up-DbyF4mAD.js";const{fn:r}=__STORYBOOK_MODULE_TEST__,u={title:"Example/Header",component:a,tags:["autodocs"],parameters:{layout:"fullscreen"},args:{onLogin:r(),onLogout:r(),onCreateAccount:r()}},e={args:{user:{name:"Jane Doe"}}},o={};e.parameters={...e.parameters,docs:{...e.parameters?.docs,source:{code:`const LoggedIn = () => <Header
    onLogin={fn()}
    onLogout={fn()}
    onCreateAccount={fn()}
    user={{
      name: 'Jane Doe',
    }}></Header>;`,...e.parameters?.docs?.source}}};o.parameters={...o.parameters,docs:{...o.parameters?.docs,source:{code:"const LoggedOut = () => <Header onLogin={fn()} onLogout={fn()} onCreateAccount={fn()}></Header>;",...o.parameters?.docs?.source}}};e.parameters={...e.parameters,docs:{...e.parameters?.docs,source:{originalSource:`{
  args: {
    user: {
      name: 'Jane Doe'
    }
  }
}`,...e.parameters?.docs?.source}}};o.parameters={...o.parameters,docs:{...o.parameters?.docs,source:{originalSource:"{}",...o.parameters?.docs?.source}}};const g=["LoggedIn","LoggedOut"];export{e as LoggedIn,o as LoggedOut,g as __namedExportsOrder,u as default};
