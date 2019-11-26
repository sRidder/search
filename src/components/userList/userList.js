import React, {Fragment } from 'react'
import { Table } from 'semantic-ui-react'

const UserList = ({users}) => (
    <Table celled>
        <Table.Header>
            <Table.Row>
                <Table.HeaderCell>Name</Table.HeaderCell>
                <Table.HeaderCell>Username</Table.HeaderCell>
                <Table.HeaderCell>Email</Table.HeaderCell>
                <Table.HeaderCell>Website</Table.HeaderCell>
            </Table.Row>
        </Table.Header>

        <Table.Body>
            { users && users.map( (user, index) =>
                <Fragment key={index}>
                    <Table.Row>
                        <Table.Cell>{user.name}</Table.Cell>
                        <Table.Cell>{user.username}</Table.Cell>
                        <Table.Cell>{user.email}</Table.Cell>
                        <Table.Cell>{user.website}</Table.Cell>
                    </Table.Row>
                </Fragment>
            )}
        </Table.Body>
    </Table>
)

export default UserList