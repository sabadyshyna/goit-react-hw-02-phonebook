import PropTypes from 'prop-types';
import React from 'react';
import s from './ContactForm.module.css';
import { v4 as uuidv4 } from 'uuid';

class ContactForm extends React.Component {
  state = {
    name: '',
    number: '',
  };

  nameInputId = uuidv4();
  numberInputId = uuidv4();

  handleChange = event => {
    const { name, value } = event.currentTarget;

    this.setState({
      [name]: value,
    });
  };

  handleSubmit = event => {
    event.preventDefault();
    this.props.onSubmit(this.state); // отправляем значения сабмита в пропс
    this.setState({ name: '', number: '' }); //обнуляем форму
  };

  render() {
    const { name, number } = this.state;
    return (
      <div>
        <form className={s.form} id="contact" onSubmit={this.handleSubmit}>
          <label className={s.item} htmlFor={this.nameInputId}>
            Name
            <input
              className={s.input}
              type="text"
              name="name"
              value={name}
              onChange={this.handleChange}
              id={this.nameInputId}
              placeholder="Rubeus Hagrid"
            />
          </label>
          <label className={s.item} htmlFor={this.numberInputId}>
            Phone number
            <input
              className={s.input}
              type="text"
              name="number"
              value={number}
              onChange={this.handleChange}
              id={this.numberInputId}
              placeholder="888-88-88"
            />
          </label>

          <button className={s.button} type="submit">
            Add contact
          </button>
        </form>
      </div>
    );
  }
}
ContactForm.propTypes = {
  onSubmit: PropTypes.func.isRequired,
};

export default ContactForm;
