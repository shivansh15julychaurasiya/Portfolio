import React, { useState } from 'react';
import {
  Modal,
  ModalHeader,
  ModalBody,
  Form,
  FormGroup,
  Input,
  Label,
  Button,
  Row,
  Col,
} from 'reactstrap';
import PhoneInput from 'react-phone-input-2';
import 'react-phone-input-2/lib/bootstrap.css';

const GetFreeQuoteModal = ({ isOpen, toggle }) => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    service: '',
    message: '',
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const handlePhoneChange = (value) => {
    setFormData((prev) => ({ ...prev, phone: value }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log('Form submitted:', formData);
    alert('Thanks! We will contact you shortly.');
    toggle(); // Close modal
    setFormData({
      name: '',
      email: '',
      phone: '',
      service: '',
      message: '',
    });
  };

  return (
    <Modal isOpen={isOpen} toggle={toggle} centered>
      <ModalHeader toggle={toggle}>🚀 Get a Free Quote</ModalHeader>
      <ModalBody>
        <Form onSubmit={handleSubmit}>
          <Row>
            <Col md={6}>
              <FormGroup>
                <Label>Name</Label>
                <Input
                  type="text"
                  name="name"
                  value={formData.name}
                  onChange={handleChange}
                  required
                  placeholder="Enter your name"
                />
              </FormGroup>
            </Col>
            <Col md={6}>
              <FormGroup>
                <Label>Email</Label>
                <Input
                  type="email"
                  name="email"
                  value={formData.email}
                  onChange={handleChange}
                  required
                  placeholder="Enter your email"
                />
              </FormGroup>
            </Col>
          </Row>
          <FormGroup>
            <Label>Phone</Label>
            <PhoneInput
              country={'in'}
              value={formData.phone}
              onChange={handlePhoneChange}
              inputStyle={{ width: '100%' }}
              enableSearch
              required
            />
          </FormGroup>
          <FormGroup>
            <Label>Service</Label>
            <Input
              type="select"
              name="service"
              value={formData.service}
              onChange={handleChange}
              required
            >
              <option value="">Select a service</option>
              <option>Custom Website</option>
              <option>Mobile App</option>
              <option>CRM/ERP</option>
              <option>UI/UX Design</option>
              <option>API Integration</option>
              <option>Other</option>
            </Input>
          </FormGroup>
          <FormGroup>
            <Label>Message</Label>
            <Input
              type="textarea"
              name="message"
              value={formData.message}
              onChange={handleChange}
              rows="3"
              placeholder="Tell us about your project..."
            />
          </FormGroup>
          <Button color="primary" type="submit" className="w-100 rounded-pill">
            Get My Quote
          </Button>
        </Form>
      </ModalBody>
    </Modal>
  );
};

export default GetFreeQuoteModal;
