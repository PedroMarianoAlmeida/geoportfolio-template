import { Button, Modal, ModalHeader, ModalBody, ModalFooter } from 'reactstrap';

const MyModal = (props) => {
    const markerData = props.shouldOpen && props.selectedMarker
    
    return (
        <Modal isOpen={props.shouldOpen} toggle={props.toggle}>
            <ModalHeader toggle={props.toggle}>    
                {markerData.title}
            </ModalHeader>

            <ModalBody>
                <img className='img-fluid img-thumbnail' src={markerData.imagePath} />
                <p className='text-justify'>{markerData.description}</p>                
            </ModalBody>

            <ModalFooter>
                
                <Button color="primary">
                    <a href={props.externalLink} target='_blank' rel='noreferrer noopener' >
                        Details
                    </a>
                </Button>
                
                <Button color="secondary" onClick={props.toggle}>Cancel</Button>
            </ModalFooter>
            
        </Modal>

    );
}

export default MyModal;