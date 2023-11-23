import { useEffect, useState } from "react";
// import { toast, Toaster } from "react-hot-toast";
  import { ToastContainer, toast } from 'react-toastify';
  import 'react-toastify/dist/ReactToastify.css';
import { Link, Navigate, useParams } from "react-router-dom";
import {
  AtSymbol,
  Briefcase,
  CurrencyDollar,
  FingerPrint,
  User,
  Global,
  Banknotes,
  DevicePhoneMobile,
} from "../../components/atom/Icons";
import { siteName } from "../../components/const";
import { Register as Reg, postTransaction } from "../../features/users";
import { useSelector, useDispatch } from "react-redux";
import Converter from "../../components/atom/Converter";
const initial = {
  plan: "silver",
  amount: "",
  payment: "btc",
  country: "AX",
  fullName: "",
  email: "",
  password: "",
  pwd: "",
  phoneNumber: "",
  agree: "",
  roi: "1",
};
const Register = () => {
  const { ref } = useParams();
  const dispatch = useDispatch();
  const { registered, transaction, loading } = useSelector(
    (state) => state.user
  );
  const refCode = ref !== undefined ? ref : null;
  const [formData, setFormData] = useState(initial);
  const [start, setStart] = useState(500);
  const [stop, setStop] = useState(5000);
  const [step, setStep] = useState(5000);
  const [err, setErr] = useState(!!0);

  const {
    plan,
    amount,
    payment,
    country,
    phoneNumber,
    fullName,
    email,
    password,
    pwd,
    agree,
    roi,
  } = formData;

  const onInput = () => {
    if (amount !== "") {
      const re = /^[0-9]+$/;
      if (re.test(amount)) {
        const $amt = Number(amount);
        if (plan === "silver") {
          if ($amt < 500) {
            Toast("error", `${$amt} is less than the minimum for ${plan} plan`);
            setErr(!!1);
            return 0;
          } else if ($amt > 4999) {
            Toast(
              "error",
              `${$amt} is higher than the maximum for ${plan} plan`
            );
            setErr(!!1);
            return 0;
          } else {
            setErr(!!0);
            toast.dismiss();
          }
        }
        if (plan === "gold") {
          if ($amt < 5000) {
            Toast("error", `${$amt} is less than the minimum for ${plan} plan`);
            setErr(!!1);
            return 0;
          } else if ($amt > 49999) {
            Toast(
              "error",
              `${$amt} is higher than the maximum for ${plan} plan`
            );
            setErr(!!1);
            return 0;
          } else {
            setErr(!!0);
            toast.dismiss();
          }
        }
        if (plan === "platinum") {
          if ($amt < 50000) {
            Toast("error", `${$amt} is less than the minimum for ${plan} plan`);
            setErr(!!1);
            return 0;
          } else if ($amt > 1000000) {
            Toast(
              "error",
              `${$amt} is higher than the maximum for ${plan} plan`
            );
            setErr(!!1);
            return 0;
          } else {
            setErr(!!0);
            toast.dismiss();
          }
        }
      } else {
        Toast("error", `Invalid amount entered`);
        setErr(!!1);
        return 0;
      }
    } else {
      setErr(!!0);
      toast.dismiss();
    }
  };

  useEffect(() => {
    if (plan === "silver") {
      setFormData({ ...formData, roi: "1" });
    } else if (plan === "gold") {
      setFormData({ ...formData, roi: "2" });
    } else {
      setFormData({ ...formData, roi: "4" });
    }
  }, [plan]);

  useEffect(() => {
    if (plan === "silver") {
      setStart(500);
      setStop(5000);
      setStep(500);
    } else if (plan === "gold") {
      setStart(5000);
      setStop(30000);
      setStep(1000);
    } else {
      setStart(50000);
      setStop(100000);
      setStep(2000);
    }
  }, [plan]);

  let i;
  let list = new Array();
  for (let i = start; i <= stop; i += step) {
    list.push(i);
  }

  const onChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const onCheckBox = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.checked });
  };

  const Toast = (t, m) => {
    toast.dismiss();
    if (t === "success") {
      toast.success(m);
    } else if (t === "info") {
      toast.info(m);
    } else if (t === "error") {
      toast.error(m);
    } else if (t === "warn") {
      toast.warn(m);
    }
  };

  useEffect(() => {
    onInput();
  }, [formData]);

  useEffect(() => {
    const re = /^[0-9]+$/;
    if (!re.test(phoneNumber)) {
      Toast("error", "Invalid characters in Phone Number");
    }
  }, [phoneNumber]);

  const onSubmit = async (e) => {
    e.preventDefault();

    if (
      plan === "" ||
      amount === "" ||
      payment === "" ||
      country === "" ||
      phoneNumber === "" ||
      fullName === "" ||
      email === "" ||
      password === "" ||
      pwd === ""
    ) {
      toast.error("Please fill all fields");
      return 0;
    }

    if (roi === "") {
      toast.error("No ROI selected");
      return 0;
    }

    if (!agree) {
      toast.error("Please agree to Terms to continue");
      return 0;
    }

    if (password !== pwd) {
      toast.error("Both password don't match");
      return 0;
    }

    if (phoneNumber.length < 8) {
      toast.error("Enter a valid phone number");
      return 0;
    }

    const n = fullName.trim().split(" ");

    if (n.length < 2) {
      toast.error("Please provide full name");
      return 0;
    } else if (n.length > 2) {
      toast.error("Please provide just a first name and last name");
      return 0;
    }

    if (amount !== "") {
      const re = /^[0-9]+$/;
      if (re.test(amount)) {
        const $amt = Number(amount);
        if (plan === "silver") {
          if ($amt < 500) {
            Toast("error", `${$amt} is less than the minimum for ${plan} plan`);
            setErr(!!1);
            return 0;
          } else if ($amt > 4999) {
            Toast(
              "error",
              `${$amt} is higher than the maximum for ${plan} plan`
            );
            setErr(!!1);
            return 0;
          } else {
            setErr(!!0);
            toast.dismiss();
          }
        }
        if (plan === "gold") {
          if ($amt < 5000) {
            Toast("error", `${$amt} is less than the minimum for ${plan} plan`);
            setErr(!!1);
            return 0;
          } else if ($amt > 49999) {
            Toast(
              "error",
              `${$amt} is higher than the maximum for ${plan} plan`
            );
            setErr(!!1);
            return 0;
          } else {
            setErr(!!0);
            toast.dismiss();
          }
        }
        if (plan === "platinum") {
          if ($amt < 50000) {
            Toast("error", `${$amt} is less than the minimum for ${plan} plan`);
            setErr(!!1);
            return 0;
          } else if ($amt > 1000000) {
            Toast(
              "error",
              `${$amt} is higher than the maximum for ${plan} plan`
            );
            setErr(!!1);
            return 0;
          } else {
            setErr(!!0);
            toast.dismiss();
          }
        }
      } else {
        Toast("error", `Invalid amount entered`);
        setErr(!!1);
        return 0;
      }
    } else {
      setErr(!!0);
      toast.dismiss();
    }

    const aX = toast.loading("Creating your account...");
    
    if (err == false) {
      try {
        const res = await dispatch(Reg({ ...formData, refCode }));
        if (res.meta.requestStatus.toLowerCase() === "rejected") {
          // if (res.payload.statusText.toLowerCase() === "bad request") {
          for (const prop in res?.payload?.detail) {
            toast.dismiss(aX);
            Toast("error", `${res?.payload?.detail[prop]}`);
          }
          // }
        } else {
          const msg = "Account successfully created";
          
          toast.dismiss(aX);
          Toast("success", `${msg}, Check your mail to continue`);
          // setTimeout(() => {}, 2000);
        }
      } catch (err) {
        toast.dismiss(aX);
        Toast("error", `Can't register you now, We are working to fix this.`);
      }
    } else {
    }
  };
  
  if (registered)
    // return <Navigate to={`/dashboard/transaction/${transaction.uuid}`} />;
  return <Navigate to={`/dashboard`} />;

  return (
    <>
      {/* <Toaster /> */}
      <ToastContainer />

      <div className="max-w-2xl mx-auto text-center">
        <h2 className="text-4xl font-bold leading-tight text-black lg:text-5xl">
          Create a free account
        </h2>
        <p className="max-w-xl mx-auto mt-4 text-base leading-relaxed text-gray-600">
          Create an account in less than 2 minutes,{" "}
          <br className="inline-block lg:hidden" />
          To get started.
        </p>
      </div>

      <div className="relatives w-auto lg:w-[800px] mx-auto mt-4 lg:mt-6">
        <div className="overflow-hidden bg-white rounded-md shadow-md">
          <div className="px-8 py-7">
            <form onSubmit={onSubmit}>
              <div className="space-y-5">
                <div className="flex flex-col lg:flex-row lg:gap-5">
                  <div className="space-y-5 w-full lg:w-[50%]">
                    <div>
                      <label
                        htmlFor=""
                        className="text-base font-medium text-gray-900"
                      >
                        Investment Plan
                      </label>
                      <div className="mt-2.5 relative text-gray-400 focus-within:text-gray-600">
                        <div className="absolute inset-y-0 left-0 flex items-center pl-3 pointer-events-none">
                          <Briefcase />
                        </div>

                        <select
                          onChange={onChange}
                          name="plan"
                          value={plan}
                          className="block w-full py-4 pl-10 pr-4 text-black placeholder-gray-500 transition-all duration-200 bg-white border border-gray-200 rounded-md focus:outline-none focus:border-minorDark caret-minorDark"
                        >
                          <option value="silver">Silver</option>
                          <option value="gold">Gold</option>
                          <option value="platinum">Platinum</option>
                        </select>
                      </div>
                    </div>

                    <div>
                      <label
                        htmlFor=""
                        className="text-base font-medium text-gray-900"
                      >
                        Amount
                      </label>
                      <div className="mt-2.5 relative text-gray-400 focus-within:text-gray-600">
                        <div className="absolute inset-y-0 left-0 flex items-center pl-3 pointer-events-none">
                          <CurrencyDollar />
                        </div>

                        {/* <select
                          onChange={onChange}
                          name="amount"
                          value={amount}
                          className="block w-full py-4 pl-10 pr-4 text-black placeholder-gray-500 transition-all duration-200 bg-white border border-gray-200 rounded-md focus:outline-none focus:border-minorDark caret-minorDark"
                        >
                          {list.map((x) => (
                            <option key={x}>{x}</option>
                          ))}
                        </select> */}
                        <input
                          type="text"
                          onChange={onChange}
                          name="amount"
                          value={amount}
                          placeholder="Enter amount"
                          className="block w-full py-4 pl-10 pr-4 text-black placeholder-gray-500 transition-all duration-200 bg-white border border-gray-200 rounded-md focus:outline-none focus:border-minorDark caret-minorDark"
                        />
                      </div>
                    </div>

                    <div>
                      <label
                        htmlFor=""
                        className="text-base font-medium text-gray-900"
                      >
                        Investment Funding medium
                      </label>
                      <div className="mt-2.5 relative text-gray-400 focus-within:text-gray-600">
                        <div className="absolute inset-y-0 left-0 flex items-center pl-3 pointer-events-none">
                          <Banknotes />
                        </div>

                        <select
                          name="payment"
                          value={payment}
                          onChange={onChange}
                          className="block w-full py-4 pl-10 pr-4 text-black placeholder-gray-500 transition-all duration-200 bg-white border border-gray-200 rounded-md focus:outline-none focus:border-minorDark caret-minorDark"
                        >
                          <option value="btc">BTC</option>
                        </select>
                      </div>
                    </div>

                    <Converter />

                    <div>
                      <label
                        htmlFor=""
                        className="text-base font-medium text-gray-900"
                      >
                        Select Country
                      </label>
                      <div className="mt-2.5 relative text-gray-400 focus-within:text-gray-600">
                        <div className="absolute inset-y-0 left-0 flex items-center pl-3 pointer-events-none">
                          <Global />
                        </div>

                        <select
                          value={country}
                          onChange={onChange}
                          className="block w-full py-4 pl-10 pr-4 text-black placeholder-gray-500 transition-all duration-200 bg-white border border-gray-200 rounded-md focus:outline-none focus:border-minorDark caret-minorDark"
                          id="country"
                          name="country"
                        >
                          <option value="AX">Aland Islands</option>
                          <option value="AL">Albania</option>
                          <option value="DZ">Algeria</option>
                          <option value="AS">American Samoa</option>
                          <option value="AD">Andorra</option>
                          <option value="AO">Angola</option>
                          <option value="AI">Anguilla</option>
                          <option value="AQ">Antarctica</option>
                          <option value="AG">Antigua and Barbuda</option>
                          <option value="AR">Argentina</option>
                          <option value="AM">Armenia</option>
                          <option value="AW">Aruba</option>
                          <option value="AU">Australia</option>
                          <option value="AT">Austria</option>
                          <option value="AZ">Azerbaijan</option>
                          <option value="BS">Bahamas</option>
                          <option value="BH">Bahrain</option>
                          <option value="BD">Bangladesh</option>
                          <option value="BB">Barbados</option>
                          <option value="BY">Belarus</option>
                          <option value="BE">Belgium</option>
                          <option value="BZ">Belize</option>
                          <option value="BJ">Benin</option>
                          <option value="BM">Bermuda</option>
                          <option value="BT">Bhutan</option>
                          <option value="BO">Bolivia</option>
                          <option value="BQ">Bonaire, Sint Eustatius and Saba</option>
                          <option value="BA">Bosnia and Herzegovina</option>
                          <option value="BW">Botswana</option>
                          <option value="BV">Bouvet Island</option>
                          <option value="BR">Brazil</option>
                          <option value="IO">British Indian Ocean Territory</option>
                          <option value="BN">Brunei Darussalam</option>
                          <option value="BG">Bulgaria</option>
                          <option value="BF">Burkina Faso</option>
                          <option value="BI">Burundi</option>
                          <option value="KH">Cambodia</option>
                          <option value="CM">Cameroon</option>
                          <option value="CA">Canada</option>
                          <option value="CV">Cape Verde</option>
                          <option value="KY">Cayman Islands</option>
                          <option value="CF">Central African Republic</option>
                          <option value="TD">Chad</option>
                          <option value="CL">Chile</option>
                          <option value="CN">China</option>
                          <option value="CX">Christmas Island</option>
                          <option value="CC">Cocos (Keeling) Islands</option>
                          <option value="CO">Colombia</option>
                          <option value="KM">Comoros</option>
                          <option value="CG">Congo</option>
                          <option value="CD">Congo, Democratic Republic of the Congo</option>
                          <option value="CK">Cook Islands</option>
                          <option value="CR">Costa Rica</option>
                          <option value="CI">Cote D'Ivoire</option>
                          <option value="HR">Croatia</option>
                          <option value="CU">Cuba</option>
                          <option value="CW">Curacao</option>
                          <option value="CY">Cyprus</option>
                          <option value="CZ">Czech Republic</option>
                          <option value="DK">Denmark</option>
                          <option value="DJ">Djibouti</option>
                          <option value="DM">Dominica</option>
                          <option value="DO">Dominican Republic</option>
                          <option value="EC">Ecuador</option>
                          <option value="EG">Egypt</option>
                          <option value="SV">El Salvador</option>
                          <option value="GQ">Equatorial Guinea</option>
                          <option value="ER">Eritrea</option>
                          <option value="EE">Estonia</option>
                          <option value="ET">Ethiopia</option>
                          <option value="FK">Falkland Islands (Malvinas)</option>
                          <option value="FO">Faroe Islands</option>
                          <option value="FJ">Fiji</option>
                          <option value="FI">Finland</option>
                          <option value="FR">France</option>
                          <option value="GF">French Guiana</option>
                          <option value="PF">French Polynesia</option>
                          <option value="TF">French Southern Territories</option>
                          <option value="GA">Gabon</option>
                          <option value="GM">Gambia</option>
                          <option value="GE">Georgia</option>
                          <option value="DE">Germany</option>
                          <option value="GH">Ghana</option>
                          <option value="GI">Gibraltar</option>
                          <option value="GR">Greece</option>
                          <option value="GL">Greenland</option>
                          <option value="GD">Grenada</option>
                          <option value="GP">Guadeloupe</option>
                          <option value="GU">Guam</option>
                          <option value="GT">Guatemala</option>
                          <option value="GG">Guernsey</option>
                          <option value="GN">Guinea</option>
                          <option value="GW">Guinea-Bissau</option>
                          <option value="GY">Guyana</option>
                          <option value="HT">Haiti</option>
                          <option value="HM">Heard Island and Mcdonald Islands</option>
                          <option value="VA">Holy See (Vatican City State)</option>
                          <option value="HN">Honduras</option>
                          <option value="HK">Hong Kong</option>
                          <option value="HU">Hungary</option>
                          <option value="IS">Iceland</option>
                          <option value="IN">India</option>
                          <option value="ID">Indonesia</option>
                          <option value="IR">Iran, Islamic Republic of</option>
                          <option value="IQ">Iraq</option>
                          <option value="IE">Ireland</option>
                          <option value="IM">Isle of Man</option>
                          <option value="IL">Israel</option>
                          <option value="IT">Italy</option>
                          <option value="JM">Jamaica</option>
                          <option value="JP">Japan</option>
                          <option value="JE">Jersey</option>
                          <option value="JO">Jordan</option>
                          <option value="KZ">Kazakhstan</option>
                          <option value="KE">Kenya</option>
                          <option value="KI">Kiribati</option>
                          <option value="KP">Korea, Democratic People's Republic of</option>
                          <option value="KR">Korea, Republic of</option>
                          <option value="XK">Kosovo</option>
                          <option value="KW">Kuwait</option>
                          <option value="KG">Kyrgyzstan</option>
                          <option value="LA">Lao People's Democratic Republic</option>
                          <option value="LV">Latvia</option>
                          <option value="LB">Lebanon</option>
                          <option value="LS">Lesotho</option>
                          <option value="LR">Liberia</option>
                          <option value="LY">Libyan Arab Jamahiriya</option>
                          <option value="LI">Liechtenstein</option>
                          <option value="LT">Lithuania</option>
                          <option value="LU">Luxembourg</option>
                          <option value="MO">Macao</option>
                          <option value="MK">Macedonia, the Former Yugoslav Republic of</option>
                          <option value="MG">Madagascar</option>
                          <option value="MW">Malawi</option>
                          <option value="MY">Malaysia</option>
                          <option value="MV">Maldives</option>
                          <option value="ML">Mali</option>
                          <option value="MT">Malta</option>
                          <option value="MH">Marshall Islands</option>
                          <option value="MQ">Martinique</option>
                          <option value="MR">Mauritania</option>
                          <option value="MU">Mauritius</option>
                          <option value="YT">Mayotte</option>
                          <option value="MX">Mexico</option>
                          <option value="FM">Micronesia, Federated States of</option>
                          <option value="MD">Moldova, Republic of</option>
                          <option value="MC">Monaco</option>
                          <option value="MN">Mongolia</option>
                          <option value="ME">Montenegro</option>
                          <option value="MS">Montserrat</option>
                          <option value="MA">Morocco</option>
                          <option value="MZ">Mozambique</option>
                          <option value="MM">Myanmar</option>
                          <option value="NA">Namibia</option>
                          <option value="NR">Nauru</option>
                          <option value="NP">Nepal</option>
                          <option value="NL">Netherlands</option>
                          <option value="AN">Netherlands Antilles</option>
                          <option value="NC">New Caledonia</option>
                          <option value="NZ">New Zealand</option>
                          <option value="NI">Nicaragua</option>
                          <option value="NE">Niger</option>
                          <option value="NG">Nigeria</option>
                          <option value="NU">Niue</option>
                          <option value="NF">Norfolk Island</option>
                          <option value="MP">Northern Mariana Islands</option>
                          <option value="NO">Norway</option>
                          <option value="OM">Oman</option>
                          <option value="PK">Pakistan</option>
                          <option value="PW">Palau</option>
                          <option value="PS">Palestinian Territory, Occupied</option>
                          <option value="PA">Panama</option>
                          <option value="PG">Papua New Guinea</option>
                          <option value="PY">Paraguay</option>
                          <option value="PE">Peru</option>
                          <option value="PH">Philippines</option>
                          <option value="PN">Pitcairn</option>
                          <option value="PL">Poland</option>
                          <option value="PT">Portugal</option>
                          <option value="PR">Puerto Rico</option>
                          <option value="QA">Qatar</option>
                          <option value="RE">Reunion</option>
                          <option value="RO">Romania</option>
                          <option value="RU">Russian Federation</option>
                          <option value="RW">Rwanda</option>
                          <option value="BL">Saint Barthelemy</option>
                          <option value="SH">Saint Helena</option>
                          <option value="KN">Saint Kitts and Nevis</option>
                          <option value="LC">Saint Lucia</option>
                          <option value="MF">Saint Martin</option>
                          <option value="PM">Saint Pierre and Miquelon</option>
                          <option value="VC">Saint Vincent and the Grenadines</option>
                          <option value="WS">Samoa</option>
                          <option value="SM">San Marino</option>
                          <option value="ST">Sao Tome and Principe</option>
                          <option value="SA">Saudi Arabia</option>
                          <option value="SN">Senegal</option>
                          <option value="RS">Serbia</option>
                          <option value="CS">Serbia and Montenegro</option>
                          <option value="SC">Seychelles</option>
                          <option value="SL">Sierra Leone</option>
                          <option value="SG">Singapore</option>
                          <option value="SX">Sint Maarten</option>
                          <option value="SK">Slovakia</option>
                          <option value="SI">Slovenia</option>
                          <option value="SB">Solomon Islands</option>
                          <option value="SO">Somalia</option>
                          <option value="ZA">South Africa</option>
                          <option value="GS">South Georgia and the South Sandwich Islands</option>
                          <option value="SS">South Sudan</option>
                          <option value="ES">Spain</option>
                          <option value="LK">Sri Lanka</option>
                          <option value="SD">Sudan</option>
                          <option value="SR">Suriname</option>
                          <option value="SJ">Svalbard and Jan Mayen</option>
                          <option value="SZ">Swaziland</option>
                          <option value="SE">Sweden</option>
                          <option value="CH">Switzerland</option>
                          <option value="SY">Syrian Arab Republic</option>
                          <option value="TW">Taiwan, Province of China</option>
                          <option value="TJ">Tajikistan</option>
                          <option value="TZ">Tanzania, United Republic of</option>
                          <option value="TH">Thailand</option>
                          <option value="TL">Timor-Leste</option>
                          <option value="TG">Togo</option>
                          <option value="TK">Tokelau</option>
                          <option value="TO">Tonga</option>
                          <option value="TT">Trinidad and Tobago</option>
                          <option value="TN">Tunisia</option>
                          <option value="TR">Turkey</option>
                          <option value="TM">Turkmenistan</option>
                          <option value="TC">Turks and Caicos Islands</option>
                          <option value="TV">Tuvalu</option>
                          <option value="UG">Uganda</option>
                          <option value="UA">Ukraine</option>
                          <option value="AE">United Arab Emirates</option>
                          <option value="GB">United Kingdom</option>
                          <option value="US">United States</option>
                          <option value="UM">United States Minor Outlying Islands</option>
                          <option value="UY">Uruguay</option>
                          <option value="UZ">Uzbekistan</option>
                          <option value="VU">Vanuatu</option>
                          <option value="VE">Venezuela</option>
                          <option value="VN">Viet Nam</option>
                          <option value="VG">Virgin Islands, British</option>
                          <option value="VI">Virgin Islands, U.s.</option>
                          <option value="WF">Wallis and Futuna</option>
                          <option value="EH">Western Sahara</option>
                          <option value="YE">Yemen</option>
                          <option value="ZM">Zambia</option>
                          <option value="ZW">Zimbabwe</option>
                        </select>
                      </div>
                    </div>
                    <div>
                      <label
                        htmlFor="label"
                        className="text-base font-medium text-gray-900"
                      >
                        Choose ROI model:
                      </label>
                      <select
                        name="roi"
                        value={roi}
                        onChange={onChange}
                        disabled={!0}
                        className="block w-full py-4 pl-10 pr-4 text-black placeholder-gray-500 transition-all duration-200 bg-white border border-gray-200 rounded-md focus:outline-none focus:border-minorDark caret-minorDark"
                      >
                        <option>Select from the above</option>
                        <option value="1">1 week</option>
                        <option value="2">2 weeks</option>
                        {/* <option value="3">3 weeks</option> */}
                        <option value="4">4 weeks</option>
                      </select>
                    </div>
                  </div>
                  <div className="space-y-5 w-full lg:w-[50%]">
                    <div>
                      <label
                        htmlFor=""
                        className="text-base font-medium text-gray-900"
                      >
                        First & Last Name
                      </label>
                      <div className="mt-2.5 relative text-gray-400 focus-within:text-gray-600">
                        <div className="absolute inset-y-0 left-0 flex items-center pl-3 pointer-events-none">
                          <User />
                        </div>

                        <input
                          type="text"
                          name="fullName"
                          value={fullName}
                          onChange={onChange}
                          placeholder="Enter your full name"
                          className="block w-full py-4 pl-10 pr-4 text-black placeholder-gray-500 transition-all duration-200 bg-white border border-gray-200 rounded-md focus:outline-none focus:border-minorDark caret-minorDark"
                        />
                      </div>
                    </div>

                    <div>
                      <label
                        htmlFor=""
                        className="text-base font-medium text-gray-900"
                      >
                        Phone Number
                      </label>
                      <div className="mt-2.5 relative text-gray-400 focus-within:text-gray-600">
                        <div className="absolute inset-y-0 left-0 flex items-center pl-3 pointer-events-none">
                          <DevicePhoneMobile />
                        </div>

                        <input
                          type="text"
                          name="phoneNumber"
                          value={phoneNumber}
                          onChange={onChange}
                          placeholder="Enter your phone"
                          className="block w-full py-4 pl-10 pr-4 text-black placeholder-gray-500 transition-all duration-200 bg-white border border-gray-200 rounded-md focus:outline-none focus:border-minorDark caret-minorDark"
                        />
                      </div>
                    </div>

                    <div>
                      <label
                        htmlFor=""
                        className="text-base font-medium text-gray-900"
                      >
                        Email address
                      </label>
                      <div className="mt-2.5 relative text-gray-400 focus-within:text-gray-600">
                        <div className="absolute inset-y-0 left-0 flex items-center pl-3 pointer-events-none">
                          <AtSymbol />
                        </div>

                        <input
                          type="email"
                          name="email"
                          value={email}
                          onChange={onChange}
                          placeholder="Enter email to get started"
                          className="block w-full py-4 pl-10 pr-4 text-black placeholder-gray-500 transition-all duration-200 bg-white border border-gray-200 rounded-md focus:outline-none focus:border-minorDark caret-minorDark"
                        />
                      </div>
                    </div>

                    <div>
                      <label
                        htmlFor=""
                        className="text-base font-medium text-gray-900"
                      >
                        Password
                      </label>
                      <div className="mt-2.5 relative text-gray-400 focus-within:text-gray-600">
                        <div className="absolute inset-y-0 left-0 flex items-center pl-3 pointer-events-none">
                          <FingerPrint />
                        </div>

                        <input
                          type="password"
                          name="password"
                          value={password}
                          onChange={onChange}
                          placeholder="Enter your password"
                          className="block w-full py-4 pl-10 pr-4 text-black placeholder-gray-500 transition-all duration-200 bg-white border border-gray-200 rounded-md focus:outline-none focus:border-minorDark caret-minorDark"
                        />
                      </div>
                    </div>

                    <div>
                      <label
                        htmlFor=""
                        className="text-base font-medium text-gray-900"
                      >
                        Confirm Password
                      </label>
                      <div className="mt-2.5 relative text-gray-400 focus-within:text-gray-600">
                        <div className="absolute inset-y-0 left-0 flex items-center pl-3 pointer-events-none">
                          <FingerPrint />
                        </div>

                        <input
                          type="password"
                          name="pwd"
                          value={pwd}
                          onChange={onChange}
                          placeholder="Confirm password"
                          className="block w-full py-4 pl-10 pr-4 text-black placeholder-gray-500 transition-all duration-200 bg-white border border-gray-200 rounded-md focus:outline-none focus:border-minorDark caret-minorDark"
                        />
                      </div>
                    </div>
                  </div>
                </div>

                <div className="flex items-center">
                  <input
                    type="checkbox"
                    name="agree"
                    onChange={onCheckBox}
                    className="w-5 h-5 accent-main bg-white text-white border-minorLight rounded"
                  />

                  <label
                    htmlFor="agree"
                    className="ml-3 text-sm font-medium text-gray-500"
                  >
                    I agree to {siteName}{" "}
                    <a
                      href="#"
                      title=""
                      className="text-blue-600 hover:text-blue-700 hover:underline"
                    >
                      Terms of Service
                    </a>
                    {" and "}
                    <a
                      href="#"
                      title=""
                      className="text-blue-600 hover:text-blue-700 hover:underline"
                    >
                      Privacy Policy
                    </a>
                  </label>
                </div>

                {loading ? (
                  <div>
                    <div className="cursor-not-allowed inline-flex items-center justify-center w-full px-4 py-4 text-base font-semibold text-white transition-all duration-200 bg-minor bg-opacity-50 border border-transparent rounded-md focus:outline-none hover:bg-main focus:bg-main">
                      Create my account
                    </div>
                  </div>
                ) : (
                  <div>
                    <button
                      type="submit"
                      className="inline-flex items-center justify-center w-full px-4 py-4 text-base font-semibold text-white transition-all duration-200 bg-minor border border-transparent rounded-md focus:outline-none hover:bg-main focus:bg-main"
                    >
                      Create my account
                    </button>
                  </div>
                )}

                <div className="text-center">
                  <p className="text-base text-gray-600">
                    Already have an account?{" "}
                    <Link
                      to="/auth"
                      title="Login to your account"
                      className="font-medium text-orange-500 transition-all duration-200 hover:text-orange-600 hover:underline"
                    >
                      Login here
                    </Link>
                  </p>
                </div>
              </div>
            </form>
          </div>
        </div>
      </div>
    </>
  );
};

export default Register;
