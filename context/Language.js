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
        chooseProfilePhoto: 'Choose your profile picture',
        loginFailedToast: 'Incorrect username or password',
        loginFailedToast2: 'Please check your details and try again',
        registerFailedToast: 'An error has occurred',
        registerFailedToast2: 'Please check your data and try again.',
        registerSuccessToast: 'User created successfully!',
        registerSuccessToast2: 'Enter your details and login to the app',
        transferSuccessToast: 'Transaction completed successfully!',
        transferSuccessToast2: 'Your transfer is complete',
        depositFailedToast: 'Unable to complete transaction',
        depositFailedToast2: 'Check the entered data and try again',
        depositSuccessToast: 'Transaction completed successfully!',
        depositSuccessToast2: 'Thanks for the preference.',
        donateSuccessToast: 'Donation completed successfully!',
        donateSuccessToast2: 'Thanks for your help!',
        donateFailedNetworkToast: 'There was an error with our database!',
        donateFailedNetworkToast2: 'Try again later',
        donateFailedToast: 'Unable to perform transaction',
        donateFailedToast2: 'Check entered data and try again',
        helpSuccessToast: 'Email sent successfully.',
        helpSuccessToast2: 'Thanks for giving us this feedback!',
        helpFailedToast: 'Invalid field',
        helpFailedToast2: 'Please check the entered data and try again',
        outOfMoneyToast1: 'Insufficient balance',
        outOfMoneyToast2: 'Unable to perform operation',
        cannotSendToYourselfToast1: 'Cannot transfer to self',
        cannotSendToYourselfToast2: 'Try again.'
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
        transference: 'Transfer??ncia',
        deposit: 'Depositar',
        transactions: 'Transa????es',
        donate: 'Doar',
        profile: 'Meu perfil',
        help: 'Ajuda',
        contactUs: 'Entre em contato conosco!',
        name: 'Nome',
        subject: 'Assunto',
        message: 'Mensagem',
        send: 'Enviar',
        cancel: 'Cancelar',
        settings: 'Configura????o',
        selectLanguage: 'Selecionar idioma',
        value: 'Valor (R$)',
        destination: 'CPF do Destinat??rio',
        transfer: 'Transferir',
        pix: 'Pix',
        boleto: 'Boleto',
        credit: 'Cr??dito',
        animals: 'Animais',
        education: 'Educa????o',
        kids: 'Crian??as',
        myProfile: 'Meu perfil',
        donation: 'Doa????o',
        chooseProfilePhoto: 'Escolha seu avatar',
        loginFailedToast: 'Usu??rio ou senha incorretos',
        loginFailedToast2: 'Verifique seus dados e tente novamente',
        registerFailedToast: 'Ocorreu um erro',
        registerFailedToast2: 'Verifique seus dados e tente novamente.',
        registerSuccessToast:  'Usu??rio criado com sucesso!',
        registerSuccessToast2:  'Insira seus dados e fa??a login no app',
        transferSuccessToast: 'Transa????o conclu??da com sucesso!',
        transferSuccessToast2: 'Sua transfer??ncia foi conclu??da',
        depositFailedToast: 'N??o foi poss??vel efetuar a transa????o',
        depositFailedToast2: 'Confira os dados inseridos e tente novamente',
        depositSuccessToast: 'Transa????o conclu??da com sucesso!',
        depositSuccessToast2: 'Obrigado pela prefer??ncia.',
        donateSuccessToast: 'Doa????o conclu??da com sucesso!',
        donateSuccessToast2: 'Obrigado pela sua ajuda!',
        donateFailedNetworkToast: 'Ocorreu um erro com nosso banco de dados!',
        donateFailedNetworkToast2: 'Tente novamente mais tarde',
        donateFailedToast: 'N??o foi poss??vel efetuar a transa????o',
        donateFailedToast2: 'Confira os dados inseridos e tente novamente',
        helpSuccessToast: 'Email enviado com sucesso.',
        helpSuccessToast2: 'Obrigado por nos deixar esse feedback!',
        helpFailedToast: 'Campo inv??lido',
        helpFailedToast2: 'Verifique os dados inseridos e tente novamente',
        outOfMoneyToast1: 'Saldo insuficiente',
        outOfMoneyToast2: 'N??o foi poss??vel realizar a opera????o',
        cannotSendToYourselfToast1: 'N??o ?? poss??vel transferir para si mesmo',
        cannotSendToYourselfToast2: 'Tente novamente.'


      },
      'spanish': {
        login: 'Acceso',
        register: 'Registro',
        email: 'E-mail',
        firstName: 'Primer nombre',
        lastName: 'Apellido',
        id: 'N??mero de identidad',
        birthdate: 'Fecha de nacimiento',
        password: 'Clave',
        account: 'Cuenta',
        balance:  'Saldo actual:',
        transference: 'Transferir',
        deposit: 'Dep??sito',
        transactions: 'Facturas',
        donate:  'Donar',
        myProfile:  'Mi perfil',
        help:  'Ayudar',
        contactUs: '??Cont??ctenos!',
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
        credit: 'Cr??dito',
        animals: 'Animales',
        education: 'Educaci??n',
        kids: 'Ni??os',
        donation: 'Doaci??n',
        chooseProfilePhoto: 'Elige tu foto de perfil',
        loginFailedToast: 'Usuario o contrase??a incorrectos',
        loginFailedToast2: 'Por favor, compruebe sus datos y vuelva a intentarlo',
        registerFailedToast: 'Ha ocurrido un error',
        registerFailedToast2: 'Por favor revisa tus datos y vuelve a intentarlo.',
        registerSuccessToast: '??Usuario creado con ??xito!',
        registerSuccessToast2: 'Ingrese sus datos e inicie sesi??n en la aplicaci??n',
        transferSuccessToast: '??Transacci??n completada con ??xito!',
        transferSuccessToast2: 'Tu transferencia est?? completa',
        depositFailedToast: 'No se pudo completar la transacci??n',
        depositFailedToast2: 'Verifique los datos ingresados ??????y vuelva a intentarlo',
        depositSuccessToast: '??Transacci??n completada con ??xito!',
        depositSuccessToast2: 'Gracias por la preferencia.',
        donateSuccessToast: '??La donaci??n se complet?? con ??xito!',
        donateSuccessToast2: '??Gracias por tu ayuda!',
        donateFailedNetworkToast: '??Hubo un error con nuestra base de datos!',
        donateFailedNetworkToast2: 'Vuelve a intentarlo m??s tarde',
        donateFailedToast: 'No se pudo realizar la transacci??n',
        donateFailedToast2: 'Verifique los datos ingresados ??????y vuelva a intentarlo',
        helpSuccessToast: 'Correo electr??nico enviado con ??xito.',
        helpSuccessToast2: '??Gracias por darnos este comentario!',
        helpFailedToast: 'Campo no v??lido',
        helpFailedToast2: 'Por favor, compruebe los datos introducidos y vuelva a intentarlo',
        outOfMoneyToast1: 'Saldo insuficiente',
        outOfMoneyToast2: 'No se puede realizar la operaci??n',
        cantSendToYourselfToast1: 'No se puede enviar a s?? mismo',
        cantSendToYourselfToast2: 'Int??ntalo de nuevo.'
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