import { useState, useEffect } from 'react'
import axios from "axios";
import { Link } from "react-router-dom";
import Table from 'react-bootstrap/Table';
import Button from 'react-bootstrap/Button';
 
const NewsletterAdmin = () => {
    const [newsletter, setNewsletter] = useState([]);
    
    useEffect(() => {
        getNewsletters();
    }, []);
 
    const getNewsletters = async () => {
        const response = await axios.get('http://localhost:5000/newsletter');
        setNewsletter(response.data);
    }
 
    const deleteNewsletter = async (id) => {
        await axios.delete(`http://localhost:5000/newsletter/${id}`);
        getNewsletters();
    }
 
    return (
        <div>
            <Link to="/Contact" className="button is-primary mt-2">Add New</Link> <br></br>
            <Link to="/JoinAdmin" className="button is-primary mt-2">Join Dashboard</Link><br></br>
            <Link to="/NewsletterAdmin" className="button is-primary mt-2">Newsletter Dashboard</Link>
            <Table striped bordered hover>
                <thead>
                    <tr>
                        <th>No</th>
                        <th>Name</th>
                        <th>Actions</th>
                    </tr>
                </thead>
                <tbody>
                    { newsletter.map((newsletter, index) => (
                        <tr key={ newsletter.id }>
                            <td>{ index + 1 }</td>
                            <td>{ newsletter.email }</td>
                            <td>
                                <Button variant="danger" onClick={ () => deleteNewsletter(newsletter.id) } >Delete</Button>{' '}
                            </td>
                        </tr>
                    )) }
                     
                </tbody>
            </Table>
        </div>
    )
}
 
export default NewsletterAdmin