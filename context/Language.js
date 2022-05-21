import * as React from 'react'
import {useState, useContext, createContext} from 'react'

const LanguageContext = createContext({});

export function LanguageProvider({children}) {

  const languages = {
    'english' : {
        login: 'Login',
        register: 'Register',
        email: 'E-mail',
        firstName: 'First name',
        lastName: 'Last name',
        id: 'Social security number',
        birthdate: 'Birthdate',
        password: 'Password',
        account: 'Account',
        balance: 'Current balance:',
        transference: 'Transfer',
        deposit: 'Deposit',
        transactions: 'Transactions',
        donate: 'Donate',
        myProfile: 'My Profile',
        help: 'Help',
        contactUs: 'Contact us!',
        name: 'Name',
        subject: 'Subject',
        message: 'Message',
        send: 'Send',
        cancel: 'Cancel',
        settings: 'Settings',
        selectLanguage: 'Select language',
        value: 'Value (R$)',
        destination: 'Destination',
        transfer: 'Transfer',
        pix: 'Pix',
        boleto: 'Pay slip',
        credit: 'Credit',
        animals: 'Animals',
        education: 'Education',
        kids: 'Kids',
        donation: 'Donation',
        chooseProfilePhoto: 'Choose your profile picture'
    },
      'portuguese': {
  
        login: 'Entrar',
        register: 'Registrar',
        email: 'E-mail',
        firstName: 'Primeiro nome',
        lastName: 'Sobrenome',
        id: 'CPF',
        birthdate: 'Data de nascimento',
        password: 'Senha',
        account: 'Conta',
        balance: 'Saldo atual',
        transference: 'Transferência',
        deposit: 'Depositar',
        transactions: 'Transações',
        donate: 'Doar',
        profile: 'Meu perfil',
        help: 'Ajuda',
        contactUs: 'Entre em contato conosco!',
        name: 'Nome',
        subject: 'Assunto',
        message: 'Mensagem',
        send: 'Enviar',
        cancel: 'Cancelar',
        settings: 'Configuração',
        selectLanguage: 'Selecionar idioma',
        value: 'Valor (R$)',
        destination: 'CPF do Destinatário',
        transfer: 'Transferir',
        pix: 'Pix',
        boleto: 'Boleto',
        credit: 'Crédito',
        animals: 'Animais',
        education: 'Educação',
        kids: 'Crianças',
        myProfile: 'Meu perfil',
        donation: 'Doação',
        chooseProfilePhoto: 'Escolha seu avatar'
      },
      'spanish': {
        login: 'Acceso',
        register: 'Registro',
        email: 'E-mail',
        firstName: 'Primer nombre',
        lastName: 'Apellido',
        id: 'Número de identidad',
        birthdate: 'Fecha de nacimiento',
        password: 'Clave',
        account: 'Cuenta',
        balance:  'Saldo actual:',
        transference: 'Transferir',
        deposit: 'Depósito',
        transactions: 'Facturas',
        donate:  'Donar',
        myProfile:  'Mi perfil',
        help:  'Ayudar',
        contactUs: '¡Contáctenos!',
        name:  'Nombre',
        subject: 'Asunto',
        message: 'Mensaje',
        send: 'Enviar',
        cancel: 'Cancelar',
        settings: 'Ajustes',
        selectLanguage: 'Seleccione el idioma',
        value:  'Valor (R$)',
        destination: 'Destino',
        transfer: 'Transferir',
        pix: 'Pix',
        boleto: 'Billete',
        credit: 'Crédito',
        animals: 'Animales',
        education: 'Educación',
        kids: 'Niños',
        donation: 'Doación',
        chooseProfilePhoto: 'Elige tu foto de perfil'
      }
  }

  const [lang, setLang] = useState('portuguese')

  function changeLanguage(language) {
    setLang(language)
  }

  return (
    <LanguageContext.Provider value={{lang, changeLanguage, languages}}>
      {children}
    </LanguageContext.Provider>
  )
}

export function useLanguage(){
  const context = useContext(LanguageContext);
  const {lang, changeLanguage, languages} = context;
  return { lang, changeLanguage, languages };
}