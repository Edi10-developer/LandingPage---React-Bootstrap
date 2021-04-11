import React from 'react';
import styled from 'styled-components';

const Footer = () => {
    const Styles = styled.div`
    .footer{
        display: flex;
        align-items: center;
        justify-content: center;
        padding: 2rem 0 2rem 0;
        background-color: #222;
        color: #bbb;
        text-align: center;
        overflow: hidden;

        @media(max-width: 766px){ 
            flex-direction: column;
            padding: 1rem 0 1rem 0;
        }
    }

    .footer:nth-child(2){
        background-color: rgba(0, 0, 4, .9);
    }

    .footer-list{
        list-style-type: none;
    }

    .footer-link{
        color: #bbb;
        margin-top: 3rem;
    
        &:hover{
            color: white;
        }
    }
    `;
    const Paragraph = styled.p`
    text-align: center;
    `;
    return (
        <Styles>
            <div className="footer">
            <ul className="footer-list col-6 col-md-3">
                    <li><a href="#" className="footer-link">Policy</a></li>
                    <li><a href="#" className="footer-link">F.A.Q.</a></li>
                    <li><a href="#" className="footer-link">Terms and Conditions</a></li>
                    <li><a href="#" className="footer-link"></a></li>
                </ul>
                <ul className="footer-list col-6 col-md-3">
                    <li><a href="#" className="footer-link">Products</a></li>
                    <li><a href="#" className="footer-link">Services</a></li>
                    <li><a href="#" className="footer-link">Prices</a></li>
                    <li><a href="#" className="footer-link">Delivery</a></li>
                </ul>
                <ul className="footer-list col-6 col-md-3">
                    <li><a href="#" className="footer-link">Home</a></li>
                    <li><a href="#" className="footer-link">About</a></li>
                    <li><a href="#" className="footer-link">Contact</a></li>
                    <li><a href="#" className="footer-link">Careeer</a></li>
                </ul>
                <ul className="footer-list col-6 col-md-3">
                    <li><a href="#" className="footer-link"><i className="fa fa-facebook"></i></a></li>
                    <li><a href="#" className="footer-link"><i className="fa fa-instagram"></i></a></li>
                    <li><a href="#" className="footer-link"><i className="fa fa-twitter"></i></a></li>
                    <li><a href="#" className="footer-link"><i className="fa fa-linkedin"></i></a></li>
                </ul>
            </div>
            <div className="footer">Developed by Edi Selimi &copy; 2021</div>
        </Styles>
    )
}

export default Footer;