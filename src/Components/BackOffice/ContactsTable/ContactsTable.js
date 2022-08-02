import React from 'react'
import { Table } from "reactstrap";

function ContactsTable() {
    const data = [{
        id: 1,
        name: "aaaaaaaaaa",
        phone: 123456789,
        email: "aaaaa@gmail.com"
    },
    {
        id: 2,
        name: "bbbbbbbbbb",
        phone: 987654321,
        email: "bbbbb@yahoo.com"
    },
    {
        id: 3,
        name: "cccccccccc",
        phone: 321654987,
        email: "ccccc@gmail.com"
    },
    {
        id: 4,
        name: "dddddddddd",
        phone: 789456123,
        email: "dddddddddd@gmail.com"
    },
    {
        id: 5,
        name: "eeeeeeeeee",
        phone: 789123456,
        email: "eeeeeeeeee@gmail.com"
    },
    {
        id: 6,
        name: "fffffffffff",
        phone: 852741936,
        email: "fffffffffff@gmail.com"
    },]
    return (
        <div style={{ marginTop: 100 }}>
            <Table className="table">
                <thead className="tableHead">
                    <tr className="tableTr">
                        <th>Nombre</th>
                        <th>Telefono</th>
                        <th>Email</th>
                    </tr>
                </thead>
                <tbody className="tableBody">
                    {data.map(contact => (
                        <tr className="tableTr" key={contact.id}>
                            <td className="tableTd">{contact.name}</td>
                            <td className="tableTd">{contact.phone}</td>
                            <td className="tableTd">{contact.email}</td>
                        </tr>
                    ))}
                </tbody>
            </Table>
        </div>

    )
}

export default ContactsTable