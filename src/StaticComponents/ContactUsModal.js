import { Modal } from 'react-bootstrap';
import { useEffect, useState } from 'react';
import { Back } from '../constants/svglocations';

const ContactUsModal = (props) => {
    const [show, setShow] = useState(false);

    const handleClose = () => setShow(false);
    const handleShow = () => setShow(true);

    useEffect(() => {
        setShow(props.showModal)
    }, [props]);

    useEffect(()=>{
        props.updateModal(show)
    },[show])

    return (
        <Modal show={show} onHide={handleClose} size="xl" aria-labelledby="example-custom-modal-styling">
        <Modal.Body>
            <div className='px-3'>
                <div className='row mb-4'>
                    <div className='col-2 back'>
                        <small style={{ cursor: "pointer" }} onClick={handleClose}>
                            <Back /><span className='ms-2'>Back</span>
                        </small>
                    </div>
                    <div className='col-10 contact-modal-header text-center'>Have an Idea?</div>
                </div>
                <div className='row'>
                    <div className='col-12 col-md-6 px-4 py-5'>
                        <p className='modalp'>Let’s Bring It to Life Together</p>
                        <span className='modalText'>
                            Got a groundbreaking idea or a project in mind? We’re excited to hear about it! At <span style={{ color: '#03BF71' }}>TagZero</span>, we specialize in turning innovative concepts into reality.
                        </span>
                        <hr />
                        <p className='modalp'>Our Process:</p>
                        <div className='row'>
                            {['We Talk', 'Refine & Execute', 'Design & Revise', 'Develop & Launch'].map((step, index) => (
                                <div className='col-12 col-md-6 mb-4' key={index}>
                                    <p className='modalCount'>{index + 1}<div className='modalCountLine'></div></p>
                                    <p className='modalCountHead'>{step}</p>
                                    <p className='modalCountText'>
                                        {index === 0 && "Tell us your vision. We’re here to listen and collaborate on making it a reality."}
                                        {index === 1 && "We perfect the details and bring your vision to life with precision."}
                                        {index === 2 && "We craft your solution, then refine it based on feedback to ensure it meets your vision perfectly."}
                                        {index === 3 && "We bring your project to life and ensure a seamless launch, ready for the world."}
                                    </p>
                                </div>
                            ))}
                        </div>
                    </div>
                    <div className='col-12 col-md-6 px-4 py-5'>
                        <form>
                            <div className='form-group py-2'>
                                <label htmlFor="name" className='form-label'>Name</label>
                                <input className='inputField form-control' type='text' name='name' />
                            </div>
                            <div className='form-group py-2'>
                                <label htmlFor="email" className='form-label'>Email</label>
                                <input className='inputField form-control' type='email' name='email' />
                            </div>
                            <div className='form-group py-2'>
                                <label htmlFor="service-interest" className='form-label'>What service are you interested in?</label>
                                <select className='inputField form-control' name='service-interest'>
                                    <option>select project type</option>
                                    <option>service 1</option>
                                    <option>service 2</option>
                                    <option>service 3</option>
                                    <option>service 4</option>
                                    <option>service 5</option>
                                </select>
                            </div>
                            <div className='form-group py-2'>
                                <label htmlFor="budget" className='form-label'>Budget</label>
                                <select className='inputField form-control' name='budget'>
                                    <option>select project budget</option>
                                    <option>budget 1</option>
                                    <option>budget 2</option>
                                    <option>budget 3</option>
                                    <option>budget 4</option>
                                    <option>budget 5</option>
                                </select>
                            </div>
                            <div className='form-group py-2'>
                                <label htmlFor="message" className='form-label'>Message</label>
                                <textarea className='inputField form-control' style={{ minHeight: "120px" }} name='message'></textarea>
                            </div>
                            <div className='py-2'><button type='submit' className='modalSubmit w-100 py-2'>Submit</button></div>
                        </form>                        
                    </div>
                </div>
            </div>
        </Modal.Body>
    </Modal>
    
    )
}
export default ContactUsModal;