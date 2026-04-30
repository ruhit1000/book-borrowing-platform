"use client";
import React from "react";
import {FloppyDisk} from "@gravity-ui/icons";
import {
  Button,
  Description,
  FieldError,
  FieldGroup,
  Fieldset,
  Form,
  Input,
  Label,
  TextArea,
  TextField,
} from "@heroui/react";
import { IoIosSend } from "react-icons/io";

const ContactUsForm = () => {

    const handleSubmit = (e) => {
        e.preventDefault();
        const formData = new FormData(e.target);
        const formObject = Object.fromEntries(formData.entries());
        console.log("Form submitted:", formObject);
    }

  return (
    <div>
      <Form className="w-full max-w-96" onSubmit={handleSubmit}>
        <Fieldset>
          <Fieldset.Legend>Contact Us</Fieldset.Legend>
          <Description>Send us a message and we will get back to you as soon as possible.</Description>
          <FieldGroup>
            <TextField
              isRequired
              name="name"
              validate={(value) => {
                if (value.length < 3) {
                  return "Name must be at least 3 characters";
                }
                return null;
              }}
            >
              <Label>Name</Label>
              <Input placeholder="John Doe" />
              <FieldError />
            </TextField>
            <TextField isRequired name="email" type="email">
              <Label>Email</Label>
              <Input placeholder="john@example.com" />
              <FieldError />
            </TextField>
            <TextField
              isRequired
              name="message"
              validate={(value) => {
                if (value.length < 10) {
                  return "Message must be at least 10 characters";
                }
                return null;
              }}
            >
              <Label>Message</Label>
              <TextArea placeholder="Your message here..." />
              <Description>Minimum 10 characters</Description>
              <FieldError />
            </TextField>
          </FieldGroup>
          <Fieldset.Actions>
            <Button type="submit">
              <IoIosSend />
              Message Us
            </Button>
            <Button type="reset" variant="secondary">
              Reset
            </Button>
          </Fieldset.Actions>
        </Fieldset>
      </Form>
    </div>
  );
};

export default ContactUsForm;
