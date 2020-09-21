import Link from 'next/link';
import { Button, Modal, ModalHeader, ModalBody, ModalFooter } from 'reactstrap';

const MyModal = (props) => {
    const markerData = props.shouldOpen && props.selectedMarker
    console.log(props);

    React.useEffect(() => { }, [props])

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

                <a href={markerData.externalLink} target='_blank' rel='noreferrer noopener'>
                    <Button color="primary">Details</Button>
                </a>

                <Button color="secondary" onClick={props.toggle}>Cancel</Button>
            </ModalFooter>

        </Modal>

    );
}

export default MyModal;