import { useEffect, useState } from "react";
import TestStats from "../components/test/TestStats";
import TestTabs from "../components/test/TestTabs";
// import { getAllTests } from "../services/testService";

const TestPortal = ({ onNavigate }) => {
  const [tests, setTests] = useState([]);

  useEffect(() => {
    // BACKEND INTEGRATION LATER
    // getAllTests().then(res => setTests(res.data));

    import("../data/mockTests").then(m => setTests(m.default));
  }, []);

  return (
    <div className="p-8 space-y-8">
      <h1 className="text-4xl">Test Portal 📝</h1>

      <TestStats tests={tests} />
      <TestTabs tests={tests} onNavigate={onNavigate} />
    </div>
  );
};

export default TestPortal;
