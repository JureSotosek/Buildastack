import React from 'react';

import styled from 'styled-components';

import { Mutation } from 'react-apollo';
import { saveStackFromIdMutation } from '../../../../lib/graphql/mutations';

import { isErrorForbidden } from '../../../../utils';

import { withApollo } from 'react-apollo';
import { loginWithGithub } from '../../../../lib/loginWithGithub';

import Modal from '../../../../components/Modal';
import TextField from 'react-shadow-textfield';
import Button from '../../../../components/Button';

const Title = styled.div`
  font-size: 30px;
  text-shadow: 2px 2px lightGrey;
`;

const SubTitle = styled.div`
  margin-top: 5px;
  font-size: 20px;
  text-align: center;
`;

const ButtonsWrapper = styled.div`
  width: 100%;
  max-width: 300px;

  margin-top: 10px;

  display: flex;
  flex-direction: row;
`;

const StyledTextField = styled(TextField)`
  width: 100%;
  margin-top: 10px;
  max-width: 300px;
`;

const Msg = styled.div`
  margin-top: 5px;
`;

class SaveModal extends React.Component {
  constructor() {
    super();

    this.state = {
      name: '',
      loginError: null
    };

    this.handleOnNameChange = this.handleOnNameChange.bind(this);
    this.handleLogin = this.handleLogin.bind(this);
  }

  handleOnNameChange(name) {
    this.setState({
      name
    });
  }

  async handleLogin(saveStackNew) {
    const { client, onSave } = this.props;

    loginWithGithub(client)
      .then(() => saveStackNew().then(onSave))
      .catch(() => this.setState({ loginError: true }));
  }

  render() {
    const { name, loginError } = this.state;
    const { id, onSave, closeModal } = this.props;

    return (
      <Modal>
        <Mutation
          mutation={saveStackFromIdMutation}
          variables={{
            id,
            name
          }}
        >
          {(saveStackFromId, { loading, error }) => (
            <React.Fragment>
              <Title>{'Save this stack'}</Title>
              {isErrorForbidden(error) ? (
                <React.Fragment>
                  <SubTitle>{'You need to log in to save.'}</SubTitle>
                  <ButtonsWrapper>
                    <Button color={'grey'} onClick={closeModal}>
                      {'Close'}
                    </Button>
                    <Button
                      color={'#ff954f'}
                      onClick={() => this.handleLogin(saveStackFromId)}
                    >
                      {'Login with Github!'}
                    </Button>
                  </ButtonsWrapper>
                  <Msg>{loginError && 'Error!'}</Msg>
                </React.Fragment>
              ) : (
                <React.Fragment>
                  <SubTitle>{'Input name for the stack:'}</SubTitle>
                  <StyledTextField
                    placeholder={'Stack name...'}
                    value={name}
                    onChange={event =>
                      this.handleOnNameChange(event.target.value)
                    }
                  />
                  <ButtonsWrapper>
                    <Button color={'grey'} onClick={closeModal}>
                      {'Close'}
                    </Button>
                    <Button
                      color={'#ff954f'}
                      onClick={() => !loading && saveStackFromId().then(onSave)}
                    >
                      {loading ? 'Loading...' : error ? 'Error' : 'Save'}
                    </Button>
                  </ButtonsWrapper>
                </React.Fragment>
              )}
            </React.Fragment>
          )}
        </Mutation>
      </Modal>
    );
  }
}

export default withApollo(SaveModal);
