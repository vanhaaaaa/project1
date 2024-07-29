import React, { useContext } from 'react';
import { Container, Table } from 'reactstrap';
import { AppContext } from '../../AppContext';

export default function Cart() {
    const { cart } = useContext(AppContext)
    return (
        <div>
            <Container>
                <Table
                    dark
                    responsive
                    striped
                >
                    <thead>
                        <tr>
                            <th>
                                #
                            </th>
                            <th>
                                First Name
                            </th>
                            <th>
                                First Name
                            </th>
                            <th>
                                Last Name
                            </th>
                            <th>
                                Username
                            </th>
                        </tr>
                    </thead>
                    <tbody>

                        {
                            cart.map((item,index)=>(
                        <tr>
                            <th scope="row">
                                1
                            </th>
                            <td>
                               {item.name}
                            </td>
                            <td>
                               {item.quantity}
                            </td>
                            <td>
                            {item.price}
                            </td>
                            <td>
                                @mdo
                            </td>
                        </tr>

                        ))

        

    }



                    </tbody>
                </Table>



            </Container>
        </div>
    );
}

