import React from "react";
import { render, fireEvent, act } from "@testing-library/react";
import ContactForm from './ContactForm'

test('renders without crashing', ()=> {
    render(
        <ContactForm />
    )

    
})

test('Form works correctly', () => {
    const {getByLabelText, getByTestId, findByText} = render(<ContactForm />)

    const User = {
        firstName: "Beau",
        lastName: "Bradley",
        email: "test@testing.com",
        message: "This is my message."
    }

    const firstName = getByLabelText('First Name*');
    const lastName = getByLabelText('Last Name*');
    const email = getByLabelText('Email*');
    const message = getByLabelText("Message");
    const submit = getByTestId('submit');


    fireEvent.change(firstName, {target:{value: User.firstName}});
    fireEvent.change(lastName, {target:{value: User.lastName}});
    fireEvent.change(email, {target:{value: User.email}});
    fireEvent.change(message, {target:{value: User.message}});

    act(() => {
        fireEvent.click(submit);
    })

    findByText(JSON.stringify(User));
})

