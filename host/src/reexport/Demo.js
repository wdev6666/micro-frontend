import React, { Suspense } from "react";

const ReDemo = React.lazy(() => import("app2/Demo"));

const Demo = () => {
  return (
    <Suspense fallback={"Loading..."}>
      <ReDemo />
    </Suspense>
  );
};

export default Demo;
