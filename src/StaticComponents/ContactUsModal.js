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
        <Modal show={show} onHide={handleClose} size="xl">
            <Modal.Body>
                <div className='px-5'>
                    <div className='row'>
                        <div className='col-2 back'><small style={{cursor:"pointer"}} onClick={handleClose}><Back/><span style={{lineHeight:'2'}} className='ms-2'>Back</span></small></div>
                        <div className='col-10 contact-modal-header'>Have an Idea ?</div>
                    </div>
                    <div className='row'>
                        <div className='col-12 col-md-6 px-5 py-5'>
                            <p className='modalp w-50'>Let’s Bring It to Life Together</p>
                            <span className='modalText'>Got a ground breaking idea or a project in mind? We’re excited to hear about it! At <span style={{color:'#03BF71'}}>TagZero</span>, we specialize in turning innovative concepts into reality.</span>
                            <hr></hr>
                            <p className='modalp w-50'>Our Process:</p>
                            <div className='row'>
                                <div className='col-6'>
                                    <p className='modalCount'>1<div className='modalCountLine'></div></p>
                                    <p className='modalCountHead'>We Talk</p>
                                    <p className='modalCountText'>Tell us your vision. We’re here to listen and collaborate on making it a reality.</p>
                                </div>
                                <div className='col-6'>
                                    <p className='modalCount'>2<div className='modalCountLine'></div></p>
                                    <p className='modalCountHead'>Refine & Execute</p>
                                    <p className='modalCountText'>We perfect the details and bring your vision to life with precision.</p>
                                </div>
                                <div className='col-6'>
                                    <p className='modalCount'>3<div className='modalCountLine'></div></p>
                                    <p className='modalCountHead'>Design & Revise</p>
                                    <p className='modalCountText'>We craft your solution, then refine it based on feedback to ensure it meets your vision perfectly</p>
                                </div>
                                <div className='col-6'>
                                    <p className='modalCount'>4<div className='modalCountLine'></div></p>
                                    <p className='modalCountHead'>Develop & Launch</p>
                                    <p className='modalCountText'>We bring your project to life and ensure a seamless launch, ready for the world</p>
                                </div>
                            </div>
                        </div>
                        <div className='col-12 col-md-6 px-5 py-5'>
                            <form>
                                <div className='form-group py-2'>
                                    <label for="name" className='form-label'>Name</label>
                                    <input className='inputField form-control' type='text' name='name'/>
                                </div>
                                <div className='form-group py-2'>
                                    <label for="email" className='form-label'>Email</label>
                                    <input className='inputField form-control' type='email' name='email'/>
                                </div>
                                <div className='form-group py-2'>
                                    <label for="service-interest" className='form-label'>What service are you interested in</label>
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
                                    <label for="budget" className='form-label'>Budget</label>
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
                                    <label for="message" className='form-label'>Message</label>
                                    <textarea className='inputField form-control' style={{minHeight:"120px"}} name='message'>
                                    </textarea>
                                </div>
                                <div className='py-2'><button className='modalSubmit w-100 py-2'>Submit</button></div>
                            </form>                        
                        </div>
                    </div>
                </div>
             </Modal.Body>
        </Modal>
    )
}
export default ContactUsModal;