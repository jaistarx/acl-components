import type { Meta } from '@storybook/react';
import { AclInput } from '.';

/**Input elements are used to collect information such as text, numbers, dates, and more from users. */

const meta: Meta<typeof AclInput> = {
  component: AclInput,
  title: 'Components/AclInput',
  tags: ['autodocs'],
  argTypes: {
    label: {
      description: `Type: string
            \nDescription: The label prop is a string that enables you to provide a text label or description for the component. This label offers a brief and informative explanation of the component's purpose or content, assisting users in understanding its function.
            \nDefault Value: undefined
            \nExample:&lt;AclInput onChange={(e) =&gt;console.log(e)}label="type here"&gt;&lt;/AclInput&gt;`,
      control: { type: 'text' },
    },
    autoComplete: {
      description: `Type: string
            \nDescription: Controls form autofill suggestions for improved user experience, especially on mobile devices.
            \nDefault Value: null
            \nExample:&lt;AclInput onChange={(e) =&gt;console.log(e)} label="Name" autoComplete="string"&gt;&lt;/AclInput&gt;`,
    },
    autoFocus: {
      description: `Type: boolean
            \nDescription: The autoFocus prop, when set to true, automatically focuses on the component when it is rendered, allowing it to gain immediate user input.
            \nDefault Value: false
            \nExample:&lt;AclInput onChange={(e) =&gt;console.log(e)}label="Name"autoFocus={true}&gt;&lt;/AclInput&gt;`,
      control: { type: 'radio' },
      options: [true, false],
    },
    defaultValue: {
      description: `Type: any
            \nDescription: The defaultValue prop allows you to set the initial or default value for the component. This value represents the component's state when it is first rendered or reset.
            \nDefault Value: undefined
            \nExample:&lt;AclInput onChange={(e) =&gt;console.log(e)}label="Count"defaultValue={0}&gt;&lt;/AclInput&gt;`,
      control: { type: 'text' },
    },
    disabled: {
      description: `Type: boolean
            \nDescription: The disabled prop is a boolean property that, when set to true, disables user interaction with the component.
            \nDefault Value: false (The component is initially enabled by default).
            \nExample:&lt;AclInput onChange={(e) =&gt;console.log(e)}label="Name"disabled={true}&gt;&lt;/AclInput&gt;`,
      control: { type: 'radio' },
      options: [true, false],
    },
    error: {
      description: `Type: boolean
            \nDescription: The "error" prop is used to signify whether there is an error associated with the input component. When set to true, it indicates that the input's content is in error or doesn't meet validation criteria. This is commonly used to visually highlight or indicate that there is an issue with the input.
            \nDefault Value: false
            \nExample:&lt;AclInput onChange={(e) =&gt;console.log(e)}label="Name"error={true}&gt;&lt;/AclInput&gt;`,
      control: { type: 'radio' },
      options: [true, false],
    },
    fullWidth: {
      description: `Type: boolean
            \nDescription: The fullWidth prop, when set to true, causes the component to occupy the full width of its container. It expands to fill the available horizontal space. This is often used to create components that span the entire width of a container or parent element.
            \nDefault Value: false
            \nExample:&lt;AclInput onChange={(e) =&gt;console.log(e)}label="Name"fullWidth={true}&gt;&lt;/AclInput&gt;`,
      control: { type: 'radio' },
      options: [true, false],
    },
    helperText: {
      description: `Type: ReactNode
            \nDescription: The helperText prop allows you to provide additional text or content that serves as helper information for the component. This text is often used to give users guidance, explanations, or validation messages related to the component's input.
            \nDefault Value: undefined
            \nExample:&lt;AclInput onChange={(e) =&gt;console.log(e)} label="Email" 
            helperText="Please enter your valid email address"&gt;&lt;/AclInput&gt;`,
      control: { type: 'text' },
    },
    multiline: {
      description: `Type: boolean
            \nDescription: The multiline prop, when set to true, indicates that the input should be a multi-line text field, typically used for inputting longer paragraphs or text. When false, it represents a single-line input field, which is common for short text or single-word inputs.
            \nDefault Value: false
            \nExample:&lt;AclInput onChange={(e) =&gt;console.log(e)}label="Name"multiline={true}&gt;&lt;/AclInput&gt;`,
      control: { type: 'radio' },
      options: [true, false],
    },
    name: {
      description: `Type: string
            \nDescription: The name prop allows you to specify a name for the input element. The name is used when submitting form data, and it identifies the input field in the submitted data. It is essential for associating the input with server-side processing or handling user input on the backend.
            \nDefault Value: undefined
            \nExample:&lt;AclInput onChange={(e) =&gt;console.log(e)}label="First Name"name="first_name"&gt;&lt;/AclInput&gt;`,
      control: { type: 'text' },
    },
    placeholder: {
      description: `Type: string
            \nDescription: The placeholder prop allows you to provide a temporary or instructional text that is displayed in the input when it is empty. This text serves as a hint or example of what should be entered in the input field, providing guidance to users.
            \nDefault Value: undefined
            \nExample:&lt;AclInput onChange={(e) =&gt;console.log(e)} label="Search"
            placeholder="Enter a keyword..."&gt;&lt;/AclInput&gt;`,
      control: { type: 'text' },
    },
    type: {
      description: `Type: string
            \nDescription: The type prop specifies the type of input element, which defines the data format expected from the user. Common type values include "text" for standard text input, "number" for numeric input, "email" for email addresses, and "password" for password input. The type prop influences the input's behavior and validation.
            \nDefault Value: "text"
            \nExample:&lt;AclInput onChange={(e) =&gt;console.log(e)} label="Email"type="email"&gt;&lt;/AclInput&gt;`,
      control: { type: 'text' },
    },
    required: {
      description: `Type: boolean
            \nDescription: The required prop, when set to true, indicates that the input is mandatory and must be filled out by the user. This is often used for form fields where certain information is essential and must be provided to successfully submit the form.
            \nDefault Value: false
            \nExample:&lt;AclInput onChange={(e) =&gt;console.log(e)}label="Address"required={true}&gt;&lt;/AclInput&gt;`,
      control: { type: 'radio' },
      options: [true, false],
    },
  },
};

