import { useRef, useState, useEffect } from 'react';
import emailjs from 'emailjs-com';
import { useThemeContext } from '../../context';
import './form.css';

const Form = () => {
  const { state } = useThemeContext();
  const darkMode = state.darkMode;
  const [done, setDone] = useState(false);
  const [formState, setFormState] = useState({
    user_email: '',
    user_subject: '',
    user_name: '',
    message: '',
  });

  const [errorMsg, setErrorMsg] = useState('');
  const [successMsg, setSuccessMsg] = useState('');

  const formRef = useRef();
  const emailRef = useRef();
  const nameRef = useRef();
  const messageRef = useRef();

  useEffect(() => {
    const timeout = setTimeout(() => {
      setDone(false);
      setErrorMsg('');
      setSuccessMsg('');
    }, 3000);
    return () => clearTimeout(timeout);
  }, [done, errorMsg, successMsg]);

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormState((prevState) => ({
      ...prevState,
      [name]: value,
    }));
  };

  const validateInput = () => {
    const fields = [
      {
        name: 'user_email',
        value: formState.user_email,
        message: 'Email address should not be blank!',
      },
      {
        name: 'user_name',
        value: formState.user_name,
        message: 'Name should not be blank!',
      },
      {
        name: 'message',
        value: formState.message,
        message: 'Message should not be blank!',
      },
    ];
    const isNotFilled = fields.some((field) => {
      if (field.value.trim() === '') {
        setErrorMsg(field.message);
        if (field.name === 'user_email') {
          emailRef.current.focus();
        } else if (field.name === 'user_email') {
          nameRef.current.focus();
        } else if (field.name === 'message') {
          messageRef.current.focus();
        }
        return true;
      }
      setErrorMsg('');
      return false;
    });
    return isNotFilled;
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!formState.user_name && !formState.user_email && !formState.message) {
      setErrorMsg('Please fill out all the fields!');
      return;
    }
    const isInvalid = validateInput();
    if (!isInvalid) {
      setSuccessMsg("You're good to go!");
      emailjs
        .sendForm(
          'service_lmedk7j',
          'template_j0bha2o',
          formRef.current,
          'user_QsrvJnvejrbER1EDp2dRA'
        )
        .then(
          (result) => {
            console.log(result.text);
            setDone(true);
            setFormState({
              user_email: '',
              user_name: '',
              user_subject: '',
              message: '',
            });
          },
          (error) => {
            console.log(error.text);
          }
        );
    }
  };

  return (
    <>
      {successMsg && <p className="successMsg">{successMsg}</p>}
      {errorMsg && <p className="errorMsg">{errorMsg}</p>}
      <form ref={formRef} onSubmit={handleSubmit}>
        <input
          style={{ backgroundColor: darkMode && '#333' }}
          type="text"
          placeholder="Name"
          name="user_name"
          ref={nameRef}
          autoComplete="off"
          value={formState.user_name}
          onChange={handleInputChange}
        />
        <input
          style={{ backgroundColor: darkMode && '#333' }}
          type="text"
          placeholder="Subject"
          name="user_subject"
          value={formState.user_subject}
          onChange={handleInputChange}
        />
        <input
          style={{ backgroundColor: darkMode && '#333' }}
          type="text"
          placeholder="Email"
          name="user_email"
          ref={emailRef}
          autoComplete="off"
          value={formState.user_email}
          onChange={handleInputChange}
        />
        <textarea
          style={{ backgroundColor: darkMode && '#333' }}
          rows="5"
          placeholder="Message"
          name="message"
          ref={messageRef}
          autoComplete="off"
          value={formState.message}
          onChange={handleInputChange}
        />
        <button type="submit">Submit</button>
        {done && 'Thank you...'}
      </form>
    </>
  );
};

export default Form;
