export default function NewsTicker() {
  const newsItems = [
    "Doon International School – Admission Open 2026-27",
    "•",
    "Doon International School – World Class Facility",
    "•",
    "Welcome to Doon International School",
  ];

  return (
    <div className="relative flex items-center w-full h-[52px] bg-gray-200 overflow-hidden m-0 p-0">
      {/* Fixed Label - Exact Baseline Alignment */}
      <div
        className="absolute left-0 flex items-center justify-start pl-2 sm:pl-6 pr-2 sm:pr-4 z-20 h-full"
        style={{ width: '160px', backgroundColor: '#013C89' }}
      >
        <span
          className="font-semibold"
          style={{
            marginRight: '8px',
            fontSize: '24px',
            color: '#FFD200'
          }}
        >
          ⚡
        </span>
        <span
          className="uppercase text-[15px] font-semibold text-white"
          style={{
            lineHeight: '1',
            fontSize: '15px',
            letterSpacing: '0',
            margin: '0',
            padding: '0'
          }}
        >
          Latest News
        </span>
      </div>

      {/* Scrolling Text - Exact Baseline Alignment */}
      <div className="relative flex h-full w-full pl-[160px]">
        <div
          className="whitespace-nowrap flex animate-marquee items-center text-[15px] font-medium"
          style={{
            lineHeight: '1.2',
            fontSize: '15px',
            letterSpacing: '0',
            height: '52px'
          }}
        >
          {newsItems.map((item, index) => (
            <span
              key={index}
              style={{
                paddingLeft: item === "•" ? "8px" : "32px",
                paddingRight: item === "•" ? "8px" : "32px",
                margin: '0',
                display: 'inline',
                lineHeight: '1.2',
                color: item === "•" ? "#333333" : "#000000"
              }}
            >
              {item}
            </span>
          ))}
          {/* Duplicate content for seamless loop */}
          {newsItems.map((item, index) => (
            <span
              key={`duplicate-${index}`}
              style={{
                paddingLeft: item === "•" ? "8px" : "32px",
                paddingRight: item === "•" ? "8px" : "32px",
                margin: '0',
                display: 'inline',
                lineHeight: '1.2',
                color: item === "•" ? "#333333" : "#000000"
              }}
            >
              {item}
            </span>
          ))}
        </div>
      </div>
    </div>
  );
}
