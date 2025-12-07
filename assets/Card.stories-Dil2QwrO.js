import{j as e}from"./jsx-runtime-NB1XKu45.js";import{r as l}from"./iframe-BmJKktP_.js";import{B as c}from"./button-BGtPgPmj.js";import{C as n,D as m,a as g,b as d}from"./Card-B6jaUtH3.js";import{S as p}from"./Switch-DOHUC1wh.js";import"./preload-helper-PPVm8Dsz.js";import"./utils-CDN07tui.js";import"./index-DSZyJ88Q.js";import"./x-ClRyasr0.js";import"./createLucideIcon-BBgPBf4j.js";const{expect:u,within:h}=__STORYBOOK_MODULE_TEST__,T={title:"Layout/Card",tags:["autodocs","components"],parameters:{layout:"centered"},argTypes:{children:{table:{disable:!0,type:{detail:"object",summary:"ReactNode"}}},footer:{control:{type:"text"}}},args:{mosaic:"left",children:e.jsx("div",{className:"p-4 h-[400px] w-full"}),footer:"© 2025 Hanout. All rights reserved."},component:n},a={args:{mosaic:"left",footer:"© 2026 حانوت. جميع الحقوق محفوظة."},render:t=>e.jsx(n,{...t})},r={args:{mosaic:"left",footer:"© 2026 حانوت. جميع الحقوق محفوظة."},render:t=>{const[o,i]=l.useState("sign-in");return e.jsxs(n,{...t,mosaic:o==="sign-in"?"left":"right",children:[e.jsx(p,{items:[{label:"Sign In",value:"sign-in"},{label:"Sign Up",value:"sign-up"}],value:o,onValueChange:i}),e.jsx("div",{className:"p-4 h-[400px] w-96"})]})}},s={args:{mosaic:"left",footer:"© 2025 Hanout. All rights reserved."},play:async({canvasElement:t})=>{const o=h(t);await u(o.getByText("Open")).toBeInTheDocument()},render:t=>e.jsxs(m,{children:[e.jsx(g,{asChild:!0,children:e.jsx(c,{children:"Open"})}),e.jsx(d,{className:"p-0 m-0 border-none",children:e.jsx(n,{...t})})]})};a.parameters={...a.parameters,docs:{...a.parameters?.docs,source:{code:'const Primary = () => <Card mosaic="left" footer="© 2026 حانوت. جميع الحقوق محفوظة."><div className="p-4 h-[400px] w-full"></div></Card>;',...a.parameters?.docs?.source}}};r.parameters={...r.parameters,docs:{...r.parameters?.docs,source:{code:`const WithSwitch = () => {
    const [value, setValue] = useState('sign-in');

    return (
        <Card
            footer="© 2026 حانوت. جميع الحقوق محفوظة."
            mosaic={value === 'sign-in' ? 'left' : 'right'}>
            <Switch
                items={[{ label: 'Sign In', value: 'sign-in' }, { label: 'Sign Up', value: 'sign-up' }]}
                value={value}
                onValueChange={setValue} />
            <div className="p-4 h-[400px] w-96">
            </div>
        </Card>
    );
};`,...r.parameters?.docs?.source}}};s.parameters={...s.parameters,docs:{...s.parameters?.docs,source:{code:`const InDialog = () => {
    return (
        <Dialog>
            <DialogTrigger asChild>
                <Button>Open</Button>
            </DialogTrigger>
            <DialogContent className="p-0 m-0 border-none">
                <Card mosaic="left" footer="© 2025 Hanout. All rights reserved."><div className="p-4 h-[400px] w-full"></div></Card>
            </DialogContent>
        </Dialog>
    );
};`,...s.parameters?.docs?.source}}};a.parameters={...a.parameters,docs:{...a.parameters?.docs,source:{originalSource:`{
  args: {
    mosaic: 'left',
    footer: '© 2026 حانوت. جميع الحقوق محفوظة.'
  },
  render: args => <Card {...args} />
}`,...a.parameters?.docs?.source}}};r.parameters={...r.parameters,docs:{...r.parameters?.docs,source:{originalSource:`{
  args: {
    mosaic: 'left',
    footer: '© 2026 حانوت. جميع الحقوق محفوظة.'
  },
  render: args => {
    const [value, setValue] = useState('sign-in');
    return <Card {...args} mosaic={value === 'sign-in' ? 'left' : 'right'}>
      <Switch items={[{
        label: 'Sign In',
        value: 'sign-in'
      }, {
        label: 'Sign Up',
        value: 'sign-up'
      }]} value={value} onValueChange={setValue} />
      <div className="p-4 h-[400px] w-96">
      </div>
    </Card>;
  }
}`,...r.parameters?.docs?.source}}};s.parameters={...s.parameters,docs:{...s.parameters?.docs,source:{originalSource:`{
  args: {
    mosaic: 'left',
    footer: '© 2025 Hanout. All rights reserved.'
  },
  play: async ({
    canvasElement
  }) => {
    const canvas = within(canvasElement);
    await expect(canvas.getByText('Open')).toBeInTheDocument();
  },
  render: args => {
    return <Dialog>
      <DialogTrigger asChild>
        <Button>Open</Button>
      </DialogTrigger>
      <DialogContent className="p-0 m-0 border-none">
        <Card {...args} />
      </DialogContent>
    </Dialog>;
  }
}`,...s.parameters?.docs?.source}}};const B=["Primary","WithSwitch","InDialog"];export{s as InDialog,a as Primary,r as WithSwitch,B as __namedExportsOrder,T as default};
