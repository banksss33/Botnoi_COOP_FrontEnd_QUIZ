import { useState } from "react";
import { Tabs, Tab } from "react-bootstrap";
import "./App.css";
import Q1 from "./Q1";
import Q2 from "./Q2";

let inpNums: number = 0;
function App() {
  const [activeTab, setActiveTab] = useState("tab1");

  const handleTabSelect = (selectedTab: any) => {
    setActiveTab(selectedTab);
  };

  return (
    <>
      <Tabs activeKey={activeTab} onSelect={handleTabSelect}>
        <Tab eventKey="tab1" title="Q1">
          <Q1 />
        </Tab>
        <Tab eventKey="tab2" title="Q2">
          <Q2 />
        </Tab>
        <Tab eventKey="tab3" title="Q3">
          <h1>IN PROGRESS...</h1>
        </Tab>
      </Tabs>
    </>
  );
}

export default App;
