import{j as n}from"./jsx-runtime-BGHlHzo0.js";import{B as i}from"./Button-WoCQZ1h7.js";import"./iframe-DEci3Ye8.js";import"./preload-helper-PPVm8Dsz.js";import"./button-B7CplFX-.js";import"./utils-CDN07tui.js";import"./Icons-BJFouonI.js";import"./createLucideIcon-CcHW9wpt.js";import"./arrow-up-d1sOlVjY.js";const I={title:"Components/Buttons/Button",component:i,parameters:{layout:"centered",design:{type:"figma",url:"https://www.figma.com/design/mxkDna0F8tpjis5iY0iI87/Ui-Hanout.cc?node-id=178-6962&t=dbXgTqjD5LKQx2D7-4"},docs:{description:{component:`Button component implementing the Hanout.cc design system.

## Figma Design
Based on the Figma design specifications with 5 variants, 4 sizes, and 4 states.

## Variants
- **Primary**: Main action button with brand navy color
- **Secondary**: Secondary action button with brand gold color
- **Ghost**: Minimal style for tertiary actions
- **Error**: Destructive actions (delete, remove, etc.)
- **Outline**: Secondary actions with border

## Sizes
- **Mini** (h-7): Extra small button
- **Small** (h-8): Small button
- **Medium** (h-9): Default size
- **Large** (h-10): Large button

## States
- **Default**: Normal resting state
- **Hover & Active**: Interactive feedback
- **Focus**: Keyboard navigation state with ring
- **Disabled**: Non-interactive state

## Icons
Supports Lucide icons on the left, right, or both sides of text.`}}},args:{children:"Button Text",variant:"default",size:"default",prefixIcon:void 0,suffixIcon:void 0,disabled:!1},argTypes:{variant:{control:"select"},size:{control:"select"}},tags:["autodocs"]},s={args:{children:"Button Text",variant:"default",size:"default",disabled:!1},render:e=>n.jsx(i,{...e})},a={render:e=>n.jsxs("div",{className:"flex flex-row gap-2 flex-wrap",children:[n.jsx(i,{size:e.size,prefixIcon:e.prefixIcon,suffixIcon:e.suffixIcon,disabled:e.disabled,variant:"default",children:"Default"}),n.jsx(i,{size:e.size,prefixIcon:e.prefixIcon,suffixIcon:e.suffixIcon,disabled:e.disabled,variant:"secondary",children:"Secondary"}),n.jsx(i,{size:e.size,prefixIcon:e.prefixIcon,suffixIcon:e.suffixIcon,disabled:e.disabled,variant:"ghost",children:"Ghost"}),n.jsx(i,{size:e.size,prefixIcon:e.prefixIcon,suffixIcon:e.suffixIcon,disabled:e.disabled,variant:"outline",children:"Outline"}),n.jsx(i,{size:e.size,prefixIcon:e.prefixIcon,suffixIcon:e.suffixIcon,disabled:e.disabled,variant:"destructive",children:"Destructive"}),n.jsx(i,{size:e.size,prefixIcon:e.prefixIcon,suffixIcon:e.suffixIcon,disabled:e.disabled,variant:"link",children:"Link"})]})},t={args:{size:"default",prefixIcon:void 0,suffixIcon:void 0,disabled:!1},argTypes:{size:{table:{disable:!0}},children:{table:{disable:!0}}},render:e=>n.jsxs("div",{className:"flex flex-col gap-4",children:[n.jsxs("div",{className:"flex flex-row gap-2",children:[n.jsx(i,{variant:e.variant,prefixIcon:e.prefixIcon,suffixIcon:e.suffixIcon,disabled:e.disabled,size:"sm",children:"Small"}),n.jsx(i,{variant:e.variant,prefixIcon:e.prefixIcon,suffixIcon:e.suffixIcon,disabled:e.disabled,size:"default",children:"Default"}),n.jsx(i,{variant:e.variant,prefixIcon:e.prefixIcon,suffixIcon:e.suffixIcon,disabled:e.disabled,size:"lg",children:"Large"})]}),n.jsxs("div",{className:"flex flex-row gap-2",children:[n.jsx(i,{variant:e.variant,disabled:e.disabled,size:"icon-sm",suffixIcon:"user"}),n.jsx(i,{variant:e.variant,disabled:e.disabled,size:"icon",suffixIcon:"store"}),n.jsx(i,{variant:e.variant,disabled:e.disabled,size:"icon-lg",suffixIcon:"menu"})]})]})};s.parameters={...s.parameters,docs:{...s.parameters?.docs,source:{code:`const Primary = () => <Button
    variant="default"
    size="default"
    prefixIcon={undefined}
    suffixIcon={undefined}
    disabled={false}>Button Text</Button>;`,...s.parameters?.docs?.source}}};a.parameters={...a.parameters,docs:{...a.parameters?.docs,source:{code:`const ButtonGroups = () => <div className="flex flex-row gap-2 flex-wrap">
    <Button
        size="default"
        prefixIcon={undefined}
        suffixIcon={undefined}
        disabled={false}
        variant="default">Default</Button>
    <Button
        size="default"
        prefixIcon={undefined}
        suffixIcon={undefined}
        disabled={false}
        variant="secondary">Secondary</Button>
    <Button
        size="default"
        prefixIcon={undefined}
        suffixIcon={undefined}
        disabled={false}
        variant="ghost">Ghost</Button>
    <Button
        size="default"
        prefixIcon={undefined}
        suffixIcon={undefined}
        disabled={false}
        variant="outline">Outline</Button>
    <Button
        size="default"
        prefixIcon={undefined}
        suffixIcon={undefined}
        disabled={false}
        variant="destructive">Destructive</Button>
    <Button
        size="default"
        prefixIcon={undefined}
        suffixIcon={undefined}
        disabled={false}
        variant="link">Link</Button>
</div>;`,...a.parameters?.docs?.source}}};t.parameters={...t.parameters,docs:{...t.parameters?.docs,source:{code:`const AllSizes = () => <div className='flex flex-col gap-4'>
    <div className='flex flex-row gap-2'>
        <Button
            variant="default"
            prefixIcon={undefined}
            suffixIcon={undefined}
            disabled={false}
            size="sm">Small</Button>
        <Button
            variant="default"
            prefixIcon={undefined}
            suffixIcon={undefined}
            disabled={false}
            size="default">Default</Button>
        <Button
            variant="default"
            prefixIcon={undefined}
            suffixIcon={undefined}
            disabled={false}
            size="lg">Large</Button>
    </div>
    <div className='flex flex-row gap-2'>
        <Button variant="default" disabled={false} size="icon-sm" suffixIcon="user" />
        <Button variant="default" disabled={false} size="icon" suffixIcon="store" />
        <Button variant="default" disabled={false} size="icon-lg" suffixIcon="menu" />
    </div>
</div>;`,...t.parameters?.docs?.source}}};s.parameters={...s.parameters,docs:{...s.parameters?.docs,source:{originalSource:`{
  args: {
    children: 'Button Text',
    variant: 'default',
    size: 'default',
    disabled: false
  },
  render: args => <Button {...args} />
}`,...s.parameters?.docs?.source},description:{story:`Interactive playground to test all button configurations.
Use the controls panel to customize variant, size, icons, and states.`,...s.parameters?.docs?.description}}};a.parameters={...a.parameters,docs:{...a.parameters?.docs,source:{originalSource:`{
  render: args => <div className="flex flex-row gap-2 flex-wrap">
      <Button size={args.size} prefixIcon={args.prefixIcon} suffixIcon={args.suffixIcon} disabled={args.disabled} variant="default">Default</Button>
      <Button size={args.size} prefixIcon={args.prefixIcon} suffixIcon={args.suffixIcon} disabled={args.disabled} variant="secondary">Secondary</Button>
      <Button size={args.size} prefixIcon={args.prefixIcon} suffixIcon={args.suffixIcon} disabled={args.disabled} variant="ghost">Ghost</Button>
      <Button size={args.size} prefixIcon={args.prefixIcon} suffixIcon={args.suffixIcon} disabled={args.disabled} variant="outline">Outline</Button>
      <Button size={args.size} prefixIcon={args.prefixIcon} suffixIcon={args.suffixIcon} disabled={args.disabled} variant="destructive">Destructive</Button>
      <Button size={args.size} prefixIcon={args.prefixIcon} suffixIcon={args.suffixIcon} disabled={args.disabled} variant="link">Link</Button>
    </div>
}`,...a.parameters?.docs?.source}}};t.parameters={...t.parameters,docs:{...t.parameters?.docs,source:{originalSource:`{
  args: {
    size: 'default',
    prefixIcon: undefined,
    suffixIcon: undefined,
    disabled: false
  },
  argTypes: {
    size: {
      table: {
        disable: true
      }
    },
    children: {
      table: {
        disable: true
      }
    }
  },
  render: args => <div className='flex flex-col gap-4'>
      <div className='flex flex-row gap-2'>
        <Button variant={args.variant} prefixIcon={args.prefixIcon} suffixIcon={args.suffixIcon} disabled={args.disabled} size="sm">Small</Button>
        <Button variant={args.variant} prefixIcon={args.prefixIcon} suffixIcon={args.suffixIcon} disabled={args.disabled} size="default">Default</Button>
        <Button variant={args.variant} prefixIcon={args.prefixIcon} suffixIcon={args.suffixIcon} disabled={args.disabled} size="lg">Large</Button>
      </div>
      <div className='flex flex-row gap-2'>
        <Button variant={args.variant} disabled={args.disabled} size="icon-sm" suffixIcon="user" />
        <Button variant={args.variant} disabled={args.disabled} size="icon" suffixIcon="store" />
        <Button variant={args.variant} disabled={args.disabled} size="icon-lg" suffixIcon="menu" />
      </div>
    </div>
}`,...t.parameters?.docs?.source}}};const v=["Primary","ButtonGroups","AllSizes"];export{t as AllSizes,a as ButtonGroups,s as Primary,v as __namedExportsOrder,I as default};
