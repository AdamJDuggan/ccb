import React from "react";

export default function Contact() {
  return (
    <section id="contact" className="pt-20 pb-20 px-6 bg-gray-100">
      <div className="flex align-center justify-center">
        <div className="max-w-6xl text-left">
          <h2 className="text-5xl text-gray-700 font-bold mb-24">Contact</h2>
          <div className="grid grid-cols-1  gap-x-28 gap-y-12">
            <div>
              <h3 className="text-1xl text-gray-700 mb-10">
                <strong>Phone:</strong>
                <p>07706 249607 (Gill Dakin)</p>
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
