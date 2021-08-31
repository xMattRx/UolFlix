import React from 'react';
import { Container, Box } from './styles/accordion';
import close from '../../Assets/fechar.svg';
import open from '../../Assets/open.svg';

export const Accordion = ({ title, content, active, setActive }) => {
    return (
        <Box>
            <div className="accordion">
                <div className="accordionHeading">
                    <div onClick={() => {
                        if (active != title) {
                            setActive(title)
                        } else {
                            setActive();
                        }
                    }} npm="true" className="container">
                        <p>{title}</p>
                        <span>{active === title ? <img src={close} /> : <img src={open} />}</span>
                    </div>
                </div>

                <div className={(active === title ? "show" : "") + "accordionContent"}>
                    <div className="container">
                        <p>{content}</p>
                    </div>
                </div>
            </div>
        </Box>
    )
}