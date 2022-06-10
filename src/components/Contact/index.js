import React from "react";
import { send } from "emailjs-com";

export default function Contact({ submitForm }) {
  const initialFormState = {
    name: { value: "", error: false, errorMessage: "Please enter your name" },
    phone: { value: "" },
    email: {
      value: "",
      error: false,
      errorMessage: "Please enter a valid email address",
    },
    message: {
      value: "",
      error: false,
      errorMessage: "Please enter a message",
    },
  };

  const [data, setData] = React.useState(initialFormState);
  const [pending, setPending] = React.useState(false);

  const validateEmail = (email) => {
    return email.match(
      /^(([^<>()[\]\\.,;:\s@\"]+(\.[^<>()[\]\\.,;:\s@\"]+)*)|(\".+\"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/
    );
  };

  const validate = () => {
    if (
      !data.name ||
      !data.email ||
      !validateEmail(data.email.value) ||
      !data.message
    ) {
      setData((data) => ({
        name: { ...data.name, error: data.name.value ? false : true },
        phone: { ...data.phone },
        email: {
          ...data.email,
          error: validateEmail(data.email.value) ? false : true,
        },
        message: { ...data.message, error: data.message.value ? false : true },
      }));
      return false;
    } else {
      return true;
    }
  };

  const onSubmit = async (event) => {
    setPending(true);
    event.preventDefault();
    if (validate()) {
      send(
        "service_yrugwc3",
        "template_jbpfu2a",
        {
          name: data.name.value,
          phone: data.phone.value,
          email: data.email.value,
          message: data.message.value,
        },
        "L45ZnDZa2jH84bDdA"
      )
        .then(() => {
          setPending(false);
          setData((data) => initialFormState);
          submitForm();
        })
        .catch((err) => {
          setPending(false);
          submitForm(
            "Sorry there was an error sending your message. Please try again or email/phone us directly using the contact information provided"
          );
          setData((data) => ({
            name: {
              ...data.name,
              error: data.name.value ? false : true,
            },
            phone: { ...data.phone },
            email: {
              ...data.email,
              error: validateEmail(data.email.value) ? false : true,
            },
            message: {
              ...data.message,
              error: data.message.value ? false : true,
            },
          }));
        });
    } else {
      setPending(false);
    }
  };

  return (
    <section id="contact" className="pt-20 pb-20 px-6 bg-gray-100">
      <div className="flex align-center justify-center">
        <div className="max-w-6xl text-left">
          <h2 className="text-5xl text-gray-700 font-bold mb-24">Contact</h2>
          <div className="grid grid-cols-1  gap-x-28 gap-y-12">
            <div>
              <h3 className="text-1xl text-gray-700 mb-10">
                <strong>Phone:</strong>
                <p>
                  07706 249607 (Gill Dakin)
                  <br /> 07874 003902 (Pat Hide){" "}
                </p>
              </h3>
              <h3 className="text-1xl text-gray-700 mb-10">
                <strong>Email:</strong>
                <p>
                  <a
                    className="cursor-pointer text-blue-800 break-words"
                    href="mailto:admin@communitycounsellingbrighton.co.uk"
                  >
                    admin@communitycounsellingbrighton.co.uk
                  </a>
                </p>
              </h3>
              <div>
                <h3 className="text-1xl text-gray-700 mb-2">
                  <strong>Locations:</strong>
                </h3>
                <div className="grid grid-cols-1 gap-6 md:grid-cols-2">
                  <div className="google-maps mb-6">
                    <iframe
                      title="Google map of St Cuthmans Church"
                      src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d10081.684888221147!2d-0.11715123012687892!3d50.82336127782051!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x487585e8e99f11d9%3A0x47e92adf6c842493!2sSt%20Cuthmans%20Church!5e0!3m2!1sen!2suk!4v1646240344714!5m2!1sen!2suk"
                      width="600"
                      height="450"
                      style={{ border: "0" }}
                      allowFullScreen=""
                      loading="lazy"
                    ></iframe>
                  </div>
                  <div className="google-maps">
                    <iframe
                      title="Google map of St Richards Church"
                      src="https://maps.google.com/maps?width=100%25&amp;height=600&amp;hl=en&amp;q=St%20Richard%20Church,%20Hollingdean+(My%20Business%20Name)&amp;t=&amp;z=14&amp;ie=UTF8&amp;iwloc=B&amp;output=embed"
                      width="600"
                      height="450"
                      style={{ border: "0" }}
                      allowFullScreen=""
                      loading="lazy"
                    ></iframe>
                  </div>
                </div>
              </div>
            </div>
            <div className=" border-2">
              <div className="rounded p-6 bg-blue-100">
                <p className="mb-4 font-bold">
                  This is not crisis service so if you need urgent help the
                  details below maybe useful:
                </p>{" "}
                <p className="mb-2">Call 999 </p>
                <p className="mb-2">Attend AE</p>
                <p className="mb-2">
                  RSCH Sussex Mental Health Line: 0300 5000 101 (Available 24/7)
                </p>
                <p className="mb-2">
                  Brighton and Hove Wellbeing Service: 0300 002 0060
                </p>
                <p className="mb-2">Samaritans: 116 123</p>
                <a
                  target="_blank"
                  rel="noopener noreferrer"
                  className=" cursor-pointer underline"
                  href="https://prevent-suicide.org.uk/find-help-now/stay-alive-app/"
                >
                  Download the Stay Alive App
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

//  <form onSubmit={onSubmit} className="p-4 bg-gray-50 rounded border-2 flex-col">
//    <h3 className="text-2xl text-gray-700 mb-8 font-semibold">
//      Send us a message
//    </h3>
//    <label className="text-small text-gray-600">Name</label>
//    <input
//      style={{ border: data.name.error && "1px solid red" }}
//      className="w-full bg-blue-100 text-gray-900 mt-1 p-3 rounded-lg focus:outline-none focus:shadow-outline"
//      type="text"
//      value={data.name.value}
//      onChange={(e) =>
//        setData({
//          ...data,
//          name: { ...data.name, value: e.target.value },
//        })
//      }
//    ></input>

//    <div style={{ minHeight: 22 }} className="mb-6 mt-1 text-sm text-red-500">
//      {data.name.error ? data.name.errorMessage : ""}
//    </div>

//    <label className="text-small text-gray-600">Phone</label>
//    <input
//      style={{ border: data.phone.error && "1px solid red" }}
//      className="w-full bg-blue-100 text-gray-900 mt-1 p-3 rounded-lg focus:outline-none focus:shadow-outline"
//      type="text"
//      value={data.phone.value}
//      onChange={(e) =>
//        setData({
//          ...data,
//          phone: { ...data.phone, value: e.target.value },
//        })
//      }
//    ></input>

//    <div style={{ minHeight: 22 }} className="mb-6 mt-1"></div>
//    <label className="text-small text-gray-600">Email</label>
//    <input
//      style={{ border: data.email.error && "1px solid red" }}
//      className="w-full bg-blue-100 text-gray-900 mt-1 p-3 rounded-lg focus:outline-none focus:shadow-outline"
//      type="text"
//      value={data.email.value}
//      onChange={(e) =>
//        setData({
//          ...data,
//          email: { ...data.email, value: e.target.value },
//        })
//      }
//    ></input>

//    <div style={{ minHeight: 22 }} className="mb-6 mt-1 text-sm text-red-500">
//      {data.email.error ? data.email.errorMessage : ""}
//    </div>
//    <label className="text-small text-gray-600">Message</label>
//    <textarea
//      style={{ border: data.message.error && "1px solid red" }}
//      className="w-full h-32 bg-blue-100 text-gray-900 mt-1 p-3 rounded-lg focus:outline-none focus:shadow-outline"
//      value={data.message.value}
//      onChange={(e) => {
//        setData({
//          ...data,
//          message: { ...data.message, value: e.target.value },
//        });
//      }}
//    ></textarea>
//    <div style={{ minHeight: 22 }} className="mb-6 mt-1 text-sm text-red-500">
//      {data.message.error ? data.message.errorMessage : ""}
//    </div>
//    <button
//      style={{
//        pointerEvents: pending && "none",
//        cursor: pending && "not-allowed",
//        opacity: pending && 0.5,
//      }}
//      className="rounded text-1xl p-2 bg-blue-500 text-white font-semibold"
//    >
//      Submit
//    </button>
//  </form>;
