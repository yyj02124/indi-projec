import { Switch, Tab, Tabs } from "@mui/material";
import React from "react";

const LandingMainPage = () => {
  const [tab, setTab] = React.useState<number>(0);
  const [switchChecked, setSwitchChecked] = React.useState<boolean>(false);
  const handleTabChange = (event: React.SyntheticEvent, newTab: number) => {
    setTab(newTab);
  };
  const handleSwitchChecked = (event: React.ChangeEvent<HTMLInputElement>) => {
    setSwitchChecked(event.target.checked);
  };
  return (
    <>
      <Switch checked={switchChecked} onChange={handleSwitchChecked} />
      {switchChecked ? (
        <>
          <Tabs value={tab} onChange={handleTabChange}>
            <Tab label="first tab" />
            <Tab label="second tab" />
            <Tab label="third tab" />
          </Tabs>
          {tab === 0 && <div>LandingPage1</div>}
          {tab === 1 && <div>LandingPage2</div>}
          {tab === 2 && <div>LandingPage3</div>}
        </>
      ) : (
        <div>Event sth</div>
      )}
    </>
  );
};

export default LandingMainPage;