export default meta;

// type Story = StoryObj<typeof meta>;

export const Label: any = {
  args: {
    label: 'Sample Input',
  },
};

export const AutoComplete: any = {
  args: {
    label: 'Sample Input',
    autoComplete: 'on',
  },
};

export const AutoFocus: any = {
  args: {
    label: 'Sample Input',
    autoFocus: true,
  },
  argTypes: {
    autoFocus: {
      control: { type: 'radio' },
      options: [true, false],
    },
  },
};

export const DefaultValue: any = {
  args: {
    label: 'Sample Input',
    defaultValue: 'Default Value',
  },
};

export const Disabled: any = {
  args: {
    label: 'Sample Input',
    disabled: true,
  },
  argTypes: {
    disabled: {
      control: { type: 'radio' },
      options: [true, false],
    },
  },
};

export const Error: any = {
  args: {
    label: 'Sample Input',
    error: true,
  },
  argTypes: {
    error: {
      control: { type: 'radio' },
      options: [true, false],
    },
  },
};

export const FullWidth: any = {
  args: {
    label: 'Sample Input',
    fullWidth: true,
  },
  argTypes: {
    fullWidth: {
      control: { type: 'radio' },
      options: [true, false],
    },
  },
};

export const HelperText: any = {
  args: {
    label: 'Sample Input',
    helperText: 'Helper text like hints or error messages',
  },
};

export const Multiline: any = {
  args: {
    label: 'Sample Input',
    multiline: true,
    rows: 4,
  },
  argTypes: {
    multiline: {
      control: { type: 'radio' },
      options: [true, false],
    },
  },
};

// export const name: any = {
//     args: {
//         label: 'Sample Input',
//         name: 'customInput',
//     },
// };

export const Placeholder: any = {
  args: {
    label: 'Sample Input',
    placeholder: 'Enter text here',
  },
};

export const Type: any = {
  args: {
    label: 'Sample Input',
    type: 'password',
  },
};

export const Required: any = {
  args: {
    label: 'Sample Input',
    required: true,
  },
  argTypes: {
    required: {
      control: { type: 'radio' },
      options: [true, false],
    },
  },
};
