import { Button } from "@mui/material";
import { useRouter } from "next/router";
import { useState } from "react";
import baseUrl from '../../helpers/baseUrl'

export default function Checkout() {
  const router = useRouter()
  const { slug } = router.query;
  const [fullName, setFullName] = useState("");
  const [email, setEmail] = useState("");
  const [requirements, setRequirements] = useState("");
  const [nameOnCard, setNameOnCard] = useState("");
  const [creditCardNo, setCreditCardNo] = useState("");
  const [expiration, setExpiration] = useState("");
  const [cVV, setCVV] = useState("");
  const [responseCheckout, setResponseCheckout] = useState("");

  const fullNameReg = /^[a-zA-Z]/;
  const emailReg = /^[a-zA-Z0-9._-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,6}$/;

  const EmailValidator = () => {
    var x = document.getElementById("em_ail_");

    if (emailReg.test(email) && email !== "") {
      x.classList.remove("is-invalid");
      x.classList.add("is-valid");
    } else {
      x.classList.remove("is-valid");
      x.classList.add("is-invalid");
    }
  };

  const fullNameValidator = () => {
    let nameIn = document.getElementById("_full_Name");
    if (fullNameReg.test(fullName) && fullName !== " ") {
      nameIn.classList.remove("is-invalid");
      nameIn.classList.add("is-valid");
    } else {
      nameIn.classList.remove("is-valid");
      nameIn.classList.add("is-invalid");
    }
  };

  const saveCheckout = async (e) => {
    e.preventDefault()
    console.log(router.asPath);
    const currPath = router.asPath;
    let price=0;
    let productName = ""
    if(currPath.includes("mobile-standard")){
      price="$38"
      productName="Mobile App - Standard"
    }
    else if(currPath.includes("mobile-pro")){
      price="$100"
      productName="Mobile App - Pro"
    }
    else if(currPath.includes("mobile-business")){
      price="$200"
      productName="Mobile App - Business"
    }
  
    else if(currPath.includes("web-app-standard")){
      price="$38"
      productName="Web App - Standard"
    }
    else if(currPath.includes("web-app-pro")){
      price="$100"
      productName="Web App - Pro"
    }
    else if(currPath.includes("web-app-business")){
      price="$200"
      productName="Web App - Business"
    }
  
    else if(currPath.includes("data-science-standard")){
      price="$38"
      productName="Data Science - Standard"
    }
    else if(currPath.includes("data-science-pro")){
      price="$100"
      productName="Data Science - Pro"
    }
    else if(currPath.includes("data-science-business")){
      price="$200"
      productName="Data Science - Business"
    }
  
    else if(currPath.includes("ai-standard")){
      price="$38"
      productName="AI/ML - Standard"
    }
    else if(currPath.includes("ai-pro")){
      price="$100"
      productName="AI/ML - Pro"
    }
    else if(currPath.includes("ai-business")){
      price="$200"
      productName="AI/ML - Business"
    }
    // console.log(`fullName ${fullName} email ${email} zipCode ${zipCode} message ${message} price ${price}`)
    const res=await fetch(`${baseUrl}/api/checkout`,{
      method:"POST",
      headers:{
        "Content-Type":"application/json"
      },
      body:JSON.stringify({
        productName,
        price,
        email,
        requirements,
        nameOnCard,
        creditCardNo,
        expiration,
        cVV
      })
    })
    const res2 = await res.json()
    if(res2.error){
      console.log(`Error while saving checkout`)
      setResponseCheckout(res2.error)
      if(res2.error=="User is not registered. Please signup first!"){
        router.push('/signup')
      }
    }else{
      console.log(`Checkout Saved Successfully`)
      setResponseCheckout("Checkout Saved Successfully")
      // router.push('/login')
    }
  }

  return (
    <div className="container">
      <main>
        <div className="py-5 text-center">
          <h2 className="fw-bold">Fill Checkout form to continue</h2>
        </div>

        <div className="row g-5">
          <Cart />

          <div className="col-md-7 col-lg-8">
            <h4 className="mb-3">Billing Details</h4>
            <form className="needs-validation ">
              <div className="row g-3">
                <div className="col-md-6">
                  <input
                    type="text"
                    className={`shadow-none px-2 my-2 w-100 py-2 form-control`}
                    placeholder="Name"
                    id="_full_Name"
                    onChange={(e) => {
                      setFullName(e.target.value);
                    }}
                    onBlur={() => {
                      fullNameValidator();
                    }}
                  />
                  <div className="invalid-feedback mx-3">
                    Your Name must starts with Alphabets
                  </div>
                </div>

                <div className="col-md-6">
                  <input
                    type="email"
                    className={` px-2 my-2 w-100 py-2 form-control shadow-none`}
                    placeholder="Email"
                    id="em_ail_"
                    onBlur={() => {
                      EmailValidator();
                    }}
                    onChange={(e) => {
                      setEmail(e.target.value);
                    }}
                  />
                  <div className="invalid-feedback mx-3">
                    Enter a valid Email Address
                  </div>
                </div>

                <div className="col-md-12">
                  <textarea
                    type="text"
                    id="zip"
                    onChange={(e) => {
                      setRequirements(e.target.value);
                    }}
                    rows={10}
                    className="py-3 px-3 w-100 form-control shadow-none"
                    placeholder="Please write complete requirements of your product here"
                  ></textarea>
                </div>
              </div>

              <hr className="my-4" />

              <div className="row gy-3">
                <div className="col-md-6">
                  <label htmlFor="cc-name" className="form-label">
                    Name on card
                  </label>
                  <input
                    type="text"
                    className="form-control shadow-none"
                    id="cc-name"
                    placeholder=""
                    required=""
                    onChange={(e) => {
                      setNameOnCard(e.target.value);
                    }}
                  />
                  <small className="text-muted">
                    Full name as displayed on card
                  </small>
                  <div className="invalid-feedback">
                    Name on card is required
                  </div>
                </div>

                <div className="col-md-6">
                  <label htmlFor="cc-number" className="form-label">
                    Credit card number
                  </label>
                  <input
                    type="text"
                    className="form-control shadow-none"
                    id="cc-number"
                    placeholder=""
                    required=""
                    onChange={(e) => {
                      setCreditCardNo(e.target.value);
                    }}
                  />
                  <div className="invalid-feedback">
                    Credit card number is required
                  </div>
                </div>

                <div className="col-md-3">
                  <label htmlFor="cc-expiration" className="form-label">
                    Expiration
                  </label>
                  <input
                    type="text"
                    className="form-control shadow-none"
                    id="cc-expiration"
                    placeholder=""
                    required=""
                    onChange={(e) => {
                      setExpiration(e.target.value);
                    }}
                  />
                  <div className="invalid-feedback">
                    Expiration date required
                  </div>
                </div>

                <div className="col-md-3">
                  <label htmlFor="cc-cvv" className="form-label">
                    CVV
                  </label>
                  <input
                    type="text"
                    className="form-control shadow-none"
                    id="cc-cvv"
                    placeholder=""
                    required=""
                    onChange={(e) => {
                      setCVV(e.target.value);
                    }}
                  />
                  <div className="invalid-feedback">Security code required</div>
                </div>
              </div>

              <hr className="my-4" />

              <Button
                variant="contained"
                className={`materialUiButton my-4 w-100`}
                onClick={(e)=>saveCheckout(e)}
              >
                Check Out
              </Button>
              <p>{responseCheckout}</p>
            </form>
          </div>
        </div>
      </main>
    </div>
  );
}

