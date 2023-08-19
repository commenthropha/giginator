"use client";

import { useRouter } from "next/navigation";

const CancelButton = () => {
  const router = useRouter();

  return (
    <div className="control">
      <button className="button is-danger" onClick={() => router.back()}>
        Cancel
      </button>
    </div>
  );
};

export default CancelButton;
