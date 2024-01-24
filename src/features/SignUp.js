import { useEffect, useState } from 'react'
import Input from '../components/Input'
import PrimaryButton from '../components/buttons/PrimaryButton'
import { Link } from 'react-router-dom'
import { Transition } from '@headlessui/react'

const SignUp = () => {
  const [email, setEmail] = useState('')
  const [focusEmail, setFocusEmail] = useState(false)
  const [validEmail, setValidEmail] = useState(false)

  const [password, setPassword] = useState('')
  const [focusPwd, setFocusPwd] = useState(false)
  const [validPwd, setValidPwd] = useState(false)

  const [passwordConf, setPasswordConf] = useState('')
  const [focusPwdConf, setFocusPwdConf] = useState(false)
  const [validPwdConf, setValidPwdConf] = useState(false)

  const [firstName, setFirstName] = useState('')
  const [focusFirstName, setFocusFirstName] = useState(false)
  const [validFirstName, setValidFirstName] = useState(false)

  const [lastName, setLastName] = useState('')
  const [focusLastName, setFocusLastName] = useState(false)
  const [validLastName, setValidLastName] = useState(false)

  const [cnp, setCnp] = useState('')
  const [focusCnp, setFocusCnp] = useState(false)
  const [validCnp, setValidCnp] = useState(false)

  const EMAIL_REGEX = /^[a-zA-Z0-9._-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,4}$/
  const PWD_REGEX = /^(?=.*\d)(?=.*[a-z])(?=.*[A-Z]).{6,}$/
  const CNP_REGEX = /^[0-9]{3}[01][0-9]{2}[0-9]{7}$/

  useEffect(() => {
    setValidEmail(EMAIL_REGEX.test(email))
  }, [email])

  useEffect(() => {
    setValidPwd(PWD_REGEX.test(password))
    const match = password === passwordConf
    setValidPwdConf(match)
  }, [password, passwordConf])

  useEffect(() => {
    setValidFirstName(firstName.length > 1)
  }, [firstName])

  useEffect(() => {
    setValidLastName(lastName.length > 1)
  }, [lastName])

  useEffect(() => {
    setValidCnp(CNP_REGEX.test(cnp))
  }, [cnp])

  const inputs = [
    {
      id: 'email',
      type: 'email',
      label: 'Email',
      value: email,
      validation: validEmail,
      focus: focusEmail,
      onChange: (e) => setEmail(e.target.value),
      onFocus: () => setFocusEmail(true),
      onBlur: () => setFocusEmail(false),
      extraClasses: validEmail
        ? ' border-green-500 focus:border-green-500'
        : '',
      ariaInvalid: validEmail ? 'true' : 'false',
      ariaDescribedby: 'uidnote',
      paragraphText: ['Emailul nu este valid'],
    },
    {
      id: 'pwd',
      type: 'password',
      label: 'Parola',
      value: password,
      validation: validPwd,
      focus: focusPwd,
      onChange: (e) => setPassword(e.target.value),
      onFocus: () => setFocusPwd(true),
      onBlur: () => setFocusPwd(false),
      extraClasses: validPwd ? ' border-green-500 focus:border-green-500' : '',
      ariaInvalid: validPwd ? 'true' : 'false',
      ariaDescribedby: 'uidnote',
      paragraphText: [
        'Parola trebuie sa contina',
        'Cel putin o litera mare',
        'Cel putin o litera mica',
        'Cel putin o cifra',
        'Minim 6 caracter in total',
      ],
    },
    {
      id: 'pwdConf',
      type: 'password',
      label: 'Confirmare Parola',
      value: passwordConf,
      validation: validPwdConf,
      focus: focusPwdConf,
      onChange: (e) => setPasswordConf(e.target.value),
      onFocus: () => setFocusPwdConf(true),
      onBlur: () => setFocusPwdConf(true),
      extraClasses: validPwdConf
        ? ' border-green-500 focus:border-green-500'
        : '',
      ariaInvalid: validPwdConf ? 'true' : 'false',
      ariaDescribedby: 'uidnote',
      paragraphText: ['Parolele nu corespund'],
    },
    {
      id: 'firstName',
      type: 'text',
      label: 'Prenume',
      value: firstName,
      validation: validFirstName,
      focus: focusFirstName,
      onChange: (e) => setFirstName(e.target.value),
      onFocus: () => setFocusFirstName(true),
      onBlur: () => setFocusFirstName(false),
      extraClasses: validFirstName
        ? ' border-green-500 focus:border-green-500'
        : '',
      ariaInvalid: validFirstName ? 'true' : 'false',
      ariaDescribedby: 'uidnote',
      paragraphText: ['Prenumele este prea scurt'],
    },
    {
      id: 'lastName',
      type: 'text',
      label: 'Nume',
      value: lastName,
      validation: validLastName,
      focus: focusLastName,
      onChange: (e) => setLastName(e.target.value),
      onFocus: () => setFocusLastName(true),
      onBlur: () => setFocusLastName(false),
      extraClasses: validLastName
        ? ' border-green-500 focus:border-green-500'
        : '',
      ariaInvalid: validLastName ? 'true' : 'false',
      ariaDescribedby: 'uidnote',
      paragraphText: ['Numele este prea scurt'],
    },
    {
      id: 'cnp',
      type: 'text',
      label: 'CNP',
      value: cnp,
      validation: validCnp,
      focus: focusCnp,
      onChange: (e) => setCnp(e.target.value),
      onFocus: () => setFocusCnp(true),
      onBlur: () => setFocusCnp(false),
      extraClasses: validCnp ? ' border-green-500 focus:border-green-500' : '',
      ariaInvalid: validCnp ? 'true' : 'false',
      ariaDescribedby: 'uidnote',
      paragraphText: ['CNP ul nu este valid'],
    },
  ]

  const mapInputs = inputs.map((input, i) => {
    return (
      <div key={i} className="flex flex-col gap-2 font-small m-2 ">
        <label className="text-white">{input?.label}</label>
        <Input
          type={input?.type}
          id={input?.id}
          value={input?.value}
          name={input?.id}
          required
          onChange={input?.onChange}
          aria-invalid={input?.ariaInvalid}
          aria-describedby={input?.ariaInvalid}
          onFocus={input?.onFocus}
          onBlur={input?.onBlur}
          classes={`text-pink-200 ${input?.extraClasses}`}
        />
        <Transition
          show={!!(input?.focus && input?.value && !input?.validation)}
          enter="ease-out duration-300"
          enterFrom="opacity-0"
          enterTo="opacity-100"
          leave="ease-in duration-300"
          leaveFrom="opacity-100"
          leaveTo="opacity-0"
        >
          {input?.paragraphText?.map((text) => (
            <span className="text-red-600 font-medium" key={text}>
              {text}
              <br />
            </span>
          ))}
        </Transition>
      </div>
    )
  })
  return (
    <div className="flex flex-col items-center justify-center py-24 px-4 sm:px-6 lg:px-8 duration-500">
      <div className="flex flex-col w-[500px] gap-2 p-4 m-2 bg-slate-700 border border-pink-200 rounded-xl shadow-lg shadow-pink-200">
        {mapInputs}
        <PrimaryButton classes="my-2">Inregistrare</PrimaryButton>
        <div className="flex flex-col mx-auto mt-2 items-center">
          <span className="mb-4 text-white">sau</span>
          <Link
            className="text-pink-200 hover:text-pink-300 duration-300"
            to={'/signUp'}
          >
            Intra in cont
          </Link>
        </div>
      </div>
    </div>
  )
}

export default SignUp
