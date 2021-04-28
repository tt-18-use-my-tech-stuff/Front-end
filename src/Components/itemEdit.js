import React, { useEffect, useState } from 'react';
// import { axiosWithAuth } from '../helpers/axiosWithAuth'; 
import { useHistory, useParams } from 'react-router-dom'
import { Container, Row, Col, Button } from "reactstrap";


const ItemEdit = () => {
    const { id } = useParams();
    const history = useHistory();
    const [ item, setItem ] = useState([]);
    const [ itemName, setItemName ] = useState({});
    const [ itemDescription, setItemDescription ] = useState({});

    useEffect(() => {
        axiosWithAuth()
        .get() // add
        .then((res) => {
            console.log("item edit response", res.data);
            setItem(res.data);
        })
        .catch((err) => {
            console.log(err);
        })
    }, []);

    const editName = (ev) => { //combine into object
        setItemName({ ...itemName, [ev.target.name] : ev.target.value });
    };

    const editDescription = (ev) => {
        setItemDescription({ ...itemDescription, [ev.target.name] : ev.target.value });
    };

    const cancel = (e) => {
        e.preventDefault();
        history.push(``) // add
    };

    const submitHandler = (e) => {
        e.preventDefault();
        console.log("put item in submit handler");
        
        axiosWithAuth()
        .put() // add
        .then(() => {
            console.log("name was changed")
        })
        .catch((err) => {
            console.log(err.response)
        })

        axiosWithAuth()
        .put() // add
        .then(() => {
            console.log("description was changed")
        })
        .catch((err) => {
            console.log(err.response)
        })

        history.push() // add
    }

    return (
        <Container>
      <Row>
        <Col xs="12" md={{ size: 6, offset: 3 }}>
          <FormContainer>
            <h3>Edit an Item</h3>
            <form onSubmit={submitHandler}>
              <label>
                Item Name:
                <Input name="name" value={item.name} onChange={editName} />
              </label>

              <label>
                Description:
                <Input
                  name="description"
                  value={item.description}
                  onChange={editDescription}
                />
              </label>
              <div>
                <Button
                  type="submit"
                  disabled={!item.name || !item.description}
                >
                  Save Changes
                </Button>
              </div>
             
            </form>
          </FormContainer>
        </Col>
      </Row>
    </Container>
  );
};


