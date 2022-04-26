// React
import React from "react";
// Assets
import Gill from "../../images/gill.webp";
import GillReg from "../../images/gill-reg.webp";
import Pat from "../../images/pat.webp";
import PatReg from "../../images/pat-reg.webp";

export default function Team() {
  return (
    <div
      id="Team"
      className="flex align-center justify-center py-20 px-6 bg-gray-100"
    >
      <div className="max-w-7xl text-left">
        <h2 className="text-5xl text-gray-700 font-bold mb-20">Our Team</h2>
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 mb-20">
          {/* Card 1*/}
          <div className="rounded border-2 bg-white p-4 flex flex-col md:flex-row lg:flex-col">
            <img
              src={Gill}
              alt="Counsellor Gill Snow"
              className="rounded w-72 h-52 m-auto"
            />
            <div className="mt-12 md:mt-0 lg:mt-12 md:ml-12 lg:ml-0">
              <h3 className="text-2xl text-gray-600 mb-1 font-semibold w-1/2">
                Gill Dakin
              </h3>
              <h5 className="mb-6 text-blue-500 font-semibold">
                Co-founder and Counsellor
              </h5>
              <p className="mb-6">
                As a Humanistic Integrative counsellor, I work holistically and
                creatively with a collaborative, relational approach to walk
                alongside you, at your own pace. I believe each of us to be
                unique individuals with the potential and ability to heal from
                the inside and I will support you in seeking those inner
                strengths that lead to self-empowerment in making choices.
              </p>

              <a
                href="https://www.bacp.co.uk/search/Register?q=383010"
                target="_blank"
                alt="BACP registration"
              >
                <img src={GillReg} className="w-36 mt-12" alt="Gill" />
              </a>
            </div>
          </div>
          {/* Card 2 */}
          <div className="rounded border-2 bg-white p-4 flex flex-col md:flex-row lg:flex-col">
            <img
              src={Pat}
              alt="Counsellor Gill Snow"
              className="rounded  h-52 m-auto"
            />
            <div className="mt-12 md:mt-0 lg:mt-12 md:ml-12 lg:ml-0">
              <h3 className="text-2xl text-gray-600 mb-1 font-semibold w-1/2">
                Patricia Hide
              </h3>
              <h5 className="mb-6 text-blue-500 font-semibold">
                Co-founder and Counsellor
              </h5>
              <p className="mb-6">
                People seek counselling for a wide range of reasons; whatever
                your reasons, as a Humanistic counsellor I aim to help you
                explore and gain an understanding of the issues that you bring
                to counselling. I offer a warm, empathic, and non-judgemental
                acceptance to all allowing a therapeutic and trusting
                relationship to develop enabling you to heal and gain a sense of
                self.
              </p>
              <a
                href="https://www.bacp.co.uk/search/Register?q=383543"
                target="_blank"
                alt="BACP registration"
              >
                <img src={PatReg} className="w-36 mt-12" alt="Pat" />
              </a>
            </div>
          </div>
        </div>
        {/* Info text */}
        <div className="grid gap-12 grid-cols-1 lg:grid-cols-3">
          <div className="bg-white rounded p-8 border-2 text-xl">
            <h4 className="mb-4 md:mb-6 font-semibold text-blue-800">
              Registration
            </h4>
            All of our Counsellors are registered with the British Association
            of Counselling and Psychotherapy (BACP) and adhere to the BACP
            ethical framework.
          </div>
          <div className="bg-white rounded p-8 border-2 text-xl">
            <h4 className="mb-4 md:mb-6 font-semibold text-blue-800">
              Supervision and training
            </h4>
            Counsellors receive regular clinical supervision and personal
            therapy, along with continual training as part of their personal and
            professional development.
          </div>
          <div className="bg-white rounded p-8 border-2 text-xl">
            <h4 className="mb-4 md:mb-6 font-semibold text-blue-800">
              Insurance
            </h4>
            Counsellors hold full indemnity insurance.
          </div>
        </div>
      </div>
    </div>
  );
}
