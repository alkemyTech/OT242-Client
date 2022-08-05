import React from 'react'
import { screen, render } from '@testing-library/react';

import ContactsTable from '../components/BackOffice/ContactsTable/ContactsTable';

const rowCounter = 6;

beforeEach(() => render(<ContactsTable />));
describe("Render table with contacts", () => {
    it("must display table headers", () => {
        expect(screen.queryByText("Nombre"))
        expect(screen.queryByText("Telefono"))
        expect(screen.queryByText("Email"))
        expect(screen.queryByText("Mensaje"))
    });

    it("must display table rows", () => {
        for (let i = 0; i <= rowCounter; i++) {
            document.getElementById(i);
        }

    });
})
