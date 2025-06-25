// Settings.js
import React, { useState } from "react";
import { Card, CardBody, Form, FormGroup, Label, Input, Button } from "reactstrap";

const Settings = () => {
  const [settings, setSettings] = useState({
    companyName: "Vijay Software Solution",
    email: "contact@vijaysoft.com",
    theme: "light",
    notifications: true,
  });

  const handleChange = (e) => {
    const { name, value, type, checked } = e.target;
    setSettings({
      ...settings,
      [name]: type === "checkbox" ? checked : value,
    });
  };

  const handleSave = () => {
    // Send to backend later
    alert("Settings saved successfully!");
    console.log("Updated Settings:", settings);
  };

  return (
    <Card className="shadow-sm">
      <CardBody>
        <h4 className="mb-4 fw-bold">⚙️ Application Settings</h4>
        <Form>
          <FormGroup>
            <Label for="companyName">Company Name</Label>
            <Input
              type="text"
              id="companyName"
              name="companyName"
              value={settings.companyName}
              onChange={handleChange}
            />
          </FormGroup>

          <FormGroup>
            <Label for="email">Contact Email</Label>
            <Input
              type="email"
              id="email"
              name="email"
              value={settings.email}
              onChange={handleChange}
            />
          </FormGroup>

          <FormGroup>
            <Label for="theme">Theme</Label>
            <Input
              type="select"
              id="theme"
              name="theme"
              value={settings.theme}
              onChange={handleChange}
            >
              <option value="light">Light</option>
              <option value="dark">Dark</option>
            </Input>
          </FormGroup>

          <FormGroup check className="mb-3">
            <Input
              type="checkbox"
              id="notifications"
              name="notifications"
              checked={settings.notifications}
              onChange={handleChange}
            />
            <Label check for="notifications">
              Enable Notifications
            </Label>
          </FormGroup>

          <Button color="primary" onClick={handleSave}>
            Save Settings
          </Button>
        </Form>
      </CardBody>
    </Card>
  );
};

export default Settings;