const Cart = () => {
  const router = useRouter()
  const currPath = router.asPath
  let price=0;
  let productName = ""
  if(currPath.includes("mobile-standard")){
    price="$38"
    productName="Mobile App - Standard"
  }
  else if(currPath.includes("mobile-pro")){
    price="$100"
    productName="Mobile App - Pro"
  }
  else if(currPath.includes("mobile-business")){
    price="$200"
    productName="Mobile App - Business"
  }

  else if(currPath.includes("web-app-standard")){
    price="$38"
    productName="Web App - Standard"
  }
  else if(currPath.includes("web-app-pro")){
    price="$100"
    productName="Web App - Pro"
  }
  else if(currPath.includes("web-app-business")){
    price="$200"
    productName="Web App - Business"
  }

  else if(currPath.includes("data-science-standard")){
    price="$38"
    productName="Data Science - Standard"
  }
  else if(currPath.includes("data-science-pro")){
    price="$100"
    productName="Data Science - Pro"
  }
  else if(currPath.includes("data-science-business")){
    price="$200"
    productName="Data Science - Business"
  }

  else if(currPath.includes("ai-standard")){
    price="$38"
    productName="AI/ML - Standard"
  }
  else if(currPath.includes("ai-pro")){
    price="$100"
    productName="AI/ML - Pro"
  }
  else if(currPath.includes("ai-business")){
    price="$200"
    productName="AI/ML - Business"
  }
  
  return (
    <div className="col-md-5 col-lg-4 order-md-last">
      <h4 className="d-flex justify-content-between align-items-center mb-3">
        <span style={{ color: "var(--logo-red)" }}>Your cart</span>
      </h4>
      <ul className="list-group mb-3">
        <li className="list-group-item d-flex justify-content-between lh-sm">
          <div>
            <h6 className="my-0">Product name</h6>
          </div>
          <span className="text-muted">{productName}</span>
        </li>

        <li className="list-group-item d-flex justify-content-between">
          <span>Total (USD)</span>
          <strong>{price}</strong>
        </li>
      </ul>
    </div>
  );
};
