import React from 'react'
import {
    Container,
    SectionTitle,
    Form,
    FormGroup,
    Label,
    InputName,
    InputEmail,
    InputText,
    InputSubmit,
} from './ContactElements'

const Contact = () => {
  return (
    <Container id="contact">
        <SectionTitle>Contact</SectionTitle>
        <Form action="">
            <FormGroup>
                <Label htmlFor="name" hidden>Name</Label>
                <InputName type="text" name="name" id="name" placeholder="Name" required/>
            </FormGroup>
            <FormGroup>
                <Label htmlFor="email" hidden>Email</Label>
                <InputEmail type="text" name="email" id="email" placeholder="Email" required/>
            </FormGroup>
            <FormGroup>
                <Label htmlFor="message" hidden>Message</Label>
                <InputText type="message" id="message" placeholder="Message" required></InputText>
            </FormGroup>
            <InputSubmit type="submit" value="Submit"/>
        </Form>
    </Container>
  )
}

export default Contact
