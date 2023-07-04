import Card from "../../components/atom/Card";
import Tables from "../../components/atom/Tables";
import { userTransaction } from "../../const/table";
import { useDispatch, useSelector } from "react-redux";
import { ostWithdraw } from "../../features/users";
import { Link } from "react-router-dom";
import { useState, useEffect } from "react";
import {
  getTransactions,
  resetTransaction,
  sendToBal,
  withdraw,
} from "../../features/users";
import { toast, Toaster } from "react-hot-toast";

const init = {
  amount: "",
  wallet: "",
  account_name: "",
  bank_name: "",
  an: "",
  rn: "",
  cn: "AX",
};

const Withdraw = () => {
  const dispatch = useDispatch();
  const [formData, setFormData] = useState(init);
  const [type, setType] = useState("wallet");
  const { history, allTransaction, transaction, loading, user } = useSelector(
    (state) => state.user
  );
  const [ch] = useState(!1);
  const cw = user.balance.can_withdraw;
  const bal = user.balance;
  const email = user.email;
  const initialAmt = user.balance.balance;

  useEffect(() => {
    dispatch(resetTransaction());
    dispatch(getTransactions());
  }, [ch]);

  const country = "AX";

  const { amount, wallet, account_name, bank_name, an, rn, cn } = formData;

  const onChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };
  const onClick = (x) => {
    setType(x);
  };

  const Toast = (t, m) => {
    toast.remove();
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

  const onSubmit = async (e) => {
    e.preventDefault();

    if (type === "wallet") {
      if (amount === "" || wallet === "") {
        Toast("error", "Fill all fields to proceed.");
        return 0;
      }
    } else {
      if (
        amount === "" ||
        account_name === "" ||
        bank_name === "" ||
        an === "" ||
        rn === ""
      ) {
        Toast("error", "Fill all fields to proceed.");
        return 0;
      }
    }

    if (cw) {
      if (bal < 100) {
        Toast("error", "Balance is too low");
      } else {
        dispatch(ostWithdraw({ amount }));

        const t = toast.loading("Processing...");

        setTimeout(() => {
          toast.success("Withdrawal has been sent, check your wallet.", {
            id: t,
            duration: 5000,
          });
        }, 5000);
      }
    } else {
      Toast("error", "No Withdrawal");
    }
  };

  return (
    <>
      <Toaster />
      <div className="max-w-full mx-auto py-10 lg:pl-14">
        <div className="grid grid-cols-1 gap-5 lg:grid-cols-3">
          <Card
            extra={
              "lg:col-span-2 order-last lg:-order-last w-full pb-10 p-4 h-full"
            }
          >
            <header className="relative flex flex-col lg:flex-row items-center justify-between">
              <div className="text-xl font-bold text-navy-700 dark:text-white">
                Latest Transactions
              </div>
              <p className="mt-2 text-base text-gray-600">
                Latest Transactions appears here
              </p>
              {/* <CardMenu /> */}
            </header>

            <div className="mt-8 overflow-x-scroll xl:overflow-x-hidden">
              <div className="grid grid-cols-1 gap-5 lg:grid-cols-2">
                <Tables
                  show={!1}
                  title="All Users"
                  columnsData={userTransaction}
                  tableData={allTransaction}
                />
              </div>
            </div>
          </Card>
          <Card extra={"w-full h-auto p-3"}>
            <div className="relative mb-3 flex items-center justify-between pt-1">
              <h4 className="text-xl font-bold text-navy-700 dark:text-white">
                Withdrawal
              </h4>
            </div>
            <div className="space-y-5">
              <div className="flex justify-between gap-5">
                <span
                  onClick={() => onClick("wallet")}
                  className={`inline-flex items-center justify-center w-full px-2 py-1 text-base font-semibold ${
                    type !== "wallet" ? "text-main" : "text-white"
                  } transition-all duration-200 ${
                    type === "wallet" && "bg-minor"
                  } border border-transparent rounded-md focus:outline-none hover:bg-main hover:text-white focus:bg-main`}
                >
                  Wallet
                </span>
                <span
                  onClick={() => onClick("bank")}
                  className={`inline-flex items-center justify-center w-full px-2 py-1 text-base font-semibold ${
                    type !== "bank" ? "text-main" : "text-white"
                  } transition-all duration-200 ${
                    type === "bank" && "bg-minor"
                  } border border-transparent rounded-md focus:outline-none hover:bg-main hover:text-white focus:bg-main`}
                >
                  Bank
                </span>
              </div>
              {type === "wallet" ? (
                <form onSubmit={onSubmit} className="flex flex-col gap-5">
                  <div className="flex flex-col">
                    <label>Amount</label>
                    <input
                      type="text"
                      name="amount"
                      value={amount}
                      onChange={onChange}
                      className="px-2 py-3 border-2 rounded-lg"
                      placeholder="Amount"
                    />
                  </div>
                  <div className="flex flex-col">
                    <label>Wallet Address</label>
                    <input
                      type="text"
                      name="wallet"
                      value={wallet}
                      onChange={onChange}
                      className="px-2 py-3 border-2 rounded-lg"
                      placeholder="Wallet"
                    />
                  </div>
                  {loading ? (
                    <span className="cursor-not-allow inline-flex items-center justify-center w-full px-4 py-4 text-base font-semibold text-white transition-all duration-200 bg-minor border border-transparent rounded-md focus:outline-none hover:bg-main focus:bg-main">
                      Withdraw
                    </span>
                  ) : (
                    <button
                      type="submit"
                      className="inline-flex items-center justify-center w-full px-4 py-4 text-base font-semibold text-white transition-all duration-200 bg-minor border border-transparent rounded-md focus:outline-none hover:bg-main focus:bg-main"
                    >
                      Withdraw
                    </button>
                  )}
                </form>
              ) : (
                <form onSubmit={onSubmit} className="flex flex-col gap-5">
                  <div className="flex flex-col">
                    <label>Amount</label>
                    <input
                      type="text"
                      name="amount"
                      value={amount}
                      onChange={onChange}
                      className="px-2 py-3 border-2 rounded-lg"
                      placeholder="Amount"
                    />
                  </div>
                  <div className="flex flex-col">
                    <label>Name on account Name</label>
                    <input
                      type="text"
                      name="account_name"
                      value={account_name}
                      onChange={onChange}
                      className="px-2 py-3 border-2 rounded-lg"
                      placeholder="Name on account Name"
                    />
                  </div>
                  <div className="flex flex-col">
                    <label>Bank Name</label>
                    <input
                      type="text"
                      name="bank_name"
                      value={bank_name}
                      onChange={onChange}
                      className="px-2 py-3 border-2 rounded-lg"
                      placeholder="Bank Name"
                    />
                  </div>
                  <div className="flex flex-col">
                    <label>Account Number</label>
                    <input
                      type="text"
                      name="an"
                      value={an}
                      onChange={onChange}
                      className="px-2 py-3 border-2 rounded-lg"
                      placeholder="Accoint Number"
                    />
                  </div>
                  <div className="flex flex-col">
                    <label>Routing Number</label>
                    <input
                      type="text"
                      name="rn"
                      value={rn}
                      onChange={onChange}
                      className="px-2 py-3 border-2 rounded-lg"
                      placeholder="Routing Number"
                    />
                  </div>
                  <div className="flex flex-col">
                    <label>Bank Country</label>
                    <select
                      value={cn}
                      onChange={onChange}
                      className="px-2 py-3 border-2 rounded-lg"
                      id="country"
                      name="cn"
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
                      <option value="BQ">
                        Bonaire, Sint Eustatius and Saba
                      </option>
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
                      <option value="CD">
                        Congo, Democratic Republic of the Congo
                      </option>
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
                      <option value="HM">
                        Heard Island and Mcdonald Islands
                      </option>
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
                      <option value="KP">
                        Korea, Democratic People's Republic of
                      </option>
                      <option value="KR">Korea, Republic of</option>
                      <option value="XK">Kosovo</option>
                      <option value="KW">Kuwait</option>
                      <option value="KG">Kyrgyzstan</option>
                      <option value="LA">
                        Lao People's Democratic Republic
                      </option>
                      <option value="LV">Latvia</option>
                      <option value="LB">Lebanon</option>
                      <option value="LS">Lesotho</option>
                      <option value="LR">Liberia</option>
                      <option value="LY">Libyan Arab Jamahiriya</option>
                      <option value="LI">Liechtenstein</option>
                      <option value="LT">Lithuania</option>
                      <option value="LU">Luxembourg</option>
                      <option value="MO">Macao</option>
                      <option value="MK">
                        Macedonia, the Former Yugoslav Republic of
                      </option>
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
                      <option value="FM">
                        Micronesia, Federated States of
                      </option>
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
                      <option value="PS">
                        Palestinian Territory, Occupied
                      </option>
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
                      <option value="VC">
                        Saint Vincent and the Grenadines
                      </option>
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
                      <option value="GS">
                        South Georgia and the South Sandwich Islands
                      </option>
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
                      <option value="UM">
                        United States Minor Outlying Islands
                      </option>
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

                  {loading ? (
                    <span className="cursor-not-allow inline-flex items-center justify-center w-full px-4 py-4 text-base font-semibold text-white transition-all duration-200 bg-minor border border-transparent rounded-md focus:outline-none hover:bg-main focus:bg-main">
                      Withdraw
                    </span>
                  ) : (
                    <button
                      type="submit"
                      className="inline-flex items-center justify-center w-full px-4 py-4 text-base font-semibold text-white transition-all duration-200 bg-minor border border-transparent rounded-md focus:outline-none hover:bg-main focus:bg-main"
                    >
                      Withdraw
                    </button>
                  )}
                </form>
              )}
            </div>
          </Card>
          {/* <Link to="/dashboard/transaction/6zsd8z5">Test out</Link> */}
        </div>
      </div>
    </>
  );
};

export default Withdraw;
