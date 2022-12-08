import React from 'react';

interface Props {
  // Props for the component go here
}

interface State {
  // State for the component goes here
  name: string;
  email: string;
  message: string;
  formError: boolean;
}

class ContactForm extends React.Component<Props, State> {
  constructor(props: Props) {
    super(props);
    this.state = {
      name: '',
      email: '',
      message: '',
      formError: false,
    };
  }

  handleChange = (event: React.FormEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const target = event.target as HTMLInputElement | HTMLTextAreaElement;
    const value = target.value;
    const name = target.name;

    this.setState({
        [name]: value,
    } as unknown as Pick<State, keyof State>);
  }

  handleSubmit = (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();

    // Validate the form here
    if (this.state.name && this.state.email && this.state.message) {
      // Form is valid, submit it to the server
      this.setState({ formError: false });
    } else {
      // Form is invalid, show an error
      this.setState({ formError: true });
    }
  }

  render() {
    return (
        <form onSubmit={this.handleSubmit}>
        <div className="mb-4">
          <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="name">
            Name
          </label>
          <input
            className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
            id="name"
            type="text"
            name="name"
            value={this.state.name}
            onChange={this.handleChange}
          />
        </div>
        <div className="mb-4">
          <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="email">
            Email
          </label>
          <input
            className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
            id="email"
            type="email"
            name="email"
            value={this.state.email}
            onChange={this.handleChange}
          />
        </div>
        <div className="mb-4">
          <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="message">
            Message
          </label>
            <textarea
            className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
            />
        </div>
        {this.state.formError && <p>Please fill out all fields in the form.</p>}
        <input type="submit" value="Submit" />
      </form>
    );
  }
}

export default ContactForm;
