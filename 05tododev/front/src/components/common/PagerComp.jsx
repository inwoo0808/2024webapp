import React from "react";

function PagerComp({ serverData, movePage }) {
  return (
    <div className="flex gap-2 justify-center">
      <div className="p-1 "></div>
      {serverData.pageNumList.map((item, i) => {
        return (
          <div
            key={i}
            className={`p-2 w-12 text-center bg-gray-500`}
            onClick={() => {
              movePage({ page: item });
            }}
          >
            {item}
          </div>
        );
      })}
    </div>
  );
}

export default PagerComp;
