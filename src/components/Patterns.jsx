import { useState } from "react";
import { useSearchParams } from "react-router-dom";
import { ALL_PATTERNS, TABS } from "../../utils/helper";
import Icons from "./common/Icons";
import Button from "./common/Button";

const INITIAL_VISIBLE = 8;

const PatternCard = ({ pattern }) => (
  <div className="rounded-lg overflow-hidden flex">
    <div className="flex z-20 justify-center ">
      <img
        src={pattern.image}
        alt={pattern.title}
        className="w-full max-w-[305.1px] bg-white h-[419.1px]"
      />
    </div>
  </div>
);

const Patterns = () => {
  const [searchParams, setSearchParams] = useSearchParams();
  const [showAll, setShowAll] = useState(false);

  const tabFromUrl = searchParams.get("tab");
  const isValid = TABS.some((t) => t.id === tabFromUrl);
  const activeTab = isValid ? tabFromUrl : "TF";

  const patterns = ALL_PATTERNS[activeTab] || [];
  const visible = showAll ? patterns : patterns.slice(0, INITIAL_VISIBLE);
  const hasMore = patterns.length > INITIAL_VISIBLE;

  const handleTabChange = (id) => {
    setShowAll(false);
    setSearchParams(
      (prev) => {
        prev.set("tab", id);
        return prev;
      },
      { replace: true }
    );
  };

  const handleDownload = () => {
    const tab = TABS.find((t) => t.id === activeTab);
    const data = ALL_PATTERNS[activeTab];

    const rows = data
      .map(
        (p) =>
          `<tr>
            <td style="padding:8px 12px;border:1px solid #e5e7eb;font-weight:600;white-space:nowrap">${p.id}</td>
            <td style="padding:8px 12px;border:1px solid #e5e7eb;font-weight:600">${p.title}</td>
            <td style="padding:8px 12px;border:1px solid #e5e7eb;color:#6b7280">${p.subtitle}</td>
            <td style="padding:8px 12px;border:1px solid #e5e7eb;color:#374151">${p.description}</td>
          </tr>`
      )
      .join("");

    const html = `
      <!DOCTYPE html>
      <html>
      <head>
        <meta charset="utf-8"/>
        <title>${tab.label} Patterns</title>
        <style>
          body { font-family: Georgia, serif; margin: 40px; color: #111; }
          h1 { font-size: 24px; color: #7c3aed; margin-bottom: 4px; }
          p { font-size: 13px; color: #6b7280; margin-bottom: 24px; }
          table { width: 100%; border-collapse: collapse; font-size: 13px; }
          th { background: #7c3aed; color: white; padding: 10px 12px; text-align: left; }
        </style>
      </head>
      <body>
        <h1>${tab.label} — All Patterns</h1>
        <p>Downloaded on ${new Date().toLocaleDateString()}</p>
        <table>
          <thead>
            <tr>
              <th>ID</th><th>Pattern</th><th>Summary</th><th>Description</th>
            </tr>
          </thead>
          <tbody>${rows}</tbody>
        </table>
      </body>
      </html>
    `;

    const blob = new Blob([html], { type: "text/html" });
    const url = URL.createObjectURL(blob);
    const a = document.createElement("a");
    a.href = url;
    a.download = `${activeTab}-patterns.html`;
    a.click();
    URL.revokeObjectURL(url);
  };

  return (
    <div className="bg-white md:mt-37.5 mt-20 px-4">
      <div className=" absolute right-0 -mt-40 mr-10 hidden lg:flex">
        <img src="/assets/images/svg/icon.svg" alt="" />
      </div>
      <div className="flex justify-center h-12.5 gap-0  mb-8.5 overflow-x-auto">

        {TABS.map((tab) => (
          <button
            key={tab.id}
            onClick={() => handleTabChange(tab.id)}
            className={`px-5 pt-2 pb-5 font-bold leading-100 whitespace-nowrap text-base transition-colors relative ${activeTab === tab.id
              ? "text-light"
              : "text-gray-500 hover:text-gray-700"
              }`}
          >
            {tab.label}
            {activeTab === tab.id && (
              <span className="absolute bottom-0 left-0 right-0 h-0.5 bg-light rounded-full" />
            )}
          </button>
        ))}
      </div>

      <div className="flex justify-center gap-3 mb-15 ">

        <Button
          onClick={handleDownload}
          variant="warning">
          Download all Patterns
          <Icons icon={'downlode'} />
        </Button>
        <Button
          variant="outline">
          Buy the Set on Amazon
        </Button>
      </div>
      <div className=" absolute z-0 mt-60 translate-x-[70%] ">
        <img src="/assets/images/svg/contact-ellipse.svg" alt="" />
      </div>
      <div className="max-w-[1281.1px] z-20 mx-auto flex items-center justify-center flex-wrap gap-5">
        {visible.map((pattern) => (
          <PatternCard key={pattern.id} pattern={pattern} />
        ))}
      </div>

      {hasMore && (
        <div className="flex justify-center mt-15">
          <Button
            variant="ghost"
            onClick={() => setShowAll((v) => !v)}>
            {showAll
              ? "Show Less"
              : `Show ${patterns.length - INITIAL_VISIBLE} More Patterns`}
          </Button>
        </div>
      )}
    </div>
  );
};

export default Patterns;