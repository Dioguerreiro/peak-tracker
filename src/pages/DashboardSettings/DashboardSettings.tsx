import * as React from "react";
import Tabs from "@mui/material/Tabs";
import Typography from "@mui/material/Typography";
import Box from "@mui/material/Box";
import DashboardLayout from "../../layout/DashboardLayout";
import { CustomTab } from "./DashboardSettings.styles";

interface TabPanelProps {
  children?: React.ReactNode;
  index: number;
  value: number;
}

function CustomTabPanel(props: TabPanelProps) {
  const { children, value, index, ...other } = props;

  return (
    <div
      role="tabpanel"
      hidden={value !== index}
      id={`simple-tabpanel-${index}`}
      aria-labelledby={`simple-tab-${index}`}
      {...other}
    >
      {value === index && (
        <Box sx={{ p: 3 }}>
          <Typography>{children}</Typography>
        </Box>
      )}
    </div>
  );
}

function a11yProps(index: number) {
  return {
    id: `simple-tab-${index}`,
    "aria-controls": `simple-tabpanel-${index}`,
  };
}

export default function BasicTabs() {
  const [value, setValue] = React.useState(0);

  const handleChange = (event: React.SyntheticEvent, newValue: number) => {
    setValue(newValue);
  };

  return (
    <DashboardLayout>
      <section className="flex flex-col gap-5 p-5">
        <div className="w-full">
          <div className="bg-white rounded-xl p-2">
            <Tabs
              value={value}
              onChange={handleChange}
              aria-label="basic tabs example"
              TabIndicatorProps={{
                style: { display: 'none' }
              }}
            >
              <CustomTab label="My Details" {...a11yProps(0)} />
              <CustomTab label="Profile" {...a11yProps(1)} />
              <CustomTab label="Password" {...a11yProps(2)} />
              <CustomTab label="Team" {...a11yProps(2)} />
              <CustomTab label="Plan" {...a11yProps(2)} />
              <CustomTab label="Billing" {...a11yProps(2)} />
              <CustomTab label="Notifications" {...a11yProps(2)} />
            </Tabs>
          </div>
          <CustomTabPanel value={value} index={0}>
            Item One
          </CustomTabPanel>
          <CustomTabPanel value={value} index={1}>
            Item Two
          </CustomTabPanel>
          <CustomTabPanel value={value} index={2}>
            Item Three
          </CustomTabPanel>
        </div>
      </section>
    </DashboardLayout>
  );
}
