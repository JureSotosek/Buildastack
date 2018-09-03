import React from 'react';

import Button from '../../../../../components/Button';
import Modal from './modal';

class SaveButton extends React.Component {
  constructor() {
    super();

    this.state = {
      showModal: false
    };

    this.closeModal = this.closeModal.bind(this);
    this.handleSaveOnClick = this.handleSaveOnClick.bind(this);
    this.handleSaveConfirmation = this.handleSaveConfirmation.bind(this);
  }

  closeModal() {
    this.setState({
      showModal: false
    });
  }

  handleSaveOnClick() {
    const { setMsg } = this.props;

    this.setState({
      showModal: true
    });

    setMsg('');
  }

  handleSaveConfirmation() {
    const { setMsg } = this.props;

    setMsg('Stack Saved!');
    this.closeModal();
  }

  render() {
    const { showModal } = this.state;
    const { selectedPackages } = this.props;

    return (
      <React.Fragment>
        <Button color={'#5856d6'} onClick={this.handleSaveOnClick}>
          {'Save'}
        </Button>
        {showModal && (
          <Modal
            selectedPackages={selectedPackages}
            onSave={this.handleSaveConfirmation}
            closeModal={this.closeModal}
          />
        )}
      </React.Fragment>
    );
  }
}

export default SaveButton;
