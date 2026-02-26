import React from "react";

export default function MandatoryDisclosurePage() {
  return (
    <main className="w-full bg-white">
      {/* Hero Section */}
      <section
        className="relative h-[220px] flex flex-col justify-center items-center text-white text-center"
        style={{
          backgroundImage: "url('/images/school-building-banner.jpg')",
          backgroundSize: "cover",
          backgroundPosition: "center",
        }}
      >
        <div className="absolute inset-0 bg-black/40"></div>
        <div className="relative z-10">
          <h1 className="font-heading text-2xl md:text-3xl font-bold mb-2 text-white">
            Mandatory Disclosure
          </h1>
          <p className="font-body text-[15px]">
            Home {'>'} <span className="text-[#FFD300]">Mandatory Disclosure</span>
          </p>
        </div>
      </section>

      {/* Content Section */}
      <section className="container mx-auto py-12 px-4 md:px-6">
        {/* Table 1: Basic School Info */}
        <div className="overflow-x-auto -mx-8 md:mx-0 px-4 md:px-0">
          <table className="w-full border border-gray-300 text-[11px] md:text-[15px] font-body text-gray-800 min-w-[350px] md:min-w-[600px]">
            <thead>
              <tr className="bg-[#DCEEFF] text-left">
                <th className="px-2 md:px-4 py-2 border border-gray-300 w-[8%] md:w-[10%] whitespace-nowrap">S.NO.</th>
                <th className="px-2 md:px-4 py-2 border border-gray-300 w-[32%] md:w-[40%]">INFORMATION</th>
                <th className="px-2 md:px-4 py-2 border border-gray-300 w-[60%] md:w-[50%]">DETAILS</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td className="px-2 md:px-4 py-2 border border-gray-300 whitespace-nowrap text-center">01</td>
                <td className="px-2 md:px-4 py-2 border border-gray-300">NAME OF SCHOOL</td>
                <td className="px-2 md:px-4 py-2 border border-gray-300 bg-[#FFF3E0] break-words">
                  DOON INTERNATIONAL SCHOOL, JABALPUR
                </td>
              </tr>
              <tr>
                <td className="px-2 md:px-4 py-2 border border-gray-300 whitespace-nowrap text-center">02</td>
                <td className="px-2 md:px-4 py-2 border border-gray-300">AFFILIATION NUMBER</td>
                <td className="px-2 md:px-4 py-2 border border-gray-300 bg-[#FFF3E0]">1031485</td>
              </tr>
              <tr>
                <td className="px-2 md:px-4 py-2 border border-gray-300 whitespace-nowrap text-center">03</td>
                <td className="px-2 md:px-4 py-2 border border-gray-300">SCHOOL CODE</td>
                <td className="px-2 md:px-4 py-2 border border-gray-300 bg-[#FFF3E0]">51503</td>
              </tr>
              <tr>
                <td className="px-2 md:px-4 py-2 border border-gray-300 whitespace-nowrap text-center">04</td>
                <td className="px-2 md:px-4 py-2 border border-gray-300">COMPLETE ADDRESS WITH PIN CODE</td>
                <td className="px-2 md:px-4 py-2 border border-gray-300 bg-[#FFF3E0] break-words">
                  Doon International School, Nagpur Rd, opposite Tata Motors, Manegaon,
                  Jabalpur, Madhya Pradesh 482051
                </td>
              </tr>
              <tr>
                <td className="px-2 md:px-4 py-2 border border-gray-300 whitespace-nowrap text-center">05</td>
                <td className="px-2 md:px-4 py-2 border border-gray-300">PRINCIPAL NAME</td>
                <td className="px-2 md:px-4 py-2 border border-gray-300 bg-[#FFF3E0]">
                  Dr Rajiv Kumar Singh
                </td>
              </tr>
              <tr>
                <td className="px-2 md:px-4 py-2 border border-gray-300 whitespace-nowrap text-center">06</td>
                <td className="px-2 md:px-4 py-2 border border-gray-300">QUALIFICATION</td>
                <td className="px-2 md:px-4 py-2 border border-gray-300 bg-[#FFF3E0]">
                  PHD(Maths), MSc, BEd.
                  MDP(IIM), HGSE
                </td>
              </tr>
              <tr>
                <td className="px-2 md:px-4 py-2 border border-gray-300 whitespace-nowrap text-center">07</td>
                <td className="px-2 md:px-4 py-2 border border-gray-300">SCHOOL EMAIL ID</td>
                <td className="px-2 md:px-4 py-2 border border-gray-300 bg-[#FFF3E0] break-words">
                  disjabalpur@gmail.com
                </td>
              </tr>
              <tr>
                <td className="px-2 md:px-4 py-2 border border-gray-300 whitespace-nowrap text-center">08</td>
                <td className="px-2 md:px-4 py-2 border border-gray-300">
                  CONTACT DETAILS (LANDLINE/MOBILE)
                </td>
                <td className="px-2 md:px-4 py-2 border border-gray-300 bg-[#FFF3E0]">
                  +91 9201591900 / +91 9201591892
                </td>
              </tr>
            </tbody>
          </table>
        </div>

        {/* Table 2: School Information/Documents */}
        <h2 className="font-heading text-lg md:text-xl font-bold mt-12 mb-4 border-b border-black pb-2">
          School Information/Documents
        </h2>
        <div className="overflow-x-auto -mx-8 md:mx-0 px-4 md:px-0">
          <table className="w-full border border-gray-300 text-[11px] md:text-[15px] font-body text-gray-800 min-w-[350px] md:min-w-[600px]">
            <thead>
              <tr className="bg-[#DCEEFF] text-left">
                <th className="px-2 md:px-4 py-2 border border-gray-300 w-[8%] md:w-[10%] whitespace-nowrap">S.NO.</th>
                <th className="px-2 md:px-4 py-2 border border-gray-300 w-[72%] md:w-[70%]">
                  DOCUMENTS/INFORMATION
                </th>
                <th className="px-2 md:px-4 py-2 border border-gray-300 w-[20%] whitespace-nowrap">ACTIONS</th>
              </tr>
            </thead>
            <tbody>
              {[
                { text: "COPIES OF AFFILIATION/UPGRADATION LETTER AND RECENT EXTENSION OF AFFILIATION, IF ANY", pdf: null },
                { text: "COPIES OF SOCIETIES/TRUST/COMPANY REGISTRATION/RENEWAL CERTIFICATE, AS APPLICABLE", pdf: "SOCIETY REGISTRATION (2).pdf" },
                { text: "COPY OF NO OBJECTION CERTIFICATE (NOC) ISSUED, IF APPLICABLE BY THE STATE GOVT/UT", pdf: null },
                { text: "COPIES OF RECOGNITION CERTIFICATE UNDER RTE ACT, 2009 AND ITS RENEWAL, IF APPLICABLE", pdf: "RECOGNITION 001 (2).pdf" },
                { text: "COPY OF VALID BUILDING SAFETY CERTIFICATE AS PER THE NATIONAL BUILDING CODE", pdf: "BUILDING SAFETY CERTIFICATE (1).pdf" },
                { text: "COPY OF VALID FIRE SAFETY CERTIFICATE ISSUED BY THE COMPETENT AUTHORITY", pdf: "FIRE SAFETY (1).pdf" },
                { text: "COPY OF LAND CERTIFICATE", pdf: "LAND CERTIFICATE (2).pdf" },
                { text: "COPIES OF VALID SAFE DRINKING WATER & SANITATION CERTIFICATES", pdf: "SAFE DRINKING WATER & SANITATION (1).pdf" },
                { text: "WATER TESTING LAB CERTIFICATE", pdf: "WATER TESTING LAB CERTIFICATE (1).pdf" },
                { text: "COPIES OF SELF AFFIDAVIT", pdf: "SELF AFFIDAVIT.pdf" },
                { text: "COPIES OF SCHOOL MANAGEMENT COMMITTEE", pdf: "SCHOOL MANAGEMENT COMMITTEE.pdf" },
                { text: "COPIES OF ACTIVITY CALENDAR AY 2025-26", pdf: "AY 2025-26 DISJ ACTIVITY CALENDAR.xlsx - AY 2025-26.pdf" },
                { text: "COPIES OF SELF CERTIFICATION", pdf: "SELF CERTIFICATION.pdf" },
                { text: "COPIES OF BOOK LIST CLASS I TO VII FOR NEW SESSION 25-26", pdf: "Book LIST CLASS I TO VII for New Session 25-26.pdf" },
                { text: "COPIES OF DAY BOARDING FEE STRUCTURE 25-26", pdf: "Day boarding fee structure 25-26.pdf" },
                { text: "COPIES OF DAY SCHOOL FEE STRUCTURE 25-26", pdf: "Day School fee structure 25-26.pdf" },
                { text: "COPIES OF PRE-PRIMARY BOOK LIST 25-26", pdf: "PRE-PRIMARY BOOK LIST 25-26.pdf" },
                { text: "COPIES OF SCHOOL MANAGEMENT COMMITTEE NEW", pdf: "SCHOOL MANAGEMENT COMMITTEE NEW.pdf" },
                { text: "COPIES OF SOCIETY SECTION 27", pdf: "SOCIETY SECTION 27 2_organized.pdf" },
                { text: "COPIES OF STAFF LIST", pdf: "STAFF LIST.pdf" },
              ].map((item, i) => (
                <tr key={i}>
                  <td className="px-2 md:px-4 py-2 border border-gray-300 text-center whitespace-nowrap">
                    {String(i + 1).padStart(2, "0")}
                  </td>
                  <td className="px-2 md:px-4 py-2 border border-gray-300 break-words">{item.text}</td>
                  <td className="px-2 md:px-4 py-2 border border-gray-300 text-center">
                    {item.pdf ? (
                      <a
                        href={`/assets/documents/${item.pdf}`}
                        download
                        className="bg-[#FFD300] hover:bg-[#FFC700] text-[#001F48] font-semibold px-2 md:px-4 py-1 rounded text-xs md:text-sm whitespace-nowrap inline-block"
                      >
                        Download
                      </a>
                    ) : (
                      <button className="bg-[#FFD300] hover:bg-[#FFC700] text-[#001F48] font-semibold px-2 md:px-4 py-1 rounded text-xs md:text-sm whitespace-nowrap">
                        View
                      </button>
                    )}
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </section>
    </main>
  );
}
