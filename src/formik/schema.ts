import * as Yup from 'yup';
import languages from 'values/languages';

const phoneRegExp =
  /^((\+[1-9]{1,4}[ -]?)|(\([0-9]{2,3}\)[ -]?)|([0-9]{2,4})[ -]?)*?[0-9]{3,4}[ -]?[0-9]{3,4}$/;
const includeDigRegExp = /([0-9]+)/;
const includeCharRegExp = /([A-z]+)/;
const EmailReg =
  /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;

export const loginSchema = (lang: string) => {
  return Yup.object().shape({
    email: Yup.string().email('Email must be valid').required('Email is required'),
    password: Yup.string().required('Password is required').min(8, 'Password must be at least 8 characters'),
  });
};

export const individualRegisterScheme = (lang: string) => {
  return Yup.object().shape({
    name: Yup.string().required('Contact Name is required'),
    password: Yup.string().required('Password is required').min(8, 'Password must be at least 8 characters'),
    confirmPassword: Yup.string().required('Confirm Password is required').min(8, 'Confirm Password must be at least 8 characters').oneOf([Yup.ref('password'),], 'Passwords do not match'),
    phoneNumber: Yup.string().required('Phone Number is required'),
    mobileNumber: Yup.string().required('Mobile Number is required'),
    address: Yup.string().required('Address is required'),
    GovernmentID: Yup.object().required('Government ID is required'),
    AddressProof: Yup.object().required('Address proof is required'),
    email: Yup.string().email('Email Address must be valid').required('Email is required'),
    Country: Yup.string().required('Country is required'),
    City: Yup.string().required('City is required'),
    Nationality: Yup.string().required('Nationality is required'),
  });
};

export const companyRegisterScheme = (lang: string) => {
  return Yup.object().shape({
    name: Yup.string().required('Company Name is required'),
    Telephone: Yup.string().required('Telephone is required'),
    // FaxNumber: Yup.string().required('Fax Number is required'),
    MobileNumber: Yup.string().required('Mobile Number is required'),
    address: Yup.string().required('Address is required'),
    Country: Yup.string().required('Country is required'),
    City: Yup.string().required('City is required'),
    Uploadtradelicense: Yup.object().required('Upload trade license is required'),
    Operatingaddressproof: Yup.object().required('Operating address proof is required'),
    BankName: Yup.string().required('Bank Name is required'),
    IbanNumber: Yup.string().required('Iban Number is required'),
    AccountNumber: Yup.string().required('Account Number is required'),
    SwiftCode: Yup.string().required('Swift Code is required'),
    BankCountry: Yup.string().required('Bank Country is required'),
    BankCity: Yup.string().required('Bank City is required'),
  });
};

export const AddAuthorizedUserScheme = (lang: string) => {
  return Yup.object().shape({
    name: Yup.string().required('Company Name is required'),
    email: Yup.string().email('Email Address must be valid').required('Email is required'),
    password: Yup.string().required('Password is required').min(8, 'Password must be at least 8 characters')
  });
};


export const registerScheme = (lang: string) => {
  return Yup.object().shape({
    phoneNumber: Yup.string()
      .required(languages[lang].required)
      .matches(phoneRegExp, languages[lang].phoneError),
    fullName: Yup.string().required(languages[lang].required),
    email: Yup.string()
      .email(languages[lang].invalideEmail)
      .required(languages[lang].required),
    password: Yup.string()
      .required(languages[lang].required)
      .min(8, languages[lang].passwordShort),
    city: Yup.string().required(languages[lang].required),
  });
};

export const forgotPasswordScheme = (lang: string) => {
  return Yup.object().shape({
    email: Yup.string().email('Email must be valid').required('Email is required'),
  });
};

export const resetPasswordScheme = (lang: string) => {
  return Yup.object().shape({
    password: Yup.string().required('Password is required').min(8, 'Password must be at least 8 characters'),
    confirmPassword: Yup.string().required('Confirm Password is required').min(8, 'Confirm Password must be at least 8 characters').oneOf([Yup.ref('password'),], 'Passwords do not match'),
     });
};

export const OTPScheme = (lang: string) => {
  return Yup.object().shape({
    OTP: Yup.string().required('OTP is required'),
  });
};

export const createEscrowScheme = (lang: string) => {
  return Yup.object().shape({
    EscrowName: Yup.string().required('Escrow Name is required'),
    Description: Yup.string().required('Description is required'),
    EscrowValue: Yup.string().required('Escrow Value is required'),
    StartDate: Yup.string().required('Start Date is required'),
    UploadDocument: Yup.object().required('Document is required'),
  });
};

export const AddMilestonesScheme = (lang: string) => {
  return Yup.object().shape({
    MilestoneName: Yup.string().required('Milestone Name is required'),
    MilestoneDescription: Yup.string().required('Milestone Description is required'),
    MilestoneValue: Yup.string().required('Milestone Value is required'),
    StartDate: Yup.string().required('Start Date is required'),
    CompletionDate: Yup.string().required('Completion Date is required'),
  });
};

export const changeMilestonesPasswordScheme = (lang: string) => {
  return Yup.object().shape({
    Value: Yup.string().required('Value is required'),
    Description: Yup.string().required('Description is required'),
    StartDate: Yup.string().required('Start Date is required'),
  });
};

export const DepositFundScheme = (lang: string) => {
  return Yup.object().shape({
    Value: Yup.string().required('Value is required'),
  });
};

export const InviteSupplierScheme = (lang: string) => {
  return Yup.object().shape({
    email: Yup.string().email('Email must be valid').required('Email is required'),
    mobile: Yup.string().required('Mobile is required'),
  });
};

export const RequestScheme = (lang: string) => {
  return Yup.object().shape({
    reason: Yup.string().required('Reason For Payment is required'),
  });
};

